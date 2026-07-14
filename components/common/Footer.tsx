"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";

import { socialLinks } from "@/constant/socialLinks";
import  SocialIcon from "@/components/common/SocialIcon";

const ContactCard = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-0 z-20 w-[80%] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-3xl p-12 shadow-2xl backdrop-blur-xl md:px-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 text-center ">
        <h2 className="text-3xl font-bold text-text-primary  sm:text-4xl">Say Hi 👋</h2>

        <p className="text-base text-text-secondary sm:text-lg">
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

type FooterProps = {
  showContactCard?: boolean;
};

const Footer = ({ showContactCard = true }: FooterProps) => {
  return (
    <footer
      className={`relative w-full rounded-t-3xl bg-primary pb-16 ${
        showContactCard ? "mt-20 pt-44 lg:pt-32" : "mt-0 pt-16"
      }`}
    >
      {showContactCard && <ContactCard />}

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

        <p className="max-w-lg text-lg font-semibold leading-relaxed tracking-wide text-text-primary sm:text-xl">
          Learning, enjoying & leveling up
          <br />
          one day at a time.
        </p>

        {/* Social Icons */}

        <div className="mt-8 flex gap-4">
          {socialLinks.map((item) => (
            <SocialIcon
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>

        {/* Copyright */}

        <div className="mt-8 space-y-2 text-sm tracking-wide text-text-primary">
          <p>
            Designed & Built by{" "}
            <span className="text-text-primary font-bold">Jagdish Mahanta</span>
          </p>

          <p>© 2026 jagdish.dev, INDIA</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
