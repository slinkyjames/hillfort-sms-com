import app from './app';
import { prisma } from '@sms/database';

const PORT = process.env.PORT || 4000;

/**
 * Start the HTTP server.
 */
const server = app.listen(PORT, () => {
  console.log(`[server]: School Management System API is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
});

/**
 * Handle unhandled promise rejections with graceful shutdown.
 */
process.on('unhandledRejection', (reason: Error) => {
  console.error('[unhandledRejection]: Unhandled promise rejection detected. Shutting down server...', reason);
  server.close(async () => {
    try {
      await prisma.$disconnect();
      console.log('[server]: Database connection closed successfully.');
    } catch (dbError) {
      console.error('[server]: Error disconnecting from database:', dbError);
    }
    process.exit(1);
  });
});

/**
 * Handle uncaught exceptions with graceful shutdown.
 */
process.on('uncaughtException', (error: Error) => {
  console.error('[uncaughtException]: Uncaught exception detected. Shutting down server...', error);
  server.close(async () => {
    try {
      await prisma.$disconnect();
      console.log('[server]: Database connection closed successfully.');
    } catch (dbError) {
      console.error('[server]: Error disconnecting from database:', dbError);
    }
    process.exit(1);
  });
});