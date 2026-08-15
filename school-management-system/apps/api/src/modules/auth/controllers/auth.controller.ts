import { Request, Response, NextFunction } from 'express';
import { prisma } from '@sms/database';
import { hashPassword, verifyPassword } from '../../../common/utils/password.util';
import { generateToken } from '../../../common/utils/jwt.util';
import { 
  BadRequestException, 
  ConflictException, 
  UnauthorizedException, 
  NotFoundException 
} from '../../../common/filters/http-exception';
import { ApiResponse, Role } from '@sms/shared-types';

/**
 * Register a new system user (Admin, Teacher, Bursar, Parent, etc.).
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, firstName, lastName, role } = req.body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName || !role) {
      throw new BadRequestException('Missing required fields for user registration.');
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException(`User with email '${email}' already exists.`);
    }

    // Hash password securely
    const hashedPassword = await hashPassword(password);

    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        firstName,
        lastName,
        role: role as Role,
        isActive: true,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    // Generate JWT token for immediate authentication
    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    const responsePayload: ApiResponse<{ user: typeof newUser; token: string }> = {
      status: 'success',
      message: 'User registered successfully.',
      data: {
        user: newUser,
        token,
      },
    };

    res.status(201).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Authenticate an existing user and return a JWT bearer token.
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate input presence
    if (!email || !password) {
      throw new BadRequestException('Email and password are required for login.');
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // Verify password against stored hash
    const isPasswordValid = await verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const userResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isActive: user.isActive,
    };

    const responsePayload: ApiResponse<{ user: typeof userResponse; token: string }> = {
      status: 'success',
      message: 'Login successful.',
      data: {
        user: userResponse,
        token,
      },
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieve the profile of the currently authenticated user.
 */
export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      throw new UnauthorizedException('User session not found.');
    }

    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User profile not found.');
    }

    const responsePayload: ApiResponse<typeof user> = {
      status: 'success',
      message: 'User profile retrieved successfully.',
      data: user,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};