import { Router } from 'express';
import { register, login, getProfile } from './controllers/auth.controller';
import { authenticate } from '../../common/guards/auth.guard';

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user account
 * @access  Public
 */
router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate a user and issue a JWT
 * @access  Public
 */
router.post('/login', login);

/**
 * @route   GET /api/auth/profile
 * @desc    Get the currently authenticated user's profile
 * @access  Private
 */
router.get('/profile', authenticate, getProfile);

export const authModule: Router = router;
