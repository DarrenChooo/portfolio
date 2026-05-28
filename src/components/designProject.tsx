import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import ImageWrapper from "./imageWrapper";

export type ProjProps = {
  index: number;
  title: string;
  desc: string;
  demoUrl?: string;
  portrait?: boolean;
  imageUrl: any;
};

export const Project: FC<ProjProps> = ({
  index,
  title,
  desc,
  demoUrl,
  portrait,
  imageUrl,
}) => {
  const isEven = index % 2 === 0;

  return (
    <>
      {/* ── MOBILE (< md) ───────────────────────────── */}
      <div className="flex md:hidden flex-col rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Image */}
        <div className="relative w-full">
          <ImageWrapper imageUrl={imageUrl} portrait={portrait} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-4">
          <p className="text-xl font-semibold leading-snug">{title}</p>

          <p className="text-xs text-muted-foreground text-justify">
            {desc}
          </p>

          {demoUrl && (
            <div className="flex gap-3 pt-1 flex-wrap">
              <Button asChild size="sm">
                <Link href={demoUrl}>
                  Visit Website
                  <MdArrowOutward className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* ── DESKTOP (≥ md) ─────────────────────────── */}
      <div
        className={cn("hidden md:flex items-center py-14 first:pt-0 last:pb-28", {
          "flex-row-reverse justify-between": !isEven,
        })}
      >
        {/* Text */}
        <div className={cn("flex", isEven ? "basis-3/5" : "basis-5/12")}>
          <div className={cn("space-y-6", isEven && "basis-3/4")}>
            <p className="text-3xl font-semibold">{title}</p>

            <p className="text-wrap text-lg">{desc}</p>

            {demoUrl && (
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href={demoUrl}>
                    Visit Website
                    <MdArrowOutward className="ml-4 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="basis-5/12">
          <ImageWrapper imageUrl={imageUrl} portrait={portrait} />
        </div>
      </div>
    </>
  );
};