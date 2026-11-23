import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Grid, 
  List, 
  Sliders, 
  Download, 
  Eye, 
  FileText, 
  RotateCcw
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { storage } from '../services/storage';
import { categories } from '../data/categories';
import { Product } from '../types';
import { ImageLightbox } from '../components/common/ImageLightbox';
import { BrochureModal } from '../components/common/BrochureModal';
import { DemoBadge } from '../components/common/DemoBadge';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'speed' | 'model'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [activeLightboxProduct, setActiveLightboxProduct] = useState<Product | null>(null);
  const [activeBrochureProduct, setActiveBrochureProduct] = useState<Product | null>(null);

  const allProducts = useMemo(() => storage.getProducts(), []);

  // Filter & Search logic
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.categoryId === selectedCategory;
        const matchesSearch = 
          searchQuery === '' ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.applications.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'speed') {
          const speedA = parseInt(a.operatingCapabilities.maxSpeed.replace(/\D/g, '')) || 0;
          const speedB = parseInt(b.operatingCapabilities.maxSpeed.replace(/\D/g, '')) || 0;
          return speedB - speedA;
        }
        if (sortBy === 'model') {
          return a.modelNumber.localeCompare(b.modelNumber);
        }
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  const handleCategorySelect = (catSlug: string) => {
    setSelectedCategory(catSlug);
    if (catSlug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catSlug);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-10 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Machinery Catalogue' }]} />
          
          <div className="max-w-3xl space-y-2 mt-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Certified Machinery Portfolio & Specifications
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ All models factory bench-tested
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Industrial Sewing Machinery <span className="font-serif italic font-normal text-brand-600">Catalogue</span>
            </h1>
            <p className="text-sm text-slate-600 font-sans">
              Browse our complete lineup of heavy-duty Umbrella machines, computerized direct-drive lockstitch units, multi-pattern zig-zag stitchers, overlockers, and bag closers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        
        {/* Search, Filter & View Controls Bar */}
        <ScrollReveal>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Box */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by model (e.g. ASM-UMB-950, ASM-DD-9000), application or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
              />
            </div>

            {/* Category Dropdown (Mobile / Quick) */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategorySelect(e.target.value)}
                aria-label="Filter by Machinery Family"
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
              >
                <option value="all">All Categories ({allProducts.length})</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort Machinery by"
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
              >
                <option value="featured">Featured First</option>
                <option value="speed">Max Speed (SPM)</option>
                <option value="model">Model Number (A-Z)</option>
              </select>
            </div>

            {/* View Mode & Reset Buttons */}
            <div className="md:col-span-2 flex items-center justify-between md:justify-end space-x-2">
              <button
                onClick={handleResetFilters}
                className="text-xs font-mono text-slate-600 hover:text-slate-900 px-2.5 py-2 rounded-lg bg-slate-100 border border-slate-200 flex items-center space-x-1"
                title="Reset Filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>

              <div className="flex items-center space-x-1 bg-slate-100 border border-slate-200 rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-brand-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                  title="Grid View"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-brand-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                  title="List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pt-2 border-t border-slate-200 no-scrollbar font-mono text-xs">
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-brand-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Machinery
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> industrial machinery models
          </span>
          {searchQuery && (
            <span>Search keyword: "{searchQuery}"</span>
          )}
        </div>

        {/* Products Display (Grid View) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 6) * 0.08}>
                <div
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-500 hover:shadow-lg transition-all duration-300 shadow-sm h-full"
                >
                <div>
                  {/* Image Stage */}
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

                    <button
                      onClick={() => setActiveLightboxProduct(product)}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 text-slate-700 hover:text-white hover:bg-brand-600 transition-all border border-slate-200 shadow-sm"
                      title="Inspect Machinery Photos"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
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

                    {/* Quick Specs Matrix */}
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">MAX SPEED</span>
                        <span className="text-slate-900 font-semibold">{product.operatingCapabilities.maxSpeed}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">STITCH LENGTH</span>
                        <span className="text-slate-900 font-semibold">{product.operatingCapabilities.stitchLength}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">NEEDLE TYPE</span>
                        <span className="text-brand-700 font-semibold truncate block">{product.operatingCapabilities.needleType}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">WARRANTY</span>
                        <span className="text-slate-900 font-semibold">{product.warrantyYears} Years</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 border-t border-slate-200 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => setActiveBrochureProduct(product)}
                    className="text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center space-x-1 py-2"
                  >
                    <Download className="w-3.5 h-3.5 text-brand-700" />
                    <span>Brochure</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                      className="btn-metallic text-xs font-bold text-white px-3 py-2 rounded-lg flex items-center space-x-1.5 shadow-purple-glow"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>RFQ</span>
                    </Link>

                    <Link
                      to={`/products/${product.slug}`}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                    >
                      <span>Details</span>
                    </Link>
                  </div>
                </div>

              </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 6) * 0.08}>
                <div
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-500 hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
                >
                  <div className="flex items-center space-x-5 w-full md:w-auto">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-xl bg-slate-100 border border-slate-200 shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-brand-700">{product.modelNumber}</span>
                        <DemoBadge isDemoConfig={product.isDemoConfig} />
                      </div>
                      <Link to={`/products/${product.slug}`}>
                        <h3 className="font-bold text-slate-900 text-base hover:text-brand-700 font-display">
                          {product.name}
                        </h3>
                      </Link>
                      <span className="text-xs text-slate-600 block font-mono">
                        Speed: {product.operatingCapabilities.maxSpeed} &bull; Needle: {product.operatingCapabilities.needleType} &bull; Motor: {product.operatingCapabilities.motorPower}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 w-full md:w-auto justify-end border-t md:border-t-0 border-slate-200 pt-3 md:pt-0">
                    <button
                      onClick={() => setActiveBrochureProduct(product)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-3 py-2 rounded-lg flex items-center space-x-1 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-brand-700" />
                      <span>Brochure</span>
                    </button>

                    <Link
                      to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                      className="btn-metallic text-xs font-bold text-white px-4 py-2 rounded-lg flex items-center space-x-1.5 shadow-purple-glow"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Request Quote</span>
                    </Link>

                    <Link
                      to={`/products/${product.slug}`}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                    >
                      <span>Full Specs &rarr;</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-sm">
            <Sliders className="w-10 h-10 text-brand-700 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No machinery models match your criteria</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Try adjusting your search terms or selecting a different machinery category.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn-metallic text-xs font-semibold text-white px-5 py-2.5 rounded-xl inline-flex items-center space-x-2"
            >
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

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

      {/* Brochure Modal */}
      {activeBrochureProduct && (
        <BrochureModal
          isOpen={!!activeBrochureProduct}
          onClose={() => setActiveBrochureProduct(null)}
          product={activeBrochureProduct}
        />
      )}
    </div>
  );
};
