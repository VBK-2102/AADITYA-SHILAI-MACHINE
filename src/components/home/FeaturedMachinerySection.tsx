import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  Eye, 
  Zap, 
  Download
} from 'lucide-react';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { Product } from '../../types';
import { ImageLightbox } from '../common/ImageLightbox';
import { BrochureModal } from '../common/BrochureModal';
import { DemoBadge } from '../common/DemoBadge';

export const FeaturedMachinerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxProduct, setActiveLightboxProduct] = useState<Product | null>(null);
  const [activeBrochureProduct, setActiveBrochureProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products.slice(0, 6)
    : products.filter(p => p.categoryId === selectedCategory);

  return (
    <section className="py-20 relative border-b border-slate-200 bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-brand-700 uppercase tracking-widest font-semibold">
              <Zap className="w-3.5 h-3.5 text-brand-600" />
              <span>Certified Industrial Machinery Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              <span className="font-serif italic font-normal text-brand-600">Engineered</span> for{' '}
              <span className="text-brand-700">Continuous Duty</span>
            </h2>
            <p className="text-sm text-slate-600 font-sans">
              Explore our core machinery lineup. Each unit is precision-assembled with hardened alloy gears, verified oiling loops, and high-tensile frame castings.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <span className="font-caveat text-xl text-brand-700 font-bold select-none">
              ~ 100% bench-tested before delivery
            </span>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-brand-700 hover:text-brand-900 bg-white border border-slate-200 hover:border-purple-300 px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow"
            >
              <span>View Complete Catalogue ({products.length} Models)</span>
              <ArrowRight className="w-4 h-4 text-brand-600" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar font-mono text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-brand-600 text-white font-bold shadow'
                : 'bg-white text-slate-700 hover:text-brand-700 border border-slate-200 shadow-sm'
            }`}
          >
            All Machinery ({products.length})
          </button>

          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-brand-600 text-white font-bold shadow'
                  : 'bg-white text-slate-700 hover:text-brand-700 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card-industrial rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 hover:border-brand-600 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/95 text-slate-900 border border-slate-200 shadow-sm">
                      {product.modelNumber}
                    </span>
                    <DemoBadge isDemoConfig={product.isDemoConfig} />
                  </div>

                  {/* Quick Action Overlay (Lightbox) */}
                  <button
                    onClick={() => setActiveLightboxProduct(product)}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/95 text-slate-700 hover:text-white hover:bg-brand-600 transition-all border border-slate-200 shadow"
                    title="Zoom & Inspect Photos"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <span className="text-[11px] font-mono uppercase text-brand-700 tracking-wider block font-bold">
                    {product.categoryName}
                  </span>

                  <Link to={`/products/${product.slug}`} className="block">
                    <h3 className="font-bold text-slate-900 text-base hover:text-brand-700 transition-colors line-clamp-1 font-display">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Structured Quick Specs Table */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">MAX SPEED</span>
                      <span className="text-slate-900 font-bold font-sora">{product.operatingCapabilities.maxSpeed}</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">STITCH LENGTH</span>
                      <span className="text-slate-900 font-bold">{product.operatingCapabilities.stitchLength}</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">NEEDLE TYPE</span>
                      <span className="text-brand-700 font-bold truncate block">{product.operatingCapabilities.needleType}</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">WARRANTY</span>
                      <span className="text-slate-900 font-bold">{product.warrantyYears} Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveBrochureProduct(product)}
                  className="text-xs font-mono text-slate-600 hover:text-brand-700 flex items-center space-x-1 py-2 font-medium"
                >
                  <Download className="w-3.5 h-3.5 text-brand-600" />
                  <span>Brochure</span>
                </button>

                <div className="flex items-center space-x-2">
                  <Link
                    to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                    className="btn-metallic text-xs font-bold text-white px-3 py-2 rounded-lg flex items-center space-x-1.5 shadow"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </Link>

                  <Link
                    to={`/products/${product.slug}`}
                    className="btn-dark-metallic text-xs font-semibold px-3 py-2 rounded-lg"
                  >
                    <span>Details</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxProduct && (
        <ImageLightbox
          isOpen={!!activeLightboxProduct}
          onClose={() => setActiveLightboxProduct(null)}
          images={activeLightboxProduct.images}
          title={`${activeLightboxProduct.modelNumber} - ${activeLightboxProduct.name}`}
        />
      )}

      {/* Technical Brochure Modal */}
      {activeBrochureProduct && (
        <BrochureModal
          isOpen={!!activeBrochureProduct}
          onClose={() => setActiveBrochureProduct(null)}
          product={activeBrochureProduct}
        />
      )}
    </section>
  );
};
