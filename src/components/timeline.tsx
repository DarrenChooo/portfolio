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

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

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
    <div className="flex basis-full relative pb-8">
      {/* CENTER LINE */}
      <div
        className="border-2 absolute border-lightblue2 h-full"
        style={{ left: "50%" }}
      />

      <div
        className={cn("w-full flex", isEven ? "justify-end" : "justify-start")}
      >
        {/* DOT (ONLY ONE PER ITEM WITH endYr) */}
        {endYr && (
          <div className="z-20 absolute left-1/2 -translate-x-[calc(50%-2px)] w-6 h-6 border-4 border-lightblue bg-lightblue rounded-full" />
        )}

        {/* CARD */}
        <Card className="w-[45%]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>

            <Carousel plugins={[plugin.current]}>
              <CarouselContent>
                {[imageUrl].flat().map((url, i) => (
                  <CarouselItem key={i}>
                    <div className="w-full h-[240px] overflow-hidden rounded-md shadow-lg">
                      <Image
                        src={url}
                        alt={`Image ${i + 1}`}
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-between">
              <CardDescription className="text-[16px]">{position}</CardDescription>
              <CardDescription className="text-[16px]">{date}</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="text-justify text-[14px]">{desc}</CardContent>
        </Card>

        {/* YEAR LABEL (NO DUPLICATES) */}
        {endYr && (
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              isEven ? "left-[calc(37%+40px)]" : "right-[calc(37%+40px)]",
            )}
          >
            <div className="text-orange-400 text-2xl font-semibold whitespace-nowrap">
              {endYr}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
