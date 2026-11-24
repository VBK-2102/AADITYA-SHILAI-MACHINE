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
        <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl border border-[#E8D4BE] shadow-sm">
          <h2 className="text-2xl font-bold text-[#2A1A0E] font-display">Category Not Found</h2>
          <p className="text-xs text-[#5C4533]">
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
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Categories', href: '/categories' },
              { label: category.name }
            ]}
          />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Machinery Family Overview
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ Factory certified models
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2A1A0E] font-heading">
              {category.name}
            </h1>
            <p className="text-base text-[#D4621A] font-mono">
              {category.subtitle}
            </p>
            <p className="text-sm text-[#5C4533] leading-relaxed font-sans">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-10">
        
        {/* Category Key Applications Banner */}
        <ScrollReveal>
          <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-[#2A1A0E] font-display">Common Production Line Applications:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {category.popularApplications.map((app, i) => (
                  <span key={i} className="text-xs font-mono px-3.5 py-1 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/request-quote"
              className="btn-metallic text-xs text-white font-bold px-6 py-3 rounded-full shrink-0 shadow-md hover:shadow-lg transition-all"
            >
              Request Batch Quote for this Category
            </Link>
          </div>
        </ScrollReveal>

        {/* Products in this category */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#2A1A0E] font-display">
            Available Models in this Category ({categoryProducts.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 3) * 0.1}>
                <div
                  className="bg-white border border-[#E8D4BE] rounded-[28px] overflow-hidden flex flex-col justify-between group hover:border-[#D4621A] hover:shadow-lg transition-all duration-300 shadow-sm h-full"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-[#FAFBF7] overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white text-[#2A1A0E] border border-[#E8D4BE] shadow-sm">
                          {product.modelNumber}
                        </span>
                        <DemoBadge isDemoConfig={product.isDemoConfig} />
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <Link to={`/products/${product.slug}`} className="block">
                        <h3 className="font-bold text-[#2A1A0E] text-lg hover:text-[#D4621A] transition-colors line-clamp-1 font-display">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-[#5C4533] line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                        <div className="bg-[#FAFBF7] p-2.5 rounded-xl border border-[#E8D4BE]">
                          <span className="text-[10px] text-[#5C4533] block">SPEED</span>
                          <span className="text-[#2A1A0E] font-semibold">{product.operatingCapabilities.maxSpeed}</span>
                        </div>
                        <div className="bg-[#FAFBF7] p-2.5 rounded-xl border border-[#E8D4BE]">
                          <span className="text-[10px] text-[#5C4533] block">STITCH</span>
                          <span className="text-[#2A1A0E] font-semibold">{product.operatingCapabilities.stitchLength}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E8D4BE] flex items-center justify-between gap-3 mt-4">
                    <Link
                      to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                      className="btn-metallic text-xs font-bold text-white px-4 py-2.5 rounded-full flex items-center space-x-1.5 shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#F4AE52]" />
                      <span>Get Quote</span>
                    </Link>

                    <Link
                      to={`/products/${product.slug}`}
                      className="btn-dark-metallic text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                    >
                      <span>Full Details &rarr;</span>
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-[28px] border border-[#E8D4BE] p-8 space-y-3 shadow-sm">
              <p className="text-xs text-[#5C4533]">
                Models for this specialized series are built to order. Contact our engineering team for customized specifications.
              </p>
              <Link to="/request-quote" className="btn-metallic text-xs text-white px-6 py-2.5 rounded-full inline-block">
                Inquire Custom Specification
              </Link>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
