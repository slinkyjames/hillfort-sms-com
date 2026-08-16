import { Router } from 'express';
import { markAttendance, getStudentAttendance } from './controllers/attendance.controller';
import { authenticate } from '../../common/guards/auth.guard';
import { authorize } from '../../common/guards/roles.guard';
import { Role } from '@sms/shared-types';

const router = Router();

/**
 * @route   POST /api/attendance
 * @desc    Mark attendance for a student
 * @access  Private (Teacher / Principal)
 */
router.post(
  '/',
  authenticate,
  authorize([Role.TEACHER, Role.PRINCIPAL]),
  markAttendance
);

/**
 * @route   GET /api/attendance/students/:studentId
 * @desc    Retrieve attendance history for a specific student
 * @access  Private (Teacher / Principal / Parent / Student)
 */
router.get(
  '/students/:studentId',
  authenticate,
  authorize([Role.TEACHER, Role.PRINCIPAL, Role.PARENT, Role.STUDENT]),
  getStudentAttendance
);

export const attendanceModule: Router = router;
