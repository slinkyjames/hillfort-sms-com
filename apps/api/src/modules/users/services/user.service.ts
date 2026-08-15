import { prisma } from '@sms/database';
import { Role } from '@sms/shared-types';
import { 
  BadRequestException, 
  NotFoundException, 
  ConflictException 
} from '../../../common/filters/http-exception';
import { GetUsersQueryDto, UpdateUserDto, ToggleUserStatusDto } from '../dto/user.dto';

export class UserService {
  /**
   * Retrieve all system users with optional filtering by role and search keywords.
   */
  public async getAllUsers(query: GetUsersQueryDto) {
    const { role, search } = query;

    const users = await prisma.user.findMany({
      where: {
        ...(role ? { role } : {}),
        ...(search
          ? {
              OR: [
                { email: { contains: search, mode: 'insensitive' } },
                { firstName: { contains: search, mode: 'insensitive' } },
                { lastName: { contains: search, mode: 'insensitive' } },
              ],
            }
          : {}),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return users;
  }

  /**
   * Retrieve a single user by unique ID including associated role profiles.
   */
  public async getUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        studentProfile: true,
        teacherProfile: true,
        parentProfile: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found.`);
    }

    return user;
  }

  /**
   * Update user account details (name, email, role).
   */
  public async updateUser(id: string, dto: UpdateUserDto) {
    const { firstName, lastName, email, role } = dto;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found.`);
    }

    if (email && email !== user.email) {
      const existingEmail = await prisma.user.findUnique({
        where: { email },
      });
      if (existingEmail) {
        throw new ConflictException(`User with email '${email}' already exists.`);
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...(firstName ? { firstName } : {}),
        ...(lastName ? { lastName } : {}),
        ...(email ? { email } : {}),
        ...(role ? { role } : {}),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });

    return updatedUser;
  }

  /**
   * Toggle or set the active status of a user account.
   */
  public async toggleUserStatus(id: string, dto: ToggleUserStatusDto) {
    const { isActive } = dto;

    if (isActive === undefined || typeof isActive !== 'boolean') {
      throw new BadRequestException('A boolean "isActive" status is required.');
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found.`);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
      },
    });

    return updatedUser;
  }
}

export const userService = new UserService();