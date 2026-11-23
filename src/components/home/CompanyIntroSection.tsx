import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Wrench,
  Cpu,
  Award,
  MapPin
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-brand-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 font-semibold shadow-sm">
            <Award className="w-3.5 h-3.5 text-brand-600" />
            <span>KOLHAPUR'S TRUSTED INDUSTRIAL PARTNER SINCE 2005</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Precision <span className="font-serif italic font-normal text-brand-600">Engineering</span> Born From{' '}
            <span className="text-brand-700">Two Decades of Craftsmanship</span>
          </h2>
          <span className="font-caveat text-2xl text-brand-700 font-bold block -rotate-1 select-none">
            ~ Over 2,500 active machine installations across Western India
          </span>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            From single-needle boutique tailoring machines to heavy-duty umbrella workhorses and automated direct-drive factories, Aaditya Shilai Machine provides certified industrial solutions.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Factory Story Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in <strong className="text-slate-900 font-sora font-semibold">2005</strong> in Kolhapur, Maharashtra, <strong className="text-brand-700">Aaditya Shilai Machine</strong> began with a clear industrial objective: to eliminate unreliability in sewing machinery through meticulous mechanical timing, aerospace-grade gear hardening, and immediate technical service.
              </p>
              <p>
                Located directly on <strong className="text-slate-900">Kalamba Road (Opposite Kalamba Jail)</strong>, our facility serves garment manufacturing clusters, denim exporters, sugarcane bag packaging units, leather craftsmen, and tailoring entrepreneurs across Maharashtra, Karnataka, and Goa.
              </p>
              <p>
                Unlike generic distributors, every machine that leaves our dispatch bay is bench-tested under full mechanical load by senior technicians with over 15 to 25 years of specialized timing experience.
              </p>
            </div>

            {/* Core Values / Why Choose Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-700">
                  <Wrench className="w-5 h-5 text-brand-600" />
                  <h4 className="font-bold text-slate-900 text-sm">Same-Day Diagnostics</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rapid overhaul and mechanical troubleshooting minimizing commercial downtime.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-700">
                  <Cpu className="w-5 h-5 text-brand-600" />
                  <h4 className="font-bold text-slate-900 text-sm">Genuine OEM Components</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hardened carbon steel gears, tungsten hooks, and high-purity copper servo drives.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-700 hover:text-brand-900 group"
              >
                <span>Read our full company history and leadership profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Technical Infographic Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono text-brand-700 uppercase font-semibold">Operational Footprint</span>
                  <h3 className="text-lg font-bold text-slate-900 font-display">Kolhapur Engineering Hub</h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  Active Plant
                </span>
              </div>

              {/* Verified Metrics with Sora font */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora block">2,500+</span>
                  <span className="text-xs text-slate-600 font-sans">Industrial & Tailor Clients</span>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-700 font-sora block">100%</span>
                  <span className="text-xs text-slate-600 font-sans">Positive Customer Rating</span>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-700 font-sora block">15,000+</span>
                  <span className="text-xs text-slate-600 font-sans">Sq. Ft. Facility Footprint</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora block">12,000+</span>
                  <span className="text-xs text-slate-600 font-sans">Spares in Stock</span>
                </div>
              </div>

              {/* Plant Address verification badge */}
              <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4 flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Verified Physical Facility:</span>
                  <span className="text-slate-700 leading-relaxed block mt-0.5">
                    Aaditya Shilai Machine, Opposite Kalamba Jail, Kalamba Road, Kolhapur - 416007
                  </span>
                  <div className="mt-2 flex items-center space-x-3 font-mono text-brand-700 font-semibold">
                    <span>Contact: {companyInfo.contact.primaryPhone}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
