import axios from 'axios';
import { prisma } from '@sms/database';
import { financeRepository } from '../repositories/finance.repository';
import { 
  BadRequestException, 
  NotFoundException, 
  InternalServerException 
} from '../../../common/filters/http-exception';
import { CreateFeeInvoiceDto, InitializePaymentDto, GetFeesQueryDto } from '../dto/finance.dto';

export class FinanceService {
  /**
   * Create a new fee invoice for a student after verifying student profile existence.
   */
  public async createFeeInvoice(dto: CreateFeeInvoiceDto) {
    const { studentId, title, amount, term, session, dueDate } = dto;

    if (!studentId || !title || amount === undefined || !term || !session) {
      throw new BadRequestException('Missing required fields for creating fee invoice.');
    }

    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const invoice = await financeRepository.createInvoice({
      studentId,
      title,
      amount: Number(amount),
      term,
      session,
      dueDate: dueDate ? new Date(dueDate) : null,
    });

    return invoice;
  }

  /**
   * Initialize a Paystack payment transaction for a pending fee invoice.
   */
  public async initializePayment(dto: InitializePaymentDto) {
    const { invoiceId, email } = dto;

    if (!invoiceId || !email) {
      throw new BadRequestException('Invoice ID and email are required for payment initialization.');
    }

    const invoice = await financeRepository.findInvoiceById(invoiceId);

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

    try {
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

      return {
        authorizationUrl: authorization_url,
        reference,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new BadRequestException(`Paystack initialization failed: ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  }

  /**
   * Verify a Paystack transaction reference and complete the payment transaction atomically.
   */
  public async verifyPayment(reference: string) {
    if (!reference || typeof reference !== 'string') {
      throw new BadRequestException('Transaction reference is required for verification.');
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      throw new InternalServerException('Paystack secret key is not configured.');
    }

    try {
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

      // Complete payment and update invoice status atomically via repository
      const result = await financeRepository.completePaymentTransaction(invoiceId, {
        invoiceId,
        reference: transactionData.reference,
        amount: transactionData.amount / 100, // convert back from kobo to NGN
        channel: transactionData.channel,
        paidAt: new Date(transactionData.paid_at),
        gatewayResponse: transactionData.gateway_response,
      });

      return result.updatedInvoice;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new BadRequestException(`Paystack verification failed: ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  }

  /**
   * Retrieve fee invoices and payment history for a specific student with optional filters.
   */
  public async getStudentFees(studentId: string, query: GetFeesQueryDto) {
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const invoices = await financeRepository.findInvoicesByStudent(studentId, {
      term: query.term,
      session: query.session,
      status: query.status,
    });

    return invoices;
  }
}

export const financeService = new FinanceService();