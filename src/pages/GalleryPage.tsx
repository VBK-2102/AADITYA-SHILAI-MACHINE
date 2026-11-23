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
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Gallery' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Machinery & Facility Visuals
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Real shop floor photography
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Industrial Imagery & Plant <span className="font-serif italic font-normal text-brand-600">Gallery</span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
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
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === tab.id
                    ? 'bg-brand-600 text-white font-bold shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
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
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group cursor-pointer hover:border-brand-500 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-white/95 text-brand-700 border border-purple-200 shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200 shadow-md">
                    <Maximize2 className="w-4 h-4 text-brand-700" />
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base font-display group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
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
