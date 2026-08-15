import { Request, Response, NextFunction } from 'express';
import { HttpException } from './http-exception';
import { ApiResponse } from '@sms/shared-types';
import { Prisma } from '@sms/database';

export const globalErrorFilter = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errorDetails: any = null;

  // Handle custom HttpExceptions
  if (err instanceof HttpException) {
    statusCode = err.statusCode;
    message = err.message;
    errorDetails = err.errors;
  } 
  // Handle Prisma Known Request Errors
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    statusCode = 400;
    switch (err.code) {
      case 'P2002':
        message = 'A record with this unique constraint already exists.';
        errorDetails = err.meta;
        break;
      case 'P2025':
        statusCode = 404;
        message = 'Requested database record not found.';
        break;
      default:
        message = `Database error: ${err.code}`;
        errorDetails = err.meta;
        break;
    }
  } 
  // Handle JWT Verification Errors
  else if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid authentication token.';
  } else if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Authentication token has expired.';
  } 
  // Handle standard Error messages in development
  else if (process.env.NODE_ENV === 'development') {
    message = err.message;
    errorDetails = err.stack;
  }

  // Log error for server monitoring
  if (statusCode >= 500) {
    console.error(`[ERROR] ${req.method} ${req.originalUrl}:`, err);
  }

  const responsePayload: ApiResponse<null> = {
    status: 'error',
    message,
    error: errorDetails ? JSON.stringify(errorDetails) : err.name || 'Error',
  };

  res.status(statusCode).json(responsePayload);
};