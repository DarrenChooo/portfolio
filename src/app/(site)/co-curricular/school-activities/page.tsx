import { Button } from "@/components/ui/button";
import Navbar from "../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
      <div className="flex items-center flex-wrap justify-center p-20">
        <div className="basis-1/3">
          <Image
            src="/images/wip.png"
            alt="Picture of Me"
            layout="responsive"
            priority
            width={40}
            height={40}
          />
        </div>
        <p className="basis-3/4 text-center py-8 text-2xl">
          Hi! I apologise, this page is still in a Work in Progress. <br />
          Please visit my other pages by clicking on the buttons below! 🙏🏻
        </p>
        <div className="basis-3/4 flex justify-center pt-6 space-x-6">
          <Link href="/">
            <Button>
              About Me
              <MdArrowOutward className="ml-4 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline">
              My Projects
              <MdArrowOutward className="ml-4 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
  );
}
