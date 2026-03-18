"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
}

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        className={`relative group cursor-zoom-in overflow-hidden rounded-xl border border-border shadow-md transition-all hover:shadow-lg ${className}`}
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 800}
          className={`w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] ${imageClassName}`}
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-background/90 p-2 text-foreground opacity-80 backdrop-blur-sm transition-all group-hover:opacity-100 shadow-sm border border-border/50 flex items-center justify-center gap-2 px-4 pointer-events-none">
          <ZoomIn className="h-4 w-4" />
          <span className="text-xs font-medium">Click to expand</span>
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 rounded-full bg-muted p-2 text-foreground hover:bg-muted/80 transition-colors z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-full w-full max-w-5xl max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
