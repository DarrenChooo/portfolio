import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "next/link";

export type RepoCardProps = {
  id: number;
  name: string;
  description?: string | null;
  html_url: string;
};

export const RepoCard = ({
  id,
  name,
  description,
  html_url,
}: RepoCardProps) => (
  <Link
    href={html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full"
  >
    <Card
      key={id}
      className="h-full min-h-[200px] transition duration-300 hover:scale-[1.02] hover:shadow-lg flex flex-col"
    >
      <CardHeader className="flex flex-col">
        <CardTitle className="line-clamp-2 min-h-[48px]">
          {name}
        </CardTitle>

        {/* FIXED HEIGHT DESCRIPTION */}
        <CardDescription className="leading-relaxed text-muted-foreground line-clamp-3 min-h-[80px] text-justify">
          {description ?? "No description"}
        </CardDescription>
      </CardHeader>

      {/* ALWAYS PUSHED TO BOTTOM */}
      <CardContent className="mt-auto">
        <div className="text-blue-500 flex items-center">
          View Repository
          <TbBrandGithubFilled className="ml-2" />
        </div>
      </CardContent>
    </Card>
  </Link>
);