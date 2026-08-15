import React from 'react';

interface GradeItem {
  subject: string;
  caScore: number; // Continuous Assessment (e.g., out of 40)
  examScore: number; // Examination (e.g., out of 60)
  grade: string;
  remark: string;
}

interface ReportCardProps {
  term: string;
  session: string;
  studentName: string;
  className: string;
  grades: GradeItem[];
}

export const ReportCard: React.FC<ReportCardProps> = ({
  term,
  session,
  studentName,
  className,
  grades,
}) => {
  const totalAverage = grades.length
    ? (grades.reduce((acc, curr) => acc + (curr.caScore + curr.examScore), 0) / grades.length).toFixed(1)
    : '0.0';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-brand-navy">Term Report Card</h2>
          <p className="text-sm text-slate-500">{studentName} • {className}</p>
        </div>
        <div className="mt-2 sm:mt-0 text-right">
          <span className="px-3 py-1 bg-brand-gold/10 text-brand-navy font-semibold text-xs rounded-full">
            {term} | {session} Session
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4 text-center">CA (40%)</th>
              <th className="py-3 px-4 text-center">Exam (60%)</th>
              <th className="py-3 px-4 text-center">Total (100%)</th>
              <th className="py-3 px-4 text-center">Grade</th>
              <th className="py-3 px-4">Remark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {grades.map((item, idx) => {
              const total = item.caScore + item.examScore;
              return (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-800">{item.subject}</td>
                  <td className="py-3 px-4 text-center text-slate-600">{item.caScore}</td>
                  <td className="py-3 px-4 text-center text-slate-600">{item.examScore}</td>
                  <td className="py-3 px-4 text-center font-bold text-brand-navy">{total}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-800 font-bold rounded">
                      {item.grade}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{item.remark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-200 text-sm">
        <span className="text-slate-500 font-medium">Overall Term Average:</span>
        <span className="text-lg font-bold text-brand-navy">{totalAverage}%</span>
      </div>
    </div>
  );
};