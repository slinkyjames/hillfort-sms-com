import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white shadow-sm border-b border-slate-200 flex items-center justify-between px-8 z-10">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-slate-800">
          Overview
        </h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium text-slate-700">System Administrator</span>
          <span className="text-xs text-slate-500">admin@hillfort.edu</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold shadow-sm">
          SA
        </div>
      </div>
    </header>
  );
};