import { Term } from '@sms/shared-types';

export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LATE = 'LATE',
  EXCUSED = 'EXCUSED',
}

/**
 * Payload DTO for marking or updating a student's daily attendance.
 */
export interface MarkAttendanceDto {
  studentId: string;
  date: string | Date;
  status: AttendanceStatus;
  term: Term;
  session: string;
  remarks?: string;
}

/**
 * Query parameters DTO for filtering student attendance history.
 */
export interface GetAttendanceQueryDto {
  term?: Term;
  session?: string;
  startDate?: string;
  endDate?: string;
  status?: AttendanceStatus;
}