export class HttpException extends Error {
  public readonly statusCode: number;
  public readonly errors?: any;

  constructor(statusCode: number, message: string, errors?: any) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string = 'Bad Request', errors?: any) {
    super(400, message, errors);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string = 'Unauthorized Access') {
    super(401, message);
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string = 'Forbidden Resource') {
    super(403, message);
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string = 'Resource Not Found') {
    super(404, message);
  }
}

export class ConflictException extends HttpException {
  constructor(message: string = 'Resource Conflict') {
    super(409, message);
  }
}

export class InternalServerException extends HttpException {
  constructor(message: string = 'Internal Server Error') {
    super(500, message);
  }
}