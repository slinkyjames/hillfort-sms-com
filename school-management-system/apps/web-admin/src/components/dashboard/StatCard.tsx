import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-bold text-brand-navy">{value}</p>
        </div>
        {icon && (
          <div className="p-3 bg-slate-50 rounded-lg text-brand-gold">
            {icon}
          </div>
        )}
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span
            className={`font-medium ${
              trend.isPositive ? 'text-emerald-600' : 'text-brand-maroon'
            }`}
          >
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
          <span className="ml-2 text-slate-500">vs last month</span>
        </div>
      )}
    </div>
  );
};