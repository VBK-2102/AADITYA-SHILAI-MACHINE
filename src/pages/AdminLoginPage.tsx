import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Key, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@aaditya.com');
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
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
        
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-brand-700 mx-auto flex items-center justify-center shadow-sm">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">
            Aaditya Staff Portal
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Commercial Requisitions & Catalogue Management
          </p>
        </div>

        {/* Demo Credentials Helper Pill */}
        <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-3.5 space-y-1 text-xs">
          <span className="font-mono text-brand-700 font-bold block">Preset Administrator Access:</span>
          <div className="text-slate-700 font-mono text-[11px] flex justify-between">
            <span>Email: <strong>admin@aaditya.com</strong></span>
            <span>Password: <strong>admin123</strong></span>
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
            <label className="text-xs font-mono text-slate-700 font-medium block">Staff Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-700 font-medium block">Security Password</label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-metallic text-white font-bold text-xs py-3.5 rounded-xl shadow-purple-glow flex items-center justify-center space-x-2"
          >
            <span>Authenticate Management Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-200">
          <Link to="/" className="text-xs text-slate-500 hover:text-brand-700 font-mono">
            &larr; Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
};
