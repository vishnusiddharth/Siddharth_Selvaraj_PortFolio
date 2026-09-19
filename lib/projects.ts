export type Metric = { value: string; label: string };

export type CaseStudy = {
  problem: string;
  users: string;
  constraints: string[];
  tradeoffs: { choice: string; because: string; cost: string }[];
  architecture: { step: string; detail: string }[];
  uiStates: { state: string; detail: string }[];
  results: Metric[];
  lessons: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcome: string;
  tech: string[];
  github: string | null;   // null → no repository link rendered
  demo: string | null;     // null → no demo link rendered
  stars: number | null;    // null → no star badge rendered
  image: string;
  imageAlt: string;
  featured: boolean;
  year: string;
  caseStudy: CaseStudy;
};

/**
 * Work delivered at Factech Automation Solutions. These are client systems,
 * so there are no public repositories or demo URLs — the link fields are null
 * and simply do not render. Replace any entry with a personal project when
 * you have one you can link to.
 */
export const projects: Project[] = [
  {
    slug: "react-web-platform",
    title: "React Web Application Suite",
    tagline: "Five production applications on a shared architecture",
    description:
      "Designed, developed and maintained five React.js web applications using Redux for state management, built so that scalability and maintainability held up as the product set grew rather than being retrofitted later.",
    outcome: "Five applications kept on one predictable architecture instead of five divergent codebases.",
    tech: ["React JS", "Redux", "JavaScript", "TypeScript", "HTML", "CSS"],
    github: null,
    demo: null,
    stars: null,
    image: "/projects/web-suite.png",
    imageAlt: "Dashboard interface from the React web application suite",
    featured: true,
    year: "2023 — Present",
    caseStudy: {
      problem:
        "Several web applications had to be delivered and maintained in parallel by a small team. Without a shared approach to state and component structure, each new application would have arrived with its own conventions and its own maintenance cost.",
      users: "Client-side operators and administrators using the applications as daily tools.",
      constraints: [
        "Five applications maintained concurrently by a small team",
        "State had to stay predictable as feature count grew",
        "Components needed to be reusable across applications, not copy-pasted",
        "Existing applications had to keep running through every change",
      ],
      tradeoffs: [
        {
          choice: "Redux for state management across all applications",
          because: "One predictable pattern the whole team could read, whichever app they were in.",
          cost: "More boilerplate than local state for the genuinely simple screens.",
        },
        {
          choice: "Modular architecture with reusable components",
          because: "Clean Code practices meant a fix landed once rather than five times.",
          cost: "Shared components need coordination — a change has to be checked against every consumer.",
        },
      ],
      architecture: [
        { step: "Component layer", detail: "Reusable React components following modular architecture" },
        { step: "State", detail: "Redux store with predictable, traceable updates" },
        { step: "API layer", detail: "Consumes REST endpoints served by Node.js and PHP" },
        { step: "Backend", detail: "Shared services supporting multiple frontends" },
      ],
      uiStates: [
        { state: "Responsive", detail: "Layouts adapt across desktop and tablet widths" },
        { state: "Loading", detail: "Interface stays usable while API responses resolve" },
        { state: "Error", detail: "Failed requests surface a recoverable message rather than a blank screen" },
      ],
      results: [
        { value: "5", label: "React applications delivered" },
        { value: "Redux", label: "Single shared state pattern" },
        { value: "4.1 yrs", label: "Sustained production ownership" },
      ],
      lessons: [
        "Deciding the state pattern before the second application saved more time than any later optimisation.",
        "Reusable components are only reusable if the team agrees on their boundaries early.",
      ],
    },
  },
  {
    slug: "cross-platform-mobile",
    title: "Cross-Platform Mobile Applications",
    tagline: "Nine to ten Android and iOS apps",
    description:
      "Built 9–10 cross-platform Android and iOS applications using React Native and Ionic, keeping performance stable and feature updates seamless across both platforms from a single codebase.",
    outcome: "Both platforms shipped from one codebase, with releases managed end to end through Google Play Console.",
    tech: ["React Native", "Ionic", "Android Native", "Android Studio", "JavaScript"],
    github: null,
    demo: null,
    stars: null,
    image: "/projects/mobile.png",
    imageAlt: "Mobile application screens built with React Native and Ionic",
    featured: true,
    year: "2023 — Present",
    caseStudy: {
      problem:
        "Client applications were needed on both Android and iOS. Building each natively twice was not viable for the team size, but users on either platform still expected the app to feel stable and current.",
      users: "End users on Android and iOS devices, plus the client teams requesting feature updates.",
      constraints: [
        "One codebase serving both platforms",
        "Stable performance despite the cross-platform layer",
        "Feature updates delivered without regressions on either platform",
        "Release management handled in-house via Google Play Console",
      ],
      tradeoffs: [
        {
          choice: "React Native and Ionic rather than fully native builds",
          because: "One team could deliver and maintain ten applications across two platforms.",
          cost: "Platform-specific behaviour still needs native attention when it surfaces.",
        },
        {
          choice: "Staged rollouts on every release",
          because: "A regression reaches a fraction of users rather than all of them.",
          cost: "Releases take longer to reach full availability.",
        },
      ],
      architecture: [
        { step: "Shared codebase", detail: "React Native / Ionic application logic and UI" },
        { step: "Platform layer", detail: "Android and iOS specific handling where required" },
        { step: "API layer", detail: "REST endpoints consumed from Node.js and PHP services" },
        { step: "Release", detail: "Testing, release management and staged rollout via Play Console" },
      ],
      uiStates: [
        { state: "Offline", detail: "Degrades to a usable state rather than failing outright" },
        { state: "Updating", detail: "Feature updates applied without disrupting the session" },
        { state: "Cross-platform", detail: "Behaviour verified on both Android and iOS before release" },
      ],
      results: [
        { value: "9–10", label: "Applications shipped" },
        { value: "2", label: "Platforms from one codebase" },
        { value: "Staged", label: "Rollouts on every release" },
      ],
      lessons: [
        "Owning the deployment pipeline end to end made release problems diagnosable instead of mysterious.",
        "Staged rollouts are the cheapest insurance available on a mobile release.",
      ],
    },
  },
  {
    slug: "microservices-api-layer",
    title: "Microservices & API Layer",
    tagline: "Independent services behind multiple frontends",
    description:
      "Developed and consumed RESTful APIs in Node.js and PHP supporting multiple frontend applications, then extracted independent microservices that moved work off the client. Optimised backend queries and API responses to reduce response times.",
    outcome: "Reduced client-side complexity by roughly 30% — work that earned formal recognition.",
    tech: ["Node JS", "PHP", "REST APIs", "Docker", "Neo4j", "phpMyAdmin"],
    github: null,
    demo: null,
    stars: null,
    image: "/projects/microservices.png",
    imageAlt: "Service architecture view showing API endpoints and response times",
    featured: true,
    year: "2023 — Present",
    caseStudy: {
      problem:
        "Logic that belonged on the server had accumulated in the client, making the frontend applications heavier to reason about and slower to change. Multiple frontends also needed the same data without each implementing its own version of the rules.",
      users: "The frontend applications consuming these APIs, and the end users feeling the response times.",
      constraints: [
        "Existing applications had to keep working throughout the migration",
        "One API surface serving several different frontends",
        "Response times needed to improve, not merely hold steady",
        "Manual backend steps had to be removed where possible",
      ],
      tradeoffs: [
        {
          choice: "Independent microservices over extending the existing backend",
          because: "Client-side complexity dropped by ~30% once the logic had a proper home.",
          cost: "More services to deploy, monitor and keep consistent with one another.",
        },
        {
          choice: "PHP-based cron jobs for recurring workflows",
          because: "Removed manual intervention and improved system reliability.",
          cost: "Scheduled work needs its own monitoring — silent failure is the risk.",
        },
        {
          choice: "Query and response optimisation before adding infrastructure",
          because: "The cheapest performance win is the query you stop making.",
          cost: "Requires profiling time that is harder to justify than buying capacity.",
        },
      ],
      architecture: [
        { step: "Frontends", detail: "React web and cross-platform mobile applications" },
        { step: "REST API", detail: "Node.js and PHP endpoints serving all clients" },
        { step: "Microservices", detail: "Independent services holding logic moved off the client" },
        { step: "Scheduled jobs", detail: "PHP cron jobs automating recurring backend workflows" },
        { step: "Data", detail: "Neo4j and MySQL via phpMyAdmin" },
      ],
      uiStates: [
        { state: "Fast path", detail: "Optimised queries return within improved response budgets" },
        { state: "Degraded", detail: "A slow service does not take the whole frontend down" },
        { state: "Automated", detail: "Scheduled workflows run without manual intervention" },
      ],
      results: [
        { value: "~30%", label: "Client-side complexity reduced" },
        { value: "Formal", label: "Recognition received for the work" },
        { value: "Automated", label: "Manual backend workflows removed" },
      ],
      lessons: [
        "Moving logic off the client paid back twice — the frontend got simpler and the rules stopped diverging between applications.",
        "Automating a recurring manual task is worth more than it looks, because it removes a whole category of human error.",
      ],
    },
  },
  {
    slug: "white-label-delivery",
    title: "White-Label Mobile Delivery",
    tagline: "One product, several client identities",
    description:
      "White-labelled 3–4 mobile applications by customising branding, features and configuration for different client requirements, then managed each through testing, release management and staged rollout.",
    outcome: "Multiple clients served from one maintained codebase rather than separate forks.",
    tech: ["React Native", "Ionic", "Android Studio", "Google Play Console"],
    github: null,
    demo: null,
    stars: null,
    image: "/projects/white-label.png",
    imageAlt: "The same application shown in several client brand configurations",
    featured: false,
    year: "2023 — Present",
    caseStudy: {
      problem:
        "Different clients wanted the same underlying application with their own branding, feature set and configuration. Forking per client would have multiplied the maintenance burden with every new deal.",
      users: "Client organisations and their end users, each seeing the product as their own.",
      constraints: [
        "Branding, features and configuration all variable per client",
        "A fix must reach every client build, not just the one that reported it",
        "Each build released and tracked separately in Google Play Console",
      ],
      tradeoffs: [
        {
          choice: "Configuration-driven builds over per-client forks",
          because: "One codebase to fix, test and reason about.",
          cost: "Configuration surface grows with every client-specific requirement.",
        },
        {
          choice: "Feature toggles per client",
          because: "Clients get only what they asked for without separate branches.",
          cost: "Every combination is a path that theoretically needs testing.",
        },
      ],
      architecture: [
        { step: "Core app", detail: "Shared React Native / Ionic application" },
        { step: "Config", detail: "Per-client branding, features and settings" },
        { step: "Build", detail: "Client-specific artefacts produced from the shared core" },
        { step: "Release", detail: "Individual Play Console listings with staged rollout" },
      ],
      uiStates: [
        { state: "Branded", detail: "Client identity applied across the application" },
        { state: "Feature-gated", detail: "Only the modules that client purchased are present" },
        { state: "Released", detail: "Tracked as its own listing through staged rollout" },
      ],
      results: [
        { value: "3–4", label: "Applications white-labelled" },
        { value: "1", label: "Codebase maintained" },
      ],
      lessons: [
        "Configuration beats forking, but only if the configuration surface is kept deliberately small.",
        "Every client-specific toggle is a permanent testing obligation — worth adding slowly.",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
