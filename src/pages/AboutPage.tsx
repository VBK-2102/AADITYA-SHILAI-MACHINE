import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Factory
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">

      {/* Page Header */}
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Company Profile & Engineering Heritage
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ Precision Craftsmanship Since 2005
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2A1A0E] font-heading">
              Aaditya Shilai Machine
            </h1>
            <p className="text-base text-[#5C4533] leading-relaxed font-sans">
              Serving Kolhapur, Maharashtra, and India’s garment manufacturing corridors with uncompromising sewing machine engineering, high-torque industrial machinery, and expert mechanical servicing since 2005.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Origin & Overview */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-[#5C4533] leading-relaxed font-sans">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-heading">
                Our Journey: From Dedicated Workshop to <span className="font-serif italic font-normal text-[#D4621A]">Industrial</span> Manufacturing Hub
              </h2>
              <p>
                In <strong className="text-[#2A1A0E] font-sora font-semibold">2005</strong>, Aaditya Shilai Machine was founded with a singular, high-precision conviction: that industrial sewing machinery should perform flawlessly under heavy, continuous production loads without premature gear wear, skipped stitches, or excessive downtime.
              </p>
              <p>
                Headquartered in the <strong className="text-[#2A1A0E]">Industrial Machinery Hub, Kolhapur</strong>, our facility has grown from a specialized overhaul center into a comprehensive supplier and engineering authority for industrial umbrella models, computerized direct-drive lockstitch systems, heavy cylinder walking feet, and industrial sack closers.
              </p>
              <p>
                Over 19 years of hands-on technical work has earned our company an outstanding milestone: <strong className="text-[#D4621A] font-sora font-semibold">over 2,500 active satisfied clients</strong> and a verified <strong className="text-[#D4621A] font-sora font-semibold">100% positive customer satisfaction record</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono">
                <div className="bg-white p-5 rounded-[24px] border border-[#E8D4BE] shadow-sm">
                  <span className="text-2xl font-black text-[#2A1A0E] block font-sora">2005</span>
                  <span className="text-xs text-[#D4621A] font-semibold font-heading">Founded Year</span>
                </div>
                <div className="bg-white p-5 rounded-[24px] border border-[#E8D4BE] shadow-sm">
                  <span className="text-2xl font-black text-[#2A1A0E] block font-sora">2,500+</span>
                  <span className="text-xs text-[#D4621A] font-semibold font-heading">Total Customers</span>
                </div>
                <div className="bg-white p-5 rounded-[24px] border border-[#E8D4BE] shadow-sm col-span-2 sm:col-span-1">
                  <span className="text-2xl font-black text-[#D4621A] block font-sora">100%</span>
                  <span className="text-xs text-[#D4621A] font-semibold font-heading">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden border border-[#E8D4BE] shadow-lg bg-white">
                <img
                  src="/images/novel/Frame-67-1.png"
                  alt="Aaditya Shilai Machine Engineering Facility"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-[#D4621A] uppercase font-bold block">
                    Facility Verification
                  </span>
                  <h3 className="text-lg font-bold text-[#2A1A0E] font-display">
                    Kolhapur Plant & Overhaul Bay
                  </h3>
                  <p className="text-xs text-[#5C4533]">
                    Comprehensive machinery assembly, optical timing calibration, 72-hour burn-in testing bays, and cataloged parts inventory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission, Vision, Core Values */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-3 shadow-sm hover:border-[#D4621A] transition-colors">
              <div className="w-12 h-12 rounded-[16px] bg-[#FAF0E0] border border-[#E8D4BE] text-[#D4621A] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2A1A0E] font-display">Our Mission</h3>
              <p className="text-xs text-[#5C4533] leading-relaxed">
                To empower apparel manufacturers, tailors, and heavy industrial fabricators with precision-timed, energy-efficient sewing machinery that maximizes throughput and eliminates production halts.
              </p>
            </div>

            <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-3 shadow-sm hover:border-[#D4621A] transition-colors">
              <div className="w-12 h-12 rounded-[16px] bg-[#FAF0E0] border border-[#E8D4BE] text-[#D4621A] flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2A1A0E] font-display">Our Vision</h3>
              <p className="text-xs text-[#5C4533] leading-relaxed">
                To be recognized as Western India's most dependable industrial stitching solutions provider, setting the benchmark for precision assembly, customized tooling, and honest technical support.
              </p>
            </div>

            <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-3 shadow-sm hover:border-[#D4621A] transition-colors">
              <div className="w-12 h-12 rounded-[16px] bg-[#FAF0E0] border border-[#E8D4BE] text-[#D4621A] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#2A1A0E] font-display">Core Engineering Values</h3>
              <p className="text-xs text-[#5C4533] leading-relaxed">
                Micron-precision mechanical timing, zero compromise on metallurgy, transparent spare parts pricing, and long-term customer relationships built on verified performance.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Milestones */}
        <ScrollReveal>
          <div className="space-y-8 bg-[#FAF0E0] border border-[#E8D4BE] rounded-[32px] p-8 sm:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Two Decades of Evolution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-display">
                Company Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 font-mono">
              <div className="bg-white p-6 rounded-[24px] border border-[#E8D4BE] space-y-2 shadow-sm">
                <span className="text-[#D4621A] font-bold text-xl block">2005</span>
                <h4 className="font-bold text-[#2A1A0E] text-sm font-display">Foundation in Kolhapur</h4>
                <p className="text-xs text-[#5C4533] font-sans">
                  Started specialized tailoring machine repair and fine-tuning operations in Kolhapur for tailoring professionals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-[#E8D4BE] space-y-2 shadow-sm">
                <span className="text-[#D4621A] font-bold text-xl block">2012</span>
                <h4 className="font-bold text-[#2A1A0E] text-sm font-display">Industrial Heavy Line Expansion</h4>
                <p className="text-xs text-[#5C4533] font-sans">
                  Introduced high-torque Umbrella machines and automated Overlock safety stitch series.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-[#E8D4BE] space-y-2 shadow-sm">
                <span className="text-[#D4621A] font-bold text-xl block">2019</span>
                <h4 className="font-bold text-[#2A1A0E] text-sm font-display">Direct-Drive & Automation</h4>
                <p className="text-xs text-[#5C4533] font-sans">
                  Pioneered direct-drive servo retrofitting, reducing electricity bills by 70% across client factories.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-[#E8D4BE] space-y-2 shadow-sm">
                <span className="text-[#D4621A] font-bold text-xl block">Present</span>
                <h4 className="font-bold text-[#2A1A0E] text-sm font-display">Full Industrial Scale</h4>
                <p className="text-xs text-[#5C4533] font-sans">
                  Over 2,500 active industrial customers and comprehensive 8-category machinery catalogue.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA: Signature Dark Emerald Container */}
        <ScrollReveal>
          <div className="bg-[#2A1A0E] border border-[#4D3420] rounded-[32px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-white">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Looking for machinery consultation or factory audit?</h3>
              <p className="text-xs sm:text-sm text-[#E8D4BE]/80">Speak directly with our technical lead engineer in Kolhapur.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 shrink-0 w-full sm:w-auto">
              <Link to="/contact" className="btn-neon text-xs font-bold px-6 py-3.5 rounded-full text-center">
                Visit Kolhapur Facility
              </Link>
              <Link to="/request-quote" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold px-6 py-3.5 rounded-full text-center transition-colors">
                Submit Quotation RFQ
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
