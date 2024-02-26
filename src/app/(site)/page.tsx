import Navbar from "../components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane, FaTools } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaCode, FaComputer } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-12">
      <Navbar />
      <div className="px-16 py-8">
        <div className="flex items-center">
          <div className="flex flex-col basis-8/12 space-y-6">
            <div className="flex flex-col space-y-4">
              <p className="text-2xl absolute -mt-5 -ml-6 -rotate-12 text-lightblue font-title">
                Hello!
              </p>
              <div className="flex">
                <p className="text-7xl font-title pe-3">I'm</p>
                <p className="text-7xl font-title text-lightblue">
                  Darren Choo,
                </p>
              </div>
              <p className="text-6xl font-title">Fullstack Web Developer</p>
            </div>
            <div className="flex">
              <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
              <p className="text-lg px-4 text-wrap basis-4/5">
                Creating seamless experiences, developing software for both
                client and server sides with modern technology.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button>
                Contact Me
                <FaTelegramPlane className="ml-4 h-4 w-4" />
              </Button>
              <Link href="/projects">
                <Button variant="ghost">
                  My Projects
                  <MdArrowOutward className="ml-4 h-4 w-4" />
                </Button>
              </Link>
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
            <div className="py-8">
              <p className="text-4xl font-title mb-8">Technical Skills</p>
              <div className="flex items-center flex-wrap pb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-beige">
                  <FaCode className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl ms-8 font-semibold">
                  Programming Language
                </p>
                <p className="mt-4 text-lg basis-full">
                  Javascript, Typescript, C++, HTML, CSS, Python
                </p>
              </div>
              <div className="flex items-center flex-wrap pb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-beige">
                  <FaDatabase className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl ms-8 font-semibold">
                  Database Softwares
                </p>
                <p className="mt-4 text-lg basis-full">
                  MySQL, PostgreSQL, MongoDB
                </p>
              </div>
              <div className="flex items-center flex-wrap pb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-beige">
                  <IoIosCloud className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl ms-8 font-semibold">Cloud Services</p>
                <p className="mt-4 text-lg basis-full">Amazon Web Services</p>
              </div>
              <div className="flex items-center flex-wrap pb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-beige">
                  <FaTools className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl ms-8 font-semibold">
                  Miscellaneous Tools
                </p>
                <p className="mt-4 text-lg basis-full">
                  REST APIs, Agile Methodologies, Object Oriented Programming
                </p>
              </div>
            </div>
            <div className="py-8">
              <p className="text-4xl font-title mb-8">Design Skills</p>
              <div className="flex items-center flex-wrap pb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-beige">
                  <FaComputer className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl ms-8 font-semibold">Design Softwares</p>
                <p className="mt-4 text-lg basis-full">
                  Adobe XD, Figma, Adobe Photoshop, Adobe Illustrator
                </p>
              </div>
            </div>
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
                  Achieved top 10% of cohort in terms of academic performance,
                  and have an exemplary personal record,
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
