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
  imageUrl: string | string[];
};

export const Timeline: FC<TimelineProps> = ({
  index,
  title,
  position,
  desc,
  date,
  imageUrl,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const isEven = index % 2 === 0;
  return (
    <div className="flex basis-full mt-20">
      <div
        className="border-2 absolute border-lightblue2 h-full"
        style={{ left: "50%" }}
      ></div>
      <div
        className={cn("w-full flex", isEven ? "justify-end" : "justify-start")}
      >
        <Card className="w-[475px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>

            <Carousel plugins={[plugin.current]}>
              <CarouselContent>
                {[imageUrl].flat().map((url, index) => (
                  <CarouselItem key={index}>
                    <div key={index}>
                      <Image
                        src={url}
                        alt={`Image ${index + 1}`}
                        width={500}
                        height={500}
                        style={{
                          width: "100%",
                          height: "265px",
                        }}
                        className="rounded-md shadow-lg mx-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-between">
              <CardDescription>{position}</CardDescription>
              <CardDescription>{date}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>{desc}</CardContent>
        </Card>
      </div>
    </div>
  );
};
