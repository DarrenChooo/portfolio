import Navbar from "../components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div className="px-12">
      <Navbar />

      <div className="flex px-16 items-center">
        <div className="flex flex-col basis-8/12 space-y-6">
          <div className="flex flex-col space-y-4">
            <p className="text-7xl font-title">Hello!</p>
            <div className="flex">
              <p className="text-7xl font-title pe-3">I'm</p>
              <p className="text-7xl font-title text-lightblue">Darren Choo,</p>
            </div>
            <p className="text-6xl font-title">Fullstack Web Developer</p>
          </div>
          <div className="flex">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
            <p className="text-lg px-4">
              Creating seamless experiences, developing software for <br />
              both client and server sides with modern technology.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button>
              Contact Me
              <FaTelegramPlane className="ml-4 h-4 w-4" />
            </Button>
            <Button variant="ghost">
              My Projects
              <MdArrowOutward className="ml-4 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="basis-5/12">
          <Image
            src="/images/me2.png"
            alt="Picture of Me"
            layout="responsive"
            quality={100}
            width={400}
            height={400}
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
}
