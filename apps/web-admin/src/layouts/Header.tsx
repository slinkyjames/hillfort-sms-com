import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white shadow-sm border-b border-slate-200 flex items-center justify-between px-8 z-10 shrink-0">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-slate-800">
          Admin Portal
        </h2>
      </div>
      
      <div className="flex items-center space-x-6">
        {/* Quick Actions / Notifications */}
        <button className="text-slate-400 hover:text-brand-navy transition-colors relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-brand-maroon ring-2 ring-white" />
        </button>

        <div className="h-8 w-px bg-slate-200"></div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-brand-navy">Administrator</span>
            <span className="text-xs text-slate-500">System Ops</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold shadow-sm border-2 border-transparent hover:border-brand-navy transition-all">
            SA
          </div>
        </div>
      </div>
    </header>
  );
};