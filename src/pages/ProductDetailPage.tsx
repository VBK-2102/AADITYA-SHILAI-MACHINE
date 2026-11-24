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
        <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-[28px] border border-[#E8D4BE] shadow-sm">
          <h2 className="text-2xl font-bold text-[#2A1A0E] font-display">Machinery Model Not Found</h2>
          <p className="text-xs text-[#5C4533]">
            The requested industrial model does not exist or has been relocated in our catalogue.
          </p>
          <Link to="/products" className="btn-metallic text-xs text-white font-semibold px-5 py-2.5 rounded-full inline-block">
            &larr; Back to Machinery Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen pb-20">
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-4">
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
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-white border border-[#E8D4BE] shadow-lg group">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={`${product.name} View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges on main image */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold px-3.5 py-1 rounded-full bg-white/95 text-[#2A1A0E] border border-[#E8D4BE] shadow-sm">
                    {product.modelNumber}
                  </span>
                  <DemoBadge isDemoConfig={product.isDemoConfig} />
                </div>

                {/* Lightbox Zoom Button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-4 right-4 bg-white/95 text-[#2A1A0E] border border-[#E8D4BE] text-xs px-3.5 py-2 rounded-full flex items-center space-x-1.5 shadow-md hover:border-[#D4621A] hover:text-[#D4621A] transition-colors"
                  title="Fullscreen Lightbox Zoom"
                >
                  <Eye className="w-4 h-4 text-[#D4621A]" />
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
                      className={`w-20 h-20 rounded-[16px] overflow-hidden border-2 transition-all shrink-0 ${
                        idx === selectedImageIndex
                          ? 'border-[#D4621A] scale-105 shadow-md'
                          : 'border-[#E8D4BE] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-contain p-1 bg-white" />
                    </button>
                  ))}
                </div>
              )}

              {/* Factory Verification Callout */}
              <div className="bg-[#FAF0E0]/70 border border-[#E8D4BE] rounded-[24px] p-5 flex items-start space-x-3.5">
                <ShieldCheck className="w-5 h-5 text-[#D4621A] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5C4533]">
                  <span className="font-bold text-[#2A1A0E] block">Kolhapur Factory Bench-Tested:</span>
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
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4621A] font-bold">
                    {product.categoryName}
                  </span>
                  <span className="text-[#E8D4BE]">&bull;</span>
                  <span className="text-xs font-mono text-[#D4621A] font-semibold flex items-center space-x-1.5">
                    <span className="dot-neon"></span>
                    <span>In Stock & Ready for Dispatch</span>
                  </span>
                  <span className="font-caveat text-sm text-[#D4621A] font-bold -rotate-1 select-none">
                    ~ Factory bench-tested
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-[#2A1A0E] font-heading leading-tight">
                  {product.name}
                </h1>

                <p className="text-xs font-mono text-[#5C4533]">
                  Model: <strong className="text-[#D4621A] font-sora">{product.modelNumber}</strong> &bull; Warranty: <strong className="text-[#2A1A0E] font-sora">{product.warrantyYears} Years</strong> Factory Warranty
                </p>
              </div>

              <p className="text-sm text-[#5C4533] leading-relaxed font-sans">
                {product.fullDescription}
              </p>

              {/* Structured Operating Capabilities Matrix */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4621A] font-bold">
                  Core Operating Capabilities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                  <div className="bg-white p-3 rounded-2xl border border-[#E8D4BE]">
                    <span className="text-[10px] text-[#5C4533] block uppercase font-mono">Max Speed</span>
                    <span className="text-[#2A1A0E] font-bold font-sora">{product.operatingCapabilities.maxSpeed}</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-[#E8D4BE]">
                    <span className="text-[10px] text-[#5C4533] block uppercase font-mono">Stitch Length</span>
                    <span className="text-[#2A1A0E] font-bold font-sora">{product.operatingCapabilities.stitchLength}</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-[#E8D4BE]">
                    <span className="text-[10px] text-[#5C4533] block uppercase font-mono">Motor Power</span>
                    <span className="text-[#D4621A] font-bold truncate block font-sora">{product.operatingCapabilities.motorPower}</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-[#E8D4BE]">
                    <span className="text-[10px] text-[#5C4533] block uppercase font-mono">Head Weight</span>
                    <span className="text-[#2A1A0E] font-bold font-sora">{product.operatingCapabilities.weight}</span>
                  </div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4621A] font-bold">
                  Key Engineering Highlights
                </h3>
                <ul className="space-y-1.5 text-xs text-[#2A1A0E]">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4621A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Box */}
              <div className="pt-4 border-t border-[#E8D4BE] flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to={`/request-quote?model=${encodeURIComponent(product.modelNumber)}`}
                  className="btn-metallic text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center space-x-2 text-center"
                >
                  <FileText className="w-4 h-4 text-[#F4AE52]" />
                  <span>Request Quotation for {product.modelNumber}</span>
                </Link>

                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className="btn-dark-metallic text-sm font-semibold px-7 py-3.5 rounded-full flex items-center justify-center space-x-2 text-center"
                >
                  <Download className="w-4 h-4 text-[#D4621A]" />
                  <span>Technical Brochure</span>
                </button>
              </div>

              {/* Direct Helpline */}
              <div className="pt-2 text-xs text-[#5C4533] flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D4621A]" />
                <span>
                  Need immediate bulk pricing or spare parts availability? Call{' '}
                  <a href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`} className="text-[#D4621A] font-bold hover:underline">
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
            <div className="border-b border-[#E8D4BE] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Factory Engineering Parameters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1A0E] font-display">
                Technical Specifications & Dimensions
              </h2>
            </div>

            <div className="bg-white border border-[#E8D4BE] rounded-[28px] overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-[#FAF0E0] border-b border-[#E8D4BE] font-mono text-[#D4621A] text-xs">
                    <th className="py-3.5 px-6 uppercase tracking-wider w-1/3">Specification Parameter</th>
                    <th className="py-3.5 px-6 uppercase tracking-wider">Engineered Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0DEC9]">
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFBF7]'}>
                      <td className="py-3.5 px-6 font-mono text-[#5C4533] font-medium">{key}</td>
                      <td className="py-3.5 px-6 font-mono text-[#2A1A0E] font-semibold">{val}</td>
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
            <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[#2A1A0E] font-display flex items-center space-x-2">
                <Zap className="w-5 h-5 text-[#D4621A]" />
                <span>Verified Industrial Applications</span>
              </h3>
              <p className="text-xs text-[#5C4533]">
                Tested across active production floors in garment export hubs, packaging plants, and tailoring ateliers.
              </p>
              <ul className="space-y-2 text-xs text-[#2A1A0E]">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center space-x-2 bg-[#FEF3E2] p-3 rounded-2xl border border-[#E8D4BE]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4621A] shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[#2A1A0E] font-display flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#D4621A]" />
                <span>Compatible Fabrics & Materials</span>
              </h3>
              <p className="text-xs text-[#5C4533]">
                Calibrated needle penetration rates without skipped stitches or thread knot bunching.
              </p>
              <ul className="space-y-2 text-xs text-[#2A1A0E]">
                {product.materialsSupported.map((mat, idx) => (
                  <li key={idx} className="flex items-center space-x-2 bg-[#FEF3E2] p-3 rounded-2xl border border-[#E8D4BE]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4621A] shrink-0" />
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
            <div className="space-y-6 pt-6 border-t border-[#E8D4BE]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-[#D4621A] font-bold block">
                    Complementary Equipment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2A1A0E] font-display">
                    Related Machinery in {product.categoryName}
                  </h3>
                </div>
                <Link to="/products" className="text-xs font-mono text-[#D4621A] hover:text-[#1E1108] font-semibold">
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div key={rel.id} className="bg-white border border-[#E8D4BE] rounded-[24px] overflow-hidden p-5 space-y-3 shadow-sm hover:border-[#D4621A] hover:shadow-md transition-all">
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-full h-36 object-contain rounded-xl bg-white p-2 border border-[#F0DEC9]"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-[#D4621A] font-bold">{rel.modelNumber}</span>
                      <h4 className="font-bold text-[#2A1A0E] text-sm line-clamp-1">{rel.name}</h4>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#F0DEC9] text-xs">
                      <span className="font-mono text-[#5C4533]">{rel.operatingCapabilities.maxSpeed}</span>
                      <Link to={`/products/${rel.slug}`} className="text-[#D4621A] hover:text-[#1E1108] font-semibold">
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
      {isLightboxOpen && (
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          images={product.images}
          initialIndex={selectedImageIndex}
          title={`${product.modelNumber} - ${product.name}`}
        />
      )}

      {/* Technical Brochure Printable Sheet */}
      {isBrochureOpen && (
        <BrochureModal
          isOpen={isBrochureOpen}
          onClose={() => setIsBrochureOpen(false)}
          product={product}
        />
      )}
    </div>
  );
};
