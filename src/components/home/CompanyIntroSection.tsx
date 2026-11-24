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
    <section className="py-20 bg-[#FAF0E0] border-b border-[#E8D4BE] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4621A] bg-[#FAF0E0] px-4 py-1.5 rounded-full border border-[#E8D4BE] font-semibold shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D4621A]" />
            <span>KOLHAPUR'S TRUSTED INDUSTRIAL PARTNER SINCE 2005</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A1A0E] font-heading">
            Precision <span className="font-serif italic font-normal text-[#D4621A]">Engineering</span> Born From{' '}
            <span className="text-[#D4621A]">Two Decades of Craftsmanship</span>
          </h2>
          <span className="font-caveat text-2xl text-[#D4621A] font-bold block -rotate-1 select-none">
            ~ Over 2,500 active machine installations across Western India
          </span>
          <p className="text-sm sm:text-base text-[#5C4533] font-sans leading-relaxed">
            From single-needle boutique tailoring machines to heavy-duty umbrella workhorses and automated direct-drive factories, Novel Sewing Machine Co. provides certified industrial solutions.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Interactive Factory Story Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-[#5C4533] leading-relaxed text-sm sm:text-base">
              <p>
                Founded in <strong className="text-[#2A1A0E] font-sora font-semibold">2005</strong> in Kolhapur, Maharashtra, <strong className="text-[#D4621A]">Novel Sewing Machine Co.</strong> began with a clear industrial objective: to eliminate unreliability in sewing machinery through meticulous mechanical timing, aerospace-grade gear hardening, and immediate technical service.
              </p>
              <p>
                Located directly on <strong className="text-[#2A1A0E]">Industrial Machinery Hub, Kolhapur</strong>, our facility serves garment manufacturing clusters, denim exporters, sugarcane bag packaging units, leather craftsmen, and tailoring entrepreneurs across Maharashtra, Karnataka, and Goa.
              </p>
              <p>
                Unlike generic distributors, every machine that leaves our dispatch bay is bench-tested under full mechanical load by senior technicians with over 15 to 25 years of specialized timing experience.
              </p>
            </div>

            {/* Core Values / Bento Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-[24px] border border-[#E8D4BE] space-y-2 shadow-sm hover:border-[#D4621A] transition-colors">
                <div className="flex items-center space-x-2 text-[#D4621A]">
                  <Wrench className="w-5 h-5 text-[#D4621A]" />
                  <h4 className="font-bold text-[#2A1A0E] text-sm font-heading">Same-Day Diagnostics</h4>
                </div>
                <p className="text-xs text-[#5C4533] leading-relaxed">
                  Rapid overhaul and mechanical troubleshooting minimizing commercial downtime.
                </p>
              </div>

              <div className="bg-white p-5 rounded-[24px] border border-[#E8D4BE] space-y-2 shadow-sm hover:border-[#D4621A] transition-colors">
                <div className="flex items-center space-x-2 text-[#D4621A]">
                  <Cpu className="w-5 h-5 text-[#D4621A]" />
                  <h4 className="font-bold text-[#2A1A0E] text-sm font-heading">Genuine OEM Components</h4>
                </div>
                <p className="text-xs text-[#5C4533] leading-relaxed">
                  Hardened carbon steel gears, tungsten hooks, and high-purity copper servo drives.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#D4621A] hover:text-[#382212] group"
              >
                <span>Read our full company history and leadership profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D4621A]" />
              </Link>
            </div>
          </div>

          {/* Right: Technical Infographic Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[32px] border border-[#E8D4BE] p-6 sm:p-8 space-y-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0DEC9]">
                <div>
                  <span className="text-xs font-mono text-[#D4621A] uppercase font-semibold">Operational Footprint</span>
                  <h3 className="text-lg font-bold text-[#2A1A0E] font-display">Kolhapur Engineering Hub</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] font-semibold flex items-center space-x-1.5">
                  <span className="dot-neon"></span>
                  <span>Active Facility</span>
                </span>
              </div>

              {/* Verified Metrics with Sora font */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FEF3E2] p-5 rounded-[24px] border border-[#E8D4BE]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-sora block">2,500+</span>
                  <span className="text-xs text-[#5C4533] font-sans">Industrial & Tailor Clients</span>
                </div>

                <div className="bg-[#FAF0E0] p-5 rounded-[24px] border border-[#E8D4BE]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#D4621A] font-sora block">100%</span>
                  <span className="text-xs text-[#5C4533] font-sans">Positive Customer Rating</span>
                </div>

                <div className="bg-[#FAF0E0] p-5 rounded-[24px] border border-[#E8D4BE]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#D4621A] font-sora block">15,000+</span>
                  <span className="text-xs text-[#5C4533] font-sans">Sq. Ft. Facility Footprint</span>
                </div>

                <div className="bg-[#FEF3E2] p-5 rounded-[24px] border border-[#E8D4BE]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-sora block">12,000+</span>
                  <span className="text-xs text-[#5C4533] font-sans">Spares in Stock</span>
                </div>
              </div>

              {/* Plant Address verification badge */}
              <div className="bg-[#FAFBF7] border border-[#E8D4BE] rounded-[24px] p-5 flex items-start space-x-3.5 shadow-sm">
                <MapPin className="w-5 h-5 text-[#D4621A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#2A1A0E] block font-heading">Verified Physical Facility:</span>
                  <span className="text-[#5C4533] leading-relaxed block mt-0.5">
                    Novel Sewing Machine Co., Industrial Machinery Hub, Kolhapur - 416007
                  </span>
                  <div className="mt-2.5 flex items-center space-x-3 font-mono text-[#D4621A] font-semibold">
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
