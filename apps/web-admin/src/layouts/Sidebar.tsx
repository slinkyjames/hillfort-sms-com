import React from 'react';

export const Sidebar: React.FC = () => {
  const menuGroups = [
    {
      title: 'Overview',
      items: [{ label: 'Dashboard', path: '/' }]
    },
    {
      title: 'Management',
      items: [
        { label: 'Students & Admissions', path: '/students' },
        { label: 'Staff Directory', path: '/staff' },
        { label: 'Hybrid Curriculum', path: '/academics' },
      ]
    },
    {
      title: 'Finance & Ops',
      items: [
        { label: 'Fee Collection', path: '/finance' },
        { label: 'System Settings', path: '/settings' },
      ]
    }
  ];

  return (
    <aside className="w-64 bg-brand-navy text-white h-screen flex flex-col shadow-xl z-20">
      <div className="h-16 flex items-center justify-center px-6 border-b border-slate-700/50 bg-brand-navy shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center">
            <span className="text-brand-navy font-bold text-lg">H</span>
          </div>
          <h1 className="text-brand-gold font-bold text-xl tracking-wide">
            Hillfort SMS
          </h1>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              {group.title}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="block px-4 py-2.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-maroon transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
      
      <div className="p-4 border-t border-slate-700/50 shrink-0">
        <button className="w-full px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 rounded-md hover:bg-brand-maroon hover:text-white transition-colors">
          Secure Logout
        </button>
      </div>
    </aside>
  );
};