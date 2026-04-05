"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();

      if (data.success) {
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "form_submit", {
            event_category: "contact",
            event_label: "portfolio_form",
          });
        }
        setStatus("success");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  if (status === "success") {
    return (
      <div className="p-4 rounded-lg text-[0.95rem] font-semibold text-center bg-green-500/8 text-green-700" role="alert">
        Thanks! I&apos;ll be in touch within 24 hours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <input type="hidden" name="access_key" value="b8ca2502-971d-46b3-bc86-2b6f9c883d24" />
      <input type="hidden" name="subject" value="New Portfolio Contact" />
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} autoComplete="off" />

      <div className="mb-5">
        <label htmlFor="name" className="block text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-3.5 font-[family-name:var(--font-space-grotesk)] text-[0.95rem] text-foreground bg-background-white border border-border rounded-lg transition-colors focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3.5 font-[family-name:var(--font-space-grotesk)] text-[0.95rem] text-foreground bg-background-white border border-border rounded-lg transition-colors focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-[0.78rem] font-bold uppercase tracking-[1.5px] text-text-muted mb-2">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about your project..."
          required
          className="w-full px-4 py-3.5 font-[family-name:var(--font-space-grotesk)] text-[0.95rem] text-foreground bg-background-white border border-border rounded-lg transition-colors focus:border-accent focus:outline-none resize-y min-h-[120px]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-[family-name:var(--font-archivo)] font-bold rounded-full border-2 border-accent text-[0.95rem] cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <div className="mt-4 p-4 rounded-lg text-[0.95rem] font-semibold text-center bg-red-500/8 text-red-600" role="alert">
          Something went wrong. Please try email or WhatsApp.
        </div>
      )}
    </form>
  );
}
