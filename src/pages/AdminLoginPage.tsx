import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Key, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@aadityashilaimachine.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const success = login(email, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid management credentials. Please check your email and password.');
    }
  };

  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center p-4 tech-grid">
      <div className="max-w-md w-full bg-white border border-[#E8D4BE] rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xl relative">
        
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF0E0] border border-[#E8D4BE] text-[#D4621A] mx-auto flex items-center justify-center shadow-sm">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#2A1A0E] font-display">
            Aaditya Staff Portal
          </h1>
          <p className="text-xs text-[#5C4533] font-mono">
            Commercial Requisitions & Catalogue Management
          </p>
        </div>

        {/* Demo Credentials Helper Pill */}
        <div className="bg-[#FAFBF7] border border-[#E8D4BE] rounded-2xl p-4 space-y-1 text-xs">
          <span className="font-mono text-[#D4621A] font-bold block">Preset Administrator Access:</span>
          <div className="text-[#5C4533] font-mono text-[11px] flex justify-between">
            <span>Email: <strong className="text-[#2A1A0E]">admin@aadityashilaimachine.com</strong></span>
            <span>Password: <strong className="text-[#2A1A0E]">admin123</strong></span>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2 font-mono">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#5C4533] font-medium block">Staff Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8C7565] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-[#2A1A0E] focus:outline-none focus:border-brand-600 font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#5C4533] font-medium block">Security Password</label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#8C7565] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-[#2A1A0E] focus:outline-none focus:border-brand-600 font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-metallic text-white font-bold text-xs py-3.5 rounded-full shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transition-all"
          >
            <span>Authenticate Management Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-[#E8D4BE]">
          <Link to="/" className="text-xs text-[#5C4533] hover:text-brand-700 font-mono">
            &larr; Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
};
