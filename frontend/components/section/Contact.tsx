"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className="relative h-[70%] overflow-hidden bg-[#f8fbff] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00a8e8]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl mt-10">
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
            Contact <span className="text-[#00a8e8]">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            I would love to hear from you. How can I help you today?
          </p>
        </div>

        {/* Form Card */}

        <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,168,232,0.12)] backdrop-blur-xl sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-[#00a8e8] focus:ring-4 focus:ring-[#00a8e8]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-[#00a8e8] focus:ring-4 focus:ring-[#00a8e8]/10"
              />

              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                We will never share your email with anyone.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#00a8e8] focus:ring-4 focus:ring-[#00a8e8]/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#00a8e8] py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,168,232,0.45)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
