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
  type LucideIcon,
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
    image: "/about-journey1.png",
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

      {/* ───── Section 3: Journey ───── */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-350 px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
            My Journey to UX Designer & Front-End Developer
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
                    className="w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="font-kalam font-bold text-2xl md:text-3xl text-primary leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Section 4: My Projects ───── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-20 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
          My Projects
        </h2>

        <div className="flex flex-col gap-28">
          {/* Project 1 */}
          <div className="flex flex-col items-center gap-6 text-center">
            <Link
              href="/projects/kaleido-colorlab"
              className="w-full max-w-4xl mb-8"
            >
              <Image
                src="/about-project1.png"
                alt="Kaleido ColorLab Project Preview"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </Link>
            <h3 className="font-kalam text-3xl font-bold text-primary">
              Kaleido ColorLab
            </h3>
            <p className="text-sm text-foreground/60 font-medium">
              2025.11 - 2026.03
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                UX Designer
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
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
            <Link href="#" className="w-full max-w-4xl mb-8">
              <Image
                src="/about-project2.png"
                alt="Gaahleri Shop Project Preview"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </Link>
            <h3 className="font-kalam text-3xl font-bold text-primary">
              Gaahleri Shop
            </h3>
            <p className="text-sm text-foreground/60 font-medium">
              2025.08 - Present
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                UX Designer
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
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

      {/* ───── Section 5: My Education ───── */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-6xl">
            My Education
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/education.png"
                alt="My Education"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="font-kalam text-3xl font-bold text-primary">
                Keep Learning, Keep Crossing
              </h3>
              <p className="text-base text-foreground leading-relaxed">
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
      <section className="mx-auto max-w-350 px-6 py-24">
        <h2 className="mb-16 font-kalam font-bold text-4xl text-primary md:text-6xl text-center">
          My Skills
        </h2>
        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {/* UX */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/figma.svg"
                alt="Figma"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-3xl font-bold text-foreground">UX</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {uxSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {skill.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Coding */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Coding</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {codingSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Languages className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {languageSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {skill.letter}
                    </span>
                    {skill.label}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
