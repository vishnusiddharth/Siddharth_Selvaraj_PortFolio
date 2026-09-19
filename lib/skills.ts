export type SkillGroup = { category: string; items: string[] };

/** Exactly the stack listed on the CV — nothing aspirational added. */
export const skillGroups: SkillGroup[] = [
  { category: "Frameworks", items: ["React JS", "React Native", "Angular JS", "Ionic", "Android Native", "Redux"] },
  { category: "Programming", items: ["TypeScript", "JavaScript", "Node JS", "PHP", "Cypher", "HTML", "CSS"] },
  { category: "Dev tools", items: ["Android Studio", "Bitbucket", "Docker", "Ubuntu", "Jira"] },
  { category: "Databases", items: ["Neo4j", "phpMyAdmin"] },
];
