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
      values.message
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
            <Button asChild>
              <Link href={"#contact-me"}>
                Contact Me
                <FaTelegramPlane className="ml-4 h-4 w-4" />
              </Link>
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
            <p className="text-7xl font-title pe-3">Introduction</p>
            <div className="flex">
              <hr className="w-7 h-1 mt-3 bg-lightblue border-0 rounded"></hr>
              <p className="text-lg px-4 text-wrap basis-10/12">
                I'm Darren, a Singapore Polytechnic graduate, with a Diploma
                with Merit in Information Technology, interning at the
                Government Technology Agency. I truly believe in the power of
                technology to improve lives and address social challenges.
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
      <div id="contact-me" className="flex flex-col items-center space-y-6">
        <p className="text-7xl font-title ">Contact Me</p>
        <p className="text-xl text-wrap text-center">
          Feel free to contact me any time. I will get back to you as soon as I
          can!
        </p>
        <Image
          src="/images/contact.png"
          alt="Picture of Contact Me"
          width={230}
          height={230}
          className="-ml-3"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-1/3 flex flex-col space-y-6"
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
