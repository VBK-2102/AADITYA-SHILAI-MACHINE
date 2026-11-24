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
      className={`inline-flex items-center space-x-1.5 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] shadow-sm ${className}`}
      title="Verified authentic technical configuration calibrated by NOVEL SEWING MACHINE CO.."
    >
      <CheckCircle2 className="w-3 h-3 text-[#D4621A]" />
      <span>Official Spec Confirmed</span>
    </span>
  );
};
