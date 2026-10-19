import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { ProductImage } from './ProductImage';

interface ProductPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProductPhotoGalleryProps {
  productName: string;
  photos: readonly ProductPhoto[];
}

export const ProductPhotoGallery: React.FC<ProductPhotoGalleryProps> = ({ productName, photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activePhoto = photos[activeIndex];

  useEffect(() => {
    if (photos.length < 2 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, isPaused, photos.length]);

  return (
    <div role="group" aria-label={`${productName} photos`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#F5F1E7] dark:bg-[#183622]">
        <ProductImage
          src={activePhoto.src}
          alt={activePhoto.alt}
          width={activePhoto.width}
          height={activePhoto.height}
          className="h-full w-full object-cover"
        />
        {photos.length > 1 && (
          <>
            <button
              type="button"
              aria-label={`Previous ${productName} photo`}
              onClick={() => setActiveIndex((index) => (index + photos.length - 1) % photos.length)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0F4D26] shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:bg-[#13271A]/90 dark:text-[#d7f9dc] dark:hover:bg-[#13271A]"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={`Next ${productName} photo`}
              onClick={() => setActiveIndex((index) => (index + 1) % photos.length)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0F4D26] shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:bg-[#13271A]/90 dark:text-[#d7f9dc] dark:hover:bg-[#13271A]"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
            <span className="sr-only" aria-live="off">
              Photo {activeIndex + 1} of {photos.length}
            </span>
          </>
        )}
      </div>
      {photos.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2" role="group" aria-label={`Choose a ${productName} photo`}>
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Show photo ${index + 1} of ${photos.length} for ${productName}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] ${
                  index === activeIndex
                    ? 'w-6 bg-[#1F7A3A] dark:bg-[#82d991]'
                    : 'w-2.5 bg-[#B9CDBB] hover:bg-[#6f9f78] dark:bg-[#457a50] dark:hover:bg-[#82d991]'
                }`}
              >
                <span className="sr-only">{photo.alt}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={isPaused ? `Play ${productName} slideshow` : `Pause ${productName} slideshow`}
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#0F4D26] transition-colors hover:bg-[#EBF5EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] dark:text-[#d7f9dc] dark:hover:bg-[#183622]"
          >
            {isPaused
              ? <Play aria-hidden="true" className="h-4 w-4" />
              : <Pause aria-hidden="true" className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
};
