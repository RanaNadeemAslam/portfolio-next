"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "fade";
};

export default function StaggerIn({ children, delay = 0, className = "", direction = "up" }: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const baseStyles = "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const hiddenStyles = direction === "up"
    ? "opacity-0 translate-y-8"
    : "opacity-0";
  const visibleStyles = "opacity-100 translate-y-0";

  return (
    <div ref={ref} className={`${baseStyles} ${visible ? visibleStyles : hiddenStyles} ${className}`}>
      {children}
    </div>
  );
}
