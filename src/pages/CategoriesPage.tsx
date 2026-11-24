import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { categories } from '../data/categories';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-10 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Categories' }]} />
          
          <div className="max-w-3xl space-y-2 mt-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Machinery Classification
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ 8 specialized engineering families
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2A1A0E] font-heading">
              Industrial Machinery <span className="font-serif italic font-normal text-[#D4621A]">Categories</span>
            </h1>
            <p className="text-sm text-[#5C4533] font-sans">
              Explore our 8 specialized engineering families designed for specific textile, leather, denim, canvas, and agro-packaging production lines.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <ScrollReveal key={cat.id} delay={(idx % 3) * 0.1}>
              <div
                className="bg-white border border-[#E8D4BE] rounded-[28px] overflow-hidden flex flex-col justify-between group hover:border-[#D4621A] hover:shadow-xl transition-all duration-300 shadow-sm h-full"
              >
                <div>
                    <div className="relative aspect-video overflow-hidden bg-white p-2">
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className={`w-full h-full ${cat.imageUrl.startsWith('/images/') ? 'object-contain p-2' : 'object-cover rounded-2xl'} group-hover:scale-105 transition-transform duration-500`}
                      />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/95 text-[#D4621A] border border-[#E8D4BE] shadow-sm">
                        {cat.productCount} Models
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="text-xl font-bold text-[#2A1A0E] font-display group-hover:text-[#D4621A] transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-xs font-mono text-[#D4621A]">{cat.subtitle}</p>
                    <p className="text-xs text-[#5C4533] leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#5C4533] block mb-1.5 font-bold">
                        Common Applications:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.popularApplications.map((app, i) => (
                          <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FEF3E2] text-[#5C4533] border border-[#E8D4BE]">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F0DEC9] mt-4">
                  <Link
                    to={`/products/category/${cat.slug}`}
                    className="w-full btn-metallic text-xs font-bold text-white py-3 rounded-full flex items-center justify-center space-x-2 text-center"
                  >
                    <span>Explore {cat.name} &rarr;</span>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
