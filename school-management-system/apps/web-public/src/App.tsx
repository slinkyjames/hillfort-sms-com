import React from 'react';

export const Admissions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy">Admissions Process</h1>
        <p className="text-slate-600 text-sm">
          Join the Hillfort family. Follow our straightforward steps to secure admission for your child.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-4">
          <div className="w-10 h-10 bg-brand-gold text-brand-navy font-bold rounded-lg flex items-center justify-center shrink-0">
            1
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-brand-navy text-lg">Submit Online Application</h3>
            <p className="text-sm text-slate-600">Fill out our digital admission form with student details and previous academic records.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-4">
          <div className="w-10 h-10 bg-brand-gold text-brand-navy font-bold rounded-lg flex items-center justify-center shrink-0">
            2
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-brand-navy text-lg">Entrance Assessment</h3>
            <p className="text-sm text-slate-600">Candidates take an aptitude test in Mathematics, English Language, and General Reasoning.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-4">
          <div className="w-10 h-10 bg-brand-gold text-brand-navy font-bold rounded-lg flex items-center justify-center shrink-0">
            3
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-brand-navy text-lg">Interview & Enrollment</h3>
            <p className="text-sm text-slate-600">An interview with the admissions committee followed by official fee settlement and documentation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};