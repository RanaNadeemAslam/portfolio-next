import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import OutboundTracker from "@/components/outbound-tracker";
import { projects, type Project, type Platform } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — Android & iOS Apps Portfolio",
  description:
    "Mobile apps built by Nadeem Aslam. Virtual 5G (8.9M downloads), VPN Express, Smart IPTV, Orion AI and more. Android and iOS development portfolio.",
  alternates: {
    canonical: "https://nadeemaslam.dev/work",
  },
  keywords: [
    "Android apps portfolio",
    "iOS apps portfolio",
    "mobile developer work",
    "Kotlin apps",
    "Swift apps",
    "Play Store developer",
    "App Store developer",
  ],
  openGraph: {
    title: "Work — Nadeem Aslam | Android & iOS Apps Portfolio",
    description:
      "Mobile apps built by Nadeem Aslam. 5M+ downloads across Play Store and App Store.",
    url: "https://nadeemaslam.dev/work",
  },
};

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const platformLabel: Record<Platform, string> = {
  android: "Android",
  ios: "iOS",
  both: "Android + iOS",
};

const platformColors: Record<Platform, string> = {
  android: "bg-android/8 text-android",
  ios: "bg-ios/8 text-ios",
  both: "bg-both/8 text-both",
};

function storeLabel(url: string): string {
  if (url.includes("apps.apple.com")) return "View on App Store";
  return "View on Play Store";
}

