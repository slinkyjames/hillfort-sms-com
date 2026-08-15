import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';
import { ApiResponse } from '@sms/shared-types';

// General API rate limiter: 100 requests per 15 minutes per IP
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req: Request, res: Response) => {
    const responsePayload: ApiResponse<null> = {
      status: 'error',
      message: 'Too many requests from this IP, please try again after 15 minutes.',
      error: 'RATE_LIMIT_EXCEEDED',
    };
    res.status(429).json(responsePayload);
  },
});

// Strict authentication rate limiter: 5 attempts per 15 minutes per IP
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req: Request, res: Response) => {
    const responsePayload: ApiResponse<null> = {
      status: 'error',
      message: 'Too many login attempts from this IP, please try again after 15 minutes.',
      error: 'AUTH_RATE_LIMIT_EXCEEDED',
    };
    res.status(429).json(responsePayload);
  },
});