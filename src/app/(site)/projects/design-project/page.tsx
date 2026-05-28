"use client";

import Image from "next/image";
import { Project } from "@/components/designProject";

import {
  photoshopProjArr,
  illustratorProjArr,
} from "@/data/project/design";

export default function Home() {
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
                Design Projects
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
                src="/images/infographics/dvde/portfolio-homepage.png"
                alt="Design Projects"
                width={200}
                height={200}
                className="rounded-md shadow-lg w-32 z-10 object-cover"
              />
            </div>

            <span className="text-xs font-medium bg-blue-50 text-lightblue px-3 py-1 rounded-full">
              Projects
            </span>

            <h1 className="text-4xl font-title">Design Projects</h1>

            <hr className="w-7 h-0.5 bg-lightblue border-0 rounded" />

            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Here are the design projects I've embarked on, each representing
              a unique exploration into the diverse realms of creativity and
              visual storytelling through graphic design and user experience.
            </p>
          </div>

          {/* Desktop Description */}
          <div className="flex flex-wrap text-justify text-wrap">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded hidden lg:block" />

            <p className="text-base sm:text-lg hidden md:block lg:px-4 text-wrap basis-full lg:basis-[80%] pt-2 lg:pt-0">
              Here are the design projects I've embarked on, each representing
              a unique exploration into the diverse realms of creativity and
              visual storytelling through graphic design and user experience.
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
              src="/images/infographics/dvde/portfolio-homepage.png"
              alt="Design Projects"
              width={420}
              height={420}
              className="rounded-md shadow-lg w-28 lg:w-[90%] z-10 object-cover"
            />
          </div>
        </div>
      </div>

      {/* PHOTOSHOP */}
      <div className="md:pt-4 pt-2">
        <div className="flex flex-col lg:flex-row pt-3 md:mb-0 mb-5">
          <h1 className="text-3xl lg:text-5xl font-title font-semibold lg:font-normal order-1 lg:order-2 lg:px-4">
            Photoshop Artworks
          </h1>

          <hr className="w-7 h-0.5 lg:h-1 mt-2 lg:mt-3 bg-lightblue border-0 rounded order-2 lg:order-1" />
        </div>

        <div className="space-y-8 ">
          {photoshopProjArr.map((proj, index) => (
            <Project key={index} index={index} {...proj} />
          ))}
        </div>
      </div>

      {/* ILLUSTRATOR */}
      <div className="md:pt-12 pt-4">
        <div className="flex flex-col lg:flex-row pt-3 md:mb-0 mb-5">
          <h1 className="text-3xl lg:text-5xl font-title font-semibold lg:font-normal order-1 lg:order-2 lg:px-4">
            Illustrator Artworks
          </h1>

          <hr className="w-7 h-0.5 lg:h-1 mt-2 lg:mt-3 bg-lightblue border-0 rounded order-2 lg:order-1" />
        </div>

        <div className="space-y-8 ">
          {illustratorProjArr.map((proj, index) => (
            <Project key={index} index={index} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
}