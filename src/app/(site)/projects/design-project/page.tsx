import Image from "next/image";
import { Project, ProjProps } from "../../../../components/design-project";

const projArr: Omit<ProjProps, "index">[] = [
  {
    title: "Personal Portfolio Project",
    desc: "A client's minimalist portfolio website, showcasing her works and milestones. This website is developed with TypeScript and Tailwind CSS, and deployed on Vercel, presenting a glimpse into her personal and professional journey.",
    demoUrl: "https://sarah-portfolio-sable.vercel.app/",
    repoUrl: "https://github.com/DarrenCampy/sarahPortfolio",
    imageUrl: "/images/projects/firstproj.png",
  },
  {
    title: "Personal Portfolio Project",
    desc: "A client's minimalist portfolio website, showcasing her works and milestones. This website is developed with TypeScript and Tailwind CSS, and deployed on Vercel, presenting a glimpse into her personal and professional journey.",
    demoUrl: "/",
    repoUrl: "/",
    imageUrl: "/images/projects/firstproj.png",
  },
  {
    title: "Personal Portfolio Project",
    desc: "A client's minimalist portfolio website, showcasing her works and milestones. This website is developed with TypeScript and Tailwind CSS, and deployed on Vercel, presenting a glimpse into her personal and professional journey.",
    demoUrl: "/",
    repoUrl: "/",
    imageUrl: "/images/projects/firstproj.png",
  },
];

export default function Home() {
  return (
    <div className="px-16 py-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col basis-3/5 space-y-6">
          <p className="text-2xl absolute -ml-10 -mt-3 -rotate-12 text-lightblue font-title">
            Projects
          </p>
          <p className="text-7xl font-title pe-3">Design Projects</p>
          <div className="flex">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
            <p className="text-lg px-4 text-wrap basis-3/4">
              Here are the design projects I've embarked on, each representing a
              unique exploration into the diverse realms of creativity , where
              I've delved into various aspects of visual design and user
              experience.
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
            src="/images/infographics/dvde/portfolio-homepage.png"
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
    </div>
  );
}
