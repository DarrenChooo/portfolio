import React, { FC } from "react";
import Image from "next/image";

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
  const isEven = index % 2 === 0;
  return (
    <div>
      <div className="border-2 absolute border-lightblue2 h-full"></div>

      <Card className="w-[500px]">
        <CardHeader>
          <Carousel>
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
                        height: "auto",
                      }}
                      className="rounded-md shadow-lg mx-auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{position}</CardDescription>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent className="text-justify">{desc}</CardContent>
      </Card>
    </div>
  );
};
