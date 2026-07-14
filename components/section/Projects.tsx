"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Card from "../../ui/Card";
import { useProjects } from "@/hooks/useProjects";

export default function Projects() {
  const { projects } = useProjects();
  return (
    <Container id="projects" className="scroll-mt-20">
      <Section>
        {/* Background Glow */}

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Heading */}

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="mx-auto my-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
              I like building personal projects and websites in my free time.
              <br />
              Here are some of my featured projects.
            </p>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project._id}
                className="group flex min-h-125 flex-col overflow-hidden p-4 text-center"
              >
                {/* Image */}

                <div className="relative h-44 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority={project.title === "Photo Gallery"}
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title */}

                <h3 className="text-xl p-4 font-bold text-slate-800">
                  {project.title}
                </h3>

                {/* Tech */}

                <div className="mb-6 flex flex-wrap justify-center gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Description */}

                <p className="leading-7 text-slate-500">
                  {project.description}
                </p>

                {/* Buttons */}

                <div className="mt-auto flex justify-center gap-8 pt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-primary transition hover:-translate-y-1 hover:scale-110"
                  >
                    <FaGithub size={30} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="text-primary transition hover:-translate-y-1 hover:scale-110"
                  >
                    <ExternalLink size={30} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
};
