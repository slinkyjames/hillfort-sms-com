import { prisma } from '@sms/database';
import { Term } from '@sms/shared-types';
import { BadRequestException, NotFoundException } from '../../../common/filters/http-exception';
import { MarkAttendanceDto, GetAttendanceQueryDto, AttendanceStatus } from '../dto/attendance.dto';

export class AttendanceService {
  /**
   * Mark or update a student's daily attendance status with date normalization.
   */
  public async markAttendance(dto: MarkAttendanceDto) {
    const { studentId, date, status, term, session, remarks } = dto;

    // Verify student profile existence
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    // Normalize date to start of day to ensure unique daily entries per student
    const attendanceDate = new Date(date);
    if (isNaN(attendanceDate.getTime())) {
      throw new BadRequestException('Invalid date format provided.');
    }
    attendanceDate.setHours(0, 0, 0, 0);

    // Upsert attendance record to allow updates for the same day
    const attendanceRecord = await prisma.studentAttendance.upsert({
      where: {
        studentId_date: {
          studentId,
          date: attendanceDate,
        },
      },
      update: {
        status,
        term,
        session,
        remarks: remarks || null,
      },
      create: {
        studentId,
        date: attendanceDate,
        status,
        term,
        session,
        remarks: remarks || null,
      },
    });

    return attendanceRecord;
  }

  /**
   * Retrieve attendance history for a specific student with optional term, session, status, and date range filters.
   */
  public async getStudentAttendance(studentId: string, query: GetAttendanceQueryDto) {
    const student = await prisma.studentProfile.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID '${studentId}' not found.`);
    }

    const attendanceRecords = await prisma.studentAttendance.findMany({
      where: {
        studentId,
        ...(query.term ? { term: query.term } : {}),
        ...(query.session ? { session: query.session } : {}),
        ...(query.status ? { status: query.status } : {}),
        ...(query.startDate || query.endDate
          ? {
              date: {
                ...(query.startDate ? { gte: new Date(query.startDate) } : {}),
                ...(query.endDate ? { lte: new Date(query.endDate) } : {}),
              },
            }
          : {}),
      },
      orderBy: { date: 'desc' },
    });

    return attendanceRecords;
  }

  /**
   * Calculate aggregate term attendance statistics (total school days, present, absent, late, and attendance percentage).
   */
  public async calculateAttendanceSummary(studentId: string, term: Term, session: string) {
    const records = await prisma.studentAttendance.findMany({
      where: {
        studentId,
        term,
        session,
      },
    });

    if (records.length === 0) {
      return {
        totalDays: 0,
        present: 0,
        absent: 0,
        late: 0,
        excused: 0,
        attendancePercentage: 0,
      };
    }

    let present = 0;
    let absent = 0;
    let late = 0;
    let excused = 0;

    for (const record of records) {
      switch (record.status) {
        case AttendanceStatus.PRESENT:
          present++;
          break;
        case AttendanceStatus.ABSENT:
          absent++;
          break;
        case AttendanceStatus.LATE:
          late++;
          break;
        case AttendanceStatus.EXCUSED:
          excused++;
          break;
      }
    }

    const totalDays = records.length;
    // Count 'PRESENT' and 'LATE' towards effective attendance, excluding excused absences from the penalty denominator if needed, or simple ratio:
    const effectivePresent = present + late;
    const attendancePercentage =
      totalDays > 0 ? Number(((effectivePresent / totalDays) * 100).toFixed(2)) : 0;

    return {
      totalDays,
      present,
      absent,
      late,
      excused,
      attendancePercentage,
    };
  }
}

export const attendanceService = new AttendanceService();