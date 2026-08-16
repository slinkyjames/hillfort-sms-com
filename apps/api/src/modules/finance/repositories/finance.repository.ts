import { prisma } from '@sms/database';
import { Term } from '@sms/shared-types';

export interface CreateInvoiceData {
  studentId: string;
  title: string;
  amount: number;
  term: Term;
  session: string;
  dueDate?: Date | null;
}

export interface CreatePaymentData {
  invoiceId: string;
  reference: string;
  amount: number;
  channel: string;
  paidAt: Date;
  gatewayResponse: string;
}

export interface GetFeesFilters {
  term?: Term;
  session?: string;
  status?: string;
}

export class FinanceRepository {
  /**
   * Create a new fee invoice in the database.
   */
  public async createInvoice(data: CreateInvoiceData) {
    return prisma.feeInvoice.create({
      data: {
        studentId: data.studentId,
        title: data.title,
        amount: data.amount,
        term: data.term,
        session: data.session,
        status: 'PENDING',
        dueDate: data.dueDate ?? null,
      },
    });
  }

  /**
   * Find a fee invoice by its unique ID.
   */
  public async findInvoiceById(invoiceId: string) {
    return prisma.feeInvoice.findUnique({
      where: { id: invoiceId },
      include: {
        payments: true,
      },
    });
  }

  /**
   * Update the status of a fee invoice.
   */
  public async updateInvoiceStatus(invoiceId: string, status: string) {
    return prisma.feeInvoice.update({
      where: { id: invoiceId },
      data: { status },
    });
  }

  /**
   * Create a payment transaction record linked to an invoice.
   */
  public async createPaymentRecord(data: CreatePaymentData) {
    return prisma.paymentRecord.create({
      data: {
        invoiceId: data.invoiceId,
        reference: data.reference,
        amount: data.amount,
        channel: data.channel,
        paidAt: data.paidAt,
        gatewayResponse: data.gatewayResponse,
      },
    });
  }

  /**
   * Retrieve all fee invoices for a student with optional filters.
   */
  public async findInvoicesByStudent(studentId: string, filters: GetFeesFilters) {
    return prisma.feeInvoice.findMany({
      where: {
        studentId,
        ...(filters.term ? { term: filters.term } : {}),
        ...(filters.session ? { session: filters.session } : {}),
        ...(filters.status ? { status: filters.status } : {}),
      },
      include: {
        payments: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Execute an atomic database transaction for verifying and recording payments.
   */
  public async completePaymentTransaction(invoiceId: string, paymentData: CreatePaymentData) {
    return prisma.$transaction(async (tx: any) => {
      const updatedInvoice = await tx.feeInvoice.update({
        where: { id: invoiceId },
        data: { status: 'PAID' },
      });

      const paymentRecord = await tx.paymentRecord.create({
        data: {
          invoiceId: paymentData.invoiceId,
          reference: paymentData.reference,
          amount: paymentData.amount,
          channel: paymentData.channel,
          paidAt: paymentData.paidAt,
          gatewayResponse: paymentData.gatewayResponse,
        },
      });

      return { updatedInvoice, paymentRecord };
    });
  }
}

export const financeRepository = new FinanceRepository();