// ==========================================
// SHARED ENUMS & CONSTANTS
// ==========================================
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

// ==========================================
// USER & PROFILE ENTITIES
// ==========================================
export interface UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StudentProfileDTO {
  id: string;
  userId: string;
  admissionNumber: string;
  curriculum: CurriculumType;
  currentClass: string;
  guardianName: string;
  guardianPhone: string;
  user?: UserDTO;
}

export interface StaffProfileDTO {
  id: string;
  userId: string;
  staffId: string;
  department: string;
  user?: UserDTO;
}

// ==========================================
// ACADEMICS & GRADING DTOs
// ==========================================
export interface GradeRecordDTO {
  id: string;
  studentId: string;
  subject: string;
  term: Term;
  session: string;
  caScore?: number | null;       // Continuous Assessment (Nigerian 40%)
  examScore?: number | null;     // Examination (Nigerian 60%)
  britishGrade?: string | null;  // e.g., A*, Checkpoint Level
  curriculumType: CurriculumType;
  createdAt: string;
}

export interface CreateGradeDTO {
  studentId: string;
  subject: string;
  term: Term;
  session: string;
  caScore?: number;
  examScore?: number;
  britishGrade?: string;
  curriculumType: CurriculumType;
}

// ==========================================
// ATTENDANCE DTOs
// ==========================================
export interface AttendanceDTO {
  id: string;
  studentId: string;
  date: string;
  isPresent: boolean;
  term: Term;
}

// ==========================================
// FINANCE & FEES DTOs
// ==========================================
export interface FeeRecordDTO {
  id: string;
  studentId: string;
  totalAmount: number;
  amountPaid: number;
  term: Term;
  session: string;
  isCleared: boolean;
  gatewayRef?: string | null;
}

export interface InitializePaymentDTO {
  studentId: string;
  amount: number;
  term: Term;
  session: string;
  email: string;
}

// ==========================================
// API RESPONSE WRAPPERS
// ==========================================
export interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  error?: string;
}