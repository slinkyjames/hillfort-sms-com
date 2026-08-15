import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { authModule } from './modules/auth/auth.module';
import { academicsModule } from './modules/academics/academics.module';
import { attendanceModule } from './modules/attendance/attendance.module';
import { financeModule } from './modules/finance/finance.module';
import { studentsModule } from './modules/students/students.module';
import { usersModule } from './modules/users/users.module';
import { gradingModule } from './modules/grading/grading.module';

const app: Application = express();

/**
 * Configure security, CORS, and body-parsing middleware.
 */
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Health check endpoint for container orchestrators and load balancers.
 */
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'School Management System API is running successfully.',
    timestamp: new Date().toISOString(),
  });
});

/**
 * Register Domain Module Routers
 */
app.use('/api/auth', authModule);
app.use('/api/academics', academicsModule);
app.use('/api/attendance', attendanceModule);
app.use('/api/finance', financeModule);
app.use('/api/students', studentsModule);
app.use('/api/users', usersModule);
app.use('/api/grading', gradingModule);

/**
 * Catch-all 404 handler for unmatched routes.
 */
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    statusCode: 404,
    message: 'The requested API endpoint does not exist.',
  });
});

/**
 * Global Exception Handling Middleware.
 */
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected internal server error occurred.';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}),
  });
});

export default app;