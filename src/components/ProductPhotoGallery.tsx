import React, { useState } from 'react';
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
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#F5F1E7] dark:bg-[#183622]">
        <ProductImage
          src={activePhoto.src}
          alt={activePhoto.alt}
          width={activePhoto.width}
          height={activePhoto.height}
          className="h-full w-full object-cover"
        />
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
