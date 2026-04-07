import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import OutboundTracker from "@/components/outbound-tracker";
import Button from "@/components/button";
import SectionLabel from "@/components/section-label";
import SectionHeading from "@/components/section-heading";
import AnimateOnScroll from "@/components/animate-on-scroll";
import StaggerIn from "@/components/stagger-in";
import SkillsStrip from "@/components/skills-strip";
import ContactForm from "@/components/contact-form";
import TestimonialCarousel from "@/components/testimonial-carousel";
import Counter from "@/components/counter";
import {
  highlights,
  projects,
  experience,
  testimonials,
  faqItems,
  socialLinks,
  about,
} from "@/lib/data";

const featuredProjects = projects.filter((p) => p.featured);

const platformLabel: Record<string, string> = {
  android: "Android",
  ios: "iOS",
  both: "Android & iOS",
};

const platformColor: Record<string, string> = {
  android: "text-android",
  ios: "text-ios",
  both: "text-both",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://nadeemaslam.dev/#person",
  name: "Nadeem Aslam",
  jobTitle: "Senior Mobile Developer",
  description:
    "Senior Mobile Developer specializing in Android and iOS app development with 6+ years of experience, 5M+ downloads, and 25+ published apps on Play Store and App Store.",
  url: "https://nadeemaslam.dev",
  image: "https://nadeemaslam.dev/assets/portrait.png",
  email: "link2nadeemaslam@gmail.com",
  telephone: "+923015311113",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressLocality: "Islamabad",
  },
  sameAs: [
    "https://www.linkedin.com/in/nadeem-aslam-android/",
    "https://github.com/RanaNadeemAslam",
    "https://www.fiverr.com/nadeem585",
  ],
  knowsAbout: [
    "Android Development",
    "iOS Development",
    "Kotlin",
    "Java",
    "Swift",
    "SwiftUI",
    "Flutter",
    "Jetpack Compose",
    "React Native",
    "Firebase",
    "MVVM",
    "Clean Architecture",
    "KMM",
    "Mobile App Development",
    "VPN Apps",
    "Streaming Apps",
    "AI Chatbot Apps",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Sargodha",
  },
  worksFor: {
    "@type": "Organization",
    name: "Invotyx",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "BS Computer Science",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://nadeemaslam.dev/#service",
  name: "Nadeem Aslam - Mobile App Development",
  url: "https://nadeemaslam.dev",
  description:
    "Custom Android and iOS app development. Native apps in Kotlin and Swift, cross-platform apps in Flutter and React Native. From MVP to production with Play Store and App Store deployment.",
  areaServed: "Worldwide",
  priceRange: "$$",
  provider: { "@id": "https://nadeemaslam.dev/#person" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "69",
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewBody: t.text,
  })),
  makesOffer: [
    {
      "@type": "Offer",
      url: "https://nadeemaslam.dev/#contact",
      itemOffered: {
        "@type": "Service",
        name: "Android App Development (Kotlin, Java)",
      },
    },
    {
      "@type": "Offer",
      url: "https://nadeemaslam.dev/#contact",
      itemOffered: {
        "@type": "Service",
        name: "iOS App Development (Swift, SwiftUI)",
      },
    },
    {
      "@type": "Offer",
      url: "https://nadeemaslam.dev/#contact",
      itemOffered: {
        "@type": "Service",
        name: "Cross-Platform Development (Flutter, React Native)",
      },
    },
    {
      "@type": "Offer",
      url: "https://nadeemaslam.dev/#contact",
      itemOffered: { "@type": "Service", name: "VPN & Networking Apps" },
    },
    {
      "@type": "Offer",
      url: "https://nadeemaslam.dev/#contact",
      itemOffered: { "@type": "Service", name: "AI & Chatbot Apps" },
    },
    {
      "@type": "Offer",
      url: "https://nadeemaslam.dev/#contact",
      itemOffered: { "@type": "Service", name: "Streaming & IPTV Apps" },
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Nadeem Aslam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nadeem Aslam is a Senior Mobile Developer based in Islamabad, Pakistan with over 6 years of professional experience building Android and iOS applications. He has accumulated more than 5 million downloads across the Google Play Store and Apple App Store, with 25+ published production apps and 30,000+ user ratings. Nadeem currently leads a team of 5 engineers at Invotyx where he builds VPN, networking, and streaming apps in Kotlin and Swift. He is also an active freelancer on Fiverr with a perfect 5.0-star rating across 69 reviews as a Level 2 Seller, serving clients in the United States, United Kingdom, Canada, Netherlands, Saudi Arabia, and other countries. He holds a BS in Computer Science from the University of Sargodha.",
      },
    },
    {
      "@type": "Question",
      name: "What mobile development services does Nadeem Aslam offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nadeem offers native Android development using Kotlin and Java with Jetpack Compose and MVVM architecture, native iOS development using Swift and SwiftUI, and cross-platform mobile development using Flutter and React Native. He specializes in several app categories including VPN and network optimization apps, streaming and IPTV players built with ExoPlayer, AI chatbot assistants with multi-model support, healthcare communication platforms with secure messaging, and business productivity tools. His services cover the full app lifecycle from initial architecture and UI/UX implementation through Play Store and App Store deployment, CI/CD pipeline setup, and post-launch maintenance with Firebase Crashlytics monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Nadeem Aslam for mobile app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can hire Nadeem through Fiverr at fiverr.com/nadeem585 where he has 69 five-star reviews as a Level 2 Seller, via email at link2nadeemaslam@gmail.com, or through WhatsApp at +92 301 531 1113 for a faster initial conversation. He works with clients worldwide and has delivered projects for businesses and individuals in the US, UK, Canada, Netherlands, Saudi Arabia, Luxembourg, and Dominican Republic. Engagements typically start with a free consultation to understand requirements followed by a detailed proposal with timeline and cost. He is available for both short-term projects like bug fixes and feature additions as well as long-term contracts for full app development.",
      },
    },
    {
      "@type": "Question",
      name: "What are Nadeem Aslam's most popular apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nadeem's most popular apps include Virtual 5G, a secure proxy and network optimization app with 8.9 million downloads, a 4.4-star rating, and 23,000+ reviews on Google Play Store. VPN Express is his second largest app with 1.7 million downloads and a 4.5-star rating on Android, plus a companion iOS version. NetOptimizer for iOS supports 19 languages and has a 4.5-star App Store rating. Smart IPTV Xtream Player has over 50,000 downloads as a streaming and IPTV client built with ExoPlayer. Orion AI is an iOS chatbot assistant with a 4.5-star rating that supports multiple AI models including Gemini and Claude for conversational AI and image generation.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Nadeem Aslam use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nadeem's primary technology stack includes Kotlin and Java for Android development with Jetpack Compose for modern declarative UIs, Swift and SwiftUI for iOS development, and Flutter and React Native for cross-platform projects. He uses Kotlin Multiplatform (KMM) for sharing business logic across platforms. His architecture approach follows MVVM and Clean Architecture patterns with repository layers, use cases, and ViewModels. For backend integration he works with Firebase (Firestore, Authentication, Crashlytics, Cloud Messaging), REST APIs, Room Database on Android, and Core Data on iOS. Additional tools include ExoPlayer for media streaming, Unity Ads for monetization, and CI/CD pipelines for automated testing and deployment.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Nav />

      <main id="main" className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <header className="pt-[120px] pb-20">
          <div className="max-w-[1200px] mx-auto px-10">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="flex-1">
                <StaggerIn delay={100}>
                <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold tracking-tight leading-[1.08] mb-6">
                  Senior Mobile<br />Developer
                </h1>
                </StaggerIn>
                <StaggerIn delay={250}>
                <p className="text-text-secondary text-[1.08rem] leading-relaxed mb-8 max-w-[520px]">
                  I craft high-performance Android &amp; iOS apps that users
                  love, from startup MVPs to apps with 5M+ downloads. 6+ years
                  of shipping to Play Store &amp; App Store.
                </p>
                </StaggerIn>
                <StaggerIn delay={400}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="#contact" variant="primary">
                    Get in touch
                  </Button>
                  <Button href="/work" variant="secondary">
                    See my work
                  </Button>
                </div>
                </StaggerIn>
                <StaggerIn delay={550}>
                <div className="flex items-center gap-6">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-medium text-text-muted hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-medium text-text-muted hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={socialLinks.fiverr}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-medium text-text-muted hover:text-foreground transition-colors"
                  >
                    Fiverr
                  </a>
                </div>
                </StaggerIn>
              </div>
              <div className="relative flex-shrink-0">
                <Image
                  src="/assets/portrait.png"
                  alt="Nadeem Aslam"
                  width={721}
                  height={709}
                  priority
                  sizes="(max-width: 768px) 320px, 420px"
                  className="w-[320px] md:w-[420px] grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </header>

        {/* ── Highlights ────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="highlights">
          <div className="max-w-[1200px] mx-auto px-10">
            <SectionLabel>Highlights</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="bg-background-white border border-border rounded-2xl p-6 md:p-8">
                    <Counter
                      value={item.number}
                      className="block text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-foreground mb-2"
                    />
                    <p className="text-text-muted text-[0.88rem] leading-snug">
                      {item.label}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="about">
          <div className="max-w-[1200px] mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <SectionLabel>About</SectionLabel>
                <SectionHeading>
                  Passionate about building apps people love.
                </SectionHeading>
              </div>
              <AnimateOnScroll>
                <div>
                  {about.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-text-secondary text-[0.95rem] leading-relaxed mb-5"
                    >
                      {p}
                    </p>
                  ))}
                  <div className="mt-8 flex flex-col gap-4">
                    <div className="flex justify-between border-b border-border pb-3">
                      <strong className="text-[0.82rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                        Specialization
                      </strong>
                      <span className="text-[0.95rem] text-foreground">
                        {about.details.specialization}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-3">
                      <strong className="text-[0.82rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                        Location
                      </strong>
                      <span className="text-[0.95rem] text-foreground">
                        {about.details.location}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-3">
                      <strong className="text-[0.82rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                        Experience
                      </strong>
                      <span className="text-[0.95rem] text-foreground">
                        {about.details.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Skills Strip ──────────────────────────────────────────────────── */}
        <SkillsStrip />

        {/* ── Selected Projects ─────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="work">
          <div className="max-w-[1200px] mx-auto px-10">
            <SectionLabel>Work</SectionLabel>
            <SectionHeading>Selected projects</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredProjects.map((project) => (
                <AnimateOnScroll key={project.title}>
                  <a
                    href={project.storeUrl}
                    target="_blank"
                    rel="noopener"
                    className="group block p-5 rounded-2xl border border-border bg-background-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30 cursor-pointer"
                  >
                    {/* Header: Icon + Meta */}
                    <div className="flex gap-4 mb-3">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="rounded-xl w-14 h-14 flex-shrink-0"
                      />
                      <div className="flex flex-col justify-center gap-0.5">
                        <span
                          className={`text-[0.68rem] font-bold uppercase tracking-wider ${platformColor[project.platform]}`}
                        >
                          {platformLabel[project.platform]}
                        </span>
                        {project.downloads && (
                          <span className="text-[0.72rem] font-medium text-text-muted">
                            {project.downloads}
                          </span>
                        )}
                        {project.rating && (
                          <span className="text-[0.72rem] font-medium text-text-muted">
                            {project.rating}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title + Description */}
                    <h3 className="font-bold text-base tracking-tight mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-[0.82rem] leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.7rem] px-2.5 py-0.5 rounded-full border border-border text-text-muted font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/work"
                className="text-[0.95rem] font-semibold text-foreground hover:text-accent transition-colors"
              >
                See all projects &#8599;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Experience ────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="experience">
          <div className="max-w-[1200px] mx-auto px-10">
            <SectionLabel>Experience</SectionLabel>
            <SectionHeading>Where I&apos;ve worked</SectionHeading>

            <div className="flex flex-col">
              {experience.slice(0, 4).map((exp, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-12 py-8 border-b border-border">
                    <div>
                      <span className="text-[0.82rem] font-semibold text-text-muted">
                        {exp.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[1.1rem] font-extrabold tracking-tight text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <span className="text-[0.88rem] text-text-muted block mb-3">
                        {exp.company}
                      </span>
                      {exp.description && (
                        <p className="text-text-secondary text-[0.92rem] leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Education */}
            <div className="mt-12">
              {experience.slice(4).map((exp, i) => (
                <AnimateOnScroll key={i}>
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-12 py-8 border-b border-border">
                    <div>
                      <span className="text-[0.82rem] font-semibold text-text-muted">
                        {exp.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[1.1rem] font-extrabold tracking-tight text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <span className="text-[0.88rem] text-text-muted block">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="testimonials">
          <div className="max-w-[1200px] mx-auto px-10">
            <SectionLabel>Client Reviews</SectionLabel>
            <SectionHeading>What clients say</SectionHeading>

            <TestimonialCarousel testimonials={testimonials} />

            <div className="mt-10 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1 bg-[#f5a623]/15 text-[#f5a623] text-[0.82rem] font-bold px-3 py-1.5 rounded-full">
                5.0 <span className="text-[#f5a623]">&#9733;</span>
              </span>
              <span className="text-text-muted text-[0.88rem]">
                69 reviews on Fiverr &middot; Level 2 Seller
              </span>
            </div>

            <div className="mt-10 text-center">
              <Button href="#contact" variant="primary">
                Start your project
              </Button>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="faq">
          <div className="max-w-[1200px] mx-auto px-10">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading>Frequently asked questions</SectionHeading>

            <div className="max-w-[760px]">
              {faqItems.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <details className="group border-b border-border">
                    <summary className="flex items-center justify-between cursor-pointer py-6 text-[1rem] font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span className="ml-4 text-text-muted transition-transform duration-300 group-open:rotate-45 text-xl leading-none flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="pb-6 text-text-secondary text-[0.92rem] leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </details>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-border" id="contact">
          <div className="max-w-[1200px] mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <SectionLabel>Get in touch</SectionLabel>
                <SectionHeading>
                  Want to work together?
                  <br />
                  Drop me a line.
                </SectionHeading>
              </div>
              <div>
                <ContactForm />

                <div className="flex flex-col">
                  <a
                    href={socialLinks.email}
                    className="group flex items-center justify-between py-4 border-b border-border no-underline"
                  >
                    <span className="text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                      Email
                    </span>
                    <span className="text-[0.92rem] text-foreground group-hover:text-accent transition-colors">
                      link2nadeemaslam@gmail.com
                    </span>
                    <span className="text-text-muted group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between py-4 border-b border-border no-underline"
                  >
                    <span className="text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                      LinkedIn
                    </span>
                    <span className="text-[0.92rem] text-foreground group-hover:text-accent transition-colors">
                      nadeem-aslam-android
                    </span>
                    <span className="text-text-muted group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href={socialLinks.fiverr}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between py-4 border-b border-border no-underline"
                  >
                    <span className="text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                      Fiverr
                    </span>
                    <span className="text-[0.92rem] text-foreground group-hover:text-accent transition-colors">
                      nadeem585
                    </span>
                    <span className="text-text-muted group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between py-4 border-b border-border no-underline"
                  >
                    <span className="text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted">
                      WhatsApp
                    </span>
                    <span className="text-[0.92rem] text-foreground group-hover:text-accent transition-colors">
                      +92 301 531 1113
                    </span>
                    <span className="text-text-muted group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <OutboundTracker />
    </>
  );
}
