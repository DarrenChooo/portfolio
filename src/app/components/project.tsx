import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { cn } from "@/lib/utils";

export type ProjProps = {
  index: number;
  title: string;
  desc: string;
  demoUrl?: string;
  repoUrl?: string;
  imageUrl: string;
};

export const Project: FC<ProjProps> = ({
  index,
  title,
  desc,
  demoUrl,
  repoUrl,
  imageUrl,
}) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={cn("flex pt-28 items-center last:py-28", {
        "flex-row-reverse justify-between": !isEven,
      })}
    >
      <div
        className={cn("flex", isEven ? "basis-3/5" : "basis-5/12")}
      >
        <div className={cn("space-y-6", isEven && 'basis-3/4')}>
          <p className="text-3xl text-lightblue">Project {index + 1}</p>
          <p className="text-3xl font-semibold">{title}</p>
          <p className="text-wrap text-lg">{desc}</p>
          <div className="flex space-x-4">
            {demoUrl ? (
              <Button asChild>
                <Link href={demoUrl}>
                  Visit Website
                  <MdArrowOutward className="ml-4 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
            {repoUrl ? (
              <Button variant="ghost" asChild>
                <Link href={repoUrl}>
                  View Repository
                  <TbBrandGithubFilled className="ml-4 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="basis-5/12">
        <Image
          src={imageUrl}
          alt="Picture of Me"
          layout="responsive"
          priority
          quality={100}
          width={500}
          height={500}
          className="rounded-md w-[450px] shadow-md h-[450px]"
        />
      </div>
    </div>
  );
};
