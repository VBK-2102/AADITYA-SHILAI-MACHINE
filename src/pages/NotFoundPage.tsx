import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-[75vh] flex items-center justify-center p-4 tech-grid">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 text-brand-700 mx-auto flex items-center justify-center shadow-sm">
          <Wrench className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-brand-700 font-mono block">404</span>
          <h1 className="text-2xl font-bold text-slate-900 font-display">
            Industrial Component Not Found
          </h1>
          <p className="text-xs text-slate-600 leading-relaxed font-mono">
            The machinery page or technical document you requested does not exist or has been relocated in our system.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-metallic text-xs font-bold text-white px-5 py-2.5 rounded-xl flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-5 py-2.5 rounded-xl w-full sm:w-auto transition-colors"
          >
            Browse Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
};
