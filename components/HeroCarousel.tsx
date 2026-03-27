"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import { useSplash } from "./SplashContext";

/* ── Typewriter text for Slide 1 ── */
function TypewriterText({ trigger }: { trigger: boolean }) {
  const line1 = [
    { t: "Hi!", c: "text-foreground" },
    { t: "I", c: "text-foreground" },
    { t: "am", c: "text-foreground" },
    { t: "Qianqian.", c: "text-foreground" },
  ];
  
  const line2 = [
    { t: "The", c: "text-foreground" },
    { t: "UX", c: "text-[#DB7937]" },
    { t: "Designer", c: "text-[#DB7937]" },
    { t: "&", c: "text-foreground" },
    { t: "Front-end", c: "text-[#DB7937]" },
    { t: "Developer", c: "text-[#DB7937]" },
    { t: "who", c: "text-foreground" },
    { t: "drives.", c: "text-foreground" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-2 md:gap-y-4 h-full content-center max-w-2xl mx-auto cursor-default group">
      {/* Line 1 */}
      <div className="flex flex-wrap justify-center gap-x-3 transition-transform duration-500">
        {line1.map((w, i) => (
          <span
            key={"L1" + i}
            className={`inline-block font-kalam text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:transition-none group-hover:animate-wave-float ${w.c} ${
              trigger
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: `${i * 280}ms`,
              animationDelay: `${i * 100}ms`
            }}
          >
            {w.t}
          </span>
        ))}
      </div>
      {/* Line 2 */}
      <div className="flex flex-wrap justify-center gap-x-3 transition-transform duration-500">
        {line2.map((w, i) => (
          <span
            key={"L2" + i}
            className={`inline-block font-kalam text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:transition-none group-hover:animate-wave-float ${w.c} ${
              trigger
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: `${(line1.length + i) * 280}ms`,
              animationDelay: `${(line1.length + i) * 100}ms` 
            }}
          >
            {w.t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Chapter badge (centered label with subtitle) ── */
function ChapterBadge({ text, subtitle, colorClass = "text-[#DB7937]" }: { text: string, subtitle?: string, colorClass?: string }) {
  return (
    <div className="flex flex-col items-center mb-2 md:mb-6 w-full gap-1">
      <span className={`${colorClass} font-kalam text-2xl sm:text-3xl md:text-4xl font-bold`}>
        {text}
      </span>
      {subtitle && (
        <span className="text-foreground font-kalam text-lg sm:text-xl md:text-2xl font-bold">
          {subtitle}
        </span>
      )}
    </div>
  );
}

/* ── Slide definitions ── */
function Slide1({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full h-full p-6 pl-14 sm:p-8 sm:pl-16 md:p-12 md:pl-20 min-h-[560px] md:min-h-[640px]">
      {/* Left: image */}
      <div className="w-full md:w-[45%] flex justify-center shrink-0">
        <Image
          src="/home-hero-about.webp"
          alt="About Qianqian"
          width={600}
          height={600}
          className="w-full max-w-[320px] md:max-w-[400px] h-auto object-contain rounded-xl"
          priority
        />
      </div>
      {/* Right: chapter + text + button */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center text-center gap-6 md:gap-8 min-h-[300px]">
        <ChapterBadge text="Chapter 1" subtitle="Qianqian" />
        <div className="min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex items-center justify-center w-full">
          <TypewriterText trigger={active} />
        </div>
        <div className="flex justify-center w-full mt-2">
          <PrimaryButton href="/about">Learn More About Me</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full h-full p-6 pl-14 sm:p-8 sm:pl-16 md:p-12 md:pl-20 min-h-[560px] md:min-h-[640px]">
      {/* Left: text content */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center text-center gap-6 md:gap-8 order-2 md:order-1 min-h-[300px]">
        <ChapterBadge text="Chapter 2" subtitle="Kaleido ColorLab" colorClass="text-[#B3EF5E]" />
        <p className="text-foreground text-2xl sm:text-3xl md:text-4xl leading-relaxed font-kalam max-w-sm md:max-w-lg font-bold">
          <span className="block mb-3 text-foreground">Solved the real user pain.</span>
          <span className="block text-[#B3EF5E]">Turned a no-belief project into the company&apos;s top initiative.</span>
        </p>
        <div className="flex justify-center w-full mt-2">
          <a
            href="/projects/kaleido-colorlab"
            className="inline-flex h-12 md:h-14 items-center justify-center rounded-lg bg-[#B3EF5E] px-8 py-3 font-semibold text-[#1a1a1a] transition-all hover:bg-[#a1d854] hover:scale-105 shadow-md font-kalam text-lg min-w-[260px]"
          >
            Explore Kaleido ColorLab
          </a>
        </div>
      </div>
      {/* Right: image */}
      <div className="w-full md:w-[45%] flex justify-center shrink-0 order-1 md:order-2">
        <Image
          src="/home-hero-project.webp"
          alt="Real World Project"
          width={600}
          height={600}
          className="w-full max-w-[320px] md:max-w-[400px] h-auto object-contain rounded-xl"
        />
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full h-full p-6 pl-14 sm:p-8 sm:pl-16 md:p-12 md:pl-20 min-h-[560px] md:min-h-[640px]">
      {/* Left: image */}
      <div className="w-full md:w-[45%] flex justify-center shrink-0">
        <Image
          src="/home-hero-contact.webp"
          alt="Contact Qianqian"
          width={600}
          height={600}
          className="w-full max-w-[320px] md:max-w-[400px] h-auto object-contain rounded-xl"
        />
      </div>
      {/* Right: chapter badge + contact info */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center text-center gap-6 md:gap-8 min-h-[300px]">
        <ChapterBadge text="Chapter 3" subtitle="Contact Me" colorClass="text-[#5B7BC0]" />

        <div className="flex flex-col gap-6 w-full max-w-md mx-auto font-kalam">
          {/* Email */}
          <a
            href="mailto:qianqianwei112233@gmail.com"
            className="flex flex-row items-center justify-center gap-3 text-foreground hover:text-[#5B7BC0] transition-colors group"
          >
            <Mail className="w-6 h-6 shrink-0 text-[#5B7BC0]" />
            <span className="text-lg sm:text-xl md:text-2xl group-hover:underline font-bold">
              qianqianwei112233@gmail.com
            </span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/qianqianwei112233/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-3 text-foreground hover:text-[#5B7BC0] transition-colors group"
          >
            <Linkedin className="w-6 h-6 shrink-0 text-[#5B7BC0]" />
            <span className="text-lg sm:text-xl md:text-2xl group-hover:underline font-bold">
              linkedin.com/in/qianqianwei112233
            </span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Qianqian122333"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-3 text-foreground hover:text-[#5B7BC0] transition-colors group"
          >
            <Github className="w-6 h-6 shrink-0 text-[#5B7BC0]" />
            <span className="text-lg sm:text-xl md:text-2xl group-hover:underline font-bold">
              github.com/Qianqian122333
            </span>
          </a>
        </div>

        <div className="flex justify-center w-full mt-2">
          <a
            href="/contact"
            className="inline-flex h-12 md:h-14 items-center justify-center rounded-lg bg-[#5B7BC0] px-8 py-3 font-semibold text-foreground transition-all hover:bg-[#4a6bb0] hover:scale-105 shadow-md font-kalam text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Carousel with page-flip transition ── */
const SLIDE_COUNT = 3;
const AUTO_INTERVAL = 8000;

export default function HeroCarousel() {
  const { entered } = useSplash();
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev") => {
      if (flipping) return;
      setDirection(dir);
      setFlipping(true);
      // After slide animation completes, switch the slide
      setTimeout(() => {
        setCurrent(idx);
        setFlipping(false);
      }, 600);
    },
    [flipping],
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDE_COUNT, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDE_COUNT) % SLIDE_COUNT, "prev");
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!entered || isHovered) return;
    timeoutRef.current = setTimeout(next, AUTO_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, entered, next, flipping, isHovered]);

  const slides = [
    <Slide1 key="s1" active={entered && current === 0 && !flipping} />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
  ];

  // Determine next slide index for revealing under the flip
  const nextIdx =
    direction === "next"
      ? (current + 1) % SLIDE_COUNT
      : (current - 1 + SLIDE_COUNT) % SLIDE_COUNT;

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center py-8 md:py-16 items-center relative">
      <div 
        className="mx-auto max-w-7xl w-full px-4 sm:px-8 relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel container */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-xl border-2 border-foreground/80 min-h-[560px] md:min-h-[640px]">
          {/* Left Spine (Black Rectangle) */}
          <div className="absolute left-0 top-0 bottom-0 w-10 md:w-14 bg-[#0a0a0a] border-r-2 border-foreground/20 z-10 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.5)]" />
          
          {/* Page numbers */}
          <div className="absolute right-4 bottom-4 z-40 font-kalam text-foreground/50 text-xl md:text-2xl font-bold select-none">
            {current + 1}
          </div>

          {/* Slides Container */}
          {flipping ? (
            direction === "next" ? (
              // NEXT: Current slides left out, Next slides left in
              <>
                <div className="absolute inset-0 z-10 hero-slide-next-out">
                  {slides[current]}
                </div>
                <div className="relative z-20 hero-slide-next-in">
                  {slides[nextIdx]}
                </div>
              </>
            ) : (
              // PREV: Current slides right out, Next slides right in
              <>
                <div className="absolute inset-0 z-10 hero-slide-prev-out">
                  {slides[current]}
                </div>
                <div className="relative z-20 hero-slide-prev-in">
                  {slides[nextIdx]}
                </div>
              </>
            )
          ) : (
            // STATIC: Just show current
            <div className="relative z-20">
              {slides[current]}
            </div>
          )}

          {/* Arrow controls */}
          <button
            onClick={prev}
            className="absolute left-10 md:left-14 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-foreground shadow-[0_0_10px_rgba(0,0,0,0.5)] border-2 border-foreground/20 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-110 z-40 transform -rotate-2"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-foreground shadow-[0_0_10px_rgba(0,0,0,0.5)] border-2 border-foreground/20 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-110 z-40 transform rotate-2"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation dots outside the capsule container */}
      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === current) return;
              goTo(i, i > current ? "next" : "prev");
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              i === current
                ? "bg-[#1a1a1a] border-foreground scale-125 shadow-[0_0_8px_rgba(255,248,225,0.6)]"
                : "bg-transparent border-foreground/50 hover:bg-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
