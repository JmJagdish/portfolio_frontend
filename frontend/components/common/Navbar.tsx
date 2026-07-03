"use client";

import BrandLogo from "@/ui/BrandLogo";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/ui/Button";

const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/70 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,168,232,0.10)] rounded-full md:border md:border-primary/20 transition-all duration-300">
        <nav className="mx-auto px-6 py-3.5 md:px-12 lg:px-20">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 items-center">
            <Link href="/" className="justify-self-start">
              <BrandLogo />
            </Link>

            <div className="flex justify-center gap-10 text-primary text-lg tracking-wide">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:opacity-70"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="justify-self-end">
              <Link href="/resume/resume.pdf" target="_blank">
                <Button>Resume</Button>
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center justify-between">
            <Link href="/" onClick={closeMenu}>
              <BrandLogo />
            </Link>

            <button
              onClick={toggleMenu}
              className="relative z-100 w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed top-20 left-4 right-4 z-40 md:hidden 
        rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        border border-primary/10 overflow-hidden
        transition-all duration-300 ease-out
        ${
          isOpen
            ? "max-h-100 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6 text-primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between text-lg font-medium 
              hover:bg-primary/5 rounded-xl px-4 py-3 transition"
            >
              {link.name}

              <span className="text-sm">→</span>
            </Link>
          ))}

          <Link
            href="/resume/resume.pdf"
            target="_blank"
            onClick={closeMenu}
            className="mt-2"
          >
            <Button>Resume</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
