import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[500px] h-[500px] bg-brand-gold rounded-full -top-32 -left-32 blur-3xl"></div>
          <div className="absolute w-[500px] h-[500px] bg-brand-maroon rounded-full bottom-0 right-0 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center max-w-3xl space-y-6">
          <span className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/30 rounded-full text-xs font-semibold uppercase tracking-widest">
            Excellence in Education
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Shaping Tomorrow's Leaders Today
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Welcome to Hillfort International School. We blend the best of the Nigerian educational framework with globally recognized British curriculum standards.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-brand-gold text-brand-navy font-bold rounded-xl shadow-lg hover:bg-[#c28f15] transition-all"
            >
              Apply for Admission
            </Link>
            <Link
              to="/academics"
              className="px-8 py-3.5 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all"
            >
              Explore Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-brand-gold/10 text-brand-navy font-bold rounded-xl flex items-center justify-center text-xl">
              🇳🇬🇬🇧
            </div>
            <h3 className="text-xl font-bold text-brand-navy">Hybrid Curriculum</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Seamlessly integrating WAEC/NECO requirements with IGCSE and Cambridge standards for global competitiveness.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-brand-maroon/10 text-brand-maroon font-bold rounded-xl flex items-center justify-center text-xl">
              💻
            </div>
            <h3 className="text-xl font-bold text-brand-navy">Modern ICT & Labs</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              State-of-the-art computer labs, robotics suites, and science laboratories designed for experiential learning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-brand-navy/10 text-brand-navy font-bold rounded-xl flex items-center justify-center text-xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-brand-navy">Moral Integrity</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A balanced focus on character building, leadership development, discipline, and ethical responsibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};