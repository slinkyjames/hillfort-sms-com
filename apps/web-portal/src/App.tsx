import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReportCard } from './features/grades/components/ReportCard';
import { FeeStatement } from './features/fees/components/FeeStatement';
import { AttendanceView } from './features/attendance/components/AttendanceView';

// Portal Auth Store
interface PortalUser {
  id: string;
  name: string;
  email: string;
  role: 'PARENT' | 'STUDENT';
  studentName?: string;
}

interface PortalAuthState {
  token: string | null;
  user: PortalUser | null;
  isAuthenticated: boolean;
  setCredentials: (token: string, user: PortalUser) => void;
  logout: () => void;
}

const usePortalAuthStore = create<PortalAuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      setCredentials: (token, user) => set({ token, user, isAuthenticated: true }),
      logout: () => set({ token: null, user: null, isAuthenticated: false }),
    }),
    { name: 'sms-portal-auth-storage' }
  )
);

// Portal Layout Shell
const PortalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const logout = usePortalAuthStore((state) => state.logout);
  const user = usePortalAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-brand-navy text-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center font-bold text-brand-navy">
              H
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-wide">Hillfort Portal</h1>
              <p className="text-xs text-slate-300">Parent & Student Access</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-brand-gold transition-colors">Overview</Link>
            <Link to="/grades" className="hover:text-brand-gold transition-colors">Grades & Reports</Link>
            <Link to="/fees" className="hover:text-brand-gold transition-colors">Fee Payments</Link>
            <Link to="/attendance" className="hover:text-brand-gold transition-colors">Attendance</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-xs bg-slate-800 px-3 py-1.5 rounded-full text-slate-300">
              {user?.name || 'Portal User'}
            </span>
            <button
              onClick={logout}
              className="text-xs font-semibold bg-brand-maroon px-3 py-1.5 rounded hover:bg-[#660000] transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        {children}
      </main>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = usePortalAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <PortalLayout>{children}</PortalLayout>;
};

// Portal Login Page
const PortalLogin: React.FC = () => {
  const setCredentials = usePortalAuthStore((state) => state.setCredentials);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCredentials('mock-portal-jwt-token', {
      id: 'USR-001',
      name: 'Dr. & Mrs. Bello',
      email: 'bello@family.com',
      role: 'PARENT',
      studentName: 'Aisha Bello',
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-navy rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-gold font-bold text-2xl shadow-md">
            H
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Parent & Student Portal</h2>
          <p className="text-sm text-slate-500 mt-1">Sign in to check academic reports and fee bills.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email or Portal ID</label>
            <input 
              type="text" 
              defaultValue="bello@family.com" 
              className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              defaultValue="password123" 
              className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-brand-navy text-white text-sm font-bold rounded-lg shadow hover:bg-brand-navy/90 transition-colors"
          >
            Access Portal
          </button>
        </form>
      </div>
    </div>
  );
};

// Portal Overview Dashboard View
const PortalDashboard: React.FC = () => {
  const user = usePortalAuthStore((state) => state.user);

  return (
    <div className="space-y-6">
      <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="space-y-2">
          <span className="px-3 py-1 bg-brand-gold text-brand-navy text-xs font-bold rounded-full">
            Active Student: {user?.studentName || 'Aisha Bello'}
          </span>
          <h2 className="text-3xl font-bold">Welcome to Hillfort Portal</h2>
          <p className="text-slate-300 text-sm">Year 10 Science • Hybrid Curriculum Track</p>
        </div>
        <div className="mt-6 md:mt-0 flex space-x-3">
          <Link 
            to="/grades" 
            className="px-4 py-2 bg-brand-gold text-brand-navy font-bold text-sm rounded-lg shadow hover:bg-[#c28f15] transition-colors"
          >
            View Report Card
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-xs text-slate-400 font-semibold uppercase">Term Standing</p>
          <p className="text-2xl font-bold text-brand-navy">First Class</p>
          <p className="text-xs text-emerald-600 font-medium">92.4% Average Grade</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-xs text-slate-400 font-semibold uppercase">Fee Status</p>
          <p className="text-2xl font-bold text-brand-maroon">₦0.00 Balance</p>
          <p className="text-xs text-emerald-600 font-medium">Fully Paid for Term 1</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-xs text-slate-400 font-semibold uppercase">Attendance Rate</p>
          <p className="text-2xl font-bold text-brand-navy">98.5%</p>
          <p className="text-xs text-slate-500 font-medium">65 Days Present</p>
        </div>
      </div>
    </div>
  );
};

// Root App Component
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PortalLogin />} />
        
        <Route path="/" element={<ProtectedRoute><PortalDashboard /></ProtectedRoute>} />
        <Route path="/grades" element={
          <ProtectedRoute>
            <ReportCard 
              term="First Term"
              session="2025/2026"
              studentName="Aisha Bello"
              className="Year 10 Science"
              grades={[
                { subject: 'Mathematics', caScore: 35, examScore: 54, grade: 'A', remark: 'Excellent performance' },
                { subject: 'English Language', caScore: 32, examScore: 50, grade: 'B+', remark: 'Very good grasp' },
                { subject: 'Integrated Science', caScore: 38, examScore: 58, grade: 'A+', remark: 'Exceptional work' },
                { subject: 'Civic Education', caScore: 30, examScore: 48, grade: 'B', remark: 'Good participation' },
              ]}
            />
          </ProtectedRoute>
        } />
        
        <Route path="/fees" element={
          <ProtectedRoute>
            <FeeStatement 
              totalDue={0}
              items={[
                { id: 'INV-2025-01', description: 'Term 1 Tuition & Development', amount: 350000, status: 'Paid' },
                { id: 'INV-2025-02', description: 'Laboratory & ICT Fee', amount: 75000, status: 'Paid' },
              ]}
              onPayNow={() => alert('All term invoices are fully settled.')}
            />
          </ProtectedRoute>
        } />

        <Route path="/attendance" element={
          <ProtectedRoute>
            <AttendanceView 
              presentCount={65}
              absentCount={1}
              lateCount={0}
              records={[
                { date: '2026-04-12', status: 'Present' },
                { date: '2026-04-13', status: 'Present' },
                { date: '2026-04-14', status: 'Present' },
              ]}
            />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;