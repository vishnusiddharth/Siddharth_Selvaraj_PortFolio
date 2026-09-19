/** @type {import('next').NextConfig} */

// The GitHub Actions workflow sets this to "/Siddharth_Selvaraj_PortFolio"
// so the build knows it's served from a project sub-path
// (https://vishnusiddharth.github.io/Siddharth_Selvaraj_PortFolio/) rather
// than a domain root. Left empty for local dev, so `npm run dev` still
// serves from "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages only serves static files — no Node server for
  // next/image's optimization API or dynamic routes, so this exports
  // plain HTML/CSS/JS to /out instead.
  output: "export",
  basePath,
  assetPrefix: basePath,
  // Static export needs a real folder per route (about/index.html) for
  // GitHub Pages' file server to resolve both /about and /about/.
  trailingSlash: true,
  images: {
    // Local mockups live in /public/projects and are optimised by next/image.
    // To pull screenshots from a CDN instead, whitelist the host here:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
    unoptimized: true,
  },
};
export default nextConfig;
