import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { Briefcase, Clock, Users } from "lucide-react";

const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
];

const Page = () => {
  return (
    <main className="w-full pb-24 bg-background">
      {/* ───── Section 1: Title & Info & Hero ───── */}
      <section className="w-full pt-16">
        <h1 className="mb-6 text-center font-kalam font-bold text-5xl text-primary md:text-7xl">
          Gaahleri Shop - Aventus Airbrush
        </h1>

        <p className="mx-auto mb-12 max-w-2xl px-6 text-center text-lg text-foreground">
          Gaahleri Shop showcases the flagship Aventus Airbrush with a
          brand-consistent, conversion-optimized product page — built in 4 weeks
          without ever seeing the physical product, by bridging design,
          production, and marketing through proactive planning.
        </p>

        <div className="relative w-full mb-16">
          <Image
            src="/aventus-hero.webp"
            alt="Aventus Airbrush Hero"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-12 font-kalam text-4xl text-primary font-bold">
            I bridge the gap between conflict and delivery
          </p>

          <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-3 text-sm">
            <div className="flex flex-col items-center gap-1">
              <Briefcase className="h-6 w-6 text-primary mb-2" />
              <p className="font-inter text-foreground/70">Role</p>
              <p className="leading-relaxed text-primary">
                UX/UI Designer
                <br />
                Front-end Developer
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <p className="font-inter text-foreground/70">Duration</p>
              <p className="leading-relaxed text-foreground">
                Oct 2025 – Nov 2025
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="h-6 w-6 text-primary mb-2" />
              <p className="font-inter text-foreground/70">Collaboration</p>
              <p className="leading-relaxed text-foreground">
                Department
                <br />
                Marketing Team
                <br />
                Product Team
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-3"
              >
                <Image
                  src={tech.icon}
                  alt={tech.label}
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-xs font-medium tracking-wide text-foreground/70">
                  {tech.label}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/shopify.svg"
                alt="Shopify"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xs font-medium tracking-wide text-foreground/70">
                Shopify
              </span>
            </div>
          </div>

          <div className="mb-24 flex justify-center">
            <PrimaryButton
              href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Aventus Airbrush
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ───── Section 2: 3 Challenges ───── */}
      <section className="w-full bg-background-alt px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="font-kalam text-primary font-bold mb-4 text-4xl md:text-5xl leading-tight">
              When Marketing Wants Everything, Tech Says No, and Brand Clashes
            </h2>
            <p className="text-xl">I Found the Middle Ground</p>
          </div>

          <div className="space-y-32">
            {/* Challenge 1 */}
            <div className="space-y-16">
              {/* Part A: IA image right (smaller), text left */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:items-center">
                <div className="order-first md:order-none space-y-4">
                  <h3 className="font-kalam font-bold text-3xl text-primary">
                    Marketing Wanted Everything on One Page — I Restructured IA
                    for Scanability
                  </h3>
                  <p className="hidden md:block text-foreground/80">
                    Marketing wanted 11+ selling points crammed onto one page,
                    causing{" "}
                    <span className="font-bold text-primary">
                      cognitive overload.
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-sm overflow-hidden rounded-2xl">
                    <Image
                      src="/aventus-structure.webp"
                      alt="Aventus IA Diagram"
                      width={600}
                      height={338}
                      className="h-auto w-full border border-border"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-foreground/60 max-w-sm">
                    Information Architecture
                    <br />
                    11 Product Features into 2 Main Pages and 6 Subpages
                  </p>
                </div>
                <div className="md:hidden">
                  <p className="text-foreground/80">
                    Marketing wanted 11+ selling points crammed onto one page,
                    causing{" "}
                    <span className="font-bold text-primary">
                      cognitive overload.
                    </span>
                  </p>
                </div>
              </div>

              {/* Part B: two videos left, text right */}
              <div className="flex flex-col items-center gap-12 md:flex-row">
                <div className="w-full space-y-4 md:w-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl">
                      <video
                        className="h-auto w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/aventus-general.webm" type="video/webm" />
                        <source src="/aventus-general.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <p className="mt-2 text-center text-sm text-foreground/60">
                      Main page 1
                      <br />
                      Aventus Theme
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl">
                      <video
                        className="h-auto w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/aventus-tailor.webm" type="video/webm" />
                        <source src="/aventus-tailor.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <p className="mt-2 text-center text-sm text-foreground/60">
                      Main page 2
                      <br />
                      Aventus Tailor Made
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-6 md:w-1/2">
                  <p className="text-foreground/80">
                    I restructured the information architecture by splitting
                    content into{" "}
                    <span className="font-bold text-primary">
                      two main page
                    </span>{" "}
                    and{" "}
                    <span className="font-bold text-primary">6 sub-pages</span>{" "}
                    after negotiating with stakeholders.
                  </p>
                  <p className="text-foreground/80">
                    The result is a{" "}
                    <span className="font-bold text-primary">
                      clean hierarchy
                    </span>{" "}
                    that lets{" "}
                    <span className="font-bold text-primary">
                      users scan faster and find what matters.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 2 — zigzag sub-rows */}
            <div className="space-y-16">
              {/* Part A: text left, image right */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:items-center">
                <div className="order-first md:order-none space-y-4">
                  <h3 className="font-kalam font-bold text-3xl text-primary">
                    The Mandated Plugin Broke UX — I Redesigned the UI for
                    Clarity
                  </h3>
                  <p className="hidden md:block text-foreground/80">
                    The stakeholders mandated a Shopify plugin for
                    customization, but its template conflicted with our store
                    and offered{" "}
                    <span className="font-bold text-primary">
                      unclear UI without option name
                    </span>
                    .
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/aventus-uiissue.webp"
                      alt="Aventus UI Problem"
                      width={800}
                      height={450}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-primary w-full">
                    Shopify plugin&apos;s UI has two problem:
                    <br />
                    <span className="font-bold">
                      1. Users can only see option images, not option names.
                    </span>
                    <br />
                    <span className="font-bold">
                      2. The shopify plugin is incompatible with our
                      store&apos;s theme template.
                    </span>
                  </p>
                </div>
                <div className="md:hidden">
                  <p className="text-foreground/80">
                    The stakeholders mandated a Shopify plugin for
                    customization, but its template conflicted with our store
                    and offered{" "}
                    <span className="font-bold text-primary">
                      unclear UI without option name
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Part B: image left, text right */}
              <div className="flex flex-col items-center gap-12 md:flex-row">
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/aventus-mycss.webp"
                        alt="Aventus CSS Redesign"
                        width={800}
                        height={450}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-4 text-center text-sm text-foreground/60 w-full">
                      CSS
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-6 md:w-1/2">
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">
                      I wrote CSS to resolve the shopify plugin conflict.
                    </span>
                  </p>
                </div>
              </div>

              {/* Part C: video right, text left */}
              <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl">
                      <video
                        className="h-auto w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="/aventus-uiupdate.webm"
                          type="video/webm"
                        />
                        <source src="/aventus-uiupdate.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <p className="mt-4 text-center text-sm text-foreground/60 w-full">
                      New UI
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-6 md:w-1/2">
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">
                      The redesigned UI allows users to see both option images
                      and names simultaneously.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 3 — zigzag: image right, then video left */}
            <div className="space-y-16">
              {/* Part A: text left, image right */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:items-center">
                <div className="order-first md:order-none space-y-4">
                  <h3 className="font-kalam font-bold text-3xl text-primary">
                    The White Canvas Clashed with Brand — I Protected Brand
                    Consistency Through Design
                  </h3>
                  <p className="hidden md:block text-foreground/80">
                    The{" "}
                    <span className="font-bold text-primary">
                      plugin clashed with our brand&apos;s black theme
                    </span>
                    , creating visual friction.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-8 items-center">
                  <div className="flex w-full flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl border border-border/50">
                      <Image
                        src="/aventus-blacktheme.webp"
                        alt="Aventus Black Theme"
                        width={800}
                        height={450}
                        className="w-full aspect-[1.91] object-cover object-top"
                      />
                    </div>
                    <p className="mt-4 text-center text-sm text-foreground/60 w-full">
                      Shop theme color: black
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl border border-border/50">
                      <Image
                        src="/aventus-whitebg.webp"
                        alt="Aventus White Background Problem"
                        width={800}
                        height={450}
                        className="w-full aspect-[1.91] object-cover object-top"
                      />
                    </div>
                    <p className="mt-4 text-center text-sm text-foreground/60 w-full">
                      Cannot change white background
                    </p>
                  </div>
                </div>
                <div className="md:hidden">
                  <p className="text-foreground/80">
                    The{" "}
                    <span className="font-bold text-primary">
                      plugin clashed with our brand&apos;s black theme
                    </span>
                    , creating visual friction.
                  </p>
                </div>
              </div>

              {/* Part B: video left, text right */}
              <div className="flex flex-col items-center gap-12 md:flex-row">
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden rounded-2xl">
                      <video
                        className="h-auto w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="/aventus-blackwhite.webm"
                          type="video/webm"
                        />
                        <source
                          src="/aventus-blackwhite.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p className="mt-4 text-center text-sm text-foreground/60 w-full">
                      black and white design
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-6 md:w-1/2">
                  <p className="text-foreground/80">
                    I{" "}
                    <span className="font-bold text-primary">
                      designed a black-white alternating layout
                    </span>{" "}
                    that frames the white plugin as a feature, not a bug.
                  </p>
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">
                      The purchase flow now feels seamless and brand-consistent
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 3: Delivered in 4 Weeks ───── */}
      <section className="w-full bg-background border-y border-border/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-kalam font-bold text-4xl md:text-5xl text-primary">
              Delivered a Flagship Product Website in 4 Weeks
            </h2>
            <p className="mx-auto max-w-3xl text-xl font-bold">
              Without Seeing the Product
            </p>
          </div>

          <div className="space-y-32">
            {/* Part 1 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                I Designed the Site Before Product Photos Existed — So the
                Production Team Could Hit the Ground Running
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Design Under Uncertainty",
                  "Cross-functional Collaboration",
                  "Risk Management",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4 text-foreground/80">
                  <p>
                    With{" "}
                    <span className="font-bold text-primary">
                      only one month from receiving the physical product
                    </span>{" "}
                    to website launch,{" "}
                    <span className="font-bold text-primary">
                      the Image/Video Production team had zero room for delays
                    </span>
                    . I couldn&apos;t wait for assets to start designing.
                  </p>
                  <p>
                    So I defined the visual direction early — choosing a{" "}
                    <span className="font-bold text-primary">
                      black background that is both brand-aligned and visually
                      safe
                    </span>
                    , as it complements any product color. This decision kept
                    design moving forward while giving the production team
                    clarity:{" "}
                    <span className="font-bold text-primary">
                      they could focus on shooting, knowing the design
                      foundation was already set
                    </span>
                    .
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/aventus-wireframe.webp"
                      alt="Aventus Wireframe"
                      width={800}
                      height={450}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-foreground/60">
                    Wireframe
                  </p>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                I Gave the Production Team a Clear Brief — So They Knew Exactly
                What to Shoot, No Waste
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Proactive Communication",
                  "Workflow Optimization",
                  "Team work",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="order-2 flex flex-col items-center md:order-1">
                  <div className="w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/aventus-communication.webp"
                      alt="Team Communication"
                      width={800}
                      height={450}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-foreground/60">
                    Team Communication
                  </p>
                </div>
                <div className="order-1 space-y-4 text-foreground/80 md:order-2">
                  <p>
                    To achieve a seamless &quot;borderless&quot; effect, I knew
                    the product needed to be shot on black and edited to pure
                    black in post-production.
                  </p>
                  <p>
                    Instead of waiting to see what they delivered and requesting
                    changes later,{" "}
                    <span className="font-bold text-primary">
                      I stepped in early — mapping out exactly which angles,
                      formats, and background treatments I needed for each
                      section of the page.
                    </span>{" "}
                    <span className="font-bold text-primary">
                      This gave my colleagues clear direction, saved them from
                      shooting unnecessary footage, and eliminated revision
                      loops.
                    </span>{" "}
                    Their work was usable from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            {/* <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                3. I Built a Visual System That Guides Users Without
                Overwhelming Them
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Visual Hierarchy",
                  "Interaction Design",
                  "Conversion Optimization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4 text-foreground/80">
                  <p>
                    With no time for redesigns, I got the information hierarchy
                    right from the start. I used a{" "}
                    <span className="font-bold text-primary">
                      three-tier color system: white for primary information,
                      gray for secondary details, and yellow/orange to
                      distinguish standard vs. custom versions.
                    </span>
                  </p>
                  <p>
                    For buttons, I made a deliberate choice — only
                    &quot;Buy&quot; is a strong call-to-action. &quot;Learn
                    More&quot; and &quot;Discover More&quot; are intentionally
                    subtle,{" "}
                    <span className="font-bold text-primary">
                      reducing decision friction and guiding users toward
                      purchase.
                    </span>
                  </p>
                  <p className="border-l-2 border-primary pl-4 italic text-foreground/60">
                    The result: The website launched on time, fully aligned
                    across teams, with zero post-launch fixes. My colleagues
                    worked efficiently because they knew exactly what to
                    deliver.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/aventus-visualsystem.png"
                    alt="Aventus Visual System"
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ───── Section 4: Achievement ───── */}
      <section className="w-full bg-background-alt px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-kalam font-bold text-4xl md:text-5xl text-primary">
              Achievement
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-foreground/80">
              After the Aventus Airbrush website launched,{" "}
              <span className="font-bold text-primary">
                Gaahleri&apos;s November sales saw significant year-over-year
                growth
              </span>{" "}
              — validating that a well-structured, brand-consistent product page
              directly supports conversion.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl">
              <Image
                src="/aventus-result.webp"
                alt="Gaahleri November Sales Year-over-Year"
                width={1200}
                height={675}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-foreground/60">
              Gaahleri&apos;s November Sales Year-over-Year
              <br />
              <span className="italic">
                Note: Key figures have been blurred for confidentiality.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ───── Section 5: Bottom Navigation ───── */}
      <section className="w-full bg-background pt-24 pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6 sm:flex-row">
          <PrimaryButton
            href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Explore Aventus Airbrush
          </PrimaryButton>
          <PrimaryButton
            href="/projects/kaleido-colorlab"
            className="w-full border border-primary/20 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50 sm:w-auto"
          >
            Previous Project
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
};

export default Page;
