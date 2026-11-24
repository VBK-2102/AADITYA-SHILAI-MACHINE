import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-[75vh] flex items-center justify-center p-4 tech-grid">
      <div className="max-w-md w-full bg-white border border-[#E8D4BE] rounded-[28px] p-8 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#FAF0E0] border border-[#E8D4BE] text-[#D4621A] mx-auto flex items-center justify-center shadow-sm">
          <Wrench className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-[#D4621A] font-mono block">404</span>
          <h1 className="text-2xl font-bold text-[#2A1A0E] font-display">
            Industrial Component Not Found
          </h1>
          <p className="text-xs text-[#5C4533] leading-relaxed font-mono">
            The machinery page or technical document you requested does not exist or has been relocated in our system.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-metallic text-xs font-bold text-white px-6 py-2.5 rounded-full flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <Home className="w-4 h-4 text-[#F4AE52]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="btn-dark-metallic text-xs font-semibold px-6 py-2.5 rounded-full w-full sm:w-auto transition-all"
          >
            Browse Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
};
