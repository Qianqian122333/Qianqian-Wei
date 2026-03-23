"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSplash } from "./SplashContext";

type HeroWord = { text: string; primary: boolean };

const heroTextLines: HeroWord[][] = [
  [
    { text: "Hi!", primary: false },
    { text: "I", primary: false },
    { text: "am", primary: false },
    { text: "Qianqian.", primary: true },
  ],
  [
    { text: "The", primary: false },
    { text: "UX", primary: true },
    { text: "designer", primary: true },
    { text: "&", primary: false },
    { text: "Front-end", primary: true },
  ],
  [
    { text: "Developer", primary: true },
    { text: "who", primary: false },
    { text: "drives.", primary: false },
  ],
];

const totalWordCount = heroTextLines.flat().length;

const techStack: Array<{ icon: string; label: string; invert?: boolean }> = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/typescript.svg", label: "TypeScript" },
  { icon: "/react.svg", label: "React" },
  { icon: "/next.svg", label: "Next.js", invert: true },
  { icon: "/nodejs.svg", label: "Node.js" },
  { icon: "/sql.svg", label: "SQL" },
];

export default function HeroSection() {
  const [showWords, setShowWords] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [iconsAnimating, setIconsAnimating] = useState(false);
  const [heroTilted, setHeroTilted] = useState(false);
  const { entered } = useSplash();

  useEffect(() => {
    if (!entered) return;
    const t1 = setTimeout(() => setShowWords(true), 300);
    const t2 = setTimeout(
      () => setShowContent(true),
      300 + totalWordCount * 70 + 400,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [entered]);

  // Hero image tilt: tilt on click/hover, auto-restore after 600ms
  const triggerHeroTilt = () => {
    if (heroTilted) return;
    setHeroTilted(true);
    setTimeout(() => setHeroTilted(false), 600);
  };

  let wordIndex = 0;

  return (
    <section className="w-full min-h-[80vh] flex items-center overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-14">
        {/* Left: Hero Image — tilt on click/hover, auto-restore */}
        <div
          className={`w-full md:w-[45%] flex justify-center shrink-0 transition-all duration-700 ease-out ${
            showWords ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <Image
            src="/home-hero.png"
            alt="Qianqian Wei"
            width={2000}
            height={2000}
            className={`w-full max-w-[98vw] sm:max-w-[98vw] md:max-w-[1100px] lg:max-w-[1400px] h-auto object-contain transition-transform duration-500 ease-out cursor-pointer ${
              heroTilted ? "rotate-[6deg] scale-[1.02]" : "rotate-0 scale-100"
            }`}
            priority
            onClick={triggerHeroTilt}
            onMouseEnter={triggerHeroTilt}
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start gap-10">
          {/* Hero Text — tilted 4deg, word-by-word reveal */}
          <div className="font-kalam text-[2.25rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-tight rotate-[4deg] origin-center md:origin-left">
            {heroTextLines.map((line, lineIdx) => (
              <div key={lineIdx}>
                {line.map((word, wIdx) => {
                  const currentIdx = wordIndex++;
                  return (
                    <span
                      key={wIdx}
                      className={`inline-block mr-2 sm:mr-3 transition-all duration-400 ease-out ${
                        word.primary ? "text-primary" : "text-foreground"
                      } ${
                        showWords
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                      style={{ transitionDelay: `${currentIdx * 70}ms` }}
                    >
                      {word.text}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Three Images — hover to move */}
          <div
            className={`w-full max-w-md transition-all duration-700 ease-out ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid grid-cols-5 gap-3">
              {/* Business — left, takes 3 cols */}
              <div className="col-span-3 rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-2 hover:-translate-x-1 cursor-pointer">
                <Image
                  src="/home-business.png"
                  alt="Business Design"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* User — right, takes 2 cols */}
              <div className="col-span-2 rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 cursor-pointer">
                <Image
                  src="/home-user.png"
                  alt="User Research"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Code — bottom full width, click toggles icon animation */}
              <div className="col-span-5">
                <div
                  className="rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:translate-y-2 cursor-pointer"
                  onClick={() => setIconsAnimating((prev) => !prev)}
                >
                  <Image
                    src="/home-code.png"
                    alt="Code Development"
                    width={600}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Icons — animate only when iconsAnimating is true */}
          <div
            className={`
              grid grid-cols-5 grid-rows-2 gap-3 items-start justify-items-center transition-all duration-700 ease-out
              md:gap-5 md:justify-start
              ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: "200ms" }}
          >
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 md:gap-1.5 group"
              >
                <div
                  className={iconsAnimating ? "hero-icon-float" : ""}
                  style={
                    iconsAnimating
                      ? {
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2.5 + (i % 3) * 0.5}s`,
                        }
                      : undefined
                  }
                >
                  <div className="w-7 h-7 sm:w-7 sm:h-7 md:w-7 md:h-7 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.label}
                      fill
                      className={`object-contain ${
                        tech.invert ? "brightness-0 invert" : ""
                      }`}
                    />
                  </div>
                </div>
                <span
                  className={`text-[9px] sm:text-[9px] md:text-[10px] text-foreground/50 whitespace-nowrap transition-all duration-300 ${
                    iconsAnimating ? "hero-label-float" : ""
                  }`}
                  style={
                    iconsAnimating
                      ? {
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2.5 + (i % 3) * 0.5}s`,
                        }
                      : undefined
                  }
                >
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
