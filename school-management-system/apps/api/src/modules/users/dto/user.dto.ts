import { Role } from '@sms/shared-types';

/**
 * Query parameters DTO for filtering and searching system users.
 */
export interface GetUsersQueryDto {
  role?: Role;
  search?: string;
}

/**
 * Payload DTO for updating user account details.
 */
export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: Role;
}

/**
 * Payload DTO for toggling or setting a user account's active status.
 */
export interface ToggleUserStatusDto {
  isActive: boolean;
}