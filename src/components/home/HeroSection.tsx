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
    <div className="relative border-b border-slate-200 overflow-hidden py-12 lg:py-20 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Industrial Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Engineering Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-ping"></span>
                <span className="text-xs font-mono font-semibold text-brand-700 tracking-wide uppercase">
                  Aaditya Shilai Machine &bull; Est. 2005 Kolhapur
                </span>
              </div>
              <span className="font-caveat text-xl text-brand-700 font-bold -rotate-2 select-none">
                ~ 100% bench-tested before dispatch!
              </span>
            </div>

            {/* Industrial Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 font-heading leading-[1.1]">
                <span className="font-serif italic font-normal text-brand-600">Engineering</span> Machines.{' '}
                <span className="block text-slate-900">
                  <span className="font-serif italic font-normal text-brand-600">Powering</span> Industries.
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-600 font-semibold tracking-wider uppercase">
                Precision Stitching Machinery <span className="text-brand-600">&bull;</span> Heavy-Duty Umbrella Units <span className="text-brand-600">&bull;</span> Direct-Drive Automation
              </p>
            </div>

            {/* Subtitle / Company Value */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
              For over 19 years, Aaditya Shilai Machine has been the trusted engineering partner for textile factories, export houses, boutiques, and heavy canvas fabricators across Western Maharashtra. We supply certified high-speed machinery, genuine parts, and rapid turnaround service.
            </p>

            {/* Core Stats Bar with Geometric Sora Font */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg border-y border-slate-200 py-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora">2005</span>
                <span className="text-xs text-brand-700 font-medium">Pioneering Year</span>
              </div>
              <div className="border-x border-slate-200 px-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora">2,500+</span>
                <span className="text-xs text-brand-700 font-medium">Total Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora">100%</span>
                <span className="text-xs text-brand-700 font-medium">Satisfaction Record</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/products"
                className="btn-metallic text-white font-bold px-7 py-3.5 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md hover:shadow-lg text-center"
              >
                <span>Explore Machinery</span>
                <ArrowRight className="w-4 h-4 text-purple-100" />
              </Link>

              <Link
                to="/request-quote"
                className="btn-dark-metallic font-semibold px-7 py-3.5 rounded-xl flex items-center justify-center space-x-2 text-sm text-center"
              >
                <FileText className="w-4 h-4 text-brand-600" />
                <span>Request a Quote (RFQ)</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 font-mono">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>ISO 9001:2015 QA Checked</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-brand-600" />
                <span>Same-Day Diagnostic Turnaround</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Genuine Spares In Stock</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Interactive Machine Showcase Card (Zero Gradient) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative rounded-2xl bg-white border border-slate-200 p-5 shadow-xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm"></span>
                    <span className="text-xs font-mono text-slate-700 font-bold uppercase">
                      Featured Industrial Machine
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 text-brand-700 border border-purple-200 font-bold">
                    {currentMachine.modelNumber}
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] group border border-slate-200 mt-4">
                  <img
                    src={currentMachine.images[0]}
                    alt={currentMachine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-md">
                    <div>
                      <span className="text-[10px] font-mono text-brand-700 uppercase block font-semibold">
                        {currentMachine.categoryName}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1">
                        {currentMachine.name}
                      </h4>
                    </div>
                    <Link
                      to={`/products/${currentMachine.slug}`}
                      className="p-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow shrink-0"
                      title="View Full Specifications"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-xs font-mono mt-4">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Max Speed</span>
                    <span className="text-slate-900 font-bold font-sora">{currentMachine.operatingCapabilities.maxSpeed}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Stitch Length</span>
                    <span className="text-slate-900 font-bold font-sora">{currentMachine.operatingCapabilities.stitchLength}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Drive Motor</span>
                    <span className="text-brand-700 font-bold truncate block">{currentMachine.operatingCapabilities.motorPower}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-slate-600 font-medium">Select Flagship Unit:</span>
                  <div className="flex space-x-1.5">
                    {heroMachines.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => setActiveHeroModel(idx)}
                        className={`text-xs font-mono px-2.5 py-1 rounded transition-all ${
                          idx === activeHeroModel
                            ? 'bg-brand-600 text-white font-bold shadow'
                            : 'bg-slate-100 text-slate-700 hover:text-brand-700 border border-slate-200'
                        }`}
                      >
                        {m.modelNumber.split('-')[1] || `0${idx + 1}`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-3 mt-1">
                  <Link
                    to={`/request-quote?model=${encodeURIComponent(currentMachine.modelNumber)}`}
                    className="text-brand-700 hover:text-brand-900 font-semibold flex items-center space-x-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-brand-600" />
                    <span>Request Quote for this Model &rarr;</span>
                  </Link>
                  <span className="text-[11px] text-emerald-600 font-mono font-medium">In Stock &bull; Ready to Dispatch</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
