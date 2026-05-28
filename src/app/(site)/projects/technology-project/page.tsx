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
    repoUrl: "https://github.com/DarrenChooo/vulnerability-testing",
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
        sort: "updated", // or "pushed"
        direction: "desc", // latest first
        per_page: 100,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      const repos = response.data.sort(
        (a, b) =>
          new Date(b.pushed_at ?? 0).getTime() -
          new Date(a.pushed_at ?? 0).getTime(),
      );

      setRepositories(repos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  }

  useEffect(() => {
    fetchRepositories("DarrenChooo");
  }, []);

  return (
    <div className="w-full pb-2 space-y-8 -mt-3">
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row items-center lg:pb-28">
        {/* LEFT */}
        <div className="flex flex-col basis-full lg:basis-7/12 space-y-2 lg:space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <p className="text-xl sm:text-2xl absolute -mt-7 -ml-6 -rotate-12 text-lightblue font-title">
              Projects
            </p>

            <div className="flex flex-wrap">
              <p className="text-[24px] lg:text-6xl font-title">
                Technology Projects
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center text-center gap-[10px] lg:hidden">
            <div className="relative flex justify-center items-center md:hidden mt-6 mb-3">
              {/* Blue dashed circle */}
              <div
                className="rounded-full aspect-square absolute z-0 border-lightblue border-2 border-dashed w-28 h-28"
                aria-hidden
              />

              {/* Image */}
              <Image
                src="/images/website.png"
                alt="Technology Projects"
                width={200}
                height={200}
                className="rounded-md shadow-lg w-32 z-10 object-cover"
              />
            </div>

            <span className="text-xs font-medium bg-blue-50 text-lightblue px-3 py-1 rounded-full">
              Projects
            </span>

            <h1 className="text-4xl font-title">Technology Projects</h1>

            <hr className="w-7 h-0.5 bg-lightblue border-0 rounded" />

            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Explore the projects I have developed throughout my journey in
              software development, ranging from web applications to interactive
              experiences and cybersecurity projects that strengthened my
              problem-solving and technical development skills.
            </p>
          </div>

          {/* Desktop Description */}
          <div className="flex flex-wrap text-justify text-wrap">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded hidden lg:block" />

            <p className="text-base sm:text-lg hidden md:block lg:px-4 text-wrap basis-full lg:basis-[80%] pt-2 lg:pt-0">
              Explore the projects I have developed throughout my journey in
              software development, ranging from web applications to interactive
              experiences and cybersecurity projects that strengthened my
              problem-solving and technical development skills.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:basis-5/12 pl-12 hidden md:block">
          <div className="relative flex justify-center items-center mt-8">
            <div
              className="rounded-full h-[120%] aspect-square absolute z-0 border-lightblue border-4 border-dashed"
              aria-hidden
            />

            <Image
              src="/images/website.png"
              alt="Technology Projects"
              width={420}
              height={420}
              className="rounded-md shadow-lg w-28 lg:w-[90%] z-10 object-cover"
            />
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="space-y-8 lg:space-y-24">
        {projArr.map((proj, index) => (
          <Project key={index} index={index} {...proj} />
        ))}
      </div>

      {/* REPOSITORIES */}
      <div className="md:pt-12 pt-4">
        <div className="flex flex-col lg:flex-row pt-3 md:mb-8 mb-5">
          <h1 className="text-3xl lg:text-5xl font-title font-semibold lg:font-normal order-1 lg:order-2 lg:px-4">
            My Repositories
          </h1>

          <hr className="w-7 h-0.5 lg:h-1 mt-2 lg:mt-3 bg-lightblue border-0 rounded order-2 lg:order-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
          {" "}
          {repositories.map((repo) => (
            <RepoCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
}
