import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Layers, 
  Zap
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { storage } from '../services/storage';
import { ImageLightbox } from '../components/common/ImageLightbox';
import { BrochureModal } from '../components/common/BrochureModal';
import { DemoBadge } from '../components/common/DemoBadge';
import { companyInfo } from '../data/companyInfo';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = useMemo(() => {
    return slug ? storage.getProductBySlug(slug) : undefined;
  }, [slug]);

  const allProducts = useMemo(() => storage.getProducts(), []);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Related products from same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
      .slice(0, 3);
  }, [allProducts, product]);

  if (!product) {
    return (
      <div className="bg-transparent min-h-screen py-24 text-center px-4">
        <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 font-display">Machinery Model Not Found</h2>
          <p className="text-xs text-slate-600">
            The requested industrial model does not exist or has been relocated in our catalogue.
          </p>
          <Link to="/products" className="btn-metallic text-xs text-white font-semibold px-5 py-2.5 rounded-xl inline-block">
            &larr; Back to Machinery Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Catalogue', href: '/products' },
              { label: product.categoryName, href: `/products/category/${product.categoryId}` },
              { label: product.modelNumber }
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-14">
        
        {/* Main Product Showcase (Image Gallery & Key Specs) */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Interactive Multi-Image Gallery with Zoom */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Primary Main Image with Zoom Trigger */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg group">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={`${product.name} View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges on main image */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-white/95 text-slate-900 border border-slate-200 shadow-sm">
                    {product.modelNumber}
                  </span>
                  <DemoBadge isDemoConfig={product.isDemoConfig} />
                </div>

                {/* Lightbox Zoom Button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-4 right-4 bg-white/90 text-slate-800 border border-slate-200 text-xs px-3 py-2 rounded-lg flex items-center space-x-1.5 shadow-md hover:border-brand-500 transition-colors"
                  title="Fullscreen Lightbox Zoom"
                >
                  <Eye className="w-4 h-4 text-brand-700" />
                  <span>Zoom & Inspect</span>
                </button>
              </div>

              {/* Thumbnail Navigation Row */}
              {product.images.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        idx === selectedImageIndex
                          ? 'border-brand-600 scale-105 shadow-md'
                          : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Factory Verification Callout */}
              <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block">Kolhapur Factory Bench-Tested:</span>
                  <span>
                    Each {product.modelNumber} unit undergoes a 72-hour continuous stitch test with 0.05 mm timing clearance before packaging.
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Technical Overview, Key Parameters & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold">
                    {product.categoryName}
                  </span>
                  <span className="text-slate-300">&bull;</span>
                  <span className="text-xs font-mono text-emerald-700 font-semibold">In Stock & Ready for Dispatch</span>
                  <span className="font-caveat text-sm text-brand-700 font-bold -rotate-1 select-none">
                    ~ Factory bench-tested
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                  {product.name}
                </h1>

                <p className="text-xs font-mono text-slate-600">
                  Model: <strong className="text-brand-700 font-sora">{product.modelNumber}</strong> &bull; Warranty: <strong className="text-slate-900 font-sora">{product.warrantyYears} Years</strong> Factory Warranty
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {product.fullDescription}
              </p>

              {/* Structured Operating Capabilities Matrix */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold">
                  Core Operating Capabilities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Max Speed</span>
                    <span className="text-slate-900 font-bold font-sora">{product.operatingCapabilities.maxSpeed}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Stitch Length</span>
                    <span className="text-slate-900 font-bold font-sora">{product.operatingCapabilities.stitchLength}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Motor Power</span>
                    <span className="text-brand-700 font-bold truncate block font-sora">{product.operatingCapabilities.motorPower}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Head Weight</span>
                    <span className="text-slate-900 font-bold font-sora">{product.operatingCapabilities.weight}</span>
                  </div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold">
                  Key Engineering Highlights
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Box */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                  className="btn-metallic text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-purple-glow-lg border border-brand-400/40 flex items-center justify-center space-x-2 text-center"
                >
                  <FileText className="w-4 h-4 text-purple-200" />
                  <span>Request Quotation for {product.modelNumber}</span>
                </Link>

                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-sm font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center space-x-2 text-center transition-colors"
                >
                  <Download className="w-4 h-4 text-brand-700" />
                  <span>Technical Brochure</span>
                </button>
              </div>

              {/* Direct Helpline */}
              <div className="pt-2 text-xs text-slate-600 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-700" />
                <span>
                  Need immediate bulk pricing or spare parts availability? Call{' '}
                  <a href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`} className="text-brand-700 font-bold hover:underline">
                    {companyInfo.contact.primaryPhone}
                  </a>
                </span>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Comprehensive Technical Specifications Table */}
        <ScrollReveal>
          <div className="space-y-6 pt-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Factory Engineering Parameters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Technical Specifications & Dimensions
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 font-mono text-brand-700 text-xs">
                    <th className="py-3 px-6 uppercase tracking-wider w-1/3">Specification Parameter</th>
                    <th className="py-3 px-6 uppercase tracking-wider">Engineered Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-3 px-6 font-mono text-slate-700 font-medium">{key}</td>
                      <td className="py-3 px-6 font-mono text-slate-900 font-semibold">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Verified Applications & Compatible Materials */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center space-x-2">
                <Zap className="w-5 h-5 text-brand-700" />
                <span>Verified Industrial Applications</span>
              </h3>
              <p className="text-xs text-slate-600">
                Tested across active production floors in garment export hubs, packaging plants, and tailoring ateliers.
              </p>
              <ul className="space-y-2 text-xs text-slate-800">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center space-x-2">
                <Layers className="w-5 h-5 text-brand-700" />
                <span>Compatible Fabrics & Materials</span>
              </h3>
              <p className="text-xs text-slate-600">
                Calibrated needle penetration rates without skipped stitches or thread knot bunching.
              </p>
              <ul className="space-y-2 text-xs text-slate-800">
                {product.materialsSupported.map((mat, idx) => (
                  <li key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Related Machinery Recommendations */}
        {relatedProducts.length > 0 && (
          <ScrollReveal>
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-brand-700 font-bold block">
                    Complementary Equipment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Related Machinery in {product.categoryName}
                  </h3>
                </div>
                <Link to="/products" className="text-xs font-mono text-brand-700 hover:text-brand-900 font-semibold">
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div key={rel.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 space-y-3 shadow-sm hover:border-brand-500 hover:shadow-md transition-all">
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-full h-36 object-cover rounded-lg bg-slate-100"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-brand-700 font-bold">{rel.modelNumber}</span>
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{rel.name}</h4>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                      <span className="font-mono text-slate-500">{rel.operatingCapabilities.maxSpeed}</span>
                      <Link to={`/products/${rel.slug}`} className="text-brand-700 hover:text-brand-900 font-semibold">
                        Inspect &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={product.images}
        initialIndex={selectedImageIndex}
        title={`${product.modelNumber} - ${product.name}`}
      />

      {/* Technical Brochure Printable Sheet */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        product={product}
      />
    </div>
  );
};
