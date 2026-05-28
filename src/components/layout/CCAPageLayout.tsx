import Image from "next/image";
import { Timeline, TimelineProps } from "@/components/timeline";

type Props = {
title: string;
subtitle: string;
description: string;
image: string;
timeline: Omit<TimelineProps, "index">[];
};

export default function CCAPageLayout({
title,
subtitle,
description,
image,
timeline,
}: Props) {
return (
    <div className="w-full pb-2">
    {/* HERO */}
    <div className="flex flex-col lg:flex-row items-center lg:pb-24 -mt-4">
        {/* LEFT */}
        <div className="flex flex-col basis-full lg:basis-7/12 space-y-6">
        {/* Desktop title */}
        <div className="hidden md:block">
            <p className="text-xl sm:text-2xl absolute -mt-7 -ml-6 -rotate-12 text-lightblue font-title">
            {subtitle}
            </p>

            <p className="text-[24px] lg:text-6xl font-title">{title}</p>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center text-center gap-[10px] lg:hidden">
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-lightblue flex items-center justify-center bg-blue-50">
            <Image src={image} alt={title} width={80} height={80} />
            </div>

            <span className="text-xs font-medium bg-blue-50 text-lightblue px-3 py-1 rounded-full">
            {subtitle}
            </span>

            <h1 className="text-4xl font-title">{title}</h1>

            <hr className="w-7 h-0.5 bg-lightblue border-0 rounded" />

            <p className="text-xs text-gray-500 max-w-xs">{description}</p>
        </div>

        {/* Desktop description */}
        <div className="flex flex-wrap">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded hidden lg:block" />

            <p className="hidden md:block lg:px-4 text-lg basis-full lg:basis-[80%]">
            {description}
            </p>
        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:basis-5/12 pl-12 hidden md:block">
        <div className="relative flex justify-center items-center mt-8">
            <div className="rounded-full h-[130%] aspect-square absolute border-lightblue border-4 border-dashed" />
            <Image src={image} alt={title} width={200} height={200} />
        </div>
        </div>
    </div>

    {/* TIMELINE */}
    {timeline.map((item, i) => (
        <Timeline key={i} index={i} {...item} />
    ))}
    </div>
);
}
