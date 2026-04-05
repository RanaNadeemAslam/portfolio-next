"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type Testimonial = {
  text: string;
  author: string;
  country: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine group size: 2 on md+, 1 on mobile
  const [groupSize, setGroupSize] = useState(2);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setGroupSize(mql.matches ? 2 : 1);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const totalGroups = Math.ceil(testimonials.length / groupSize);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = () => setPrefersReducedMotion(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused || prefersReducedMotion || totalGroups <= 1) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, totalGroups, goToNext]);

  // Reset activeIndex if it's out of bounds after a groupSize change
  useEffect(() => {
    if (activeIndex >= totalGroups) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalGroups]);

  const transitionDuration = prefersReducedMotion ? "0ms" : "500ms";

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel viewport */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: `transform ${transitionDuration} cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          {Array.from({ length: totalGroups }).map((_, groupIdx) => {
            const start = groupIdx * groupSize;
            const groupItems = testimonials.slice(start, start + groupSize);

            return (
              <div
                key={groupIdx}
                className="w-full flex-shrink-0"
                style={{ minWidth: "100%" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupItems.map((t, i) => (
                    <div
                      key={start + i}
                      className="bg-background-white border border-border rounded-xl p-7 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div
                        className="text-lg mb-4 tracking-wider"
                        style={{ color: "#f5a623" }}
                      >
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </div>
                      <p className="text-text-secondary text-[0.92rem] leading-relaxed mb-6 flex-1">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <strong className="text-[0.88rem] font-bold text-foreground">
                          {t.author}
                        </strong>
                        <span className="text-[0.82rem] text-text-muted">
                          {t.country}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      {totalGroups > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial group ${i + 1}`}
              className="p-1"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    activeIndex === i
                      ? "var(--foreground, #111)"
                      : "var(--border, #ddd)",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
