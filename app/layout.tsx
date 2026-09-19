import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans } from "next/font/google";
import { site } from "@/lib/site";
import { CursorSpotlight } from "@/components/magicui/cursor-spotlight";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "developer portfolio",
    "full-stack developer portfolio",
    "Claude Code portfolio",
    "React portfolio",
    "Next.js portfolio",
    "software engineer portfolio",
    site.name,
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.intro,
    siteName: `${site.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.intro,
    // add your handle here once you have one, e.g. creator: "@siddharth"
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

// Runs before hydration so the right theme is on screen for first paint —
// without it, a saved/system light preference would flash dark first.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    worksFor: { "@type": "Organization", name: site.company },
    sameAs: [site.socials.github, site.socials.linkedin, site.socials.twitter],
  };

  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-[#0B0D10]"
        >
          Skip to content
        </a>
        <CursorSpotlight />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
