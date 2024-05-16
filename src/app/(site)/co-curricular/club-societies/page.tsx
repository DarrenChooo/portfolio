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
    desc: "I have collaborated with GovTech's Young Talent Team on creating events for GovTech interns, using my creativity to come up engaging Electronic Direct Mail designs. I have also liaise with catering services to ensure seamless event logistics during our events.",
    imageUrl: [
      "/images/cca/govtech/1.jpeg",
      "/images/cca/govtech/2.jpeg",
      "/images/cca/govtech/3.jpeg",
      "/images/cca/govtech/4.jpeg",
    ],
  },
  {
    title: "Community Service and Culutral Club (CSCC)",
    position: "Head of Subcommittee",
    date: "Apr 2022 - Apr 2023",
    desc: "At CSCC, we have conducted many meaningful activities and community projects, both internal and external. As the head of the subcommittee, I lead a subcommittee of 20 students that planned both internal bonding events and external community service events.",
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
    desc: "In Bloom I have grown and nurtured my leadership skills by pushing myself out of my comfort zone so that I can empathise and understand the community better. I have collaborated and communicated with volunteering organisations and help publicise their acts of service to students in Singapore Polytechnic.",
    imageUrl: [
      "/images/cca/bloom/1.jpeg",
      "/images/cca/bloom/2.jpeg",
      "/images/cca/bloom/3.jpeg",
    ],
  },
  {
    title: "Community Service and Culutral Club (CSCC)",
    position: "Organising Commitee",
    date: "Apr 2021 - Apr 2022",
    desc: "As a member in the club, I participated in bonding events oragnised by the organising committee to broaden my connections across Singapore Polytechnic. Furthermore, I learnt how to plan bonding events with the guidance of my subcommittee head",
    imageUrl: [
      "/images/cca/cscc/1.jpeg",
      "/images/cca/cscc/2.jpeg",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex items-center flex-wrap justify-center p-20">
      <div className="flex basis-full justify-center">
        <div>
          <p className="text-2xl absolute -ml-10 -mt-5 -rotate-12 text-lightblue font-title">
            CCAs
          </p>
        </div>
        <p className="text-7xl font-title pe-3">Clubs & Societies</p>
      </div>

      {timelineArr.map((proj, index) => (
        <Timeline key={index} index={index} {...proj} />
      ))}

      <p className="basis-3/4 text-center py-8 text-2xl">
        Hi! I apologise, this page is still in a Work in Progress. <br />
        Please visit my other pages by clicking on the buttons below! 🙏🏻
      </p>
      <div className="basis-3/4 flex justify-center pt-6 space-x-6">
        <Link href="/">
          <Button>
            About Me
            <MdArrowOutward className="ml-4 h-4 w-4" />
          </Button>
        </Link>
        <Link href="/projects/technology-project">
          <Button variant="outline">
            My Projects
            <MdArrowOutward className="ml-4 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
