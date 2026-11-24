import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { industries } from '../data/industries';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">

      {/* Header */}
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Industries Served' }]} />

          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Field-Proven Across Real Production Floors
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ Heavy-duty sector applications
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2A1A0E] font-heading">
              Industries Served & <span className="font-serif italic font-normal text-[#D4621A]">Application</span> Engineering
            </h1>
            <p className="text-base text-[#5C4533] leading-relaxed font-sans">
              NOVEL SEWING MACHINE CO. supplies verified sewing machinery tailored to the exact stitch tension, duty cycle, and fabric thickness demands of diverse commercial sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-14">

        {/* Industry Cards List */}
        <div className="space-y-12">
          {industries.map((ind, index) => (
            <ScrollReveal key={ind.id} delay={index * 0.1}>
              <div
                className="bg-white border border-[#E8D4BE] rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image side */}
                <div className={`lg:col-span-5 h-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 lg:h-full min-h-[300px] bg-[#FAFBF7]">
                    <img
                      src={ind.imageUrl}
                      alt={ind.title}
                      className={`w-full h-full ${ind.imageUrl.startsWith('/images/') ? 'object-contain p-4' : 'object-cover'}`}
                    />

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-mono uppercase text-[#2A1A0E] px-3 py-1 rounded-full bg-white/95 border border-[#E8D4BE] shadow-sm font-semibold">
                        Industry Sector 0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#2A1A0E] font-display mt-2 bg-white/90 px-3.5 py-1.5 rounded-xl border border-[#E8D4BE] shadow-sm">
                        {ind.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Text & Requirements side */}
                <div className={`lg:col-span-7 p-6 sm:p-8 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm text-[#5C4533] leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Key Technical Requirements */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4621A] font-bold">
                      Crucial Technical Requirements:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5C4533]">
                      {ind.keyRequirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D4621A] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study Callout Box */}
                  <div className="bg-[#FAFBF7] p-5 rounded-2xl border border-[#E8D4BE] space-y-1.5 text-xs">
                    <span className="font-mono text-[#D4621A] font-bold text-[10px] uppercase">
                      Field Case Study &bull; {ind.caseStudy.clientType}
                    </span>
                    <p className="text-[#2A1A0E] font-medium">
                      Solution: {ind.caseStudy.solution}
                    </p>
                    <p className="text-[#D4621A] font-mono text-[11px] font-semibold">
                      Result: {ind.caseStudy.result}
                    </p>
                  </div>

                  {/* Recommended Machinery Links */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8D4BE]">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-[#5C4533]">Recommended:</span>
                      <div className="flex space-x-1.5">
                        {ind.recommendedMachines.map((m, mIdx) => (
                          <span key={mIdx} className="font-mono text-xs px-3 py-1 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] font-bold">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/request-quote?application=${encodeURIComponent(ind.title)}`}
                      className="btn-metallic text-xs font-bold text-white px-5 py-2.5 rounded-full flex items-center space-x-1.5 shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#F4AE52]" />
                      <span>Get Industry Quotation</span>
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};
