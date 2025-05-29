"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import NextLink from "next/link";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

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
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

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
    title: "Volunteer Initiatives",
    href: "/co-curricular/volunteer-initiatives",
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

  const [isCoCurricularOpen, setIsCoCurricularOpen] = React.useState(false);

  const handleCoCurricularToggle = () => {
    setIsCoCurricularOpen(!isCoCurricularOpen);
  };

  return (
    <nav className="flex justify-between">
      <div className="container mx-auto flex flex-col items-center gap-4 p-3 lg:flex-row lg:justify-between lg:items-center lg:gap-0">
        <div className="flex w-full justify-between items-center lg:w-auto lg:justify-start ">
          <div className="text-lg font-medium">
            <p className="font-bold  ml-4 lg:ml-0">Darren Choo</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <span className="sr-only">Open Menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 flex flex-col h-full">
              <div className="flex-grow space-y-6">
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
                        onClick={handleCoCurricularToggle}
                      >
                        Co-Curricular Activities
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="flex flex-wrap flex-col gap-3 p-3 text-nowrap">
                          {ccaObj.map((cca) => (
                            <ListItem
                              key={cca.title}
                              title={cca.title}
                              href={cca.href}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <motion.div
                        animate={{
                          marginTop: isCoCurricularOpen ? 164 : 0, // Dynamically animate margin-top
                        }}
                        transition={{
                          duration: 0.3, // Duration of the animation
                          ease: "easeInOut", // Easing function
                        }}
                      >
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
                            {projectObj.map((proj) => (
                              <ListItem
                                key={proj.title}
                                title={proj.title}
                                href={proj.href}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </motion.div>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="mt-auto flex justify-between px-8">
                <a href="mailto:darrenchoojh88@email.com">
                  <IoIosMail className="h-6 w-6 hover:text-lightblue" />
                </a>
                <a href="https://www.linkedin.com/in/darren-choo-921654239/">
                  <FaLinkedinIn className="h-6 w-6 hover:text-lightblue" />
                </a>
                <a href="https://github.com/DarrenChooo">
                  <TbBrandGithubFilled className="h-6 w-6 hover:text-lightblue" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex space-x-4">
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
                    {ccaObj.map((cca) => (
                      <ListItem
                        key={cca.title}
                        title={cca.title}
                        href={cca.href}
                      />
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
                    {projectObj.map((proj) => (
                      <ListItem
                        key={proj.title}
                        title={proj.title}
                        href={proj.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex space-x-6">
          <a href="mailto:darrenchoojh88@email.com">
            <IoIosMail className="h-6 w-6 hover:text-lightblue" />
          </a>
          <a href="https://www.linkedin.com/in/darren-choo-921654239/">
            <FaLinkedinIn className="h-6 w-6 hover:text-lightblue" />
          </a>
          <a href="https://github.com/DarrenChooo">
            <TbBrandGithubFilled className="h-6 w-6 hover:text-lightblue" />
          </a>
        </div>
      </div>
    </nav>
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
