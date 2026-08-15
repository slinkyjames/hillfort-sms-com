import React from 'react';

export const Academics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy">Academic Programs</h1>
        <p className="text-slate-600 text-sm">
          Discover our comprehensive educational pathway tailored for holistic student development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <span className="px-3 py-1 bg-brand-navy/10 text-brand-navy text-xs font-bold rounded-full">
            Junior Secondary (Years 7 - 9)
          </span>
          <h2 className="text-2xl font-bold text-brand-navy">Foundation & Exploration</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Students build a strong academic foundation in core sciences, humanities, and ICT. The curriculum introduces foundational concepts preparing them for specialized secondary tracks.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Comprehensive Basic Science & Mathematics</li>
            <li>✓ Introduction to Computer Programming</li>
            <li>✓ French and Nigerian Languages</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <span className="px-3 py-1 bg-brand-maroon/10 text-brand-maroon text-xs font-bold rounded-full">
            Senior Secondary (Years 10 - 12)
          </span>
          <h2 className="text-2xl font-bold text-brand-navy">Hybrid Certification Track</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Targeted preparation for both West African examinations (WAEC/NECO) and international assessments (IGCSE, SAT), opening doors to top universities globally.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Advanced Sciences (Physics, Chemistry, Biology)</li>
            <li>✓ Economics, Accounting & Business Studies</li>
            <li>✓ Dedicated University Counseling & Mentorship</li>
          </ul>
        </div>
      </div>
    </div>
  );
};