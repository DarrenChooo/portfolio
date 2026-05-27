"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaSpinner, FaTelegramPlane } from "react-icons/fa";
import { MdArrowOutward, MdCheck, MdWarning } from "react-icons/md";
import Skills from "../../components/skill";
import Academic from "../../components/academic";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MessageCircleIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "./send-email.action";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, {
      message: "Name is required",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(2, {
      message: "Message is required",
    }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error, success } = await sendEmail(
      values.name,
      values.email,
      values.message,
    );

    if (!success || error) {
      toast.error(error, {
        icon: <MdWarning />,
      });
    }

    toast.success("Successfully sent email", { icon: <MdCheck /> });
    form.reset({
      email: "",
      message: "",
      name: "",
    });
  }

  return (
    <div className="w-full lg:space-y-0 space-y-4 px-2 pb-2">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col basis-full lg:basis-7/12 space-y-2 lg:space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <p className="text-xl sm:text-2xl absolute -mt-5 -ml-6 -rotate-12 text-lightblue font-title hidden md:block">
              Hello!
            </p>
            <div className="flex flex-wrap">
              <p className="text-[28px] lg:text-7xl font-title lg:me-3 me-1">
                I'm
              </p>
              <p className="text-[28px] lg:text-7xl font-title text-lightblue">
                Darren Choo,
              </p>
            </div>
            <p className="text-lg lg:text-6xl font-title">
              Aspiring Data Scientist
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center text-center gap-[10px] lg:hidden">
            <Image
              src="/images/me.png"
              alt="Picture of Me"
              width={400}
              height={400}
              className="rounded-full w-28 h-28"
              sizes="100vw"
            />

            <span className="text-xs font-medium bg-blue-50 text-lightblue px-3 py-1 rounded-full">
              Hello!
            </span>

            <div className="flex flex-wrap justify-center">
              <p className="text-4xl font-title me-2">I'm</p>

              <p className="text-4xl font-title text-lightblue">Darren Choo,</p>
            </div>

            <h1 className="text-xl font-title -mt-2">
              Aspiring Data Scientist
            </h1>

            <hr className="w-7 h-0.5 bg-lightblue border-0 rounded" />

            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Passionate about developing AI-powered applications and
              transforming complex data into meaningful, real-world solutions
              that enhance user experiences, improve decision-making, and drive
              innovation through technology.
            </p>
          </div>

          {/* Desktop Description */}
          <div className="flex flex-wrap text-justify text-wrap">
            <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded hidden lg:block" />

            <p className="text-base sm:text-lg hidden md:block lg:px-4 text-wrap basis-full lg:basis-[85%] pt-2 lg:pt-0">
              Passionate about developing AI-powered applications that transform
              complex data into meaningful, real-world solutions for informed
              decision-making and innovation.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start gap-3 mt-1">
            <Button asChild size="sm">
              <Link href={"#contact-me"}>
                Contact Me
                <FaTelegramPlane className="ml-2 h-3 w-3" />
              </Link>
            </Button>
            <Button variant="ghost" asChild size="sm">
              <Link href="/projects/technology-project">
                My Projects
                <MdArrowOutward className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:basis-5/12 pl-16 hidden md:block">
          <Image
            src="/images/me.png"
            alt="Picture of Me"
            width={400}
            height={400}
            className="rounded-full w-24 lg:w-[86%]"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:py-24 space-y-8 lg:space-y-0">
        <div className="basis-full lg:basis-7/12 lg:space-y-6 space-y-3">
          <div className="w-full lg:w-[88%]">
            <p className="text-xl sm:text-2xl absolute -ml-10 -mt-8 -rotate-12 text-lightblue font-title hidden md:block">
              About Me
            </p>

            <p className="md:text-4xl text-3xl lg:text-7xl mt-2 md:mt-0 font-title pe-3 lg:font-normal font-semibold">
              Introduction
            </p>

            <div className="flex flex-wrap pt-3">
              <hr className="w-7 h-0.5 lg:h-1 lg:mt-3 mb-3 bg-lightblue border-0 rounded" />
              <p className="text-base sm:text-lg lg:px-4 text-wrap text-justify basis-full lg:basis-10/12">
                I'm Darren, a SP graduate with a Diploma in Information
                Technology, preparing for my Computer Science studies at NUS. I
                am deeply passionate about artificial intelligence and data
                science, and I truly believe in the power of technology to
                improve lives and address social challenges.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <Academic />
          </div>
        </div>
        <div className="basis-full lg:basis-5/12">
          <Skills />
        </div>
      </div>
      <div
        id="contact-me"
        className="flex flex-col items-center space-y-6 px-4"
      >
        <p className="md:text-4xl text-3xl lg:text-7xl font-title">
          Contact Me
        </p>
        <p className="text-base sm:text-xl text-wrap text-center">
          Feel free to contact me any time. I will get back to you as soon as I
          can!
        </p>
        <Image
          src="/images/contact.png"
          alt="Picture of Contact Me"
          width={200}
          height={200}
          className="rounded"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:w-3/4 lg:w-1/3 flex flex-col space-y-6"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="name"
                      placeholder="e.g. John Doe"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      autoComplete="email"
                      placeholder="e.g. johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="e.g. I want to work with you!"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
