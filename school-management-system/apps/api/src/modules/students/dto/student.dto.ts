/**
 * Payload DTO for creating a new student profile.
 */
export interface CreateStudentProfileDto {
  userId: string;
  admissionNumber: string;
  dateOfBirth?: string | Date;
  gender: string;
  classRoomId?: string;
  address?: string;
}

/**
 * Payload DTO for updating an existing student profile.
 */
export interface UpdateStudentProfileDto {
  admissionNumber?: string;
  dateOfBirth?: string | Date;
  gender?: string;
  classRoomId?: string | null;
  address?: string | null;
}

/**
 * Query parameters DTO for filtering and searching student profiles.
 */
export interface GetStudentsQueryDto {
  classRoomId?: string;
  search?: string;
}