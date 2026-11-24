import React, { useState } from 'react';
import { 
  Maximize2 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { galleryItems } from '../data/galleryData';
import { ImageLightbox } from '../components/common/ImageLightbox';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'machinery' | 'facility' | 'assembly' | 'quality' | 'projects'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const lightboxImages = filteredItems.map(item => item.imageUrl);

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Gallery' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Machinery & Facility Visuals
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ Real shop floor photography
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2A1A0E] font-heading">
              Industrial Imagery & Plant <span className="font-serif italic font-normal text-[#D4621A]">Gallery</span>
            </h1>
            <p className="text-base text-[#5C4533] leading-relaxed font-sans">
              Explore photography of our actual machinery, assembly floor, 72-hour burn-in testing bays, timing stations, and client industrial installations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-8">
        
        {/* Category Filter Pills */}
        <ScrollReveal>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar font-mono text-xs">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'machinery', label: 'Industrial Machinery' },
              { id: 'facility', label: 'Kolhapur Plant Floor' },
              { id: 'assembly', label: 'Precision Assembly' },
              { id: 'quality', label: '72H QA Testing' },
              { id: 'projects', label: 'Factory Deployments' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === tab.id
                    ? 'btn-metallic text-white font-bold shadow-md'
                    : 'bg-white text-[#5C4533] hover:text-[#2A1A0E] border border-[#E8D4BE]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} delay={(idx % 6) * 0.08}>
              <div
                onClick={() => setActiveLightboxIndex(idx)}
                className="bg-white border border-[#E8D4BE] rounded-[28px] overflow-hidden group cursor-pointer hover:border-[#D4621A] hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-[#FAFBF7] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`w-full h-full ${item.imageUrl.startsWith('/images/') ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  />

                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/95 text-[#D4621A] border border-[#E8D4BE] shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 text-[#2A1A0E] opacity-0 group-hover:opacity-100 transition-opacity border border-[#E8D4BE] shadow-md">
                    <Maximize2 className="w-4 h-4 text-[#D4621A]" />
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-[#2A1A0E] text-lg font-display group-hover:text-[#D4621A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C4533] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <ImageLightbox
          isOpen={activeLightboxIndex !== null}
          onClose={() => setActiveLightboxIndex(null)}
          images={lightboxImages}
          initialIndex={activeLightboxIndex}
          title={filteredItems[activeLightboxIndex]?.title}
        />
      )}

    </div>
  );
};
