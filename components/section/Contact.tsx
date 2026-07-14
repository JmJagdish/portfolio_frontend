"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/ui/Section";
import Container from "@/ui/Container";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  User,
  FileText,
  Briefcase,
} from "lucide-react";
import Card from "@/ui/Card";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fields = [
    {
      key: "name",
      placeholder: "Your Name",
      icon: User,
      type: "text",
    },
    {
      key: "email",
      placeholder: "Email Address",
      icon: Mail,
      type: "email",
    },
    {
      key: "subject",
      placeholder: "Subject",
      icon: FileText,
      type: "text",
    },
  ] as const;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="mt-20">
      <Section>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-[0_25px_70px_rgba(0,168,232,.12)] grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative hidden min-h-[500px] md:block lg:block">
            <Image
              src="/user/contact.png"
              alt="Contact"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            <div className="absolute left-10 top-10 max-w-sm text-text-primary">
              <h2 className="text-4xl font-bold">
                Let&apos;s Build Something Great 🚀
              </h2>
              <p className="mt-5 text-text-secondary">
                I&apos;m available for Full Stack, MERN and React opportunities.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-primary" />
                  <span>Open to Full-time & Freelance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <span>Usually replies within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 lg:p-12">
            <Card className="w-full max-w-xl border-0 lg:border lg:border-primary/15 lg:p-12 sm:p-8 shadow-none rounded-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                Contact <span className="text-primary">Me</span>
              </h1>
              <p className="mt-3 text-text-secondary">
                Have a project or opportunity? I&apos;d love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {fields.map((field) => {
                  const Icon = field.icon;

                  return (
                    <div key={field.key}>
                      <div className="relative">
                        <Icon
                          size={20}
                          className="absolute left-4 top-4 text-primary"
                        />

                        <input
                          type={field.type}
                          name={field.key}
                          value={formData[field.key]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="h-12 w-full rounded-2xl border border-primary/20 bg-background pl-12 pr-4 text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="relative">
                  <MessageSquare
                    size={20}
                    className="absolute left-4 top-4 text-primary"
                  />
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-2xl border border-primary/20 bg-background pl-12 pr-4 pt-3 text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <button className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,.35)] transition hover:-translate-y-1">
                  Send Message
                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                    size={18}
                  />
                </button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  );
}
