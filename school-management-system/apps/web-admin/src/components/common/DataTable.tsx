import React from 'react';

interface ColumnDef<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (item: T) => void;
}

export function DataTable<T extends Record<string, any>>({ 
  data, 
  columns,
  onRowClick 
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {columns.map((col, index) => (
              <th 
                key={index} 
                className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              onClick={() => onRowClick && onRowClick(row)}
              className={`hover:bg-slate-50 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-4 px-6 text-sm text-slate-700">
                  {col.cell ? col.cell(row) : row[col.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="py-8 text-center text-slate-500 text-sm">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}