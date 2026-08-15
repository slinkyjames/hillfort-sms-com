import { Request, Response, NextFunction } from 'express';
import { prisma } from '@sms/database';
import { 
  BadRequestException, 
  NotFoundException, 
  ConflictException 
} from '../../../common/filters/http-exception';
import { ApiResponse } from '@sms/shared-types';

/**
 * Create a new student profile linked to an existing system user account.
 */
export const createStudentProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId, admissionNumber, dateOfBirth, gender, classRoomId, address } = req.body;

    if (!userId || !admissionNumber || !gender) {
      throw new BadRequestException('User ID, admission number, and gender are required for student profile creation.');
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID '${userId}' not found.`);
    }

    const existingProfile = await prisma.studentProfile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      throw new ConflictException(`Student profile already exists for user ID '${userId}'.`);
    }

    const existingAdmission = await prisma.studentProfile.findUnique({
      where: { admissionNumber },
    });

    if (existingAdmission) {
      throw new ConflictException(`Student with admission number '${admissionNumber}' already exists.`);
    }

    const studentProfile = await prisma.studentProfile.create({
      data: {
        userId,
        admissionNumber,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        gender,
        classRoomId: classRoomId || null,
        address: address || null,
      },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true, role: true },
        },
        classRoom: true,
      },
    });

    const responsePayload: ApiResponse<typeof studentProfile> = {
      status: 'success',
      message: 'Student profile created successfully.',
      data: studentProfile,
    };

    res.status(201).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieve all student profiles with optional filtering by classroom and search keywords.
 */
export const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { classRoomId, search } = req.query;

    const students = await prisma.studentProfile.findMany({
      where: {
        ...(classRoomId ? { classRoomId: classRoomId as string } : {}),
        ...(search
          ? {
              OR: [
                { admissionNumber: { contains: search as string, mode: 'insensitive' } },
                { user: { firstName: { contains: search as string, mode: 'insensitive' } } },
                { user: { lastName: { contains: search as string, mode: 'insensitive' } } },
              ],
            }
          : {}),
      },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true, isActive: true },
        },
        classRoom: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    const responsePayload: ApiResponse<typeof students> = {
      status: 'success',
      message: 'Student profiles retrieved successfully.',
      data: students,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieve a single student profile by ID including user details, classroom, and guardians.
 */
export const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const student = await prisma.studentProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true, role: true, isActive: true },
        },
        classRoom: true,
        guardians: {
          include: {
            parent: {
              select: { firstName: true, lastName: true, email: true },
            },
          },
        },
      },
    });

    if (!student) {
      throw new NotFoundException(`Student profile with ID '${id}' not found.`);
    }

    const responsePayload: ApiResponse<typeof student> = {
      status: 'success',
      message: 'Student profile retrieved successfully.',
      data: student,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Update an existing student profile.
 */
export const updateStudentProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { admissionNumber, dateOfBirth, gender, classRoomId, address } = req.body;

    const student = await prisma.studentProfile.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException(`Student profile with ID '${id}' not found.`);
    }

    if (admissionNumber && admissionNumber !== student.admissionNumber) {
      const existingAdmission = await prisma.studentProfile.findUnique({
        where: { admissionNumber },
      });
      if (existingAdmission) {
        throw new ConflictException(`Admission number '${admissionNumber}' is already in use.`);
      }
    }

    const updatedStudent = await prisma.studentProfile.update({
      where: { id },
      data: {
        ...(admissionNumber ? { admissionNumber } : {}),
        ...(dateOfBirth !== undefined ? { dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null } : {}),
        ...(gender ? { gender } : {}),
        ...(classRoomId !== undefined ? { classRoomId: classRoomId || null } : {}),
        ...(address !== undefined ? { address } : {}),
      },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true },
        },
        classRoom: true,
      },
    });

    const responsePayload: ApiResponse<typeof updatedStudent> = {
      status: 'success',
      message: 'Student profile updated successfully.',
      data: updatedStudent,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};