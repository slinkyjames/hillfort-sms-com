import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'REGISTRAR' | 'BURSAR' | 'TEACHER';
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setCredentials: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      setCredentials: (token, user) => set({ token, user, isAuthenticated: true }),
      logout: () => set({ token: null, user: null, isAuthenticated: false }),
    }),
    {
      name: 'sms-admin-auth-storage',
    }
  )
);