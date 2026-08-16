export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  PRINCIPAL = 'PRINCIPAL',
  BURSAR = 'BURSAR',
  TEACHER = 'TEACHER',
  PARENT = 'PARENT',
  STUDENT = 'STUDENT',
}

export enum CurriculumType {
  NIGERIAN = 'NIGERIAN',
  BRITISH = 'BRITISH',
  HYBRID = 'HYBRID',
}

export enum Term {
  FIRST_TERM = 'FIRST_TERM',
  SECOND_TERM = 'SECOND_TERM',
  THIRD_TERM = 'THIRD_TERM',
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    [key: string]: any;
  };
}