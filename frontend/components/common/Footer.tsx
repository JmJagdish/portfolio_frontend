"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "@/ui/Button";

const socialLinks = [
  { href: "#", icon: <FaGithub size={18} /> },
  { href: "#", icon: <FaLinkedin size={18} /> },
  { href: "#", icon: <FaXTwitter size={18} /> },
  { href: "#", icon: <FaYoutube size={18} /> },
  { href: "#", icon: <FaInstagram size={18} /> },
];

type SocialIconProps = {
  href: string;
  icon: React.ReactNode;
};

const SocialIcon = React.memo(({ href, icon }: SocialIconProps) => {
  return (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary hover:border-primary"
    >
      {icon}
    </Link>
  );
});

SocialIcon.displayName = "SocialIcon";

const ContactCard = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-0 z-20 w-[90%] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/20 bg-secondary px-8 py-12 shadow-2xl backdrop-blur-xl md:px-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 text-center ">
        <h2 className="text-3xl font-bold  text-white  sm:text-4xl">
          Say Hi 👋
        </h2>

        <p className="text-base text-white/60 sm:text-lg">
          Let&apos;s catch up and discuss some amazing ideas!
        </p>

        <Link href="/contact">
          <Button className="rounded-full border bg-none border-primary text-lg font-medium text-white shadow-[0_0_4px_rgba(232,250,253)] transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary hover:shadow-[0_0_25px_primary] px-7 py-3">
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
});

ContactCard.displayName = "ContactCard";

const Footer = () => {
  return (
    <footer className="relative mt-40 w-full bg-primary pt-44 pb-16 lg:pt-32">
      <ContactCard />

      <div className="container mx-auto flex flex-col items-center px-6 text-center">
        {/* Logo */}

        <div className="relative mb-6 h-14 w-14">
          <Image
            src="/logo_white.png"
            alt="Logo"
            fill
            priority
            sizes="56px"
            className="object-contain"
          />
        </div>

        {/* Tagline */}

        <p className="max-w-lg text-lg font-semibold leading-relaxed tracking-wide text-white/80 sm:text-xl">
          Learning, enjoying & leveling up
          <br />
          one day at a time.
        </p>

        {/* Social Icons */}

        <div className="mt-8 flex gap-4">
          {socialLinks.map((item, index) => (
            <SocialIcon key={index} href={item.href} icon={item.icon} />
          ))}
        </div>

        {/* Copyright */}

        <div className="mt-8 space-y-2 text-sm tracking-wide text-white/70">
          <p>
            Designed & Built by{" "}
            <span className="text-white">Jagdish Mahanta</span>
          </p>

          <p>© 2026 jagdish.dev, INDIA</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
