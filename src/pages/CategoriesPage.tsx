import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { categories } from '../data/categories';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-10 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Categories' }]} />
          
          <div className="max-w-3xl space-y-2 mt-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Machinery Classification
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ 8 specialized engineering families
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Industrial Machinery <span className="font-serif italic font-normal text-brand-600">Categories</span>
            </h1>
            <p className="text-sm text-slate-600 font-sans">
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
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-500 hover:shadow-lg transition-all duration-300 shadow-sm h-full"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white/95 text-brand-700 border border-purple-200 shadow-sm">
                        {cat.productCount} Models
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="text-xl font-bold text-slate-900 font-display group-hover:text-brand-700 transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-xs font-mono text-brand-700">{cat.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5 font-bold">
                        Common Applications:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.popularApplications.map((app, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200 mt-4">
                  <Link
                    to={`/products/category/${cat.slug}`}
                    className="w-full btn-metallic text-xs font-bold text-white py-2.5 rounded-xl flex items-center justify-center space-x-2 text-center"
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
