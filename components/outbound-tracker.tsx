"use client";

import { useEffect } from "react";

export default function OutboundTracker() {
  useEffect(() => {
    function handleClick(this: HTMLAnchorElement) {
      if (typeof (window as any).gtag !== "function") return;
      const href = this.getAttribute("href") || "";
      let label = "other";
      if (href.includes("linkedin.com")) label = "linkedin";
      else if (href.includes("fiverr.com")) label = "fiverr";
      else if (href.includes("github.com")) label = "github";
      else if (href.includes("wa.me")) label = "whatsapp";
      else if (href.includes("mailto:")) label = "email";
      else if (href.includes("play.google.com")) label = "play_store";
      else if (href.includes("apps.apple.com")) label = "app_store";
      (window as any).gtag("event", "outbound_click", {
        event_category: "engagement",
        event_label: label,
        link_url: href,
      });
    }

    const links = document.querySelectorAll<HTMLAnchorElement>(
      'a[target="_blank"], a[href^="mailto:"], a[href^="https://wa.me"]'
    );
    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return null;
}
