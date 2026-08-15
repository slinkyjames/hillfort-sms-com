import React from 'react';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';

export const Dashboard: React.FC = () => {
  // Mock data - in a real app, this would come from a data fetching hook (e.g., React Query or SWR)
  const recentActivities = [
    { id: '1', user: 'Sarah Jenkins', action: 'approved a new student admission.', timestamp: '10 mins ago' },
    { id: '2', user: 'Michael Okoye', action: 'updated the Grade 10 hybrid curriculum.', timestamp: '1 hour ago' },
    { id: '3', user: 'System', action: 'processed term fee payments.', timestamp: '3 hours ago' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Welcome back, here is what's happening at Hillfort today.</p>
        </div>
        <button className="px-4 py-2 bg-brand-navy text-white text-sm font-medium rounded-lg shadow-sm hover:bg-brand-navy/90 transition-colors">
          Download Report
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Students" 
          value="1,248" 
          trend={{ value: 2.4, isPositive: true }} 
        />
        <StatCard 
          title="Active Staff" 
          value="142" 
        />
        <StatCard 
          title="Pending Admissions" 
          value="34" 
          trend={{ value: 12, isPositive: false }} 
        />
        <StatCard 
          title="Revenue (Term 1)" 
          value="₦45.2M" 
          trend={{ value: 8.1, isPositive: true }} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Main Chart Area Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-center min-h-[300px]">
          <p className="text-slate-400 font-medium">Enrollment Analytics Chart Integration Pending...</p>
        </div>

        {/* Recent Activity Feed */}
        <div className="lg:col-span-1">
          <RecentActivity activities={recentActivities} />
        </div>
      </div>
    </div>
  );
};