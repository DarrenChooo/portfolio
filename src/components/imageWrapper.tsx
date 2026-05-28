"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { type CarouselApi } from "./ui/carousel";
import { ProjProps } from "./designProject";
import React from "react";

const ImageWrapper = ({
  imageUrl,
  portrait,
}: {
  imageUrl: ProjProps["imageUrl"];
  portrait?: boolean;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Track current slide for dot indicators
  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const mobileContainerClass = portrait
    ? "flex justify-center bg-gray-50"
    : "w-full";

  const mobileImgStyle = portrait
    ? { width: "55%", height: "auto" }
    : { width: "100%", height: "180px", objectFit: "cover" as const };

  const desktopImgStyle = portrait
    ? { width: "55%", height: "auto", margin: "0 auto", display: "block" }
    : { width: "100%", height: "auto" };

  const sharedImgClass = "rounded-md md:shadow-lg";

  const prevClass = portrait ? "left-3" : "";
  const nextClass = portrait ? "right-3" : "";

  if (Array.isArray(imageUrl) && imageUrl.length > 1) {
    return (
      <>
        {/* ── MOBILE: swipeable carousel + dot indicators ── */}
        <div className="md:hidden flex flex-col">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {imageUrl.map((url, index) => (
                <CarouselItem key={index}>
                  <div className={mobileContainerClass}>
                    <Image
                      src={url}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={500}
                      style={mobileImgStyle}
                      className={sharedImgClass}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators — tap to jump, active dot stretches into a pill */}
          <div className="flex justify-center gap-1.5 py-2">
            {imageUrl.map((_, i) => (
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
        </div>

        {/* ── DESKTOP: original carousel with prev/next buttons ── */}
        <div className="hidden md:block">
          <div className="relative">
            <Carousel>
              <CarouselContent>
                {imageUrl.map((url, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={url}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={500}
                      style={desktopImgStyle}
                      className={sharedImgClass}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className={prevClass} />
              <CarouselNext className={nextClass} />
            </Carousel>
          </div>
        </div>
      </>
    );
  }

  // Single image
  if (typeof imageUrl === "string") {
    return (
      <>
        {/* Mobile */}
        <div className={`md:hidden ${mobileContainerClass}`}>
          <Image
            src={imageUrl}
            alt="Project image"
            width={500}
            height={500}
            style={mobileImgStyle}
            className={sharedImgClass}
          />
        </div>
        {/* Desktop */}
        <div className="hidden md:flex justify-center">
          <Image
            src={imageUrl}
            alt="Project image"
            width={500}
            height={500}
            style={desktopImgStyle}
            className={sharedImgClass}
          />
        </div>
      </>
    );
  }

  return null;
};

export default ImageWrapper;