function isLandscape(project: Project): boolean {
  // Smart IPTV has landscape screenshots; detect by title or aspect ratio hint
  return project.title.includes("IPTV");
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <>
      <Nav />

      <main id="main" className="flex-1">
        {/* Page Header */}
        <header className="pt-[160px] pb-[80px] border-b border-border max-md:pt-[120px] max-md:pb-12 max-sm:pt-[100px] max-sm:pb-9">
          <div className="max-w-[1200px] mx-auto px-10">
            <h1 className="font-heading text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-[-2px] mb-4 max-md:text-[2.5rem] max-sm:text-[2rem]">
              Work
            </h1>
            <p className="text-text-secondary text-[1.15rem] max-w-[520px] leading-relaxed max-sm:text-base">
              A selection of apps I&apos;ve built and shipped. 5M+ downloads
              across Play Store and App Store.
            </p>
          </div>
        </header>

        {/* Project Cards */}
        <section className="pb-10">
          <div className="max-w-[1200px] mx-auto px-10">
            {projects.map((project) => (
              <WorkCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-[100px] text-center border-t border-border max-sm:py-[60px]">
          <div className="max-w-[1200px] mx-auto px-10">
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-1px] mb-3 max-sm:text-[1.5rem]">
              Have a project in mind?
            </h2>
            <p className="text-text-secondary text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
              I&apos;m always open to new opportunities — whether it&apos;s a
              startup MVP, enterprise app, or a freelance collaboration.
            </p>
            <div className="flex gap-8 justify-center max-sm:flex-col max-sm:gap-4 max-sm:items-center">
              <Link
                href="/#contact"
                className="text-[0.95rem] font-bold relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-foreground hover:opacity-60 transition-opacity duration-250"
              >
                Get in touch &rarr;
              </Link>
              <a
                href="https://www.fiverr.com/nadeem585"
                target="_blank"
                rel="noopener"
                className="text-[0.95rem] font-bold relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-foreground hover:opacity-60 transition-opacity duration-250"
              >
                Hire on Fiverr &#x2197;
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <OutboundTracker />
    </>
  );
}

/* ── Work Card ────────────────────────────────────────────────────────────── */

function WorkCard({ project }: { project: Project }) {
  const landscape = isLandscape(project);
  const screenshotHeight = landscape ? 220 : 360;

  return (
    <a
      href={project.storeUrl}
      target="_blank"
      rel="noopener"
      className="block py-[60px] border-b border-border border-l-[3px] border-l-transparent hover:border-l-accent pl-5 transition-[border-color] duration-300 max-md:py-10 max-sm:py-8"
    >
      {/* Text content */}
      <div className="mb-10 max-sm:mb-6">
        {/* Meta: platform tag + stat badge */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span
            className={`text-[0.72rem] font-bold uppercase tracking-[2px] px-3.5 py-[5px] rounded-full ${platformColors[project.platform]}`}
          >
            {platformLabel[project.platform]}
          </span>
          {project.stat && (
            <span className="text-[0.82rem] font-bold text-foreground">
              {project.stat}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-3.5 leading-tight max-md:text-[1.4rem] max-sm:text-[1.2rem]">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-base leading-[1.7] max-w-[640px] mb-5 max-sm:text-[0.9rem]">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6 max-md:gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-[5px] border border-border rounded-full text-[0.78rem] font-medium text-text-secondary max-md:text-[0.72rem] max-md:px-2.5 max-md:py-1 max-sm:text-[0.7rem] max-sm:px-2 max-sm:py-[3px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Store link */}
        <span className="text-[0.9rem] font-bold text-foreground relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-foreground">
          {storeLabel(project.storeUrl)} &#x2197;
        </span>
      </div>

      {/* Screenshots */}
      {project.screenshots.length > 0 ? (
        <div className="w-full overflow-x-auto overflow-y-hidden rounded-2xl bg-[#f2f2f2] p-6 scroll-snap-type-x-mandatory max-sm:p-4 max-sm:rounded-xl [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#ccc] [&::-webkit-scrollbar-thumb]:rounded-sm">
          <div className="flex gap-4 w-max items-center max-sm:gap-3">
            {project.screenshots.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} — screenshot ${i + 1}`}
                width={landscape ? 390 : 203}
                height={screenshotHeight}
                loading="lazy"
                className="rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex-shrink-0 snap-start hover:-translate-y-1 transition-transform duration-300 object-cover"
                style={{ height: screenshotHeight, width: "auto" }}
              />
            ))}
          </div>
        </div>
      ) : (
        /* No screenshots — show icon + stat preview (e.g. NetOptimizer) */
        <div className="w-full rounded-2xl bg-[#f2f2f2] py-12 px-10 flex items-center gap-12 max-md:flex-col max-md:items-start max-md:gap-7 max-md:py-8 max-md:px-6 max-sm:py-6 max-sm:px-5 max-sm:rounded-xl">
          <Image
            src={project.icon}
            alt={`${project.title} icon`}
            width={140}
            height={140}
            loading="lazy"
            className="rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] max-sm:w-20 max-sm:h-20 max-sm:rounded-[18px]"
          />
          <div className="flex gap-10 max-md:gap-6 max-sm:flex-wrap max-sm:gap-5">
            <div className="flex flex-col gap-0.5">
              <strong className="font-heading text-[1.8rem] font-extrabold tracking-[-1px] max-md:text-[1.4rem] max-sm:text-[1.2rem]">
                4.5
              </strong>
              <span className="text-[0.8rem] font-semibold text-text-muted uppercase tracking-[1px]">
                Rating
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="font-heading text-[1.8rem] font-extrabold tracking-[-1px] max-md:text-[1.4rem] max-sm:text-[1.2rem]">
                19
              </strong>
              <span className="text-[0.8rem] font-semibold text-text-muted uppercase tracking-[1px]">
                Languages
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="font-heading text-[1.8rem] font-extrabold tracking-[-1px] max-md:text-[1.4rem] max-sm:text-[1.2rem]">
                38 MB
              </strong>
              <span className="text-[0.8rem] font-semibold text-text-muted uppercase tracking-[1px]">
                Size
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Case Study */}
      {project.caseStudy && (
        <div className="grid grid-cols-3 gap-8 mt-8 p-8 bg-background rounded-xl border border-border max-md:grid-cols-1 max-md:gap-5 max-md:p-6">
          <div>
            <h4 className="font-heading text-[0.72rem] font-bold uppercase tracking-[2px] text-text-muted mb-2">
              Challenge
            </h4>
            <p className="text-[0.9rem] text-text-secondary leading-relaxed">
              {project.caseStudy.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-heading text-[0.72rem] font-bold uppercase tracking-[2px] text-text-muted mb-2">
              Solution
            </h4>
            <p className="text-[0.9rem] text-text-secondary leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>
          <div>
            <h4 className="font-heading text-[0.72rem] font-bold uppercase tracking-[2px] text-text-muted mb-2">
              Result
            </h4>
            <p className="text-[0.9rem] text-text-secondary leading-relaxed">
              {project.caseStudy.result}
            </p>
          </div>
        </div>
      )}
    </a>
  );
}
