import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { categories } from '../data/categories';
import { storage } from '../services/storage';
import { DemoBadge } from '../components/common/DemoBadge';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = useMemo(() => {
    return categories.find(c => c.slug === categorySlug || c.id === categorySlug);
  }, [categorySlug]);

  const allProducts = useMemo(() => storage.getProducts(), []);

  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return allProducts.filter(p => p.categoryId === category.id || p.categoryId === category.slug);
  }, [allProducts, category]);

  if (!category) {
    return (
      <div className="bg-transparent min-h-screen py-24 text-center px-4">
        <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 font-display">Category Not Found</h2>
          <p className="text-xs text-slate-600">
            The requested machinery category could not be located.
          </p>
          <Link to="/categories" className="btn-metallic text-xs text-white font-semibold px-5 py-2.5 rounded-xl inline-block">
            &larr; View All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Category Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Categories', href: '/categories' },
              { label: category.name }
            ]}
          />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Machinery Family Overview
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Factory certified models
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              {category.name}
            </h1>
            <p className="text-base text-brand-700 font-mono">
              {category.subtitle}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-10">
        
        {/* Category Key Applications Banner */}
        <ScrollReveal>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-display">Common Production Line Applications:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {category.popularApplications.map((app, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded bg-purple-50 text-brand-700 border border-purple-200">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/request-quote"
              className="btn-metallic text-xs text-white font-bold px-5 py-2.5 rounded-xl shrink-0"
            >
              Request Batch Quote for this Category
            </Link>
          </div>
        </ScrollReveal>

        {/* Products in this category */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 font-display">
            Available Models in this Category ({categoryProducts.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 3) * 0.1}>
                <div
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-500 hover:shadow-lg transition-all duration-300 shadow-sm h-full"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/95 text-slate-900 border border-slate-200 shadow-sm">
                          {product.modelNumber}
                        </span>
                        <DemoBadge isDemoConfig={product.isDemoConfig} />
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <Link to={`/products/${product.slug}`} className="block">
                        <h3 className="font-bold text-slate-900 text-base hover:text-brand-700 transition-colors line-clamp-1 font-display">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                        <div className="bg-slate-50 p-2 rounded border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">SPEED</span>
                          <span className="text-slate-900 font-semibold">{product.operatingCapabilities.maxSpeed}</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">STITCH</span>
                          <span className="text-slate-900 font-semibold">{product.operatingCapabilities.stitchLength}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-200 flex items-center justify-between gap-3 mt-4">
                    <Link
                      to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                      className="btn-metallic text-xs font-bold text-white px-3 py-2 rounded-lg flex items-center space-x-1.5 shadow-purple-glow"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </Link>

                    <Link
                      to={`/products/${product.slug}`}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                    >
                      <span>Full Details &rarr;</span>
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3 shadow-sm">
              <p className="text-xs text-slate-600">
                Models for this specialized series are built to order. Contact our engineering team for customized specifications.
              </p>
              <Link to="/request-quote" className="btn-metallic text-xs text-white px-4 py-2 rounded-xl inline-block">
                Inquire Custom Specification
              </Link>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
