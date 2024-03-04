import Image from "next/image";
import { Project, ProjProps } from "../../../../components/designProject";

const photoshopProjArr: Omit<ProjProps, "index">[] = [
  {
    title: "Make Every Second Count 🕒",
    desc: "A banner designed based on TikTok slogan 'Make every second count', the number 60 in the banner represents that it only takes up to 60 seconds of short clips to inspire others. Also, creating a vibrant burst of colours using TikTok colour palette.",
    imageUrl: "/images/infographics/dvde/tiktok.png",
  },
  {
    title: "Ignition in Portfolio 🔥",
    desc: "A portfolio website showcasing my photoshop skills on how I can blend design tools into my personal website. Furthermore, embracing my creativity on coming out with a unique take in portfolio websites.",
    imageUrl: [
      "/images/infographics/dvde/portfolio-homepage.png",
      "/images/infographics/dvde/portfolio-about.png",
    ],
  },
  {
    title: "A Fluttering Refreshment 🦋",
    desc: "An infographic between Pepsi and butterflies. With every sip, experience a symphony of flavours, feeling the vibrant energy dance across your taste buds. Utilising photoshop tools to bring the spotlight on Pepsi - That's What I Like.",
    portrait: true,
    imageUrl: "/images/infographics/dvde/pepsi.png",
  },
  {
    title: "Humans and Machine 🤖",
    desc: "Using photoshop tools like Polygonal Lasso tool, Layer Mask tool, etc. A poster depicting how the use of virtual reality will change us in the forseeable future.",
    portrait: true,
    imageUrl: "/images/infographics/dvde/vr-headset.png",
  },
];

const illustratorProjArr: Omit<ProjProps, "index">[] = [
  {
    title: "Make Every Second Count 🕒",
    desc: "A banner designed based on TikTok slogan 'Make every second count', the number 60 in the banner represents that it only takes up to 60 seconds of short clips to inspire others. Also, creating a vibrant burst of colours using TikTok colour palette.",
    imageUrl: "/images/infographics/dvde/tiktok.png",
  },
  {
    title: "Ignition in Portfolio 🔥",
    desc: "A portfolio website showcasing my photoshop skills on how I can blend design tools into my personal website. Furthermore, embracing my creativity on coming out with a unique take in portfolio websites.",
    imageUrl: [
      "/images/infographics/dvde/portfolio-homepage.png",
      "/images/infographics/dvde/portfolio-about.png",
    ],
  },
  {
    title: "A Fluttering Refreshment 🦋",
    desc: "An infographic between Pepsi and butterflies. With every sip, experience a symphony of flavours, feeling the vibrant energy dance across your taste buds. Utilising photoshop tools to bring the spotlight on Pepsi - That's What I Like.",
    portrait: true,
    imageUrl: "/images/infographics/dvde/pepsi.png",
  },
  {
    title: "Humans and Machine 🤖",
    desc: "Using photoshop tools like Polygonal Lasso tool, Layer Mask tool, etc. A poster depicting how the use of virtual reality will change us in the forseeable future.",
    portrait: true,
    imageUrl: "/images/infographics/dvde/vr-headset.png",
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
      <p className="text-6xl font-title pt-28 ">Photoshop Artworks</p>
      {photoshopProjArr.map((proj, index) => (
        <Project key={index} index={index} {...proj} />
      ))}

      <p className="text-6xl font-title pt-28 ">Illustrator Artworks</p>
      {illustratorProjArr.map((proj, index) => (
        <Project key={index} index={index} {...proj} />
      ))}
    </div>
  );
}
