import React, { useEffect, useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const FALLBACK_IMAGE = '/images/areca-leaf-plates.webp';

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setHasFailed(false);
  }, [src]);

  if (hasFailed) {
    return (
      <div
        className={`flex items-center justify-center bg-[#EBF5EC] text-sm font-medium text-[#0F4D26] dark:bg-[#183622] dark:text-[#d7f9dc] ${className}`}
        role="img"
        aria-label={`${alt} (image unavailable)`}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={className}
      onError={() => {
        if (imageSrc !== FALLBACK_IMAGE) {
          setImageSrc(FALLBACK_IMAGE);
        } else {
          setHasFailed(true);
        }
      }}
    />
  );
};
