import { Router } from 'express';
import {
  generateReportCard,
  getCumulativePerformance,
} from './controllers/grading.controller';
import { authenticate } from '../../common/guards/auth.guard';
import { authorize } from '../../common/guards/roles.guard';
import { Role } from '@sms/shared-types';

const router = Router();

/**
 * @route   GET /api/grading/students/:studentId/report-card
 * @desc    Generate a report card for a student
 * @access  Private (Teacher / Principal / Parent / Student)
 */
router.get(
  '/students/:studentId/report-card',
  authenticate,
  authorize([Role.TEACHER, Role.PRINCIPAL, Role.PARENT, Role.STUDENT]),
  generateReportCard
);

/**
 * @route   GET /api/grading/students/:studentId/performance
 * @desc    Retrieve a student's cumulative academic performance
 * @access  Private (Teacher / Principal / Parent / Student)
 */
router.get(
  '/students/:studentId/performance',
  authenticate,
  authorize([Role.TEACHER, Role.PRINCIPAL, Role.PARENT, Role.STUDENT]),
  getCumulativePerformance
);

export const gradingModule: Router = router;
