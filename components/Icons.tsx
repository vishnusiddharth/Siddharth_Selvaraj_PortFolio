/** Inline SVG only — no emoji, no icon-font dependency. */
type P = { className?: string };
const base = "h-full w-full";

export const GitHubIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.9c-3.08.67-3.73-1.48-3.73-1.48-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.07 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53a11.11 11.11 0 0 0 7.56-10.53C23.1 5.33 18.27.5 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const TwitterIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.24 2.25h3.3l-7.21 8.24 8.48 11.21h-6.64l-5.2-6.8-5.95 6.8H1.71l7.71-8.81L1.29 2.25h6.81l4.7 6.22 5.44-6.22Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
  </svg>
);

export const ExternalIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const StarIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="m12 2.6 2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.43 6.2 20.48l1.1-6.47-4.7-4.58 6.5-.95L12 2.6Z" />
  </svg>
);

export const ArrowIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const DownloadIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16" />
  </svg>
);

export const SunIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
  </svg>
);

export const MoonIcon = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.4 14.7A8.9 8.9 0 0 1 9.3 3.6a.75.75 0 0 0-.9-1 10.4 10.4 0 1 0 12.9 12.9.75.75 0 0 0-.9-.8Z" />
  </svg>
);
