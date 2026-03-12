import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Search,
  Map,
  Users,
  Heart,
  Route,
  Waypoints,
  LayoutTemplate,
  Network,
  Component,
  SmartphoneNfc,
  Languages,
  Handshake,
  Mic,
  BookOpen,
  GitBranch,
  Briefcase,
  KanbanSquare,
  FileText,
} from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";

const uxSkills = [
  { icon: Search, label: "User Research" },
  { icon: Map, label: "Competitive Analysis" },
  { icon: Users, label: "User Persona" },
  { icon: Heart, label: "Empathy Map" },
  { icon: Route, label: "User Journey" },
  { icon: Waypoints, label: "User Flow" },
  { icon: LayoutTemplate, label: "Wireframe" },
  { icon: Network, label: "Information Architecture" },
  { icon: Component, label: "Design System" },
  { icon: SmartphoneNfc, label: "High Fidelity Prototype" },
];

const codingSkills = [
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/typescript.svg", label: "TypeScript" },
  { icon: "/react.svg", label: "React" },
  { icon: "/nextjs.png", label: "Next.js" },
  { icon: "/nodejs.svg", label: "Node.js" },
  { icon: "/sql.svg", label: "Database (SQL, Prisma)" },
];

const teamworkSkills = [
  { icon: Mic, label: "Presentation & Public Speaking" },
  { icon: BookOpen, label: "Technical Storytelling" },
  { icon: GitBranch, label: "Cross-functional Collaboration" },
  { icon: Briefcase, label: "Stakeholder Management" },
  { icon: KanbanSquare, label: "Agile Methodology" },
  { icon: FileText, label: "Documentation" },
];

const languageSkills = [
  { letter: "En", label: "English (3-year work experience)" },
  { letter: "中", label: "Chinese (Native)" },
  { letter: "Nl", label: "Dutch (Beginner)" },
  { letter: "あ", label: "Japanese (Beginner)" },
];

const journeySteps = [
  {
    title:
      "1. From UCL Graduate to Tech Explorer: A Career Talk That Revealed My True Interest",
    desc: "A post-graduation career talk changed my path. Hearing a sociology graduate enter tech made me realize—UX and front-end were what I genuinely wanted to pursue.",
    image: "/about-journey.png",
  },
  {
    title:
      "2. User First by Day, Learner by Night: How My Frontline Job Fueled My UX Passion",
    desc: "My Customer Experience role put me face-to-face with real users daily. Talking with diverse audiences taught me to truly understand their needs—while after work, I dedicated evenings to learning UX and coding.",
    image: "/about-journey2.png",
  },
  {
    title:
      "3. Building a Dual Skillset: Mastering UX and Front-End Through Non-Stop Learning",
    desc: "I completed the Google UX Design Certificate while mastering HTML, CSS, JavaScript, TypeScript, React, and Next.js through intensive courses and practice.",
    image: "/about-journey3.png",
  },
  {
    title:
      "4. From Self-Taught to Professional: Recognition That Led to Owning Two End-to-End Projects",
    desc: "I stepped into a UX Designer & Front-End Developer role. I owned two projects from concept to code, and led holiday campaigns with full-stack implementation.",
    image: "/about-journey4.png",
  },
  {
    title:
      "5. Lifelong Learner: Pursuing a Master's in IT While Working Full-Time",
    desc: "Growth never stops. Alongside my full-time job, I'm now pursuing a Master's in Information Technology.",
    image: "/about-journey5.png",
  },
];

