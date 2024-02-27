import Navbar from "../../components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane, FaTools } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaCode, FaComputer } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-12">
      <Navbar />
      <div className="px-16 py-8">
        <div className="flex items-center">
          <div className="flex flex-col basis-3/5 space-y-6">
            <p className="text-2xl absolute -ml-10 -mt-3 -rotate-12 text-lightblue font-title">
              Projects
            </p>
            <p className="text-6xl font-title pe-3">Latest Projects</p>
            <div className="flex">
              <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
              <p className="text-lg px-4 text-wrap basis-3/4">
                Here are the projects that I have worked on through the start of
                my journey as a developer, consisting a plethora of pursuits
                that enabled me to explore various facets of software
                development and design.
              </p>
            </div>
          </div>
          <div className="min-w-[450px] max-w-[450px] h-[450px]  relative flex items-center">
            <div
              className="rounded-full w-[418px] h-[418px] absolute  border-lightblue border-4 border-spacing-10 border-dashed"
              role="presentation"
              aria-hidden
            />
            <Image
              src="/images/website.png"
              alt="Picture of My Website"
              layout="responsive"
              priority
              quality={100}
              width={500}
              height={500}
              className="rounded-md w-[450px] h-[450px] shadow-lg z-10"
            />
          </div>
        </div>
        <div className="flex py-28">
          <div className="flex basis-7/12">
            <div className="basis-3/4 space-y-6">
              <p className="text-3xl text-lightblue">Project 1</p>
              <p className="text-3xl font-semibold">
                Personal Portfolio Project
              </p>
              <p className="text-wrap text-lg">
                A client's minimalist portfolio website, showcasing her works
                and milestones. This website is developed with TypeScript and
                Tailwind CSS, and deployed on Vercel, presenting a glimpse into
                her personal and <br />
                professional journey.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/projects/firstproj.png"
              alt="Picture of Me"
              layout="responsive"
              priority
              quality={100}
              width={500}
              height={500}
              className="rounded-md w-[450px] shadow-md h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
