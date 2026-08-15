import { Term } from '@sms/shared-types';

/**
 * Payload DTO for creating a student fee invoice.
 */
export interface CreateFeeInvoiceDto {
  studentId: string;
  title: string;
  amount: number;
  term: Term;
  session: string;
  dueDate?: string | Date;
}

/**
 * Payload DTO for initializing a Paystack payment transaction.
 */
export interface InitializePaymentDto {
  invoiceId: string;
  email: string;
}

/**
 * Query parameters DTO for filtering student fee invoices and payment history.
 */
export interface GetFeesQueryDto {
  term?: Term;
  session?: string;
  status?: string;
}