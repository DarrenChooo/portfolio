import { Button } from "@/components/ui/button";
import Navbar from "../../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Timeline, TimelineProps } from "../../../../components/timeline";

const timelineArr: Omit<TimelineProps, "index">[] = [
  {
    title: "GovTech Intern Experience",
    position: "Organising Committee",
    date: "Apr 2023 - Oct 2023",
    endYr: "2023",
    desc: "Worked with GovTech Young Talent Team to organise intern events and design EDMs. Also coordinated with catering vendors to ensure smooth event logistics.",
    imageUrl: [
      "/images/cca/govtech/1.jpeg",
      "/images/cca/govtech/2.jpeg",
      "/images/cca/govtech/3.jpeg",
      "/images/cca/govtech/4.jpeg",
    ],
  },
  {
    title: "Community Service and Cultural Club (CSCC)",
    position: "Head of Subcommittee",
    date: "Apr 2022 - Apr 2023",
    endYr: "",
    desc: "Led a 20-member subcommittee to plan internal bonding and external community service events at CSCC.",
    imageUrl: [
      "/images/cca/csccHead/1.jpeg",
      "/images/cca/csccHead/2.jpeg",
      "/images/cca/csccHead/3.jpeg",
      "/images/cca/csccHead/4.jpeg",
      "/images/cca/csccHead/5.jpeg",
    ],
  },
  {
    title: "Bloom (CSCC Initiative)",
    position: "Organising Commitee",
    date: "Dec 2021 - Dec 2022",
    endYr: "2022",
    desc: "Developed leadership by working with volunteer groups and promoting service initiatives to Singapore Polytechnic students.",
    imageUrl: [
      "/images/cca/bloom/1.jpeg",
      "/images/cca/bloom/2.jpeg",
      "/images/cca/bloom/3.jpeg",
    ],
  },
  {
    title: "Community Service and Cultural Club (CSCC)",
    position: "Subcommitee Member",
    date: "Apr 2021 - Apr 2022",
    endYr: "",
    desc: "Participated in bonding events and learned event planning skills under guidance of subcommittee leaders.",
    imageUrl: ["/images/cca/cscc/1.jpeg", "/images/cca/cscc/2.jpeg"],
  },
];

export default function Home() {
  return (
    <div className="w-full px-2 pb-2">
      <div className="flex flex-col lg:flex-row items-center lg:pb-28">
        <div className="flex flex-col basis-full lg:basis-7/12 space-y-2 lg:space-y-6 ">
          <div className="hidden md:block">
            <p className="text-xl sm:text-2xl absolute -mt-5 -ml-6 -rotate-12 text-lightblue font-title hidden md:block">
              CCAs
            </p>
            <div className="flex flex-wrap">
              <p className="text-[28px] text-wrap lg:text-7xl font-title lg:me-3 me-1">
                Clubs & Societies
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-[10px] lg:hidden">
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-lightblue flex items-center justify-center bg-blue-50">
              <Image
                src="/images/cca/gifs/club.gif"
                alt="Clubs gif"
                width={60}
                height={60}
                className="w-20 h-20 object-cover"
              />
            </div>
            <span className="text-xs font-medium bg-blue-50 text-lightblue px-3 py-1 rounded-full">
              CCAs
            </span>
            <h1 className="text-4xl font-title">Clubs & Societies</h1>
            <hr className="w-7 h-0.5 bg-lightblue border-0 rounded" />
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Discover the vibrant array of club activities I've passionately
              engaged in. Each club showcasing a unique journey of
              collaboration, leadership, and community impact, reflecting my
              commitment to making a difference and fostering connections.
            </p>
          </div>
          <div className="flex flex-wrap text-justify text-wrap">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded hidden lg:block"></hr>
            <p className="text-base text-lg hidden md:block lg:px-4 text-wrap basis-full lg:basis-[85%]  pt-2 lg:pt-0">
              Discover the vibrant array of club activities I've passionately
              engaged in. Each club showcasing a unique journey of
              collaboration, leadership, and community impact, reflecting my
              commitment to making a difference and fostering connections.
            </p>
          </div>
        </div>
        <div className="lg:basis-5/12 pl-12 hidden md:block">
          <div className="relative flex justify-center items-center mt-8">
            <div
              className="rounded-full h-[130%] aspect-square absolute border-lightblue border-4 border-spacing-12 border-dashed"
              aria-hidden
            />
            <Image
              src="/images/cca/gifs/club.gif"
              alt="Picture of Gif"
              width={240}
              height={240}
              className="-ml-3 w-28 lg:w-7/12"
            />
          </div>
        </div>
      </div>

      {timelineArr.map((proj, index) => (
        <Timeline key={index} index={index} {...proj} />
      ))}
    </div>
  );
}
