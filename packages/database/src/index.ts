import { PrismaClient } from './generated/client';

// Declare a global variable to store the Prisma instance in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Instantiate PrismaClient, reusing the global instance if it exists
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // Pass the connection string dynamically here instead of the schema
    datasourceUrl: process.env.DATABASE_URL, 
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

// In development, attach the instance to global to prevent multiple connections
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Re-export everything (including the Prisma namespace) from the local generated client
export * from './generated/client';