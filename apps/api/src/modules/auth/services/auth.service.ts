import { prisma } from '@sms/database';
import { hashPassword, verifyPassword } from '../../../common/utils/password.util';
import { generateToken } from '../../../common/utils/jwt.util';
import { 
  BadRequestException, 
  ConflictException, 
  UnauthorizedException, 
  NotFoundException 
} from '../../../common/filters/http-exception';
import { RegisterDto, LoginDto } from '../dto/auth.dto';

export class AuthService {
  /**
   * Register a new system user (Admin, Teacher, Bursar, Parent, etc.).
   */
  public async register(dto: RegisterDto) {
    const { email, password, firstName, lastName, role } = dto;

    if (!email || !password || !firstName || !lastName || !role) {
      throw new BadRequestException('Missing required fields for user registration.');
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException(`User with email '${email}' already exists.`);
    }

    // Hash password securely
    const hashedPassword = await hashPassword(password);

    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        firstName,
        lastName,
        role,
        isActive: true,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    // Generate JWT token for immediate authentication
    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    return {
      user: newUser,
      token,
    };
  }

  /**
   * Authenticate an existing user and return a JWT bearer token.
   */
  public async login(dto: LoginDto) {
    const { email, password } = dto;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required for login.');
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // Verify password against stored hash
    const isPasswordValid = await verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const userResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isActive: user.isActive,
    };

    return {
      user: userResponse,
      token,
    };
  }

  /**
   * Retrieve the profile of a user by their unique ID.
   */
  public async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
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
    });

    if (!user) {
      throw new NotFoundException('User profile not found.');
    }

    return user;
  }
}

export const authService = new AuthService();