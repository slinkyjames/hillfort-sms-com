import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children?: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      {/* Left side - Branding (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-navy relative flex-col justify-center items-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-96 h-96 bg-brand-gold rounded-full -top-10 -left-10 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-brand-maroon rounded-full bottom-10 right-10 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-12">
          <div className="w-24 h-24 bg-brand-gold rounded-xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <span className="text-brand-navy font-bold text-5xl">H</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Hillfort International</h1>
          <p className="text-lg text-slate-300 max-w-md mx-auto">
            Enterprise School Management System for Academic Excellence and Administration.
          </p>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-24">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};