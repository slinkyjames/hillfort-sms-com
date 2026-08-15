import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { AdminLayout } from './layouts/AdminLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { Dashboard } from './pages/Dashboard';
import { StudentList } from './pages/students/StudentList';
// Updated import path to match the actual file location
import { Login } from './pages/students/Login';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <AdminLayout>{children}</AdminLayout>;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Authentication Routes */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        {/* Protected Administrative Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff"
          element={
            <ProtectedRoute>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-brand-navy">Staff Directory</h1>
                <p className="text-slate-500">Staff management and payroll modules are loading...</p>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/academics"
          element={
            <ProtectedRoute>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-brand-navy">Hybrid Curriculum</h1>
                <p className="text-slate-500">Nigerian and British curriculum mapping interface.</p>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-brand-navy">System Settings</h1>
                <p className="text-slate-500">Configure global academic session parameters and roles.</p>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Global Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;