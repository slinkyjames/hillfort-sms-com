import React from 'react';

export const Sidebar: React.FC = () => {
  const navItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Students', path: '/students' },
    { label: 'Staff', path: '/staff' },
    { label: 'Academics', path: '/academics' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-brand-navy text-white h-screen flex flex-col shadow-xl z-20">
      <div className="h-16 flex items-center px-6 border-b border-slate-700/50">
        <h1 className="text-brand-gold font-bold text-xl tracking-wide">
          Hillfort Admin
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className="block px-4 py-2.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-maroon transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>
      
      <div className="p-4 border-t border-slate-700/50">
        <button className="w-full px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 rounded-md hover:bg-slate-700 transition-colors">
          Log Out
        </button>
      </div>
    </aside>
  );
};