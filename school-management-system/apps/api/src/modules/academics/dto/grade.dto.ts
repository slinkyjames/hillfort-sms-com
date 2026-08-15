import { CurriculumType, Term } from '@sms/shared-types';

/**
 * Payload DTO for recording or updating a student's academic grade.
 */
export interface RecordGradeDto {
  studentId: string;
  subject: string;
  term: Term;
  session: string;
  caScore?: number;
  examScore?: number;
  britishGrade?: string;
  curriculumType: CurriculumType;
}

/**
 * Query parameters DTO for filtering student grade records.
 */
export interface GetGradesQueryDto {
  term?: Term;
  session?: string;
  curriculum?: CurriculumType;
}