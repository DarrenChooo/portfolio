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
          <div className="flex flex-col basis-8/12 space-y-6">
            <p className="text-2xl absolute -ml-10 -mt-3 -rotate-12 text-lightblue font-title">
              Projects
            </p>
            <p className="text-6xl font-title pe-3">My Projects</p>
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
          <div className="min-w-[450px] max-w-[450px] h-[450px] relative flex items-center">
            <div
              className="rounded-full w-[430px] h-[430px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-lightblue border-2 border-dashed"
              role="presentation"
              aria-hidden
            />
            <Image
              src="/images/website.png"
              alt="Picture of Me"
              layout="responsive"
              priority
              quality={100}
              width={500}
              height={500}
              className="rounded-md overflow-visible w-[450px] h-[450px] ring ring-blue-400 ring-opacity-20 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
