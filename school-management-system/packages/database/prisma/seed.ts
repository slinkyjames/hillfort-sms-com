import { PrismaClient, Role, CurriculumType } from '@prisma/client';
import * as crypto from 'crypto';

const prisma = new PrismaClient();

// Simple hash helper for seeding (in production, use bcrypt)
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

async function main() {
  console.log('🌱 Seeding database for Hillfort International School...');

  // Clean up existing data to avoid unique constraint conflicts on re-seeding
  await prisma.gradeRecord.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.feeRecord.deleteMany();
  await prisma.studentProfile.deleteMany();
  await prisma.staffProfile.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create Super Admin
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@hillfortintlschool.ng',
      passwordHash: hashPassword('AdminPassword123!'),
      firstName: 'System',
      lastName: 'Administrator',
      role: Role.SUPER_ADMIN,
      staffProfile: {
        create: {
          staffId: 'HIF/ADM/001',
          department: 'Administration',
        },
      },
    },
  });
  console.log(`✅ Created Admin: ${adminUser.email}`);

  // 2. Create Principal
  const principalUser = await prisma.user.create({
    data: {
      email: 'principal@hillfortintlschool.ng',
      passwordHash: hashPassword('PrincipalPassword123!'),
      firstName: 'Adebayo',
      lastName: 'Johnson',
      role: Role.PRINCIPAL,
      staffProfile: {
        create: {
          staffId: 'HIF/PRN/001',
          department: 'Management',
        },
      },
    },
  });
  console.log(`✅ Created Principal: ${principalUser.email}`);

  // 3. Create Sample Teacher (Hybrid Curriculum: Nigerian & British)
  const teacherUser = await prisma.user.create({
    data: {
      email: 'teacher.smith@hillfortintlschool.ng',
      passwordHash: hashPassword('TeacherPassword123!'),
      firstName: 'Elizabeth',
      lastName: 'Smith',
      role: Role.TEACHER,
      staffProfile: {
        create: {
          staffId: 'HIF/TCH/101',
          department: 'Academics (British/Nigerian)',
        },
      },
    },
  });
  console.log(`✅ Created Teacher: ${teacherUser.email}`);

  // 4. Create Sample Student (Hybrid Curriculum Profile)
  const studentUser = await prisma.user.create({
    data: {
      email: 'student.chinedu@hillfortintlschool.ng',
      passwordHash: hashPassword('StudentPassword123!'),
      firstName: 'Chinedu',
      lastName: 'Okafor',
      role: Role.STUDENT,
      profile: {
        create: {
          admissionNumber: 'HIF/2026/001',
          curriculum: CurriculumType.HYBRID,
          currentClass: 'JSS 2 / Year 8',
          guardianName: 'Mr. & Mrs. Okafor',
          guardianPhone: '+2348030001122',
        },
      },
    },
  });
  console.log(`✅ Created Student: ${studentUser.email}`);

  console.log('🏁 Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });