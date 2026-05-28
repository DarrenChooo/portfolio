"use client";

import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export type TimelineProps = {
  index: number;
  title: string;
  position: string;
  desc: string;
  date: string;
  endYr?: string;
  imageUrl: string | string[];
};

export const Timeline: FC<TimelineProps> = ({
  index,
  title,
  position,
  desc,
  date,
  endYr,
  imageUrl,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const isEven = index % 2 === 0;

  return (
    <>
      {/* ── MOBILE layout (< md) ─────────────────────────────────────
          Left-aligned spine, full-width card, year inside card         */}
      <div className="flex md:hidden relative pb-6">
        {/* Vertical spine line — left edge */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-lightblue2" />

        {/* Dot on the spine */}
        {endYr && (
          <div className="z-20 absolute left-[5px]  w-4 h-4 border-[3px] border-lightblue bg-lightblue rounded-full flex-shrink-0" />
        )}

        {/* Card — offset to the right of the spine */}
        <div className="ml-8 w-full">
          {/* Year tag above the card when present */}
          {endYr && (
            <span className="inline-block text-sm mb-4 font-semibold text-orange-400">
              {endYr}
            </span>
          )}

          <Card className="w-full">
            <CardHeader className="pb-2 space-y-4">
              <CardTitle className="text-base leading-snug">{title}</CardTitle>

              {/* Image carousel */}
              <Carousel plugins={[plugin.current]} className="w-full">
                <CarouselContent>
                  {[imageUrl].flat().map((url, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={url}
                        alt={`${title} image ${i + 1}`}
                        width={700}
                        height={700}
                        style={{ width: "100%", height: "180px" }}
                        className="rounded-md shadow object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Position + date row */}
              <div className="flex justify-between pt-1 gap-2 flex-wrap">
                <CardDescription className="text-lightblue text-xs">
                  {position}
                </CardDescription>
                <CardDescription className="text-xs">{date}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="text-xs leading-relaxed pt-5">
              {desc}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── DESKTOP layout (≥ md) ────────────────────────────────────
          Original alternating center-spine layout, cleaned up          */}
      <div className="hidden md:flex basis-full relative pb-8">
        {/* Vertical spine — center */}
        <div
          className="border-2 absolute border-lightblue2 h-full"
          style={{ left: "50%" }}
        />

        {/* Dot on the spine */}
        {endYr && (
          <div className="z-20 absolute left-1/2 -translate-x-[calc(50%-2px)] w-6 h-6 border-4 border-lightblue bg-lightblue rounded-full" />
        )}
        {/* Card — alternates left/right */}
        <div
          className={cn(
            "w-full flex",
            isEven
              ? "justify-end pr-[calc(50%+2rem)]"
              : "justify-start pl-[calc(50%+2rem)]",
          )}
        >
          <Card className="w-[470px]">
            <CardHeader className="space-y-4">
              <CardTitle>{title}</CardTitle>

              <Carousel plugins={[plugin.current]}>
                <CarouselContent>
                  {[imageUrl].flat().map((url, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={url}
                        alt={`${title} image ${i + 1}`}
                        width={700}
                        height={700}
                        style={{ width: "100%", height: "225px" }}
                        className="rounded-md shadow-lg mx-auto object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="flex justify-between">
                <CardDescription className="text-lightblue font-medium">
                  {position}
                </CardDescription>
                <CardDescription>{date}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{desc}</CardContent>
          </Card>
        </div>

        {/* Year label — floats on the opposite side of the card */}
        {endYr && (
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              isEven
                ? "right-[calc(45%-3rem)]"
                : "left-[calc(45%-3rem)] -translate-x-full",
            )}
          >
            <span className="text-orange-400 text-2xl font-semibold">
              {endYr}
            </span>
          </div>
        )}
      </div>
    </>
  );
};
