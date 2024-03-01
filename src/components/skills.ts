export type Skill = {
  name: string;
  icon: string;
  url: string;
};

export type SkillSection = {
  section: string;
  path: string;
  frameworks: Skill[];
};

export const skillsData: SkillSection[] = [
  {
    section: "Programming Languages",
    path: "language",
    frameworks: [
      {
        name: "TypeScript",
        icon: "typescript",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
      },
      {
        name: "C#",
        icon: "CS",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp",
      },
      {
        name: "Python",
        icon: "python",
        url: "https://www.python.org/",
      },
    ],
  },
  {
    section: "Programming Languages",
    path: "language",
    frameworks: [
      {
        name: "TypeScript",
        icon: "typescript",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
      },
      {
        name: "C#",
        icon: "CS",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp",
      },
      {
        name: "Python",
        icon: "python",
        url: "https://www.python.org/",
      },
    ],
  },
  
 
  
] as const;
