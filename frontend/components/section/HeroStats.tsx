import React from "react";
import Image from "next/image";
import { MapPin, Clock, Send } from "lucide-react";
import Section from "@/ui/Section";
import Container from "@/ui/Container";
import Card from "@/ui/Card";

const skills = [
  {
    image: "/icons/react.png",
    title: "React.js",
  },
  {
    image: "/icons/nextjs.png",
    title: "Next.js",
  },
  {
    image: "/icons/typescript.png",
    title: "TypeScript",
  },
  {
    image: "/icons/nodejs.png",
    title: "Node.js",
  },
  {
    image: "/icons/mongodb.png",
    title: "MongoDB",
  },
];

const stats = [
  {
    image: "/icons/projects.png",
    value: "30+",
    title: "Projects Completed",
    description: "Web applications delivered",
  },
  {
    image: "/icons/experience.png",
    value: "3+",
    title: "Years Experience",
    description: "Building modern solutions",
  },
  {
    image: "/icons/trophy.png",
    value: "100%",
    title: "Client Satisfaction",
    description: "Quality and dedication you can trust",
  },
  {
    image: "/icons/code.png",
    value: "Clean Code",
    title: "Best Practices",
    description: "Performance & scalability focused",
  },
];

const HeroStats = () => {
  return (
    <Container className="mt-0">
      <Section id="skills" className="text-center">
        <div className="rounded-3xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="text-center">
              <h2 className="inline text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
                Building <span className="text-[#00a8e8]">Scalable</span> Web
                Applications
              </h2>

              <Image
                src="/icons/boost.png"
                alt="booster"
                width={40}
                height={40}
                className="ml-2 inline-block align-top"
              />
            </div>

            <p className="mt-3 text-lg text-secondary-foreground sm:text-xl">
              Turning ideas into{" "}
              <span className="font-semibold text-[#00a8e8]">
                real products
              </span>
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-4 rounded-2xl">
            {skills.map((skill) => (
              <Card
                key={skill.title}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold shadow-[0_8px_25px_rgba(0,168,232,0.18)] backdrop-blur-xl"
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />

                <span>{skill.title}</span>
              </Card>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <Card
                key={item.title}
                className="rounded-3xl p-6 shadow-[0_18px_50px_rgba(0,168,232,0.12)] transition hover:-translate-y-2"
              >
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>

                <h3 className="text-3xl font-bold text-primary">
                  {item.value}
                </h3>

                <h4 className="mt-2 font-semibold text-text-primary">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>

                <div className="mt-5 h-1 rounded-full bg-primary/20">
                  <div className="h-full w-[85%] rounded-full bg-primary" />
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Bar */}
          <Card className="mt-8 flex flex-wrap items-center justify-center gap-6 p-5 ">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Available for work
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              India (IST)
            </span>

            <span className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              Flexible Time
            </span>

            <span className="flex items-center gap-2 text-primary">
              <Send size={18} />
              Let&apos;s connect!
            </span>
          </Card>
        </div>
      </Section>
    </Container>
  );
};

export default HeroStats;
