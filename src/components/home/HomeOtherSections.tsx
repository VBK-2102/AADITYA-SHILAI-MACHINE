import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Star,
  Quote
} from 'lucide-react';
import { categories } from '../../data/categories';
import { manufacturingCapabilities } from '../../data/manufacturing';
import { industries } from '../../data/industries';
import { qualitySteps } from '../../data/qualityStandards';
import { companyInfo } from '../../data/companyInfo';

export const CategoriesGridSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
            Comprehensive Industrial Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Machinery <span className="font-serif italic font-normal text-brand-600">Categories</span> by Application
          </h2>
          <span className="font-caveat text-2xl text-brand-700 font-bold block select-none">
            ~ 8 specialized engineering families
          </span>
          <p className="text-sm text-slate-600 font-sans">
            Engineered across 8 specialized disciplines. From micro-pitch fine silks to multi-ply heavy canvas and agro sack stitching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products/category/${cat.slug}`}
              className="card-industrial rounded-2xl p-6 group bg-white border border-slate-200 hover:border-brand-600 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-700 transition-colors font-display">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-brand-700 font-mono mt-0.5 font-medium">{cat.subtitle}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {cat.description}
                </p>

                {/* Popular applications */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cat.popularApplications.slice(0, 2).map((app, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-700 font-bold">{cat.productCount} Models Available</span>
                <span className="text-slate-800 group-hover:translate-x-1 group-hover:text-brand-700 transition-transform flex items-center font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-brand-600" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export const ManufacturingCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-200 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
              In-House Production & Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Manufacturing Capabilities & <span className="font-serif italic font-normal text-brand-600">Precision Tooling</span>
            </h2>
            <p className="text-sm text-slate-600 font-sans">
              Every critical friction component is machined, heat-treated, and bench-synchronized in our plant to achieve micron tolerances and zero vibration.
            </p>
          </div>

          <Link
            to="/manufacturing"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-brand-700 hover:text-brand-900 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow shrink-0 font-heading"
          >
            <span>Explore All 6 Phases &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingCapabilities.slice(0, 6).map((cap) => (
            <div
              key={cap.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-brand-600 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brand-700 px-2.5 py-1 rounded bg-purple-50 border border-purple-200">
                  {cap.phase}
                </span>
                <span className="text-[11px] font-mono text-emerald-700 font-semibold">{cap.qualityTolerance}</span>
              </div>

              <h3 className="font-bold text-slate-900 text-base font-display group-hover:text-brand-700 transition-colors">
                {cap.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {cap.description}
              </p>

              <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
                {cap.specifications.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const IndustriesServedSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
              Target Industry Applications
            </span>
            <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
              ~ Tailored engineering
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Industries Powered by <span className="font-serif italic font-normal text-brand-600">Aaditya</span> Machinery
          </h2>
          <p className="text-sm text-slate-600 font-sans">
            Tailored engineering solutions configured to the exact fabric thickness, duty cycle, and speed criteria of real production floors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.slice(0, 6).map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-600 transition-all group flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={ind.imageUrl}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-sm font-display">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3 text-xs text-slate-600">
                  <p className="leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="font-mono text-brand-700 font-bold block text-[10px] uppercase">
                      Recommended Models:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {ind.recommendedMachines.map((m, i) => (
                        <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded bg-purple-50 text-brand-700 border border-purple-200 font-semibold">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to="/industries"
                  className="w-full btn-dark-metallic text-xs font-semibold py-2 rounded-lg flex items-center justify-center space-x-1"
                >
                  <span>View Technical Case Study &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const QualityCommitmentSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-200 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Uncompromising Reliability
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Zero-failure bench testing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Our 7-Stage <span className="font-serif italic font-normal text-brand-600">Quality Assurance</span> Protocol
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Every single machine head assembled or repaired at Aaditya Shilai Machine is subjected to rigorous dimensional, acoustic, thermal, and 72-hour continuous burn-in audits before dispatch.
            </p>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center space-x-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Zero Tolerance on Needle-to-Hook Clearance (<span className="font-sora font-semibold text-brand-700">0.05 mm</span>)</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Induction Vacuum Hardened Carbon Steel Gears</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>100% Bench Tested Under Real Multi-Layer Heavy Fabrics</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/quality"
                className="btn-metallic text-white font-semibold text-xs px-6 py-3 rounded-xl inline-flex items-center space-x-2 shadow-md"
              >
                <span>Read Full QA Standards & Certifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {qualitySteps.slice(0, 4).map((qs) => (
              <div
                key={qs.step}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start space-x-4 hover:border-brand-600 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 text-brand-700 font-sora font-bold flex items-center justify-center shrink-0">
                  0{qs.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm font-heading">{qs.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{qs.description}</p>
                  <span className="text-[10px] font-mono text-brand-700 font-semibold block">{qs.standard}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Aaditya Shilai Machine repaired our heavy denim umbrella machines like they were brand new! Prompt, affordable, and unmatched mechanical knowledge in Kolhapur.",
      author: "Ganesh Kamble",
      role: "Lead Master Tailor & Boutique Owner",
      location: "Kolhapur, Maharashtra",
      rating: 5
    },
    {
      quote: "Highly recommended for anyone who depends on their sewing machinery daily. Their direct-drive servo conversion cut our shop's electric bill substantially.",
      author: "Sanjay Bhosale",
      role: "Garment Fabrication Unit",
      location: "Ichalkaranji Textile Hub",
      rating: 5
    },
    {
      quote: "Their ASM-BC-26 bag closer machines have been running without a single breakdown during peak sugar packaging season. Fantastic same-day parts support.",
      author: "Prakash Chougule",
      role: "Agro Packaging In-charge",
      location: "Western Maharashtra Sugar Belt",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
              Verified Customer Trust
            </span>
            <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
              ~ Real operator reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            What Industrial Operators & <span className="font-serif italic font-normal text-brand-600">Tailors</span> Say
          </h2>
          <p className="text-sm text-slate-600 font-sans">
            Backed by 19+ years of word-of-mouth reputation and 100% positive customer satisfaction across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between hover:border-brand-600 transition-all shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed font-sans">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-heading">{t.author}</h4>
                  <span className="text-xs text-brand-700 font-semibold block">{t.role}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{t.location}</span>
                </div>
                <Quote className="w-8 h-8 text-purple-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50 border-b border-purple-200 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Direct Factory Quotations & Technical Sizing
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ 4-hour quick RFQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 font-heading">
              Ready to Upgrade Your <span className="font-serif italic font-normal text-brand-600">Factory Line</span> or Workshop?
            </h2>
            <p className="text-sm text-slate-600 font-sans">
              Submit your required machinery specifications, fabric layers, and quantities. Our lead engineering team will provide a formal B2B quotation within 4 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 shrink-0">
            <Link
              to="/request-quote"
              className="btn-metallic text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center font-heading"
            >
              <FileText className="w-4 h-4 text-purple-100" />
              <span>Submit Formal RFQ</span>
            </Link>

            <a
              href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="btn-dark-metallic text-sm font-semibold px-6 py-3.5 rounded-xl flex items-center space-x-2 w-full sm:w-auto justify-center font-heading"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Call: {companyInfo.contact.primaryPhone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
