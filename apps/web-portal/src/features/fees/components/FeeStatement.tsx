import React from 'react';

interface FeeItem {
  id: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

interface FeeStatementProps {
  totalDue: number;
  currency?: string;
  items: FeeItem[];
  onPayNow: () => void;
}

export const FeeStatement: React.FC<FeeStatementProps> = ({
  totalDue,
  currency = '₦',
  items,
  onPayNow,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-brand-navy">Fee & Billing Statement</h2>
          <p className="text-sm text-slate-500">Track and settle term invoices securely.</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400 font-semibold uppercase">Total Outstanding</p>
          <p className="text-2xl font-bold text-brand-maroon">{currency}{totalDue.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100">
            <div>
              <p className="text-sm font-semibold text-slate-800">{item.description}</p>
              <p className="text-xs text-slate-500">Invoice ID: {item.id}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-bold text-slate-700">{currency}{item.amount.toLocaleString()}</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                item.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                item.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                'bg-brand-maroon/10 text-brand-maroon'
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {totalDue > 0 && (
        <div className="pt-4 flex justify-end">
          <button
            onClick={onPayNow}
            className="px-6 py-2.5 bg-brand-navy text-white text-sm font-bold rounded-lg shadow-sm hover:bg-brand-navy/90 transition-colors"
          >
            Pay Outstanding Balance
          </button>
        </div>
      )}
    </div>
  );
};