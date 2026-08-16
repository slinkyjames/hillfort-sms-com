import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  toggleUserStatus,
} from './controllers/user.controller';
import { authenticate } from '../../common/guards/auth.guard';
import { authorize } from '../../common/guards/roles.guard';
import { Role } from '@sms/shared-types';

const router = Router();

/**
 * @route   GET /api/users
 * @desc    List all user accounts
 * @access  Private (Super Admin / Principal)
 */
router.get('/', authenticate, authorize([Role.PRINCIPAL]), getAllUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Retrieve a single user account by id
 * @access  Private (Super Admin / Principal)
 */
router.get('/:id', authenticate, authorize([Role.PRINCIPAL]), getUserById);

/**
 * @route   PATCH /api/users/:id
 * @desc    Update a user account
 * @access  Private (Super Admin / Principal)
 */
router.patch('/:id', authenticate, authorize([Role.PRINCIPAL]), updateUser);

/**
 * @route   PATCH /api/users/:id/status
 * @desc    Activate or deactivate a user account
 * @access  Private (Super Admin / Principal)
 */
router.patch(
  '/:id/status',
  authenticate,
  authorize([Role.PRINCIPAL]),
  toggleUserStatus
);

export const usersModule: Router = router;
