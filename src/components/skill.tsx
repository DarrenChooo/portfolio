// skills.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  technicalSkillsData,
  designSkillsData,
  SkillProps,
} from "./skillsData";

const Skills: React.FC = () => {
  return (
    <div>
      <div className="lg:py-8 py-3">
        <p className="text-4xl font-title mb-4 font-semibold">
          Technical Skills
        </p>
        {technicalSkillsData.map((section: SkillProps) => (
          <div key={section.section} className="flex flex-col lg:py-5 py-4">
            <p className="lg:text-2xl text-xl mb-4 text-lightblue font-semibold">
              {section.section}
            </p>
            <div className="flex flex-wrap gap-2">
              {section.frameworks.map((framework) => (
                <Button variant="icon" asChild key={framework.name}>
                  <Link href={framework.url}>
                    <div className="flex items-center space-x-1">
                      <Image
                        src={`/images/icons/${
                          section.path + "/" + framework.icon
                        }.svg`}
                        alt={framework.name}
                        loading="lazy"
                        width={32}
                        height={32}
                        className="rounded-full bg-white p-1"
                      />
                      <p>{framework.name}</p>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:py-8 py-3">
        <p className="text-4xl font-title lg:mb-4 sm:mb-2 lg:mt-0 mt-5 font-semibold">Design Skills</p>
        {designSkillsData.map((section: SkillProps) => (
          <div key={section.section} className="flex flex-col lg:py-5 py-4">
            <p className="text-2xl mb-4 text-lightblue font-semibold">
              {section.section}
            </p>
            <div className="flex gap-3 flex-wrap">
              {section.frameworks.map((framework) => (
                <Button variant="icon" asChild key={framework.name}>
                  <Link href={framework.url}>
                    <div className="flex items-center space-x-1">
                      <Image
                        src={`/images/icons/${
                          section.path + "/" + framework.icon
                        }.svg`}
                        alt={framework.name}
                        loading="lazy"
                        width={32}
                        height={32}
                        className="rounded-full bg-white p-1"
                      />
                      <p>{framework.name}</p>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
