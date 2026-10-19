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

const FALLBACK_IMAGE = '/images/neutral-placeholder.svg';

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
        role={alt ? 'img' : undefined}
        aria-label={alt ? `${alt} (image unavailable)` : undefined}
        aria-hidden={!alt}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <svg aria-hidden="true" viewBox="0 0 120 90" className="h-1/2 w-1/2 text-[#78956b]" fill="none">
          <ellipse cx="60" cy="56" rx="44" ry="14" stroke="currentColor" strokeWidth="3" />
          <path d="M17 55c5 15 20 23 43 23s38-8 43-23M31 53c2 7 12 12 29 12s27-5 29-12M60 65V25m0 25C42 50 33 39 36 27c14-1 24 7 24 23Zm0-8c1-15 10-23 24-22 1 12-8 22-24 23Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
