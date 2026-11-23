import React from 'react';
import { CheckCircle2, Sliders } from 'lucide-react';

interface DemoBadgeProps {
  isDemoConfig?: boolean;
  className?: string;
}

export const DemoBadge: React.FC<DemoBadgeProps> = ({ isDemoConfig, className = '' }) => {
  if (isDemoConfig) {
    return (
      <span 
        className={`inline-flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 shadow-sm ${className}`}
        title="Configurable industrial machinery specification. Tailored upon client order."
      >
        <Sliders className="w-3 h-3 text-amber-600" />
        <span>Custom Config Option</span>
      </span>
    );
  }

  return (
    <span 
      className={`inline-flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-purple-50 text-brand-700 border border-purple-200 shadow-sm ${className}`}
      title="Verified authentic technical configuration calibrated by Aaditya Shilai Machine."
    >
      <CheckCircle2 className="w-3 h-3 text-brand-600" />
      <span>Official Spec Confirmed</span>
    </span>
  );
};
