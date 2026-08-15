import { Request, Response, NextFunction } from 'express';
import { Role } from '@sms/shared-types';
import { ForbiddenException, UnauthorizedException } from '../filters/http-exception';

export const authorize = (allowedRoles: Role[]) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new UnauthorizedException('User session not found. Authentication required.');
      }

      const { role } = req.user;

      // SUPER_ADMIN has global override privileges across all endpoints
      if (role === Role.SUPER_ADMIN) {
        return next();
      }

      if (!allowedRoles.includes(role)) {
        throw new ForbiddenException(
          `Access denied. Role '${role}' does not have permission to access this resource.`
        );
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};