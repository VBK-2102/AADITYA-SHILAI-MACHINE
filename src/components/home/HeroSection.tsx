import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Zap, 
  CheckCircle2
} from 'lucide-react';
import { products } from '../../data/products';

export const HeroSection: React.FC = () => {
  const [activeHeroModel, setActiveHeroModel] = useState<number>(0);
  const heroMachines = products.filter(p => p.featured).slice(0, 3);
  const currentMachine = heroMachines[activeHeroModel] || heroMachines[0];

  return (
    <div className="relative border-b border-[#E8D4BE] overflow-hidden py-12 lg:py-20 bg-[#FEF3E2] transition-colors duration-300">
      {/* Decorative ambient subtle circle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#FAF0E0]/60 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Industrial Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Engineering Badge with Amber Neon Pulse */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF0E0] border border-[#E8D4BE] shadow-sm">
                <span className="dot-neon"></span>
                <span className="text-xs font-mono font-semibold text-[#D4621A] tracking-wide uppercase">
                  Novel Sewing Machine Co. &bull; Precision Stitching Systems
                </span>
              </div>
              <span className="font-caveat text-xl text-[#D4621A] font-bold -rotate-2 select-none">
                ~ 100% bench-tested before dispatch!
              </span>
            </div>

            {/* Industrial Headline: Espresso + Terracotta Serif Italic */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#2A1A0E] font-heading leading-[1.1]">
                <span className="font-serif italic font-normal text-[#D4621A]">Engineering</span> Machines.{' '}
                <span className="block text-[#2A1A0E]">
                  <span className="font-serif italic font-normal text-[#D4621A]">Powering</span> Industries.
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#5C4533] font-semibold tracking-wider uppercase">
                Boutique & Tailoring Machines <span className="text-[#D4621A]">&bull;</span> Heavy-Duty Umbrella Units <span className="text-[#D4621A]">&bull;</span> Saree Pico & Direct-Drive
              </p>
            </div>

            {/* Subtitle / Company Value */}
            <p className="text-base sm:text-lg text-[#5C4533] font-sans leading-relaxed max-w-2xl">
              For over 19 years, Novel Sewing Machine Co. has been the trusted engineering partner for fashion boutiques, bespoke master tailors, garment export houses, and heavy fabricators. We supply certified high-speed machinery, genuine parts, and rapid turnaround service.
            </p>

            {/* Core Stats Bar with Geometric Sora Font */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg border-y border-[#E8D4BE] py-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-sora">2005</span>
                <span className="text-xs text-[#5C4533] font-medium font-sans">Pioneering Year</span>
              </div>
              <div className="border-x border-[#E8D4BE] px-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-sora">2,500+</span>
                <span className="text-xs text-[#5C4533] font-medium font-sans">Total Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-sora">100%</span>
                <span className="text-xs text-[#5C4533] font-medium font-sans">Bench Certified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/products"
                className="btn-metallic text-white font-bold px-8 py-3.5 rounded-full flex items-center justify-center space-x-2 text-sm shadow-md hover:shadow-lg text-center transition-all"
              >
                <span>Explore Machinery</span>
                <ArrowRight className="w-4 h-4 text-[#F4AE52]" />
              </Link>

              <Link
                to="/request-quote"
                className="btn-dark-metallic font-semibold px-8 py-3.5 rounded-full flex items-center justify-center space-x-2 text-sm text-center transition-all"
              >
                <FileText className="w-4 h-4 text-[#D4621A]" />
                <span>Request a Quote (RFQ)</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C4533] pt-2 font-mono">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4621A]" />
                <span>ISO 9001:2015 QA Checked</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-[#D4621A]" />
                <span>Same-Day Diagnostic Turnaround</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4621A]" />
                <span>Genuine Spares In Stock</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Signature Dark Espresso Container */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative rounded-[32px] bg-[#2A1A0E] border border-[#4D3420] p-6 shadow-2xl text-white">
                
                {/* Header status in espresso box */}
                <div className="flex items-center justify-between pb-3 border-b border-[#4D3420]">
                  <div className="flex items-center space-x-2">
                    <span className="dot-neon"></span>
                    <span className="text-xs font-mono text-[#F4AE52] font-bold uppercase tracking-wider">
                      Featured Sewing Machine
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#F4AE52]/15 text-[#F4AE52] border border-[#F4AE52]/30 font-bold">
                    {currentMachine.modelNumber}
                  </span>
                </div>

                {/* Machine Stage with Warm Ivory Contrast */}
                <div className="relative rounded-[24px] overflow-hidden bg-[#FAF0E0] aspect-[4/3] group border border-[#E8D4BE] mt-4 shadow-inner">
                  <img
                    src={currentMachine.images[0]}
                    alt={currentMachine.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Specs Pill on Machine Stage */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end bg-[#2A1A0E]/95 backdrop-blur-sm p-3.5 rounded-[18px] border border-[#4D3420] shadow-lg text-white">
                    <div>
                      <span className="text-[10px] font-mono text-[#F4AE52] uppercase block font-semibold">
                        {currentMachine.categoryName}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug line-clamp-1">
                        {currentMachine.name}
                      </h4>
                    </div>
                    <Link
                      to={`/products/${currentMachine.slug}`}
                      className="p-2 rounded-full bg-[#F4AE52] text-[#2A1A0E] hover:bg-[#E29D42] transition-colors shadow shrink-0"
                      title="View Full Specifications"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Quick Telemetry Specs in Bento Grid */}
                <div className="grid grid-cols-3 gap-2.5 text-xs font-mono mt-4">
                  <div className="bg-[#1E1108]/90 p-2.5 rounded-2xl border border-[#4D3420]">
                    <span className="text-[10px] text-[#E8D4BE] block uppercase font-medium">Max Speed</span>
                    <span className="text-white font-bold font-sora">{currentMachine.operatingCapabilities.maxSpeed}</span>
                  </div>
                  <div className="bg-[#1E1108]/90 p-2.5 rounded-2xl border border-[#4D3420]">
                    <span className="text-[10px] text-[#E8D4BE] block uppercase font-medium">Stitch Length</span>
                    <span className="text-white font-bold font-sora">{currentMachine.operatingCapabilities.stitchLength}</span>
                  </div>
                  <div className="bg-[#1E1108]/90 p-2.5 rounded-2xl border border-[#4D3420]">
                    <span className="text-[10px] text-[#E8D4BE] block uppercase font-medium">Drive Motor</span>
                    <span className="text-[#F4AE52] font-bold truncate block">{currentMachine.operatingCapabilities.motorPower}</span>
                  </div>
                </div>

                {/* Flagship Selector */}
                <div className="pt-4 border-t border-[#4D3420] flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-[#E8D4BE] font-medium">Select Flagship Unit:</span>
                  <div className="flex space-x-1.5">
                    {heroMachines.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => setActiveHeroModel(idx)}
                        className={`text-xs font-mono px-3 py-1 rounded-full transition-all ${
                          idx === activeHeroModel
                            ? 'bg-[#F4AE52] text-[#2A1A0E] font-bold shadow-md'
                            : 'bg-white/10 text-[#E8D4BE] hover:text-white hover:bg-white/20 border border-white/10'
                        }`}
                      >
                        {m.modelNumber.replace('ASM-', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer link in espresso card */}
                <div className="flex items-center justify-between text-xs pt-3 mt-1">
                  <Link
                    to={`/request-quote?model=${encodeURIComponent(currentMachine.modelNumber)}`}
                    className="text-[#F4AE52] hover:text-white font-semibold flex items-center space-x-1 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#F4AE52]" />
                    <span>Request Quote for this Model &rarr;</span>
                  </Link>
                  <span className="text-[11px] text-[#F4AE52] font-mono font-medium flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4AE52]"></span>
                    <span>Ready to Dispatch</span>
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
