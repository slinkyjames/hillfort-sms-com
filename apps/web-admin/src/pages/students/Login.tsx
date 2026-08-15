import React, { useState } from 'react';
import { FormField } from '../components/common/FormField';

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="w-full">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-2xl font-bold text-brand-navy">Staff Portal Login</h2>
        <p className="text-sm text-slate-500 mt-2">Enter your credentials to access the system.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField 
          label="Email Address" 
          type="email" 
          placeholder="admin@hillfort.edu" 
          required 
        />
        
        <div className="space-y-1">
          <FormField 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            required 
          />
          <div className="flex justify-end">
            <a href="#" className="text-xs font-medium text-brand-navy hover:text-brand-gold transition-colors">
              Forgot password?
            </a>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-brand-maroon hover:bg-[#660000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-maroon transition-colors disabled:opacity-70"
        >
          {isLoading ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-400">
          Secure access restricted to authorized Hillfort personnel only.
        </p>
      </div>
    </div>
  );
};