import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; name: string; role: string } | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('novel_admin_auth') === 'true';
  });

  const [user, setUser] = useState<{ email: string; name: string; role: string } | null>(() => {
    const stored = sessionStorage.getItem('novel_admin_user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (isAuthenticated && !user) {
      setUser({
        email: 'admin@aadityashilaimachine.com',
        name: 'Aaditya Operations Manager',
        role: 'Administrator'
      });
    }
  }, [isAuthenticated, user]);

  const login = (email: string, pass: string): boolean => {
    // Admin credentials
    if ((email.trim().toLowerCase() === 'admin@aadityashilaimachine.com' || email.trim().toLowerCase() === 'admin') && pass === 'admin123') {
      setIsAuthenticated(true);
      const adminUser = {
        email: 'admin@aadityashilaimachine.com',
        name: 'Aaditya Operations Manager',
        role: 'Administrator'
      };
      setUser(adminUser);
      sessionStorage.setItem('novel_admin_auth', 'true');
      sessionStorage.setItem('novel_admin_user', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem('novel_admin_auth');
    sessionStorage.removeItem('novel_admin_user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
