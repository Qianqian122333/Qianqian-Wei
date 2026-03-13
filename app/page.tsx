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
  Github,
  Briefcase,
  KanbanSquare,
  FileText,
  PenTool,
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
  { icon: "/orange-figma.svg", label: "Figma" },
];

const codingSkills = [
  { icon: "/orange-html.svg", label: "HTML" },
  { icon: "/orange-css.svg", label: "CSS" },
  { icon: "/orange-tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "/orange-js.svg", label: "JavaScript" },
  { icon: "/orange-ts.svg", label: "TypeScript" },
  { icon: "/orange-react.svg", label: "React" },
  { icon: "/orange-nextjs.svg", label: "Next.js" },
  { icon: "/orange-nodejs.svg", label: "Node.js" },
  { icon: "/orange-sql.svg", label: "Database (SQL, Prisma)" },
  { icon: GitBranch, label: "Git" },
  { icon: Github, label: "GitHub" },
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

const workExperience = [
  {
    company: "Gaahleri",
    role: "UX Engineer",
    period: "2025.08 — Present",
    location: "Ningbo, China",
    logo: "/gaahleri.jpg",
    link: "https://www.gaahleri.com/",
    isCurrent: true,
    descPoints: [
      <>
        Lead <strong>end-to-end UX design</strong> for the company&apos;s
        e-commerce platform—from <strong>user research</strong> and{" "}
        <strong>wireframing</strong> to{" "}
        <strong>high-fidelity prototypes</strong> and{" "}
        <strong>usability testing</strong>.
      </>,
      <>
        Translate design deliverables into{" "}
        <strong>production-ready code</strong> using{" "}
        <strong>Next.js, TypeScript</strong>, and <strong>Tailwind CSS</strong>,
        ensuring <strong>pixel-perfect implementation</strong>.
      </>,
      <>
        Build and maintain a scalable <strong>design system</strong> and{" "}
        <strong>reusable component library</strong> that accelerates feature
        delivery across teams.
      </>,
      <>
        <strong>
          Collaborate closely with product managers and back-end engineers
        </strong>{" "}
        to align user needs with business goals and technical constraints.
      </>,
    ],
  },
  {
    company: "ATG",
    role: "Customer Experience Team Member",
    period: "2023.10 — 2025.06",
    location: "London, UK",
    logo: "/atg.jpg",
    link: "https://www.atgentertainment.com/",
    isCurrent: false,
    descPoints: [
      <>
        Engaged directly with a diverse customer base,{" "}
        <strong>developing deep empathy for user pain points</strong> and
        expectations across multiple touchpoints.
      </>,
      <>
        <strong>
          Analysed customer feedback data, presenting actionable insights to the
          product team
        </strong>{" "}
        that informed feature prioritisation.
      </>,
      <>
        <strong>
          Learned UX design and front-end development after work, completing the
          Google UX Design Certificate and building personal projects.
        </strong>
      </>,
    ],
  },
];

const journeySteps = [
  {
    title: 'The "Aha!" Moment: When Sociology Met Its Tech Soulmate 🎓✨',
    desc: "It all started at a UCL career talk! Seeing a Sociology grad thrive in tech was the spark I needed. I realized that my passion for understanding people was the perfect fuel for UX, and my love for logic was a match for Front-End.",
    image: "/about-journey.png",
  },
  {
    title:
      'The "Double Life": Coding and Design by Day,  Empathy by Night 🌙☕',
    desc: 'By night, I was on the customer experience team member, heart-to-heart with real users in Customer Experience. By day, I was a programmer and designer! This "double life" taught me how to translate real-world painpoints into digital solutions while most people were dreaming.',
    image: "/about-journey2.png",
  },
  {
    title: 'Leveling Up: Crafting My "UX + Front-End" Superpowers 🎨💻',
    desc: 'I dove headfirst into the Google UX Certificate while teaching myself the magic of Coding. I didn’t just want to "draw" pretty screens; I wanted to build them!',
    image: "/about-journey3.png",
  },
  {
    title:
      'From Student to Architect: Owning the Full "Concept-to-Code" Loop 🛠️🎈',
    desc: 'I stepped into the professional arena and took the lead! I didn’t just hand over designs; I owned two major projects from the first sketch to the final line of code. From holiday campaigns to full-stack features, I proved that "Design + Dev" is a winning combo.',
    image: "/about-journey4.png",
  },
  {
    title:
      "The Marathon Continues: Juggling a Master’s in IT & My Dream Career 📚🚀",
    desc: "Growth is my favorite hobby! Even with a full-time role, I’m now pursuing a Master’s in Information Technology. Why? Because the tech world moves fast, and I’m determined to move even faster. The journey has just begun!",
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
              Kaleido ColorLab
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
              Kaleido ColorLab is an all-in-one digital workspace designed to
              bridge the gap between inspiration and reality. It allows creators
              to experiment with colors, generate precise mixing formulas, and
              accurately match shades from images to achieve professional paint
              results.
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
              Gaahleri Shop
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
              Gaahleri is a premium brand specializing in high-performance
              airbrushes and professional painting accessories.
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
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                className="absolute inset-0 overflow-visible"
              >
                <line
                  x1="16"
                  y1="24"
                  x2="16"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="8 5 12 4 6 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute top-[0px] left-[4px] overflow-visible"
              >
                <polyline
                  points="4,14 12,4 20,14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {workExperience.map((job, idx) => (
              <div key={idx} className="relative z-10 flex flex-col gap-4">
                <div className="flex items-start gap-6">
                  <Link
                    href={job.link}
                    target="_blank"
                    className={`shrink-0 w-20 h-20 rounded-full border-2 ${
                      job.isCurrent ? "border-primary" : "border-foreground/20"
                    } bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-primary/80 transition-all shadow-sm`}
                  >
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="mt-2 text-foreground">
                    <div className="flex flex-col gap-1 mb-1">
                      <h3 className="font-kalam text-2xl font-bold text-primary">
                        {job.role}
                      </h3>
                      {job.isCurrent && (
                        <span className="w-max inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-base font-medium text-foreground/90">
                      {job.company}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground/50">
                      {job.period} · {job.location}
                    </p>
                  </div>
                </div>
                <ul className="pl-0 space-y-2 text-sm text-foreground/80 leading-relaxed list-disc ml-[88px] sm:ml-[104px]">
                  {job.descPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ------------- DESKTOP (HORIZONTAL TIMELINE) ------------- */}
          <div className="hidden lg:block relative mt-12 w-full">
            {/* Hand-drawn crayon timeline & arrow (Horizontal) */}
            <div className="absolute top-[24px] left-[56px] right-0 h-8 z-0 text-foreground/50">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                className="absolute inset-0 overflow-visible"
              >
                <line
                  x1="24"
                  y1="16"
                  x2="100%"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="8 5 12 4 6 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute left-[-4px] top-[4px] overflow-visible"
              >
                <polyline
                  points="10,4 2,12 10,20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-16 relative z-10 w-[95%]">
              {workExperience.map((job, idx) => (
                <div key={idx} className="flex flex-col items-start px-4">
                  {idx === 0 ? (
                    <div className="flex items-center gap-2 mb-6">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="text-foreground/50 shrink-0"
                      >
                        <polyline
                          points="12,2 4,10 12,18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <Link
                        href={job.link}
                        target="_blank"
                        className={`w-20 h-20 rounded-full border-2 ${
                          job.isCurrent
                            ? "border-primary"
                            : "border-foreground/20"
                        } bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-primary/80 transition-all shadow-sm`}
                      >
                        <Image
                          src={job.logo}
                          alt={job.company}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={job.link}
                      target="_blank"
                      className={`w-20 h-20 mb-6 rounded-full border-2 ${
                        job.isCurrent
                          ? "border-primary"
                          : "border-foreground/20"
                      } bg-background overflow-hidden flex items-center justify-center hover:scale-105 hover:border-primary/80 transition-all shadow-sm`}
                    >
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-kalam text-2xl font-bold text-primary">
                      {job.role}
                    </h3>
                    {job.isCurrent && (
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-base font-medium text-foreground/90">
                    {job.company}
                  </p>
                  <p className="mt-1 mb-4 text-sm text-foreground/50">
                    {job.period} · {job.location}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed list-disc list-outside ml-4">
                    {job.descPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
              <p className="text-base text-foreground leading-relaxed">
                I don't collect degrees—I build with them.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                I earned two degrees—<strong>History (No.1)</strong> and{" "}
                <strong>Chinese Literature (Distinction)</strong>—just to see
                the world through one more lens. My{" "}
                <strong> UCL Gender Studies master&apos;s</strong> taught me
                <strong> empathy</strong> for perspectives that product design
                often overlooks. I taught myself <strong>UX</strong> while
                working full-time, earned my <strong>Google Certificate</strong>
                , and found my way into <strong>Coding</strong>. I&apos;m a{" "}
                <strong>UX engineer</strong>
                at Gaahleri, pursuing an <strong>IT master&apos;s</strong>
                —shipping code by day, studying systems by night.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                For me, learning isn't a phase—it's how I build. History's
                patterns, literature's nuance, and gender studies' empathy all
                find their way into the products I create. I don't just design
                and code. I connect.
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
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">UX</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {uxSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {typeof skill.icon === "string" ? (
                      <Image
                        src={skill.icon}
                        alt={skill.label}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <skill.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    )}
                    {skill.label}
                  </span>
                ))}
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
                    {typeof skill.icon === "string" ? (
                      <Image
                        src={skill.icon}
                        alt={skill.label}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <skill.icon className="w-4 h-4 text-primary" />
                    )}
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
          <p className=" font-kalam mt-12 text-center text-lg font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
            Design, code, and a sprinkle of curiosity 🪄! I believe in growing
            every day and keeping my skills fresh, shiny, and exciting. 💖
          </p>
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
                Part-Time Hanfu Model 📸
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I work as a part-time Hanfu model — I love styling, makeup, and
                dressing up. I believe everyday life is a form of design, and I
                aim to craft each day into something I truly enjoy.❤️
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
                I go to bed at 10 PM and wake up early every day to exercise
                before work. This early-bird routine is my secret weapon for
                staying focused and productive.☀️
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
                Animal Lover & Cuteness Collector 🐶🐱
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I adore dogs and cats — I even have a dedicated Instagram
                highlights reel for the adorable animals I meet. Whether it's a
                fluffy pup at the park or a sleepy café cat, my heart (and
                camera roll) belongs to them. 🐾
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
                As an INFJ, I find deep peace in nature. Green trees and flowing
                water are my therapy — they recharge me and bring clarity to
                both my mind and my creative work.🌿
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
