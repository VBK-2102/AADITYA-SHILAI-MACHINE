import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { qualitySteps, certificationsList } from '../data/qualityStandards';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const QualityPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Quality Assurance' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Zero-Defect Dispatch Standard
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ 100% bench-tested protocols
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Quality Assurance & <span className="font-serif italic font-normal text-brand-600">Calibration</span> Protocol
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Every industrial sewing machine assembled or serviced by Aaditya Shilai Machine is audited against strict metallurgical, dimensional, and continuous 72-hour load criteria.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        
        {/* Quality Certifications Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsList.map((cert) => (
              <div key={cert.code} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-brand-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-brand-700 block">{cert.code}</span>
                  <h3 className="font-bold text-slate-900 text-base font-heading">{cert.title}</h3>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold block mt-0.5">{cert.authority}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 7-Stage Quality Protocol Breakdown */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Comprehensive 7-Stage Inspection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                The 7-Stage <span className="font-serif italic font-normal text-brand-600">Quality Assurance</span> Procedure
              </h2>
            </div>

            <div className="space-y-4">
              {qualitySteps.map((qs) => (
                <div
                  key={qs.step}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-brand-500 hover:shadow-md transition-all shadow-sm"
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-brand-700 font-sora font-black text-lg flex items-center justify-center shrink-0">
                      0{qs.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 font-heading">{qs.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-2xl font-sans">
                        {qs.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl shrink-0 w-full md:w-auto text-left md:text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block font-bold">Standard Met:</span>
                    <span className="text-xs font-mono text-brand-700 font-semibold">{qs.standard}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Dispatch QA Certificate Stamp Box */}
        <ScrollReveal>
          <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-brand-700">
                <FileCheck className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase">Individual Machine Serial QA Passport</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Every dispatched machine includes a signed Inspection Certificate & Test Swatch
              </h3>
              <p className="text-xs text-slate-600">
                Stamped with calibrated RPM, oil pump flow rate, and needle-to-hook clearance verified by our lead technician.
              </p>
            </div>

            <Link to="/request-quote" className="btn-metallic text-xs font-bold text-white px-6 py-3 rounded-xl shrink-0">
              Request Certified Quotation &rarr;
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
