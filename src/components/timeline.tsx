"use client";

import React, { FC, useState } from "react";
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
  type CarouselApi,
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

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const images = [imageUrl].flat();
  const isEven = index % 2 === 0;

  return (
    <>
      {/* ── MOBILE layout (< md) ───────────────────────────────────── */}
      <div className="flex md:hidden relative pb-6">
        {/* Vertical spine line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-lightblue2" />

        {/* Dot on the spine */}
        {endYr && (
          <div className="z-20 absolute left-[5px] w-4 h-4 border-[3px] border-lightblue bg-lightblue rounded-full flex-shrink-0" />
        )}

        <div className="ml-8 w-full">
          {endYr && (
            <span className="inline-block text-sm mb-4 font-semibold text-orange-400">
              {endYr}
            </span>
          )}

          <Card className="w-full">
            <CardHeader className="pb-2 space-y-4">
              <CardTitle className="text-base leading-snug">{title}</CardTitle>

              {/* Mobile carousel — swipeable + dot indicators */}
              <div className="flex flex-col">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  setApi={setApi}
                >
                  <CarouselContent>
                    {images.map((url, i) => (
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

                {/* Dot indicators — only show when there's more than 1 image */}
                {images.length > 1 && (
                  <div className="flex justify-center gap-1.5 pt-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`rounded-full transition-all duration-200 ${
                          i === current
                            ? "w-4 h-1.5 bg-lightblue"
                            : "w-1.5 h-1.5 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

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

      {/* ── DESKTOP layout (≥ md) ──────────────────────────────────── */}
      <div className="hidden md:flex basis-full relative pb-8">
        {/* Vertical spine — center */}
        <div
          className="border-2 absolute border-lightblue2 h-full"
          style={{ left: "50%" }}
        />

        {endYr && (
          <div className="z-20 absolute left-1/2 -translate-x-[calc(50%-2px)] w-6 h-6 border-4 border-lightblue bg-lightblue rounded-full" />
        )}

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

              {/* Desktop carousel — prev/next buttons */}
              <Carousel plugins={[plugin.current]}>
                <CarouselContent>
                  {images.map((url, i) => (
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
                {images.length > 1 && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                  </>
                )}
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