import { Request, Response, NextFunction } from 'express';
import { prisma } from '@sms/database';
import { BadRequestException, NotFoundException } from '../../../common/filters/http-exception';
import { ApiResponse, Term } from '@sms/shared-types';

/**
 * Mark or update attendance status for a student on a specific date.
 */
export const markAttendance = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId, date, status, term, session, remarks } = req.body;

    // Validate required fields
    if (!studentId || !date || !status || !term || !session) {
      throw new BadRequestException('Missing required fields for marking attendance.');
    }

    // Verify student profile existence
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    // Normalize date to start of day to prevent duplicate daily entries
    const attendanceDate = new Date(date);
    if (isNaN(attendanceDate.getTime())) {
      throw new BadRequestException('Invalid date format provided.');
    }
    attendanceDate.setHours(0, 0, 0, 0);

    // Upsert attendance record to allow updates for the same day
    const attendanceRecord = await prisma.studentAttendance.upsert({
      where: {
        studentId_date: {
          studentId,
          date: attendanceDate,
        },
      },
      update: {
        status,
        term: term as Term,
        session,
        remarks: remarks || null,
      },
      create: {
        studentId,
        date: attendanceDate,
        status,
        term: term as Term,
        session,
        remarks: remarks || null,
      },
    });

    const responsePayload: ApiResponse<typeof attendanceRecord> = {
      status: 'success',
      message: 'Attendance recorded successfully.',
      data: attendanceRecord,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieve attendance history for a specific student with optional term, session, and date range filters.
 */
export const getStudentAttendance = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const { term, session, startDate, endDate } = req.query;

    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const attendanceRecords = await prisma.studentAttendance.findMany({
      where: {
        studentId,
        ...(term ? { term: term as Term } : {}),
        ...(session ? { session: session as string } : {}),
        ...(startDate || endDate
          ? {
              date: {
                ...(startDate ? { gte: new Date(startDate as string) } : {}),
                ...(endDate ? { lte: new Date(endDate as string) } : {}),
              },
            }
          : {}),
      },
      orderBy: { date: 'desc' },
    });

    const responsePayload: ApiResponse<typeof attendanceRecords> = {
      status: 'success',
      message: 'Student attendance records retrieved successfully.',
      data: attendanceRecords,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};