import { Button } from "@/components/ui/button";
import Navbar from "../../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Timeline, TimelineProps } from "../../../../components/timeline";

const timelineArr: Omit<TimelineProps, "index">[] = [
  {
    title: "TikTok x Halogen Mentoring",
    position: "Mentee",
    date: "Jan 2024 - Jun 2024",
    endYr: "2024",
    desc: "During my mentorship, I got the chance to initiate conversations with like-minded individuals who were keen on nuturing their skills. On a monthly basis, I meet up with my mentor to learn about the working industry and life skills that are imperative for my future.",
    imageUrl: [
      "/images/pd/tiktok/1.jpeg",
      "/images/pd/tiktok/2.jpeg",
      "/images/pd/tiktok/3.jpeg",
    ],
  },
  {
    title: "NUS-ISS Digital Futurist Challenge",
    position: "Participant",
    date: "Jul 2022 - Nov 2022",
    endYr: "2022",
    desc: "Participating in this Hackathon allowed me to develop innovative ideas by integrating technology solutions into our healthcare system. In addition, I have cultivated my leadership skills through leading a group of students with diverse backgrounds such as, business, design and technology.",
    imageUrl: [
      "/images/pd/dfc/1.jpeg",
      "/images/pd/dfc/2.jpg",
      "/images/pd/dfc/3.jpg",
    ],
  },
  
];

export default function Home() {
  return (
    <div className="flex items-center flex-wrap justify-center p-16">
      <div className="flex items-center justify-between mb-32">
        <div className="flex flex-col basis-3/5 space-y-6">
          <p className="text-2xl absolute -ml-10 -mt-3 -rotate-12 text-lightblue font-title">
            CCAs
          </p>
          <p className="text-7xl font-title pe-3">Personal Development</p>
          <div className="flex">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
            <p className="text-lg px-4 text-wrap basis-3/4">
              Explore the plethora of activities I've engaged in for my personal
              development. Through each experiences, I have nutured and grow to
              who I am today. I look forward to a series of experiences and
              opportunities in my jourey of learning, striving towards
              excellence.
            </p>
          </div>
        </div>
        <div className="basis-5/12 relative flex justify-center items-center mt-8">
          <div
            className="rounded-full h-[135%] aspect-square absolute border-lightblue border-4 border-spacing-10 border-dashed -z-10"
            role="presentation"
            aria-hidden
          />
          <Image
            src="/images/cca/gifs/development.gif"
            alt="Picture of Gif"
            width={260}
            height={260}
            className="-ml-5"
          />
        </div>
      </div>

      {timelineArr.map((proj, index) => (
        <Timeline key={index} index={index} {...proj} />
      ))}
    </div>
  );
}
