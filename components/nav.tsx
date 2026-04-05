"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleNav = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay — outside nav to avoid stacking context */}
      <div
        className={`fixed inset-0 bg-black/30 z-[9998] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeNav}
        aria-hidden="true"
      />

      {/* Mobile drawer — outside nav to avoid stacking context */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-background-white flex-col items-start justify-start pt-[100px] px-8 gap-2 z-[9999] shadow-[-8px_0_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex md:hidden ${
          isOpen
            ? "translate-x-0 visible"
            : "translate-x-full invisible"
        }`}
      >
        <Link
          href="/#highlights"
          onClick={closeNav}
          className="text-[1.1rem] font-semibold text-foreground py-3.5 w-full border-b border-border-light"
        >
          Highlights
        </Link>
        <Link
          href="/work"
          onClick={closeNav}
          className="text-[1.1rem] font-semibold text-foreground py-3.5 w-full border-b border-border-light"
        >
          Work
        </Link>
        <Link
          href="/blog"
          onClick={closeNav}
          className="text-[1.1rem] font-semibold text-foreground py-3.5 w-full border-b border-border-light"
        >
          Blog
        </Link>
        <a
          href="https://www.linkedin.com/in/nadeem-aslam-android/"
          target="_blank"
          rel="noopener"
          onClick={closeNav}
          className="text-[1.1rem] font-semibold text-foreground py-3.5 w-full border-b border-border-light"
        >
          LinkedIn
        </a>
        <Link
          href="/#contact"
          onClick={closeNav}
          className="text-[1.1rem] font-semibold text-foreground py-3.5 w-full"
        >
          Get in touch &rarr;
        </Link>
        <div className="pt-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Nav bar */}
      <nav className="fixed top-4 left-4 right-4 z-[10001] rounded-2xl shadow-md bg-[var(--background)]">
        <div className="px-6 h-[72px] flex items-center justify-between">
          <Link
            href="/"
            className="text-[1.05rem] font-bold tracking-tight"
          >
            Nadeem Aslam
          </Link>

          {/* Desktop links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/#highlights"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Highlights
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://www.linkedin.com/in/nadeem-aslam-android/"
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/#contact"
              className="text-sm font-semibold text-foreground hover:text-foreground transition-colors"
            >
              Get in touch &rarr;
            </Link>
            <ThemeToggle />
          </div>

          {/* Hamburger — visible on mobile only */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            onClick={toggleNav}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 rounded-sm bg-foreground transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 rounded-sm bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 rounded-sm bg-foreground transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
