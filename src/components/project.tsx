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
    <>
      {/* ── MOBILE layout (< md) ─────────────────────────────────────
          Stacked card: image on top, content below                     */}
      <div className="flex md:hidden flex-col rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Preview image — full width, fixed height */}
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-4">
          {/* Project number pill */}

          <p className="text-xl font-semibold leading-snug">{title}</p>

          <p className="text-xs text-muted-foreground text-justify leading-relaxed">{desc}</p>

          {/* CTA buttons */}
          <div className="flex gap-3 pt-1 flex-wrap">
            {demoUrl && (
              <Button asChild size="sm">
                <Link href={demoUrl}>
                  Visit Website
                  <MdArrowOutward className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            )}
            {repoUrl && (
              <Button
                variant={demoUrl ? "ghost" : "default"}
                asChild
                size="sm"
              >
                <Link href={repoUrl}>
                  View Repository
                  <TbBrandGithubFilled className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (≥ md) ────────────────────────────────────
          Original alternating left/right layout, unchanged             */}
      <div
        className={cn("hidden md:flex items-center", {
          "flex-row-reverse justify-between": !isEven,
        })}
      >
        <div className={cn("flex", isEven ? "basis-3/5" : "basis-5/12")}>
          <div className={cn("space-y-6", isEven && "basis-3/4")}>
          <p className="text-3xl font-semibold">{title}</p>
            <p className="text-wrap text-lg">{desc}</p>
            <div className="flex space-x-4">
              {demoUrl && (
                <Button asChild>
                  <Link href={demoUrl}>
                    Visit Website
                    <MdArrowOutward className="ml-4 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {repoUrl && (
                <Button
                  variant={demoUrl ? "ghost" : "default"}
                  asChild
                >
                  <Link href={repoUrl}>
                    View Repository
                    <TbBrandGithubFilled className="ml-4 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="basis-5/12">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
            className="rounded-md w-[450px] shadow-md h-[450px] object-cover"
          />
        </div>
      </div>
    </>
  );
};