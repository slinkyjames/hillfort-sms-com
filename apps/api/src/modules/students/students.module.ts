import { Router } from 'express';
import {
  createStudentProfile,
  getAllStudents,
  getStudentById,
  updateStudentProfile,
} from './controllers/student.controller';
import { authenticate } from '../../common/guards/auth.guard';
import { authorize } from '../../common/guards/roles.guard';
import { Role } from '@sms/shared-types';

const router = Router();

/**
 * @route   POST /api/students
 * @desc    Create a new student profile
 * @access  Private (Principal / Bursar)
 */
router.post(
  '/',
  authenticate,
  authorize([Role.PRINCIPAL, Role.BURSAR]),
  createStudentProfile
);

/**
 * @route   GET /api/students
 * @desc    List all student profiles
 * @access  Private (Principal / Bursar / Teacher)
 */
router.get(
  '/',
  authenticate,
  authorize([Role.PRINCIPAL, Role.BURSAR, Role.TEACHER]),
  getAllStudents
);

/**
 * @route   GET /api/students/:id
 * @desc    Retrieve a single student profile by id
 * @access  Private (Principal / Bursar / Teacher / Parent / Student)
 */
router.get(
  '/:id',
  authenticate,
  authorize([Role.PRINCIPAL, Role.BURSAR, Role.TEACHER, Role.PARENT, Role.STUDENT]),
  getStudentById
);

/**
 * @route   PATCH /api/students/:id
 * @desc    Update a student profile
 * @access  Private (Principal / Bursar)
 */
router.patch(
  '/:id',
  authenticate,
  authorize([Role.PRINCIPAL, Role.BURSAR]),
  updateStudentProfile
);

export const studentsModule: Router = router;
