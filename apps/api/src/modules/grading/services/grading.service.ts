import { prisma } from '@sms/database';
import { Term } from '@sms/shared-types';
import { NotFoundException } from '../../../common/filters/http-exception';

export class GradingService {
  /**
   * Generate a comprehensive term report card for a student including subject scores,
   * computed averages, letter grades, teacher remarks, and attendance summary.
   */
  public async generateReportCard(studentId: string, term: Term, session: string) {
    // 1. Verify student profile and fetch user/class details
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
      include: {
        user: {
          select: { firstName: true, lastName: true, email: true },
        },
        classRoom: true,
      },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    // 2. Fetch student subject grades for the specified term and session
    const subjectGrades = await prisma.studentGrade.findMany({
      where: {
        studentId,
        term,
        session,
      },
      include: {
        subject: true,
      },
    });

    // 3. Fetch attendance records for the term attendance summary
    const attendanceRecords = await prisma.studentAttendance.findMany({
      where: {
        studentId,
        term,
        session,
      },
    });

    let present = 0;
    let absent = 0;
    let late = 0;
    let excused = 0;

    for (const record of attendanceRecords) {
      switch (record.status) {
        case 'PRESENT':
          present++;
          break;
        case 'ABSENT':
          absent++;
          break;
        case 'LATE':
          late++;
          break;
        case 'EXCUSED':
          excused++;
          break;
      }
    }

    const totalSchoolDays = attendanceRecords.length;
    const effectivePresent = present + late;
    const attendancePercentage =
      totalSchoolDays > 0 ? Number(((effectivePresent / totalSchoolDays) * 100).toFixed(2)) : 0;

    // 4. Calculate grade metrics, totals, averages, and remarks
    let totalScore = 0;
    const processedGrades = subjectGrades.map((grade) => {
      const caTotal = (grade.ca1 || 0) + (grade.ca2 || 0) + (grade.ca3 || 0);
      const examScore = grade.exam || 0;
      const finalScore = caTotal + examScore;
      totalScore += finalScore;

      let letterGrade = 'F';
      let remark = 'Fail';

      if (finalScore >= 70) {
        letterGrade = 'A';
        remark = 'Excellent';
      } else if (finalScore >= 60) {
        letterGrade = 'B';
        remark = 'Very Good';
      } else if (finalScore >= 50) {
        letterGrade = 'C';
        remark = 'Good';
      } else if (finalScore >= 45) {
        letterGrade = 'D';
        remark = 'Fair';
      } else if (finalScore >= 40) {
        letterGrade = 'E';
        remark = 'Pass';
      }

      return {
        subjectId: grade.subjectId,
        subjectName: grade.subject?.name || 'Unknown Subject',
        caTotal,
        examScore,
        finalScore,
        letterGrade,
        remark,
      };
    });

    const subjectCount = processedGrades.length;
    const averageScore = subjectCount > 0 ? Number((totalScore / subjectCount).toFixed(2)) : 0;

    let overallGrade = 'F';
    if (averageScore >= 70) overallGrade = 'A';
    else if (averageScore >= 60) overallGrade = 'B';
    else if (averageScore >= 50) overallGrade = 'C';
    else if (averageScore >= 45) overallGrade = 'D';
    else if (averageScore >= 40) overallGrade = 'E';

    return {
      student: {
        id: student.id,
        name: `${student.user.firstName} ${student.user.lastName}`,
        admissionNumber: student.admissionNumber,
        classRoom: student.classRoom?.name || 'N/A',
      },
      term,
      session,
      metrics: {
        totalScore,
        subjectCount,
        averageScore,
        overallGrade,
      },
      attendance: {
        totalSchoolDays,
        present,
        absent,
        late,
        excused,
        attendancePercentage,
      },
      grades: processedGrades,
    };
  }

  /**
   * Compute cumulative academic performance and yearly grade summaries across all terms in a session.
   */
  public async getCumulativePerformance(studentId: string, session: string) {
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const allTermGrades = await prisma.studentGrade.findMany({
      where: {
        studentId,
        session,
      },
      include: {
        subject: true,
      },
    });

    const termBreakdown: Record<string, { totalScore: number; count: number; subjects: any[] }> = {
      FIRST: { totalScore: 0, count: 0, subjects: [] },
      SECOND: { totalScore: 0, count: 0, subjects: [] },
      THIRD: { totalScore: 0, count: 0, subjects: [] },
    };

    for (const grade of allTermGrades) {
      const termKey = grade.term;
      if (termBreakdown[termKey]) {
        const finalScore =
          (grade.ca1 || 0) + (grade.ca2 || 0) + (grade.ca3 || 0) + (grade.exam || 0);
        termBreakdown[termKey].totalScore += finalScore;
        termBreakdown[termKey].count++;
        termBreakdown[termKey].subjects.push({
          subjectName: grade.subject?.name || 'Unknown',
          finalScore,
        });
      }
    }

    const cumulativeSummary = Object.keys(termBreakdown).map((term) => {
      const data = termBreakdown[term];
      const average = data.count > 0 ? Number((data.totalScore / data.count).toFixed(2)) : 0;
      return {
        term,
        subjectCount: data.count,
        totalScore: data.totalScore,
        averageScore: average,
      };
    });

    const grandTotalScore = cumulativeSummary.reduce((acc, curr) => acc + curr.totalScore, 0);
    const grandTotalCount = cumulativeSummary.reduce((acc, curr) => acc + curr.subjectCount, 0);
    const cumulativeAverage =
      grandTotalCount > 0 ? Number((grandTotalScore / grandTotalCount).toFixed(2)) : 0;

    return {
      studentId,
      session,
      cumulativeSummary,
      overallPerformance: {
        totalSubjectsTaken: grandTotalCount,
        cumulativeAverage,
      },
    };
  }
}

export const gradingService = new GradingService();