import { Request, Response, NextFunction } from 'express';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const start = Date.now();
  const { method, originalUrl, ip } = req;

  // Listen for the response to finish to calculate duration and status
  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusCode = res.statusCode;
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] ${method} ${originalUrl} ${statusCode} - ${duration}ms - IP: ${ip}`;

    if (statusCode >= 500) {
      console.error(logMessage);
    } else if (statusCode >= 400) {
      console.warn(logMessage);
    } else if (process.env.NODE_ENV === 'development') {
      console.log(logMessage);
    }
  });

  next();
};