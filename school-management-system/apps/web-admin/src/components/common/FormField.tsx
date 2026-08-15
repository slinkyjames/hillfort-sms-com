import React, { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1.5 w-full">
      <label 
        htmlFor={fieldId} 
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      
      <input
        id={fieldId}
        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
          error 
            ? 'border-brand-maroon focus:border-brand-maroon' 
            : 'border-slate-300 focus:border-brand-navy'
        } ${className}`}
        {...props}
      />

      {error ? (
        <p className="text-xs text-brand-maroon mt-1 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};