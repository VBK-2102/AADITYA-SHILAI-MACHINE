import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="text-white">
          <h4 className="text-sm font-semibold text-industrial-100 font-display">
            {title || 'Machinery Visual Inspection'}
          </h4>
          <span className="text-xs font-mono text-brand-400">
            Image {currentIndex + 1} of {images.length}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-lg bg-industrial-900 border border-purple-900/50 text-industrial-200 hover:text-white hover:bg-industrial-800 transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-industrial-900 border border-purple-900/50 text-industrial-200 hover:text-white hover:bg-rose-950 transition-colors"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={title || 'Machinery Photo'}
          className={`max-h-[80vh] max-w-full object-contain rounded-lg transition-transform duration-300 select-none ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Prev / Next buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 p-3 rounded-full bg-industrial-900/80 border border-purple-900/60 text-white hover:bg-brand-900/90 transition-all shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 p-3 rounded-full bg-industrial-900/80 border border-purple-900/60 text-white hover:bg-brand-900/90 transition-all shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 overflow-x-auto py-2 z-10">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsZoomed(false);
              }}
              className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                idx === currentIndex ? 'border-brand-400 scale-105 shadow-purple-glow' : 'border-industrial-800 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumb" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
