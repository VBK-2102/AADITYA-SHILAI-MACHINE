import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-xs text-slate-500 py-3 font-mono" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center hover:text-brand-700 transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-300" />
            {isLast || !item.href ? (
              <span className="text-brand-700 font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-brand-700 transition-colors truncate max-w-[150px] sm:max-w-none">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
