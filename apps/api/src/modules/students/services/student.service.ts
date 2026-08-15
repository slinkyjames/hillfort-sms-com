import { prisma } from '@sms/database';
import { 
  BadRequestException, 
  NotFoundException, 
  ConflictException 
} from '../../../common/filters/http-exception';
import { CreateStudentProfileDto, UpdateStudentProfileDto, GetStudentsQueryDto } from '../dto/student.dto';

export class StudentService {
  /**
   * Create a new student profile linked to an existing system user account.
   */
  public async createStudentProfile(dto: CreateStudentProfileDto) {
    const { userId, admissionNumber, dateOfBirth, gender, classRoomId, address } = dto;

    if (!userId || !admissionNumber || !gender) {
      throw new BadRequestException('User ID, admission number, and gender are required for student profile creation.');
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID '${userId}' not found.`);
    }

    const existingProfile = await prisma.studentProfile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      throw new ConflictException(`Student profile already exists for user ID '${userId}'.`);
    }

    const existingAdmission = await prisma.studentProfile.findUnique({
      where: { admissionNumber },
    });

    if (existingAdmission) {
      throw new ConflictException(`Student with admission number '${admissionNumber}' already exists.`);
    }

    const studentProfile = await prisma.studentProfile.create({
      data: {
        userId,
        admissionNumber,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        gender,
        classRoomId: classRoomId || null,
        address: address || null,
      },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true, role: true },
        },
        classRoom: true,
      },
    });

    return studentProfile;
  }

  /**
   * Retrieve all student profiles with optional filtering by classroom and search keywords.
   */
  public async getAllStudents(query: GetStudentsQueryDto) {
    const { classRoomId, search } = query;

    const students = await prisma.studentProfile.findMany({
      where: {
        ...(classRoomId ? { classRoomId } : {}),
        ...(search
          ? {
              OR: [
                { admissionNumber: { contains: search, mode: 'insensitive' } },
                { user: { firstName: { contains: search, mode: 'insensitive' } } },
                { user: { lastName: { contains: search, mode: 'insensitive' } } },
              ],
            }
          : {}),
      },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true, isActive: true },
        },
        classRoom: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return students;
  }

  /**
   * Retrieve a single student profile by ID including user details, classroom, and guardians.
   */
  public async getStudentById(id: string) {
    const student = await prisma.studentProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true, role: true, isActive: true },
        },
        classRoom: true,
        guardians: {
          include: {
            parent: {
              select: { firstName: true, lastName: true, email: true },
            },
          },
        },
      },
    });

    if (!student) {
      throw new NotFoundException(`Student profile with ID '${id}' not found.`);
    }

    return student;
  }

  /**
   * Update an existing student profile.
   */
  public async updateStudentProfile(id: string, dto: UpdateStudentProfileDto) {
    const { admissionNumber, dateOfBirth, gender, classRoomId, address } = dto;

    const student = await prisma.studentProfile.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException(`Student profile with ID '${id}' not found.`);
    }

    if (admissionNumber && admissionNumber !== student.admissionNumber) {
      const existingAdmission = await prisma.studentProfile.findUnique({
        where: { admissionNumber },
      });
      if (existingAdmission) {
        throw new ConflictException(`Admission number '${admissionNumber}' is already in use.`);
      }
    }

    const updatedStudent = await prisma.studentProfile.update({
      where: { id },
      data: {
        ...(admissionNumber ? { admissionNumber } : {}),
        ...(dateOfBirth !== undefined ? { dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null } : {}),
        ...(gender ? { gender } : {}),
        ...(classRoomId !== undefined ? { classRoomId: classRoomId || null } : {}),
        ...(address !== undefined ? { address } : {}),
      },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true },
        },
        classRoom: true,
      },
    });

    return updatedStudent;
  }
}

export const studentService = new StudentService();