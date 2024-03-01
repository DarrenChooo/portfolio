export type Skill = {
  name: string;
  icon: string;
  url: string;
};

export type SkillProps = {
  section: string;
  path: string;
  frameworks: Skill[];
};

export const technicalSkillsData: SkillProps[] = [
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
    section: "Web Development",
    path: "web",
    frameworks: [
      {
        name: "NextJS",
        icon: "next",
        url: "https://nextjs.org/",
      },
      {
        name: "React",
        icon: "react",
        url: "https://react.dev/",
      },
    ],
  },
  {
    section: "Mobile Development",
    path: "web",
    frameworks: [
      {
        name: "React Native",
        icon: "react",
        url: "https://reactnative.dev/",
      },
    ],
  },
  {
    section: "Database Softwares",
    path: "database",
    frameworks: [
      {
        name: "MySQL",
        icon: "mysql",
        url: "https://www.mysql.com/",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
        url: "https://www.mongodb.com/",
      },
      {
        name: "MongoDB",
        icon: "mongodb",
        url: "https://www.postgresql.org/",
      },
    ],
  },
  {
    section: "CSS Libraries",
    path: "css",
    frameworks: [
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        url: "https://tailwindcss.com/",
      },
      {
        name: "Bootstrap",
        icon: "bootstrap",
        url: "https://getbootstrap.com/",
      },
    ],
  },
  {
    section: "Cloud Services",
    path: "cloud",
    frameworks: [
      {
        name: "Amazon Web Services",
        icon: "aws",
        url: "https://aws.amazon.com/",
      },
      {
        name: "Microsoft Azure",
        icon: "azure",
        url: "https://azure.microsoft.com/en-us",
      },
    ],
  },
  {
    section: "CI/CD",
    path: "cicd",
    frameworks: [
      {
        name: "GitHub",
        icon: "github",
        url: "https://github.com/",
      },
    ],
  },
  {
    section: "Miscellaneous Tools",
    path: "misc",
    frameworks: [
      {
        name: "Scrum",
        icon: "scrum",
        url: "https://www.scrum.org/resources/what-scrum-module",
      },
      {
        name: "Katalon Studio",
        icon: "katalon",
        url: "https://katalon.com/",
      },
      {
        name: "OutSystems",
        icon: "outsystems",
        url: "https://www.outsystems.com/",
      },
    ],
  },
];

export const designSkillsData: SkillProps[] = [
  {
    section: "Design Softwares",
    path: "design",
    frameworks: [
      {
        name: "Figma",
        icon: "figma",
        url: "https://www.figma.com/",
      },
      {
        name: "Adobe XD",
        icon: "xd",
        url: "https://adobexdplatform.com/",
      },
      {
        name: "Adobe Illustrator",
        icon: "illustartor",
        url: "https://www.adobe.com/mena_en/products/illustrator.html",
      },
      {
        name: "Adobe Photoshop",
        icon: "photoshop",
        url: "https://www.adobe.com/mena_en/products/photoshop.html",
      },
    ],
  },
];
