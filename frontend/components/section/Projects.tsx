"use server";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  image: string;
  tech: string[];
  description: string;
  github: string;
  live: string;
}


export default async function Projects() {

let projects: Project[] = [];


  try {

    const response = await fetch(
      "http://localhost:8080/api/projects",
      {
        cache: "no-store",
      }
    );


    projects = await response.json();


  } catch (error) {

    console.error(
      "Error fetching projects:",
      error
    );

  }

  return (
    <section
      id="projects"
      className="scroll-mt-28 relative overflow-hidden bg-[#f8fbff] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00a8e8]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Featured <span className="text-[#00a8e8]">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            I like building personal projects and websites in my free time.
            <br />
            Here are some of my featured projects.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project._id}
              className="
                group
                flex
                min-h-125
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/70
                bg-white/80
                p-8
                text-center
                shadow-[0_20px_60px_rgba(0,168,232,0.12)]
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(0,168,232,0.20)]
                "
            >
              {/* Image */}

              <div className="relative mb-8 h-44 w-full">
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

              <h3 className="mb-5 text-xl font-bold text-slate-800">
                {project.title}
              </h3>

              {/* Tech */}

              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#00a8e8]/10 px-4 py-1.5 text-sm font-medium text-[#00a8e8]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}

              <p className="leading-7 text-slate-500">{project.description}</p>

              {/* Buttons */}

              <div className="mt-auto flex justify-center gap-8 pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-[#00a8e8] transition hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub size={30} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="text-[#00a8e8] transition hover:-translate-y-1 hover:scale-110"
                >
                  <ExternalLink size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
