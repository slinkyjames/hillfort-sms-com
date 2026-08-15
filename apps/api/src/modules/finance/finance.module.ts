import { Router } from 'express';
import { 
  createFeeInvoice, 
  initializePayment, 
  verifyPayment, 
  getStudentFees 
} from './controllers/finance.controller';

// Add the explicit ': Router' type annotation here
const router: Router = Router();

/**
 * @route   POST /api/finance/invoices
 * @desc    Create a new fee invoice for a student
 * @access  Private (Admin / Bursar)
 */
router.post('/invoices', createFeeInvoice);

/**
 * @route   POST /api/finance/paystack/initialize
 * @desc    Initialize a Paystack payment transaction for an invoice
 * @access  Private (Parent / Student / Bursar)
 */
router.post('/paystack/initialize', initializePayment);

/**
 * @route   GET /api/finance/paystack/verify
 * @desc    Verify a Paystack transaction reference and update invoice status
 * @access  Public / Callback
 */
router.get('/paystack/verify', verifyPayment);

/**
 * @route   GET /api/finance/students/:studentId/fees
 * @desc    Retrieve fee invoices and payment history for a specific student
 * @access  Private (Admin / Bursar / Parent / Student)
 */
router.get('/students/:studentId/fees', getStudentFees);

export const financeModule = router;