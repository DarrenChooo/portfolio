import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Skills from "../../components/skill";

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
              <Link href="/projects">
                My Projects
                <MdArrowOutward className="ml-4 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="basis-5/12">
          <Image
            src="/images/me2.png"
            alt="Picture of Me"
            layout="responsive"
            priority
            quality={100}
            width={400}
            height={400}
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
            <p className="text-6xl font-title pe-3">Introduction</p>
            <div className="flex">
              <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
              <p className="text-lg px-4 text-wrap basis-10/12">
                I'm Darren, a Year 3 Singapore Polytechnic student, pursuing a
                Diploma in Information Technology, interning at the Government
                Technology Agency I truly believe <br />
                in the power of technology to improve lives.
              </p>
            </div>
          </div>
          <Skills></Skills>
        </div>
        <div className="basis-5/12">
          <p className="text-4xl font-title pt-9 pb-7">Education</p>
          <>
            <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
            <div className="py-4 space-y-4 pb-8">
              <div className="flex justify-between text-lg font-semibold ">
                <p> 2021 - Present </p>
                <p>Singapore Polytechnic</p>
              </div>
              <p>
                Diploma in Information Technology, <br />
                Specialised in User Interface and User Experience <br />
                <br />
                Cumulative Grade Point Average: 3.85
              </p>
            </div>
          </>
          <>
            <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
            <div className="py-4 space-y-4 pb-8">
              <div className="flex justify-between text-lg font-semibold ">
                <p> 2020 - 2021 </p>
                <p>Singapore Polytechnic</p>
              </div>
              <p>Polytechnic Foundation Programme</p>
            </div>
          </>
          <>
            <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
            <div className="py-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold ">
                <p> 2016 - 2019 </p>
                <p>Dunman Secondary School</p>
              </div>
              <p>
                GCE N(A) Level
                <br /> <br />
                ELMAB3 (English, Mathematics, Best 3 Subjects): 8 Raw
              </p>
            </div>
          </>
          <p className="text-4xl font-title pt-16 pb-7">Achievements</p>
          <>
            <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
            <div className="py-4 space-y-4 pb-8">
              <div className="flex justify-between text-lg font-semibold ">
                <p>2023</p>
                <p>Edusave Merit Bursary Award</p>
              </div>
              <p>
                Students within the top 25% of their school’s level and course
                in academic performance have demonstrated good conduct.
              </p>
            </div>
          </>
          <>
            <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
            <div className="py-4 space-y-4 pb-8">
              <div className="flex justify-between text-lg font-semibold ">
                <p>2022</p>
                <p>Edusave Merit Bursary Award</p>
              </div>
              <p>
                Students within the top 25% of their school’s level and course
                in academic performance have demonstrated good conduct.
              </p>
            </div>
          </>
          <>
            <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
            <div className="py-4 space-y-4 pb-8">
              <div className="flex justify-between text-lg font-semibold ">
                <p>2022</p>
                <p>Director's Honour Roll (AY21/22)</p>
              </div>
              <p>
                Achieved top 10% of cohort in terms of academic performance, and
                have an exemplary personal record,
              </p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
