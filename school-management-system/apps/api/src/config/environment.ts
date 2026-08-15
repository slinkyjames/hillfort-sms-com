import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from local .env file in non-production environments
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../../.env') });
}

export interface EnvironmentConfig {
  port: number;
  nodeEnv: string;
  databaseUrl: string;
  redisUrl: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  corsOrigins: string[];
  paystackSecretKey: string;
  paystackPublicKey: string;
}

const validateConfig = (): EnvironmentConfig => {
  const requiredVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'PAYSTACK_SECRET_KEY',
  ];

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`[Configuration Error] Missing critical environment variable: ${varName}`);
    }
  }

  return {
    port: parseInt(process.env.PORT || '5000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    databaseUrl: process.env.DATABASE_URL as string,
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
    jwtSecret: process.env.JWT_SECRET as string,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    corsOrigins: (
      process.env.CORS_ORIGINS ||
      'http://localhost:3000,http://localhost:3001'
    ).split(',').map((origin) => origin.trim()),
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY as string,
    paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY || '',
  };
};

export const config = validateConfig();