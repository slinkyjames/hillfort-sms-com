import { Request, Response, NextFunction } from 'express';
import { prisma } from '@sms/database';
import { BadRequestException, NotFoundException } from '../../../common/filters/http-exception';
import { ApiResponse, CurriculumType, Term } from '@sms/shared-types';

/**
 * Record or update a student's academic grade for a specific subject and term.
 */
export const recordGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      studentId,
      subject,
      term,
      session,
      caScore,
      examScore,
      britishGrade,
      curriculumType,
    } = req.body;

    // Validate required fields
    if (!studentId || !subject || !term || !session || !curriculumType) {
      throw new BadRequestException('Missing required fields for grade recording.');
    }

    // Verify student existence
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    // Validate curriculum-specific score inputs
    if (curriculumType === CurriculumType.NIGERIAN) {
      if (caScore === undefined || examScore === undefined) {
        throw new BadRequestException('Nigerian curriculum requires both caScore and examScore.');
      }
      if (caScore < 0 || caScore > 40 || examScore < 0 || examScore > 60) {
        throw new BadRequestException('Invalid score range: CA must be 0-40 and Exam must be 0-60.');
      }
    } else if (curriculumType === CurriculumType.BRITISH) {
      if (!britishGrade) {
        throw new BadRequestException('British curriculum requires a britishGrade value.');
      }
    }

    // Upsert grade record to prevent duplicate entries for the same term/subject/student
    const gradeRecord = await prisma.gradeRecord.upsert({
      where: {
        studentId_subject_term_session: {
          studentId,
          subject,
          term: term as Term,
          session,
        },
      },
      update: {
        caScore: caScore ?? null,
        examScore: examScore ?? null,
        britishGrade: britishGrade ?? null,
        curriculumType: curriculumType as CurriculumType,
      },
      create: {
        studentId,
        subject,
        term: term as Term,
        session,
        caScore: caScore ?? null,
        examScore: examScore ?? null,
        britishGrade: britishGrade ?? null,
        curriculumType: curriculumType as CurriculumType,
      },
    });

    const responsePayload: ApiResponse<typeof gradeRecord> = {
      status: 'success',
      message: 'Academic grade recorded successfully.',
      data: gradeRecord,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieve all grade records for a specific student, with optional term and session filters.
 */
export const getStudentGrades = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const { term, session, curriculum } = req.query;

    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const grades = await prisma.gradeRecord.findMany({
      where: {
        studentId,
        ...(term ? { term: term as Term } : {}),
        ...(session ? { session: session as string } : {}),
        ...(curriculum ? { curriculumType: curriculum as CurriculumType } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });

    const responsePayload: ApiResponse<typeof grades> = {
      status: 'success',
      message: 'Student grades retrieved successfully.',
      data: grades,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};