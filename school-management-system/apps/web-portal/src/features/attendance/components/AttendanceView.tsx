import React from 'react';

interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent' | 'Late';
  remarks?: string;
}

interface AttendanceViewProps {
  presentCount: number;
  absentCount: number;
  lateCount: number;
  records: AttendanceRecord[];
}

export const AttendanceView: React.FC<AttendanceViewProps> = ({
  presentCount,
  absentCount,
  lateCount,
  records,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-brand-navy">Attendance Record</h2>
        <p className="text-sm text-slate-500">Term attendance breakdown and daily log.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase">Present</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">{presentCount}</p>
        </div>
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-100 text-center">
          <p className="text-xs font-semibold text-amber-600 uppercase">Late</p>
          <p className="text-2xl font-bold text-amber-700 mt-1">{lateCount}</p>
        </div>
        <div className="p-4 rounded-lg bg-brand-maroon/5 border border-brand-maroon/10 text-center">
          <p className="text-xs font-semibold text-brand-maroon uppercase">Absent</p>
          <p className="text-2xl font-bold text-brand-maroon mt-1">{absentCount}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {records.map((record, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-800">{record.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    record.status === 'Present' ? 'bg-emerald-100 text-emerald-700' :
                    record.status === 'Late' ? 'bg-amber-100 text-amber-700' :
                    'bg-brand-maroon/10 text-brand-maroon'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">{record.remarks || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};