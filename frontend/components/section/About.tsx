"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database } from "lucide-react";
import Button from "@/ui/Button";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  section1Title: string;
  section1Items: string[];
  section2Title: string;
  section2Items: string[];
};

const frontendLanguages = ["JavaScript (ES-6)", "HTML", "CSS", "Sass"];

const frontendFrameworks = ["React Js", "Redux", "Next Js", "Tailwind CSS"];

const backendSkills = ["Node Js", "Express Js", "SQL", "REST API"];

const backendTools = [
  "Firebase",
  "MySQL",
  "Sequelize",
  "MongoDB",
  "Mongoose",
  "Sockets",
];

const SkillCard = React.memo(
  ({
    icon,
    title,
    description,
    section1Title,
    section1Items,
    section2Title,
    section2Items,
  }: SkillCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group p-8 sm:p-10 text-center border border-white/70 
        bg-white/80 backdrop-blur-xl rounded-2xl
        hover:-translate-y-2 transition-all duration-300
        hover:shadow-[0_20px_60px_rgba(0,168,232,0.15)]"
      >
        {/* Icon */}

        <div className="flex justify-center mb-6">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a8e8]/10 text-[#00a8e8] shadow-[0_8px_30px_rgba(0,168,232,0.15)]"
          >
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-800">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-500">{description}</p>

        <div className="mt-8">
          <h4 className="mb-4 text-sm font-semibold text-[#00a8e8]">
            {section1Title}
          </h4>

          <ul className="space-y-2 text-sm text-slate-500">
            {section1Items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="mb-4 text-sm font-semibold text-[#00a8e8]">
            {section2Title}
          </h4>

          <ul className="space-y-2 text-sm text-slate-500">
            {section2Items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  },
);

SkillCard.displayName = "SkillCard";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-20">
      {/* Background glow */}

      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00a8e8]/20 blur-3xl" />

      {/* Header */}

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
          Hi, I&apos;m Jagdish.
          <span className="text-[#00a8e8]"> Nice to meet you.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-8 text-slate-500">
          B.tech in Computer Science Engineering and a professional full-stack
          developer at a software company. I&apos;m a self-taught Full Stack
          JavaScript Developer.
        </p>

        <Link href="/about">
          <Button
            className="
                mt-8 inline-flex items-center gap-2
                px-7 py-3
                font-semibold
                shadow-[0_10px_30px_rgba(0,168,232,0.35)]
                transition border-0 hover:border-2
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(0,168,232,0.45)]
                "
            >
            View Profile
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>

      {/* Cards */}

      <div
        className="relative rounded-xl z-10 mx-auto mt-16 max-w-7xl px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <SkillCard
          icon={<Code2 size={38} />}
          title="Front-end Developer"
          description="I like to build layouts from scratch using custom plugins, animations, and modern UI features."
          section1Title="Languages I Speak:"
          section1Items={frontendLanguages}
          section2Title="Frameworks & Libraries:"
          section2Items={frontendFrameworks}
        />

        <SkillCard
          icon={<Database size={38} />}
          title="Backend Developer"
          description="I enjoy developing clean and efficient backends for modern websites and scalable applications."
          section1Title="Backend Skills I Have:"
          section1Items={backendSkills}
          section2Title="Databases & Frameworks:"
          section2Items={backendTools}
        />
      </div>
    </section>
  );
};

export default AboutSection;
