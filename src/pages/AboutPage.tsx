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
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Company Profile & Engineering Heritage
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Kolhapur Original Since 2005
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Aaditya Shilai Machine
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Serving Kolhapur, Maharashtra, and India’s garment manufacturing corridors with uncompromising sewing machine engineering, high-torque industrial machinery, and expert mechanical servicing since 2005.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        
        {/* Origin & Overview */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed font-sans">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Our Journey: From Dedicated Workshop to <span className="font-serif italic font-normal text-brand-600">Industrial</span> Manufacturing Hub
              </h2>
              <p>
                In <strong className="text-slate-900 font-sora font-semibold">2005</strong>, Aaditya Shilai Machine was founded with a singular, high-precision conviction: that industrial sewing machinery should perform flawlessly under heavy, continuous production loads without premature gear wear, skipped stitches, or excessive downtime.
              </p>
              <p>
                Headquartered at <strong className="text-slate-900">Opposite Kalamba Jail, Kalamba Road, Kolhapur</strong>, our facility has grown from a specialized overhaul center into a comprehensive supplier and engineering authority for industrial umbrella models, computerized direct-drive lockstitch systems, heavy cylinder walking feet, and industrial sack closers.
              </p>
              <p>
                Over 19 years of hands-on technical work has earned our company an outstanding milestone: <strong className="text-brand-700 font-sora font-semibold">over 2,500 active satisfied clients</strong> and a verified <strong className="text-brand-700 font-sora font-semibold">100% positive customer satisfaction record</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-2xl font-black text-slate-900 block font-sora">2005</span>
                  <span className="text-xs text-brand-700 font-semibold font-heading">Founded Year</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-2xl font-black text-slate-900 block font-sora">2,500+</span>
                  <span className="text-xs text-brand-700 font-semibold font-heading">Total Customers</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                  <span className="text-2xl font-black text-slate-900 block font-sora">100%</span>
                  <span className="text-xs text-brand-700 font-semibold font-heading">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Aaditya Shilai Machine Engineering Facility"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-brand-700 uppercase font-bold block">
                    Facility Verification
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Kolhapur Plant & Overhaul Bay
                  </h3>
                  <p className="text-xs text-slate-600">
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
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-brand-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To empower apparel manufacturers, tailors, and heavy industrial fabricators with precision-timed, energy-efficient sewing machinery that maximizes throughput and eliminates production halts.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-brand-700 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be recognized as Western India's most dependable industrial stitching solutions provider, setting the benchmark for precision assembly, customized tooling, and honest technical support.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-brand-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Core Engineering Values</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Micron-precision mechanical timing, zero compromise on metallurgy, transparent spare parts pricing, and long-term customer relationships built on verified performance.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Milestones */}
        <ScrollReveal>
          <div className="space-y-8 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Two Decades of Evolution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Company Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 font-mono">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <span className="text-brand-700 font-bold text-xl block">2005</span>
                <h4 className="font-bold text-slate-900 text-sm font-display">Foundation in Kolhapur</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Started specialized repair and fine-tuning operations on Kalamba Road for tailoring professionals.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <span className="text-brand-700 font-bold text-xl block">2012</span>
                <h4 className="font-bold text-slate-900 text-sm font-display">Industrial Heavy Line Expansion</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Introduced high-torque Umbrella machines and automated Overlock safety stitch series.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <span className="text-brand-700 font-bold text-xl block">2019</span>
                <h4 className="font-bold text-slate-900 text-sm font-display">Direct-Drive & Automation</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Pioneered direct-drive servo retrofitting, reducing electricity bills by 70% across client factories.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <span className="text-brand-700 font-bold text-xl block">Present</span>
                <h4 className="font-bold text-slate-900 text-sm font-display">Full Industrial Scale</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Over 2,500 active industrial customers and comprehensive 8-category machinery catalogue.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 font-display">Looking for machinery consultation or factory audit?</h3>
              <p className="text-xs text-slate-600">Speak directly with our technical lead engineer in Kolhapur.</p>
            </div>
            <div className="flex space-x-3 shrink-0">
              <Link to="/contact" className="btn-metallic text-white text-xs font-semibold px-5 py-3 rounded-xl">
                Visit Kolhapur Facility
              </Link>
              <Link to="/request-quote" className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold px-5 py-3 rounded-xl transition-colors">
                Submit Quotation RFQ
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
