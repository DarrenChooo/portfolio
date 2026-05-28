import { ProjProps } from "@/components/project";

export const projArr: Omit<ProjProps, "index">[] = [
    {
        title: "Personal Portfolio Project",
        desc: "A client's minimalist portfolio website, showcasing her works and milestones. This website is developed with TypeScript and Tailwind CSS, and deployed on Vercel, presenting a glimpse into her personal and professional journey.",
        demoUrl: "https://sarah-portfolio-sable.vercel.app/",
        repoUrl: "https://github.com/DarrenCampy/sarahPortfolio",
        imageUrl: "/images/projects/portfolio.png",
    },
    {
        title: "2D Adventure Game",
        desc: "A project based on using PixiJS to create rich and interactive graphics for simple game development. The game is a 2D platformer with a simple storyline, and it is developed with JavaScript and HTML5 Canvas.",
        demoUrl: "https://stardustneverland.onrender.com/user/react_floor.html",
        repoUrl: "https://github.com/DarrenChooo/adventure-game",
        imageUrl: "/images/projects/stardust.png",
    },
    {
        title: "Vulnerability Penetration Testing",
        desc: "A project testing our web penetration skills, where we are tasked to find vulnerabilities in a web application and exploit them. Also, migrating our local database onto cloud platforms such as AWS.",
        repoUrl: "https://github.com/DarrenChooo/vulnerability-testing",
        imageUrl: "/images/projects/esde.png",
    },
];