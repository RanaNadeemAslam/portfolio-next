import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadeemaslam.dev"),
  title: {
    default: "Nadeem Aslam | Senior Mobile Developer — Android & iOS",
    template: "%s | Nadeem Aslam",
  },
  description:
    "Nadeem Aslam — Senior Mobile Developer with 6+ years building Android and iOS apps. 5M+ downloads, 25+ published apps. Expert in Kotlin, Swift, Flutter, Jetpack Compose.",
  keywords: [
    "Nadeem Aslam",
    "Android developer",
    "iOS developer",
    "mobile developer",
    "Kotlin developer",
    "Swift developer",
    "freelance mobile developer",
  ],
  authors: [{ name: "Nadeem Aslam" }],
  openGraph: {
    type: "website",
    title: "Nadeem Aslam | Senior Mobile Developer — Android & iOS",
    description:
      "Senior Mobile Developer with 6+ years of experience. 5M+ downloads across Play Store and App Store.",
    url: "https://nadeemaslam.dev",
    siteName: "Nadeem Aslam Portfolio",
    images: ["/assets/portrait.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeem Aslam | Senior Mobile Developer",
    description:
      "Senior Mobile Developer with 6+ years. 5M+ downloads, 25+ apps on Play Store & App Store.",
    images: ["/assets/portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YRKZKPN515"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-YRKZKPN515');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
