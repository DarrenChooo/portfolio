"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Project, ProjProps } from "../../../../components/project";
import { RepoCard, RepoCardProps } from "../../../../components/repoCard";
import { Octokit } from "octokit";
require("dotenv").config(); // Load environment variables from .env

const projArr: Omit<ProjProps, "index">[] = [
  {
    title: "Personal Portfolio Project",
    desc: "A client's minimalist portfolio website, showcasing her works and milestones. This website is developed with TypeScript and Tailwind CSS, and deployed on Vercel, presenting a glimpse into her personal and professional journey.",
    demoUrl: "https://sarah-portfolio-sable.vercel.app/",
    repoUrl: "https://github.com/DarrenCampy/sarahPortfolio",
    imageUrl: "/images/projects/portfolio.png",
  },
  {
    title: "2D Adventure Game ",
    desc: "A project based on using PixiJS to create rich and interactive graphics for simple game development. The game is a 2D platformer with a simple storyline, and it is developed with JavaScript and HTML5 Canvas.",
    demoUrl: "https://stardustneverland.onrender.com/user/react_floor.html",
    repoUrl: "https://github.com/DarrenChooo/adventure-game",
    imageUrl: "/images/projects/stardust.png",
  },
  {
    title: "Vulnerability Penetration Testing",
    desc: "A project testing our web penetration skills, where we are tasked to find vulnerabilities in a web application and exploit them. Also, migrating our local database onto cloud platforms such as AWS.",
    repoUrl: "https://github.com/DarrenChooo/vulnerabitly-testing",
    imageUrl: "/images/projects/esde.png",
  },
];

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default function Home() {
  const [repositories, setRepositories] = useState<RepoCardProps[]>([]);

  async function fetchRepositories(username: string) {
    try {
      const response = await octokit.request("GET /users/{username}/repos", {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      const repos: RepoCardProps[] = response.data;
      setRepositories(repos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  }

  useEffect(() => {
    fetchRepositories("DarrenChooo");
  }, []);

  return (
    <div className="px-16 py-8 space-y-32">
      <div className="flex items-center justify-between">
        <div className="flex flex-col basis-3/5 space-y-6">
          <p className="text-2xl absolute -ml-10 -mt-3 -rotate-12 text-lightblue font-title">
            Projects
          </p>
          <p className="text-7xl font-title pe-3">Technology Projects</p>
          <div className="flex">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
            <p className="text-lg px-4 text-wrap basis-3/4">
              Here are the projects that I have worked on through the start of
              my journey as a developer, consisting a plethora of pursuits that
              enabled me to explore various facets of software and web
              development.
            </p>
          </div>
        </div>
        <div className="basis-5/12 relative flex justify-center items-center mt-8">
          <div
            className="rounded-full h-[120%] aspect-square absolute border-lightblue border-4 border-spacing-10 border-dashed -z-10"
            role="presentation"
            aria-hidden
          />
          <Image
            src="/images/website.png"
            alt="Picture of My Website"
            width={500}
            height={500}
            className="rounded-md shadow-lg "
          />
        </div>
      </div>
      {projArr.map((proj, index) => (
        <Project key={index} index={index} {...proj} />
      ))}

      <div>
        <h1 className="text-3xl font-semibold pb-12">My repositories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo) => (
            <RepoCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
}
