// skills.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SkillSection } from "./skills"; // Importing types from skills.ts
import { skillsData } from "./skills"; // Importing data from skills.ts

const Skills: React.FC = () => {
  return (
    <>
      {skillsData.map((section: SkillSection) => (
        <div key={section.section} className="flex flex-col py-8">
          <p className="text-2xl mb-4 text-lightblue font-semibold">
            {section.section}
          </p>
          <div className="flex space-x-3">
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
    </>
  );
};

export default Skills;
