import Image from "next/image";
import { Timeline, TimelineProps } from "../../../../components/timeline";

const timelineArr: Omit<TimelineProps, "index">[] = [
  {
    title: "Singapore Association of the Visually Handicapped (SAVH)",
    position: "Volunteer",
    date: "Oct 2023 - Dec 2023",
    endYr: "2024",
    desc: "As a volunteer, I was engaged in meaningful activiites with the visually handicapped community across Singapore. One memorable event was accompanying them to their eye check up appointment in NUH. After their eye check up, I had the opportunity to listen about their unique life stories.",
    imageUrl: [
      "/images/pd/volunteer/savh/1.jpeg",
      "/images/pd/volunteer/savh/2.jpeg",
    ],
  },
  {
    title: "Hao Ren Hao Shi (HRHS)",
    position: "Community Liaison / Volunteer",
    date: "Jun 2022 - Nov 2022",
    endYr: "2022",
    desc:"As the community liaison officer for HRHS, I was creating and designing engaging posters for my club's social media which gathered many volunteers across Singapore Polytechnic. Concurrently, I was onsite to pack benefecaries for the needy families while managing and facilitating the manpower needs from the volunteers that I gathered.",
    imageUrl: [
      "/images/pd/volunteer/hrhs/1.jpeg",
      "/images/pd/volunteer/hrhs/2.jpeg",
      "/images/pd/volunteer/hrhs/3.jpg",
    ],
  },
  {
    title: "Willing Hearts",
    position: "Volunteer",
    date: "Mar 2022",
    endYr: "",
    desc:"As a volunteer, I packed and delivered meals into the delivery basket that will be sent to poverty stricken families and migrant workers in Singapore. I was actively engaged in communicating with different volunteers and provided a helping hand at the soup kitchen whenever needed.",
    imageUrl: [
      "/images/pd/volunteer/wh/1.jpeg",
      "/images/pd/volunteer/wh/2.jpg",
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
          <p className="text-7xl font-title pe-3">Volunteer Initiatives</p>
          <div className="flex">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
            <p className="text-lg px-4 text-wrap basis-3/4">
              Glimpse through the initiatives that I have volunteered for, each
              experience highlighting my self reflection and takeaways in
              different initiatives. Moreover, showcasing my dedication towards
              empathising with different communities in Singapore, hoping to
              make a positive impact on others.
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
            src="/images/cca/gifs/volunteer.gif"
            alt="Picture of Gif"
            width={260}
            height={260}
          />
        </div>
      </div>

      {timelineArr.map((proj, index) => (
        <Timeline key={index} index={index} {...proj} />
      ))}
    </div>
  );
}
