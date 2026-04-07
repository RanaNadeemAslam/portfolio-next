import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for nadeemaslam.dev — how we handle data collected through the contact form and analytics.",
  alternates: {
    canonical: "https://nadeemaslam.dev/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <main id="main" className="flex-1 pt-[72px]">
        <div className="max-w-[760px] mx-auto px-10 py-20">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Last updated: April 7, 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-[0.95rem] leading-relaxed text-text-secondary">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Overview
              </h2>
              <p>
                This website (<strong>nadeemaslam.dev</strong>) is the personal
                portfolio of Nadeem Aslam. This policy explains what data is
                collected when you visit the site and how it is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Data Collected via the Contact Form
              </h2>
              <p>
                When you submit the contact form, the following information is
                collected:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message / project details</li>
              </ul>
              <p className="mt-3">
                This data is used solely to respond to your inquiry. It is not
                sold, shared with third parties, or used for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Analytics
              </h2>
              <p>
                This site uses Google Analytics (GA4) to understand how visitors
                interact with the site. Google Analytics collects anonymized
                usage data such as pages visited, time on site, and general
                geographic region. No personally identifiable information is
                collected through analytics.
              </p>
              <p className="mt-3">
                You can opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Cookies
              </h2>
              <p>
                This site uses a minimal set of cookies for theme preference
                (light/dark mode) stored in your browser&apos;s local storage.
                Google Analytics may set its own cookies for analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Third-Party Services
              </h2>
              <p>
                This site links to third-party platforms (Google Play Store,
                Apple App Store, LinkedIn, GitHub, Fiverr). These sites have
                their own privacy policies. Clicking external links is subject
                to those platforms&apos; terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Your Rights
              </h2>
              <p>
                If you have submitted data through the contact form and would
                like it deleted, or if you have any questions about this policy,
                please contact:{" "}
                <a
                  href="mailto:link2nadeemaslam@gmail.com"
                  className="text-accent underline"
                >
                  link2nadeemaslam@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Changes
              </h2>
              <p>
                This policy may be updated from time to time. The &ldquo;last
                updated&rdquo; date at the top reflects the most recent
                revision.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
