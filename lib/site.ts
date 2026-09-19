/**
 * Single source of truth for personal details.
 * Values below come from Siddharth Selvaraj's CV.
 */
export const site = {
  name: "Siddharth Selvaraj",
  firstName: "Siddharth",
  role: "Full Stack Developer",
  company: "Factech Automation Solutions Pvt. Ltd.",
  companyUrl: "",            // add the company site if you want it linked
  location: "Dindigul, India",
  email: "sidharthvish61@gmail.com",
  phone: "+91 94450 51562",
  // Prefixed with the base path so it resolves under the GitHub Pages
  // project sub-path (this raw <a> tag, unlike next/link or next/image,
  // isn't auto-prefixed by Next's basePath handling).
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/projects/Sidd_resume.pdf`,
  url: "https://vishnusiddharth.github.io/Siddharth_Selvaraj_PortFolio",
  yearsExperience: "4.1",
  funFact:
    "Elected President of the Rotaract Club in college — where leading initiatives and coordinating events turned out to be surprisingly good training for running a release.",
  intro:
    "I build mobile and web applications along with the backend systems behind them — React front ends, cross-platform apps, and the REST APIs and microservices that feed them.",
  summary:
    "Experienced Full Stack Developer with over 4.1 years of expertise in frontend and backend technologies, as well as IT infrastructure. Proven track record in designing robust solutions, developing efficient procedures, and establishing service standards that drive project transformation and business excellence.",
  /** Roles cycled by the hero typing effect — all held, none aspirational. */
  roles: ["Full Stack Developer", "React Native Developer", "UI/UX Developer"],
  responseTime: "Usually within 24 hours on weekdays.",
  education: {
    degree: "B.E. Electronics and Communication Engineering",
    school: "SSM Institute of Engineering and Technology, Dindigul, Tamil Nadu",
    start: "06/2016",
    end: "04/2020",
  },
  /** Leave a value as "" and its icon is not rendered. */
  socials: {
    github: "https://github.com/vishnusiddharth/vishnusiddharth",
    linkedin: "www.linkedin.com/in/siddharth-selvaraj-23b6b01b9",
    twitter: "",
  },
} as const;

export const stats = [
  { figure: "4.1", label: "Years experience" },
  { figure: "5", label: "React web apps" },
  { figure: "9–10", label: "Cross-platform apps" },
  { figure: "~30%", label: "Client complexity cut" },
] as const;

/** From the Key Achievements section of the CV. */
export const achievements = [
  {
    title: "Microservices development",
    detail:
      "Received formal recognition for creating microservices that reduced client-side complexity by 30%.",
  },
  {
    title: "Product optimisation",
    detail:
      "Won a cash prize for product optimisation suggestions that improved efficiency and performance.",
  },
  {
    title: "Leadership in Rotaract Club",
    detail:
      "Elected President of the Rotaract Club in college, leading initiatives and coordinating events.",
  },
] as const;
