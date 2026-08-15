import { PrismaClient } from '@prisma/client';

// Declare a global variable to store the Prisma instance in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Instantiate PrismaClient, reusing the global instance if it exists
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

// In development, attach the instance to global to prevent multiple connections
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Re-export the Prisma client and all generated types for use in other packages
export * from '@prisma/client';