import { Request, Response, NextFunction } from 'express';
import { prisma } from '@sms/database';
import { 
  BadRequestException, 
  NotFoundException, 
  InternalServerException 
} from '../../../common/filters/http-exception';
import { ApiResponse, Term } from '@sms/shared-types';
import axios from 'axios';

/**
 * Create a fee invoice for a student.
 */
export const createFeeInvoice = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId, title, amount, term, session, dueDate } = req.body;

    if (!studentId || !title || amount === undefined || !term || !session) {
      throw new BadRequestException('Missing required fields for creating fee invoice.');
    }

    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const feeInvoice = await prisma.feeInvoice.create({
      data: {
        studentId,
        title,
        amount: Number(amount),
        term: term as Term,
        session,
        status: 'PENDING',
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });

    const responsePayload: ApiResponse<typeof feeInvoice> = {
      status: 'success',
      message: 'Fee invoice created successfully.',
      data: feeInvoice,
    };

    res.status(201).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Initialize a Paystack payment transaction for a fee invoice.
 */
export const initializePayment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { invoiceId, email } = req.body;

    if (!invoiceId || !email) {
      throw new BadRequestException('Invoice ID and email are required for payment initialization.');
    }

    const invoice = await prisma.feeInvoice.findUnique({
      where: { id: invoiceId },
    });

    if (!invoice) {
      throw new NotFoundException(`Fee invoice with ID '${invoiceId}' not found.`);
    }

    if (invoice.status === 'PAID') {
      throw new BadRequestException('This fee invoice has already been paid.');
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerException('Paystack secret key is not configured.');
    }

    // Paystack expects amount in kobo (Nigerian Naira subunits)
    const amountInKobo = Math.round(Number(invoice.amount) * 100);

    const paystackResponse = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amountInKobo,
        callback_url: `${process.env.CORS_ORIGINS?.split(',')[0] || 'http://localhost:3000'}/portal/fees/verify`,
        metadata: {
          invoiceId: invoice.id,
          studentId: invoice.studentId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { authorization_url, reference } = paystackResponse.data.data;

    const responsePayload: ApiResponse<{ authorizationUrl: string; reference: string }> = {
      status: 'success',
      message: 'Paystack payment initialized successfully.',
      data: {
        authorizationUrl: authorization_url,
        reference,
      },
    };

    res.status(200).json(responsePayload);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return next(new BadRequestException(`Paystack initialization failed: ${error.response?.data?.message || error.message}`));
    }
    next(error);
  }
};

/**
 * Verify a Paystack transaction reference and update invoice status.
 */
export const verifyPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { reference } = req.query;

    if (!reference || typeof reference !== 'string') {
      throw new BadRequestException('Transaction reference is required for verification.');
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerException('Paystack secret key is not configured.');
    }

    const paystackResponse = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    const transactionData = paystackResponse.data.data;

    if (transactionData.status !== 'success') {
      throw new BadRequestException(`Payment verification failed. Status: ${transactionData.status}`);
    }

    const invoiceId = transactionData.metadata?.invoiceId;
    if (!invoiceId) {
      throw new BadRequestException('Invoice reference metadata missing from transaction.');
    }

    // Update invoice status and create payment record inside a database transaction
    const updatedInvoice = await prisma.$transaction(async (tx) => {
      const invoice = await tx.feeInvoice.update({
        where: { id: invoiceId },
        data: {
          status: 'PAID',
        },
      });

      await tx.paymentRecord.create({
        data: {
          invoiceId,
          reference: transactionData.reference,
          amount: transactionData.amount / 100, // convert back from kobo to NGN
          channel: transactionData.channel,
          paidAt: new Date(transactionData.paid_at),
          gatewayResponse: transactionData.gateway_response,
        },
      });

      return invoice;
    });

    const responsePayload: ApiResponse<typeof updatedInvoice> = {
      status: 'success',
      message: 'Payment verified and invoice updated successfully.',
      data: updatedInvoice,
    };

    res.status(200).json(responsePayload);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return next(new BadRequestException(`Paystack verification failed: ${error.response?.data?.message || error.message}`));
    }
    next(error);
  }
};

/**
 * Retrieve fee invoices and payment history for a specific student.
 */
export const getStudentFees = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const { term, session, status } = req.query;

    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const invoices = await prisma.feeInvoice.findMany({
      where: {
        studentId,
        ...(term ? { term: term as Term } : {}),
        ...(session ? { session: session as string } : {}),
        ...(status ? { status: status as string } : {}),
      },
      include: {
        payments: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    const responsePayload: ApiResponse<typeof invoices> = {
      status: 'success',
      message: 'Student fee invoices retrieved successfully.',
      data: invoices,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};