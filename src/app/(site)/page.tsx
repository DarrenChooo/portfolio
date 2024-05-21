import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Skills from "../../components/skill";
import Academic from "../../components/academic";

export default function Home() {
  return (
    <div className="px-16 py-8">
      <div className="flex items-center">
        <div className="flex flex-col basis-7/12 space-y-6">
          <div className="flex flex-col space-y-4">
            <p className="text-2xl absolute -mt-5 -ml-6 -rotate-12 text-lightblue font-title">
              Hello!
            </p>
            <div className="flex">
              <p className="text-7xl font-title pe-3">I'm</p>
              <p className="text-7xl font-title text-lightblue">Darren Choo,</p>
            </div>
            <p className="text-6xl font-title">Fullstack Web Developer</p>
          </div>
          <div className="flex">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
            <p className="text-lg px-4 text-wrap basis-4/5">
              Creating seamless experiences, developing software for both client
              and server sides with modern technology.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button>
              Contact Me
              <FaTelegramPlane className="ml-4 h-4 w-4" />
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/projects/technology-project">
                My Projects
                <MdArrowOutward className="ml-4 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="basis-5/12">
          <Image
            src="/images/me.png"
            alt="Picture of Me"
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "auto",
            }}
            className="rounded-full "
          />
        </div>
      </div>
      <div className="flex py-24">
        <div className="basis-7/12">
          <div className="space-y-6 pb-8">
            <p className="text-2xl absolute -ml-10 -mt-8 -rotate-12 text-lightblue font-title">
              About Me
            </p>
            <p className="text-7xl font-title pe-3 ">Introduction</p>
            <div className="flex">
              <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
              <p className="text-lg px-4 text-wrap basis-10/12">
                I'm Darren, a Year 3 Singapore Polytechnic student, pursuing a
                Diploma in Information Technology, interning at the Government
                Technology Agency I truly believe
                in the power of technology to improve lives.
              </p>
            </div>
          </div>
          <div className="w-3/4">
            <Academic></Academic>
          </div>
        </div>
        <div className="basis-5/12">
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
}
