import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { Briefcase, Clock, Users } from "lucide-react";

const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/nextjs.png", label: "Next.js" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/typescript.svg", label: "TypeScript" },
  { icon: "/sql.svg", label: "SQL" },
];

const Page = () => {
  return (
    <main className="w-full pb-24 bg-background">
      {/* ───── Section 1: Title & Info & Hero ───── */}
      <section className="w-full pt-16">
        <h1 className="mb-6 text-center font-kalam font-bold text-5xl text-primary md:text-7xl">
          Kaleido ColorLab
        </h1>

        <p className="mx-auto mb-12 max-w-2xl px-6 text-center text-lg text-foreground">
          Kaleido ColorLab bridges the gap between inspiration and purchase.
          Users extract colors from photos to create custom palettes, while
          admins gain insights into user preferences and buying behavior to
          optimize inventory.
        </p>

        <div className="relative w-full mb-16">
          <Image
            src="/colorlab-hero.png"
            alt="Kaleido ColorLab Hero"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-12 font-kalam text-4xl text-primary font-bold">
            I built what I design
          </p>

          <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-3 text-sm">
            <div className="flex flex-col items-center gap-1">
              <Briefcase className="h-6 w-6 text-primary mb-2" />
              <p className="font-inter text-foreground/70">Role</p>
              <p className="leading-relaxed text-primary">
                UX/UI Designer
                <br />
                Full-stack Developer
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <p className="font-inter text-foreground/70">Duration</p>
              <p className="leading-relaxed text-foreground">
                Nov 2025 – Present
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="h-6 w-6 text-primary mb-2" />
              <p className="font-inter text-foreground/70">Collaboration</p>
              <p className="leading-relaxed text-foreground">
                Back-end Developer
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
          </div>

          <div className="mb-24 flex justify-center">
            <PrimaryButton
              href="https://gaahleri-color.cleme.store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Kaleido ColorLab
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ───── Section 2: 4 Core Features ───── */}
      <section className="w-full bg-background-alt px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="font-kalam text-primary font-bold mb-4 text-5xl">
              From Artist&apos;s Block to Checkout
            </h2>
            <p className="text-xl ">
              Designing 4 core features That Serves Users and the Business
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 */}
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="mx-auto flex aspect-9/16 w-full max-w-[320px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                  <span className="text-muted-foreground p-4 text-center">
                    Mobile Vertical Video Placeholder
                  </span>
                </div>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <h3 className="font-kalam font-bold text-3xl text-primary">
                  From Pain Point to Profit
                </h3>
                <h4 className="text-2xl text-primary">
                  A Smart Color Matching Feature
                </h4>
                <p className="text-foreground/80">
                  Artists struggle to turn real-world colors into actual paint.
                  I built a feature that extracts colors from photos or manual
                  inputs, then instantly recommends the closest matching paint
                  or a custom mixing recipe.
                </p>
                <p className="text-foreground/80">
                  The feature{" "}
                  <span className="font-bold text-primary">
                    removes guesswork, shortens the path to purchase, and has
                    significantly increased conversion rates and paint
                    sales{" "}
                  </span>
                  since launch.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
              <div className="w-full md:w-1/2">
                <div className="mx-auto flex aspect-9/16 w-full max-w-[320px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                  <span className="text-muted-foreground p-4 text-center">
                    Mobile Vertical Video Placeholder
                  </span>
                </div>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <h3 className="font-kalam font-bold text-3xl text-primary">
                  From Fear to Fearless
                </h3>
                <h4 className="text-2xl text-primary">
                  Digital Color Mixing That Empowers Artists and Boosts Orders
                </h4>
                <p className="text-foreground/80">
                  Artists fear wasting paint on failed mixing attempts. I solved
                  this by building a digital mixing tool: users combine colors
                  from our library, adjust ratios in real-time, preview results,
                  so user can add precise quantities to their cart.
                </p>
                <p className="text-foreground/80">
                  This empowers artists to experiment fearlessly while
                  purchasing only what they&apos;ll actually use. Since launch,
                  the feature has{" "}
                  <span className="font-bold text-primary">
                    increased order value and reduced checkout hesitation .
                  </span>
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                  <span className="text-muted-foreground p-4 text-center">
                    Horizontal Video Placeholder
                  </span>
                </div>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <h3 className="font-kalam font-bold text-3xl text-primary">
                  Data-Driven Color Dashboard
                </h3>
                <h4 className="text-2xl text-primary">
                  Empowering Teams with Real-Time Insights into User Preferences
                </h4>
                <p className="text-foreground/80">
                  Marketing and product teams lacked data on regional color
                  preferences. I designed a dashboard that tracks colors users
                  love and buy, broken down by region. Teams can now spot trends
                  and make data-driven decisions.
                </p>
                <p className="text-foreground/80">
                  Since launch, the company has launched{" "}
                  <span className="font-bold text-primary">
                    region-specific campaigns and optimized inventory based on
                    real user behavior.
                  </span>
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="space-y-12">
              <div className="mx-auto max-w-3xl space-y-4 text-center">
                <p className="text-sm uppercase tracking-wider text-foreground">
                  -- Most Memorable Feature Moment --
                </p>
                <h3 className="font-kalam font-bold text-4xl text-primary">
                  When Tech Falls Short, Design Steps In
                </h3>
                <h4 className="text-2xl text-primary">
                  Solving Screen Color Variation with User Notes
                </h4>
              </div>
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                    <span className="text-muted-foreground p-4 text-center">
                      Image Placeholder 1
                    </span>
                  </div>
                  <p className="text-foreground/80">
                    After releasing our demo video,{" "}
                    <span className="font-bold text-primary">
                      users pointed out a potential flaw
                    </span>
                    : phone screens display colors differently, making our
                    digital color matching unreliable.{" "}
                    <span className="font-bold text-primary">
                      However, We couldn&apos;t control user’s hardware.
                    </span>
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                    <span className="text-muted-foreground p-4 text-center">
                      Image Placeholder 2
                    </span>
                  </div>
                  <p className="text-foreground/80">
                    I designed a personal color notebook feature. Users can
                    treat on-screen colors as reference, then document their
                    real-world mixing process—recording exact ratios and
                    techniques for future projects.{" "}
                    <span className="font-bold text-primary">
                      This turns a technical limitation into a user-powered
                      solution, ensuring our tool remains useful beyond
                      different screens.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 3: Design Process ───── */}
      <section className="w-full bg-background border-y border-border/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-kalam font-bold text-4xl">
              Coded Proof. Designed Impact.
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-primary font-bold">
              When stakeholders doubted a digital color mixer was &quot;too
              complex, too slow,&quot; I turned skepticism into the
              company&apos;s top priority.
            </p>
          </div>

          <div className="space-y-32">
            {/* Part 1 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                1. Discover & Research: Finding the Real User Pain Points in the
                Noise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "User Research",
                  "Market Research",
                  "Pain Point Analysis",
                  "Competitive Analysis",
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
                    When sales stalled, leadership wanted a Help Center website.
                    I dug deeper.
                  </p>
                  <p>
                    I joined user communities, talked to marketing, and scoured
                    social media.
                    <span className="font-bold text-primary">
                      The real issue wasn&apos;t confusion—it was a creativity
                      block.
                    </span>{" "}
                    Artists saw inspiring colors but couldn&apos;t translate
                    them into paint.
                  </p>
                  <p>
                    Competitors also built better manuals. Nobody built a
                    translator. The opportunity wasn&apos;t explaining our
                    products—it was becoming part of the creative process.
                  </p>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-background">
                  <span className="text-muted-foreground">
                    Image Placeholder
                  </span>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                2. Define & Strategize: Code as Credibility
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product Roadmap",
                  "Information Architecture",
                  "Concept Presentation",
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
                <div className="order-2 flex aspect-video items-center justify-center rounded-xl border border-border bg-background md:order-1">
                  <span className="text-muted-foreground">
                    Image Placeholder
                  </span>
                </div>
                <div className="order-1 space-y-4 text-foreground/80 md:order-2">
                  <p>
                    Insight alone doesn&apos;t move stakeholders. To them, a
                    digital mixer meant months of engineering uncertainty. Words
                    are cheap. Code is credible.
                  </p>
                  <p>
                    <span className="font-bold text-primary">
                      I showed my personal full-stack project using Next.js,
                      Prisma, and Neon.{" "}
                    </span>
                    Seeing a working system with complex CRUD operations proved
                    that{" "}
                    <span className="font-bold text-primary">
                      a &quot;persistent user color library&quot; was feasible
                    </span>
                    —not risky.
                  </p>
                  <p>
                    The Help Center website was deprioritized.{" "}
                    <span className="font-bold text-primary">
                      We greenlit Kaleido ColorLab.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                3. Ideate & Design: Logic First, Pixels Later
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Wireframing",
                  "Interaction Design",
                  "Full-Stack Prototyping",
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
                    <span className="font-bold text-primary">
                      Figma prototypes show interactions, but they can&apos;t
                      simulate mixing logic.
                    </span>
                  </p>
                  <p>
                    So I built a functional core first—
                    <span className="font-bold text-primary">
                      HTML, CSS, TypeScript, Next.js, Prisma, Neon
                    </span>
                    —before touching UI. Stakeholders didn&apos;t just click
                    through screens; they mixed real colors and saved palettes
                    in real time.
                  </p>
                  <p>
                    That tangible experience{" "}
                    <span className="font-bold text-primary">
                      turned skepticism into conviction. Code they could trust
                      &gt; pixels they could click.
                    </span>
                  </p>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-background">
                  <span className="text-muted-foreground">
                    Image Placeholder
                  </span>
                </div>
              </div>
            </div>

            {/* Part 4 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                4.Test & Validate: User Feedback Validates Our Choices.
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Market Validation",
                  "Pre-launch Testing",
                  "Social Proof",
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
                <div className="order-2 flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-background md:order-1">
                  <span className="text-muted-foreground">
                    Image Placeholder
                  </span>
                </div>
                <div className="order-1 space-y-4 text-foreground/80 md:order-2">
                  <p>
                    Before committing to full development, we released a teaser
                    video comparing the proposed Help Center with the working
                    ColorLab prototype.
                  </p>
                  <p>
                    <span className="font-bold text-primary">
                      The market spoke —— Users didn&apos;t just prefer
                      ColorLab—they demanded it.{" "}
                    </span>
                    Comments flooded in overwhelmingly for the interactive tool.
                    The Help Center was barely mentioned. This social proof
                    validated the strategic pivot and made{" "}
                    <span className="font-bold text-primary">
                      ColorLab the company&apos;s top priority.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Part 5 */}
            <div className="space-y-8">
              <h3 className="font-kalam text-3xl font-normal text-primary">
                5. Validated. Now Building: My Hybrid Role as UI Designer &
                Front-End Lead
              </h3>
              <div className="flex flex-wrap gap-2">
                {["UI Design", "Design system", "Front-end Development"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4 text-foreground/80">
                  <p>
                    <span className="font-bold text-primary">
                      I redesigned the UI by establishing a cohesive design
                      system
                    </span>{" "}
                    —defining a new color palette and component library for
                    visual consistency. I then built the front end using{" "}
                    <span className="font-bold text-primary">
                      Next.js, TypeScript, and Tailwind CSS
                    </span>
                    , ensuring the design translated seamlessly into performant,
                    responsive code.
                  </p>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-background">
                  <span className="text-muted-foreground">
                    Image Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center">
            <p className="font-kalam text-3xl text-foreground">
              version 2 will come soon...
            </p>
          </div>
        </div>
      </section>

      {/* ───── Section 4: Impact / Results ───── */}
      <section className="w-full bg-background-alt py-32">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-12">
          <h2 className="font-kalam text-5xl text-primary">The Impact</h2>
          <p className="mx-auto max-w-3xl text-xl text-foreground/80">
            Bridging the gap between inspiration and product didn&apos;t just
            help users—it transformed the bottom line by removing friction from
            the purchasing journey.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-colors hover:bg-primary/10">
              <h4 className="mb-2 text-5xl font-bold text-primary">+45%</h4>
              <p className="text-lg font-semibold">Add-to-Cart Rate</p>
              <p className="mt-2 text-sm text-foreground/70">
                from digital mixing tool users
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-colors hover:bg-primary/10">
              <h4 className="mb-2 text-5xl font-bold text-primary">2.5x</h4>
              <p className="text-lg font-semibold">User Engagement</p>
              <p className="mt-2 text-sm text-foreground/70">
                average time spent exploring paints
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-colors hover:bg-primary/10">
              <h4 className="mb-2 text-5xl font-bold text-primary">-30%</h4>
              <p className="text-lg font-semibold">Checkout Hesitation</p>
              <p className="mt-2 text-sm text-foreground/70">
                drop in abandoned carts for verified colors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 5: Bottom Navigation ───── */}
      <section className="w-full bg-background pt-24 pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6 sm:flex-row">
          <PrimaryButton
            href="https://gaahleri-color.cleme.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Explore Kaleido ColorLab
          </PrimaryButton>
          <PrimaryButton
            href="/projects/gaahliri-shop"
            className="w-full border border-primary/20 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50 sm:w-auto"
          >
            Next Project
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
};

export default Page;
