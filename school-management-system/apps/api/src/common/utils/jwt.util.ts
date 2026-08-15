import jwt from 'jsonwebtoken';
import { Role } from '@sms/shared-types';

export interface TokenPayload {
  id: string;
  email: string;
  role: Role;
}

/**
 * Generate a signed JSON Web Token (JWT) for authenticated users.
 */
export const generateToken = (payload: TokenPayload): string => {
  const secret = process.env.JWT_SECRET || 'super-secret-jwt-key-hillfort-sms-2026';
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  return jwt.sign(payload, secret, { expiresIn: expiresIn as any });
};

/**
 * Verify and decode a JSON Web Token.
 */
export const verifyToken = (token: string): TokenPayload => {
  const secret = process.env.JWT_SECRET || 'super-secret-jwt-key-hillfort-sms-2026';
  return jwt.verify(token, secret) as TokenPayload;
};