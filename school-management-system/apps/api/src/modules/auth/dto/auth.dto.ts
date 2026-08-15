import { Role } from '@sms/shared-types';

/**
 * Payload DTO for registering a new system user.
 */
export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
}

/**
 * Payload DTO for authenticating an existing user.
 */
export interface LoginDto {
  email: string;
  password: string;
}