import { Request, Response, NextFunction } from 'express';
import { gradingService } from '../services/grading.service';
import { ApiResponse, Term } from '@sms/shared-types';
import { BadRequestException } from '../../../common/filters/http-exception';

/**
 * Generate a comprehensive term report card for a student, including subject grades, 
 * total scores, average, grading remarks, and attendance summary.
 */
export const generateReportCard = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const { term, session } = req.query;

    if (!studentId || !term || !session) {
      throw new BadRequestException('Student ID, term, and session are required to generate a report card.');
    }

    const reportCard = await gradingService.generateReportCard(
      studentId,
      term as Term,
      session as string
    );

    const responsePayload: ApiResponse<typeof reportCard> = {
      status: 'success',
      message: 'Student report card generated successfully.',
      data: reportCard,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};

/**
 * Compute cumulative academic performance and yearly grade summaries for a student across all terms in a session.
 */
export const getCumulativePerformance = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { studentId } = req.params;
    const { session } = req.query;

    if (!studentId || !session) {
      throw new BadRequestException('Student ID and session are required for cumulative performance calculation.');
    }

    const performance = await gradingService.getCumulativePerformance(
      studentId,
      session as string
    );

    const responsePayload: ApiResponse<typeof performance> = {
      status: 'success',
      message: 'Cumulative academic performance retrieved successfully.',
      data: performance,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    next(error);
  }
};