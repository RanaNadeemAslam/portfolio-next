import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-text-muted text-[0.82rem]">
        <p>&copy; 2026 Nadeem Aslam. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden md:inline">&middot;</span>
          <p>
            Content, designs, and images on this site may not be reproduced
            without permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
