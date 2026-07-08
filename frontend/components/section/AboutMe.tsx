"use client";

import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import Card from "@/ui/Card";

const aboutParagraphs = [
  <>
    Hi I&apos;m Jagdish Mahanta. I am a professional Senior Front-end engineer
    at <span className="text-[#00a8e8] font-semibold">a software company</span>.
  </>,

  <>
    I build enterprise solutions and web applications using ReactJs, NextJs,
    NodeJs, MongoDB and Firebase.
  </>,

  <>
    You can find more about my work on{" "}
    <a
      href="https://www.linkedin.com/in/jagdish-mahanta-219346152/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[#00a8e8] font-semibold hover:underline"
    >
      LinkedIn
      <ArrowUpRight size={15} />
    </a>
  </>,
];

const contactInfo = [
  {
    id: "email",
    icon: Mail,
    value: "jagdishmahanta71@gmail.com",
  },
  {
    id: "location",
    icon: MapPin,
    value: "Delhi, INDIA",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background pt-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <h2 className="my-14 text-center text-3xl font-bold text-text-secondary sm:text-4xl lg:text-5xl">
          About <span className="text-primary">me</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Content */}

          <Card className="order-2 my-10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,168,232,0.10)] backdrop-blur-xl lg:order-1 sm:p-10">
            <div className="space-y-5">
              {aboutParagraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-text-primary sm:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-6 text-lg font-bold text-text-primary">
                Contact
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 rounded-2xl border-border bg-background px-5 py-4 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a8e8]/10 text-primary">
                        <Icon size={22} />
                      </div>

                      <span className="text-sm font-medium text-text-light sm:text-base">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Image */}

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-80 w-80 rounded-4xl bg-background p-2 shadow-[0_20px_60px_rgba(0,168,232,0.20)] sm:h-96 sm:w-96">
              <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  priority
                  sizes="400px"
                  className="object-cover object-center"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-[#00a8e8]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
