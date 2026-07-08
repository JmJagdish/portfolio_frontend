"use client";

import React, { useCallback,useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import BrandLogo from "@/ui/BrandLogo";
import Button from "@/ui/Button";
import NavLink from "@/ui/NavLink";
import ThemeToggle from "./ThemeToggle";


const navLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <section className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl backdrop-blur-xl shadow-[0_15px_45px_rgba(0,168,232,0.10)] rounded-full md:border md:border-primary/20 transition-all duration-300">
        <nav className="mx-auto px-6 py-3.5 md:px-12 lg:px-20">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 items-center">
            <Link href="/" className="justify-self-start">
              <BrandLogo />
            </Link>

            <div className="flex justify-center gap-12 tracking-wide">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex justify-end gap-4 items-center">
             <ThemeToggle /> 
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
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="relative z-100 w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </section>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-primary bg-primary/5 backdrop-blur-xl rounded-2xl shadow-[0_15px_45px_rgba(0,168,232,0.10)]">
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

              <div className="mt-4 flex items-center justify-between">
                <ThemeToggle />
                <Link
                  href="/resume/resume.pdf"
                  target="_blank"
                  onClick={closeMenu}
                >
                  <Button>Resume</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Navbar);
