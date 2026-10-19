import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const activePhoto = photos[activeIndex];

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
            <span className="sr-only" aria-live="polite">
              Photo {activeIndex + 1} of {photos.length}
            </span>
          </>
        )}
      </div>
      {photos.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={`Choose a ${productName} photo`}>
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${index + 1} of ${photos.length} for ${productName}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A3A] ${
                index === activeIndex
                  ? 'border-[#1F7A3A] dark:border-[#82d991]'
                  : 'border-transparent hover:border-[#9cc7a6] dark:hover:border-[#457a50]'
              }`}
            >
              <ProductImage
                src={photo.src}
                alt=""
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
