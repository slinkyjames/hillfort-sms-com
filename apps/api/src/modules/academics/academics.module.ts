import { Router } from 'express';
import { recordGrade, getStudentGrades } from './controllers/grade.controller';
import { authenticate } from '../../common/guards/auth.guard';
import { authorize } from '../../common/guards/roles.guard';
import { Role } from '@sms/shared-types';

const router = Router();

/**
 * @route   POST /api/academics/grades
 * @desc    Record a grade for a student
 * @access  Private (Teacher / Principal)
 */
router.post(
  '/grades',
  authenticate,
  authorize([Role.TEACHER, Role.PRINCIPAL]),
  recordGrade
);

/**
 * @route   GET /api/academics/students/:studentId/grades
 * @desc    Retrieve recorded grades for a specific student
 * @access  Private (Teacher / Principal / Parent / Student)
 */
router.get(
  '/students/:studentId/grades',
  authenticate,
  authorize([Role.TEACHER, Role.PRINCIPAL, Role.PARENT, Role.STUDENT]),
  getStudentGrades
);

export const academicsModule: Router = router;
