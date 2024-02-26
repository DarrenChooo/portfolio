"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import NextLink from "next/link";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "School Activities",
    href: "/co-curricular/school-activities",
  },
  {
    title: "Personal Development",
    href: "/co-curricular/personal-development",
  },
  {
    title: "Volunteer",
    href: "/co-curricular/volunteer",
  },
];

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink
      asChild
      active={isActive}
      className={cn(isActive && "text-blue-500")}
    >
      <NextLink href={href} passHref>
        <span
          className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold")}
        >
          {children}
        </span>
      </NextLink>
    </NavigationMenuLink>
  );
};

export default function NavigationMenuDemo() {
  const pathname = usePathname();

  const isCoCurricularActive = pathname.startsWith("/co-curricular");

  return (
    <div className="flex justify-between p-4">
      <div className="self-start text-lg font-medium py-2">
        <p className="font-bold">Darren Choo</p>
      </div>

      <div className="flex space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">About Me</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "text-lg font-semibold",
                  isCoCurricularActive && "text-lightblue2"
                )}
              >
                Co-Curricular Activities
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-wrap flex-col gap-3 p-3 text-nowrap">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/projects">Projects</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="py-2 flex space-x-6">
        <a
          href="mailto:darrenchoojh88@email.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail className="h-6 w-6 hover:text-lightblue" />
        </a>
        <a
          href="https://www.linkedin.com/in/darren-choo-921654239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="h-6 w-6 hover:text-lightblue" />
        </a>
        <a
          href="https://github.com/DarrenChooo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandGithubFilled className="h-6 w-6 hover:text-lightblue" />
        </a>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-lg leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
