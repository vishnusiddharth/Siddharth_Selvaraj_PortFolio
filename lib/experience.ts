export type Role = {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
};

export const experience: Role[] = [
  {
    company: "Factech Automation Solutions Pvt. Ltd., Noida",
    role: "Full Stack Developer",
    start: "08/2023",
    end: "Present",
    description:
      "Designed, developed and maintained 5 React.js web applications and 9–10 cross-platform mobile apps, with the Node.js and PHP APIs behind them. Created independent microservices that cut client-side complexity by ~30%, automated backend workflows with PHP cron jobs, and managed end-to-end releases through Google Play Console. Mentored interns for 2.5 years.",
    tech: ["React JS", "Redux", "React Native", "Ionic", "Node JS", "PHP", "Docker"],
  },
  {
    company: "Factech Automation Solutions Pvt. Ltd., Noida",
    role: "UI/UX Developer",
    start: "08/2022",
    end: "08/2023",
    description:
      "Turned designs into responsive, pixel-accurate React.js interfaces with intuitive user flows. Built reusable UI components and fixed frontend bugs and performance issues.",
    tech: ["React JS", "JavaScript", "HTML", "CSS"],
  },
];
