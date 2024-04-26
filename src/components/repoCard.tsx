import React, { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export type RepoCardProps = {
  id: number;
  name: string;
  description?: string | null;
  html_url: string;
};

export const RepoCard = ({ id, name, description, html_url }: RepoCardProps) => (
    <Link
      href={html_url}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      className="block" 
    >
      <Card
        className="mb-4 transition transform hover:scale-105 hover:shadow-lg h-40"
        key={id}
      >
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-ellipsis">{description ?? "No description"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-blue-500 flex items-center justify-items-end">
            View Repository <TbBrandGithubFilled className="ml-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );