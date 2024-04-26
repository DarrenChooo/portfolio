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

const ccaObj: { title: string; href: string }[] = [
  {
    title: "Clubs & Societies",
    href: "/co-curricular/club-societies",
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

const projectObj: { title: string; href: string }[] = [
  {
    title: "Technology Project",
    href: "/projects/technology-project",
  },
  {
    title: "Design Project",
    href: "/projects/design-project",
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
      className={cn(
        navigationMenuTriggerStyle(),
        "hover:text-lightblue2 focus:text-lightblue2 !bg-transparent",
        isActive && "text-black"
      )}
    >
      <NextLink href={href} passHref>
        <span className={cn("text-lg font-semibold")}>{children}</span>
      </NextLink>
    </NavigationMenuLink>
  );
};

export default function NavigationMenuDemo() {
  const pathname = usePathname();

  const isCoCurricularActive = pathname.startsWith("/co-curricular");
  const isProjectActive = pathname.startsWith("/projects");

  return (
    <div className="flex justify-between p-4">
      <div className="self-start text-lg font-medium py-2">
        <p className="font-bold">Darren Choo</p>
      </div>

      <div className="flex space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem asChild>
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
                  isCoCurricularActive && "text-lightblue"
                )}
              >
                Co-Curricular Activities
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-wrap flex-col gap-3 p-3 text-nowrap">
                  {ccaObj.map((ccaObj) => (
                    <ListItem
                      key={ccaObj.title}
                      title={ccaObj.title}
                      href={ccaObj.href}
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
              <NavigationMenuTrigger
                className={cn(
                  "text-lg font-semibold",
                  isProjectActive && "text-lightblue"
                )}
              >
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-wrap flex-col gap-3 p-3 text-nowrap">
                  {projectObj.map((projectObj) => (
                    <ListItem
                      key={projectObj.title}
                      title={projectObj.title}
                      href={projectObj.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
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
  const pathname = usePathname();

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
          <div
            className={cn(
              "text-lg font-medium leading-none hover:text-lightblue2",
              pathname === props.href && "text-lightblue"
            )}
          >
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
