import { prisma } from '@sms/database';
import { CurriculumType, Term } from '@sms/shared-types';
import { BadRequestException, NotFoundException } from '../../../common/filters/http-exception';
import { RecordGradeDto, GetGradesQueryDto } from '../dto/grade.dto';

export class GradeService {
  /**
   * Record or update a student's academic grade with strict curriculum validation.
   */
  public async recordGrade(dto: RecordGradeDto) {
    const {
      studentId,
      subject,
      term,
      session,
      caScore,
      examScore,
      britishGrade,
      curriculumType,
    } = dto;

    // Verify student profile existence
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    // Validate curriculum-specific score inputs
    if (curriculumType === CurriculumType.NIGERIAN) {
      if (caScore === undefined || examScore === undefined) {
        throw new BadRequestException('Nigerian curriculum requires both caScore (0-40) and examScore (0-60).');
      }
      if (caScore < 0 || caScore > 40 || examScore < 0 || examScore > 60) {
        throw new BadRequestException('Invalid score range: CA must be between 0 and 40, and Exam must be between 0 and 60.');
      }
    } else if (curriculumType === CurriculumType.BRITISH) {
      if (!britishGrade) {
        throw new BadRequestException('British curriculum requires a britishGrade value (e.g., A*, Checkpoint Level).');
      }
    }

    // Upsert grade record to prevent duplicate entries for the same student, subject, term, and session
    const gradeRecord = await prisma.gradeRecord.upsert({
      where: {
        studentId_subject_term_session: {
          studentId,
          subject,
          term,
          session,
        },
      },
      update: {
        caScore: caScore ?? null,
        examScore: examScore ?? null,
        britishGrade: britishGrade ?? null,
        curriculumType,
      },
      create: {
        studentId,
        subject,
        term,
        session,
        caScore: caScore ?? null,
        examScore: examScore ?? null,
        britishGrade: britishGrade ?? null,
        curriculumType,
      },
    });

    return gradeRecord;
  }

  /**
   * Retrieve all grade records for a specific student with optional term, session, and curriculum filters.
   */
  public async getStudentGrades(studentId: string, query: GetGradesQueryDto) {
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const grades = await prisma.gradeRecord.findMany({
      where: {
        studentId,
        ...(query.term ? { term: query.term } : {}),
        ...(query.session ? { session: query.session } : {}),
        ...(query.curriculum ? { curriculumType: query.curriculum } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });

    return grades;
  }

  /**
   * Calculate aggregate term performance (total score and overall average) for Nigerian curriculum students.
   */
  public async calculateTermSummary(studentId: string, term: Term, session: string) {
    const grades = await prisma.gradeRecord.findMany({
      where: {
        studentId,
        term,
        session,
        curriculumType: CurriculumType.NIGERIAN,
      },
    });

    if (grades.length === 0) {
      return { totalScore: 0, averageScore: 0, totalSubjects: 0 };
    }

    let totalScore = 0;
    let validSubjectsCount = 0;

    for (const grade of grades) {
      if (grade.caScore !== null && grade.examScore !== null) {
        totalScore += Number(grade.caScore) + Number(grade.examScore);
        validSubjectsCount++;
      }
    }

    const averageScore =
      validSubjectsCount > 0 ? Number((totalScore / validSubjectsCount).toFixed(2)) : 0;

    return {
      totalScore,
      averageScore,
      totalSubjects: validSubjectsCount,
    };
  }
}

export const gradeService = new GradeService();