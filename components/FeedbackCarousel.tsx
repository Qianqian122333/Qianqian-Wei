"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ZoomableImage from "./ZoomableImage";

interface FeedbackCarouselProps {
  images: string[];
}

export default function FeedbackCarousel({ images }: FeedbackCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by roughly the width of one image (around 85% of container)
      const scrollAmount = clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative group">
      {/* Mobile/Tablet slider */}
      <div className="md:hidden relative w-full overflow-hidden">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 shadow-md backdrop-blur-md transition-opacity ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 shadow-md backdrop-blur-md transition-opacity ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex w-full snap-x snap-mandatory overflow-x-auto gap-4 px-[7.5%] pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[85%] shrink-0 snap-center rounded-xl bg-white flex items-center justify-center p-2 shadow-sm"
            >
              <ZoomableImage
                src={src}
                alt={`User Feedback ${index + 1}`}
                width={600}
                height={800}
                className="w-full h-full"
                imageClassName="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout (hidden on mobile) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <ZoomableImage
            key={index}
            src={src}
            alt={`User Feedback ${index + 1}`}
            width={600}
            height={800}
            className="w-full h-full bg-white rounded-xl flex items-center justify-center p-2 shadow-sm"
            imageClassName="w-full h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
