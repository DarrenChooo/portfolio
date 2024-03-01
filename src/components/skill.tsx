// skills.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { technicalSkillsData, designSkillsData, SkillProps } from "./skillsData"; 

const Skills: React.FC = () => {
  return (
    <>
      <div className="py-8">
        <p className="text-4xl font-title mb-8">Technical Skills</p>
        {technicalSkillsData.map((section: SkillProps) => (
          <div key={section.section} className="flex flex-col py-5">
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
      <div className="py-8">
        <p className="text-4xl font-title mb-8">Design Skills</p>
        {designSkillsData.map((section: SkillProps) => (
          <div key={section.section} className="flex flex-col py-5">
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
    </>
  );
};

export default Skills;