export default function Home() {
  return (
    <main className="w-full pb-24 bg-background">
      {/* ───── Section 1: Hero ───── */}
      <section className="w-full">
        <Image
          src="/about-hero.png"
          alt="Hero"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </section>

      {/* ───── Section 2: Real-World Projects ───── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-20 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
          Real-World Projects 🚀
        </h2>

        <div className="flex flex-col gap-28">
          {/* Project 1 */}
          <div className="flex flex-col items-center gap-6 text-center">
            <Link
              href="/projects/kaleido-colorlab"
              className="w-full max-w-4xl mb-8 overflow-hidden rounded-xl"
            >
              <Image
                src="/about-project1.png"
                alt="Kaleido ColorLab Project Preview"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </Link>
            <h3 className="font-kalam text-3xl font-bold text-primary">
              Kaleido ColorLab 🎨
            </h3>
            <p className="text-sm text-foreground/60 font-medium">
              2025.11 - 2026.03
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
                UX Designer
              </span>
              <span className="rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
                Full-Stack Developer
              </span>
            </div>
            <p className="max-w-2xl text-foreground leading-relaxed mb-4">
              Experiment with colors, create precise mixing formulas, match
              colors from images, and turn ideas into real paint results, all in
              one place.
            </p>
            <PrimaryButton href="/projects/kaleido-colorlab">
              Read More
            </PrimaryButton>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center gap-6 text-center pt-8 border-t border-foreground/10">
            <Link
              href="#"
              className="w-full max-w-4xl mb-8 overflow-hidden rounded-xl"
            >
              <Image
                src="/about-project2.png"
                alt="Gaahleri Shop Project Preview"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </Link>
            <h3 className="font-kalam text-3xl font-bold text-primary">
              Gaahleri Shop 🛍️
            </h3>
            <p className="text-sm text-foreground/60 font-medium">
              2025.08 - Present
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
                UX Designer
              </span>
              <span className="rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
                Front-end Developer
              </span>
            </div>
            <p className="max-w-2xl text-foreground leading-relaxed mb-4">
              Experiment with colors, create precise mixing formulas, match
              colors from images, and turn ideas into real paint results, all in
              one place.
            </p>
            <PrimaryButton href="#">Read More</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ───── Section 3: Work Experience ───── */}
      <section className="w-full py-24 bg-background-alt">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
            Work Experience 💼
          </h2>

          {/* ------------- MOBILE / TABLET (VERTICAL TIMELINE) ------------- */}
          <div className="relative flex flex-col gap-16 lg:hidden">
            {/* Hand-drawn crayon timeline & arrow (Vertical) */}
            <div className="absolute left-[39px] top-[-16px] bottom-[-20px] w-8 -ml-4 z-0 text-foreground/50">
              <svg width="100%" height="100%" preserveAspectRatio="none" className="absolute inset-0 overflow-visible">
                <line 
                  x1="16" y1="24" x2="16" y2="100%" 
                  stroke="currentColor" strokeWidth="3" 
                  strokeDasharray="8 5 12 4 6 5" 
                  strokeLinecap="round" strokeLinejoin="round" 
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" className="absolute top-[0px] left-[4px] overflow-visible">
                <polyline 
                  points="4,14 12,4 20,14" 
                  fill="none" stroke="currentColor" strokeWidth="3" 
                  strokeLinecap="round" strokeLinejoin="round" 
                />
              </svg>
            </div>

            {/* Job 1 — Current: Gaahleri */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start gap-6">
                <Link href="https://www.gaahleri.com/" target="_blank" className="shrink-0 w-20 h-20 rounded-full border-2 border-primary bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-primary/80 transition-all shadow-sm">
                  <Image src="/gaahleri.jpg" alt="Gaahleri" width={80} height={80} className="w-full h-full object-cover" />
                </Link>
                <div className="mt-2 text-foreground">
                  <div className="flex flex-col gap-1 mb-1">
                    <h3 className="font-kalam text-2xl font-bold text-primary">
                      UX Engineer
                    </h3>
                    <span className="w-max inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                      Current
                    </span>
                  </div>
                  <p className="text-base font-medium text-foreground/90">Gaahleri</p>
                  <p className="mt-0.5 text-sm text-foreground/50">2025.08 — Present · Ningbo, China</p>
                </div>
              </div>
              <ul className="pl-0 space-y-2 text-sm text-foreground/80 leading-relaxed list-disc ml-[88px] sm:ml-[104px]">
                <li>
                  Lead end-to-end UX design for the company&apos;s e-commerce platform—from user research and wireframing to high-fidelity prototypes and usability testing.
                </li>
                <li>
                  Translate design deliverables into production-ready code using React, Next.js, TypeScript, and Tailwind CSS, ensuring pixel-perfect implementation.
                </li>
                <li>
                  Build and maintain a scalable design system and reusable component library that accelerates feature delivery across teams.
                </li>
                <li>
                  Collaborate closely with product managers and back-end engineers to align user needs with business goals and technical constraints.
                </li>
              </ul>
            </div>

            {/* Job 2 — Previous: ATG */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start gap-6">
                <Link href="https://www.atgentertainment.com/" target="_blank" className="shrink-0 w-20 h-20 rounded-full border-2 border-foreground/20 bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-foreground/50 transition-all shadow-sm">
                  <Image src="/atg.jpg" alt="ATG" width={80} height={80} className="w-full h-full object-cover" />
                </Link>
                <div className="mt-2 text-foreground">
                  <h3 className="font-kalam text-2xl font-bold text-primary">
                    Customer Experience Specialist
                  </h3>
                  <p className="text-base font-medium text-foreground/90 mt-1">ATG</p>
                  <p className="mt-0.5 text-sm text-foreground/50">2023.10 — 2025.06 · London, UK</p>
                </div>
              </div>
              <ul className="pl-0 space-y-2 text-sm text-foreground/80 leading-relaxed list-disc ml-[88px] sm:ml-[104px]">
                <li>
                  Engaged directly with a diverse customer base, developing deep empathy for user pain points and expectations across multiple touchpoints.
                </li>
                <li>
                  Analysed customer feedback data to identify recurring UX friction, presenting actionable insights to the product team that informed feature prioritisation.
                </li>
                <li>
                  Designed and documented internal workflow improvements that reduced average resolution time while elevating service quality.
                </li>
                <li>
                  Self-studied UX design and front-end development during evenings, completing the Google UX Design Certificate and building personal projects.
                </li>
              </ul>
            </div>
          </div>

          {/* ------------- DESKTOP (HORIZONTAL TIMELINE) ------------- */}
          <div className="hidden lg:block relative mt-12 w-full">
            {/* Hand-drawn crayon timeline & arrow (Horizontal) */}
            <div className="absolute top-[24px] left-[56px] right-0 h-8 z-0 text-foreground/50">
              <svg width="100%" height="100%" preserveAspectRatio="none" className="absolute inset-0 overflow-visible">
                <line 
                  x1="24" y1="16" x2="100%" y2="16" 
                  stroke="currentColor" strokeWidth="3" 
                  strokeDasharray="8 5 12 4 6 5" 
                  strokeLinecap="round" strokeLinejoin="round" 
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" className="absolute left-[-4px] top-[4px] overflow-visible">
                <polyline 
                  points="10,4 2,12 10,20" 
                  fill="none" stroke="currentColor" strokeWidth="3" 
                  strokeLinecap="round" strokeLinejoin="round" 
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-16 relative z-10 w-[95%]">
              {/* Job 1 */}
              <div className="flex flex-col items-start px-4">
                <div className="flex items-center gap-2 mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-foreground/50 shrink-0">
                    <polyline points="12,2 4,10 12,18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                <Link href="https://www.gaahleri.com/" target="_blank" className="w-20 h-20 rounded-full border-2 border-primary bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-primary/80 transition-all shadow-sm">
                  <Image src="/gaahleri.jpg" alt="Gaahleri" width={80} height={80} className="w-full h-full object-cover" />
                </Link>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-kalam text-2xl font-bold text-primary">
                    UX Engineer
                  </h3>
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    Current
                  </span>
                </div>
                <p className="text-base font-medium text-foreground/90">Gaahleri</p>
                <p className="mt-1 mb-4 text-sm text-foreground/50">2025.08 — Present · Ningbo, China</p>
                <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed list-disc list-outside ml-4">
                  <li>
                    Lead end-to-end UX design for the company&apos;s e-commerce platform—from user research and wireframing to high-fidelity prototypes and usability testing.
                  </li>
                  <li>
                    Translate design deliverables into production-ready code using React, Next.js, TypeScript, and Tailwind CSS, ensuring pixel-perfect implementation.
                  </li>
                  <li>
                    Build and maintain a scalable design system and reusable component library that accelerates feature delivery across teams.
                  </li>
                  <li>
                    Collaborate closely with product managers and back-end engineers to align user needs with business goals and technical constraints.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="flex flex-col items-start px-4">
                <Link href="https://www.atgentertainment.com/" target="_blank" className="w-20 h-20 mb-6 rounded-full border-2 border-foreground/20 bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-foreground/50 transition-all shadow-sm">
                  <Image src="/atg.jpg" alt="ATG" width={80} height={80} className="w-full h-full object-cover" />
                </Link>
                <h3 className="font-kalam text-2xl font-bold text-primary mb-2">
                  Customer Experience Specialist
                </h3>
                <p className="text-base font-medium text-foreground/90">ATG</p>
                <p className="mt-1 mb-4 text-sm text-foreground/50">2023.10 — 2025.06 · London, UK</p>
                <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed list-disc list-outside ml-4">
                  <li>
                    Engaged directly with a diverse customer base, developing deep empathy for user pain points and expectations across multiple touchpoints.
                  </li>
                  <li>
                    Analysed customer feedback data to identify recurring UX friction, presenting actionable insights to the product team that informed feature prioritisation.
                  </li>
                  <li>
                    Designed and documented internal workflow improvements that reduced average resolution time while elevating service quality.
                  </li>
                  <li>
                    Self-studied UX design and front-end development during evenings, completing the Google UX Design Certificate and building personal projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 4: Education Background ───── */}
      <section className="w-full py-24 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
            Education Background 🎓
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-3/5">
              <Image
                src="/about-education.png"
                alt="My Education"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <h3 className="font-kalam text-3xl font-bold text-primary">
                Keep Learning, Keep Crossing 
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Across four years of undergraduate study, I pursued two
                degrees—not because I had to, but because I wanted to understand
                more. Then came UCL, then a UX certification earned while
                working full-time, and now an IT master&apos;s alongside my role
                as a UX engineer. For me, learning isn&apos;t a phase—it&apos;s
                how I build. Every new skill, every discipline, every line of
                code makes its way into the products I create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 5: My Skills ───── */}
      <section className="w-full py-24 bg-background-alt">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-16 font-kalam font-bold text-4xl text-primary md:text-6xl text-center">
            My Skills 🛠️
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UX */}
            <div className="rounded-2xl border border-border bg-background-alt p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Image
                    src="/figma.svg"
                    alt="Figma"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">UX</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {uxSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Coding */}
            <div className="rounded-2xl border border-border bg-background-alt p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Coding</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {codingSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.label}
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                    />
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Teamwork */}
            <div className="rounded-2xl border border-border bg-background-alt p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Teamwork</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {teamworkSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-2xl border border-border bg-background-alt p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languageSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    <span className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                      {skill.letter}
                    </span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 6: Journey ───── */}
      <section className="w-full py-24 bg-background">
        <div className="mx-auto max-w-350 px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
            My Journey to UX Designer & Front-End Developer 🌱
          </h2>

          <div className="flex flex-col gap-16">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={step.image}
                    alt={`Journey Step ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-4/3"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="font-kalam font-bold text-2xl md:text-3xl text-primary leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Section 7: Learn More About Me ───── */}
      <section className="w-full py-24 bg-background-alt">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
            Learn More About Me ✨
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 — Hanfu Model */}
            <div className="group rounded-2xl border border-border bg-background p-6">
              <div className="w-full aspect-4/3 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/hanfu.jpg"
                  alt="Hanfu Model"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-kalam text-xl font-bold text-primary mb-2">
                Part-Time Hanfu Model 💃
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I work as a part-time Hanfu model — I love styling, makeup, and dressing up. I believe everyday life is a form of design, and I aim to craft each day into something I truly enjoy.
              </p>
            </div>

            {/* Card 2 — Early Bird */}
            <div className="group rounded-2xl border border-border bg-background p-6">
              <div className="w-full aspect-4/3 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/morning.jpg"
                  alt="Early Bird"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-kalam text-xl font-bold text-primary mb-2">
                Early Bird & Morning Workout 🏋️
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I go to bed at 10 PM and wake up early every day to exercise with morning aerobics. This early-bird routine is my secret weapon for staying focused and productive.
              </p>
            </div>

            {/* Card 3 — Animals & Duolingo */}
            <div className="group rounded-2xl border border-border bg-background p-6">
              <div className="w-full aspect-4/3 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/animal.jpg"
                  alt="Animal Lover"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-kalam text-xl font-bold text-primary mb-2">
                Animal Lover & Duolingo Owl 🦉
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I adore dogs and cats — I even have a dedicated Instagram highlights reel for cute animals I meet. Meanwhile, my life is lovingly dominated by the green owl on Duolingo. 🟢
              </p>
            </div>

            {/* Card 4 — INFJ Nature Lover */}
            <div className="group rounded-2xl border border-border bg-background p-6">
              <div className="w-full aspect-4/3 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/nature.jpg"
                  alt="Nature"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-kalam text-xl font-bold text-primary mb-2">
                INFJ × Nature Healer 🌳
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                As an INFJ, I find deep peace in nature. Green trees and flowing water are my therapy — they recharge me and bring clarity to both my mind and my creative work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
