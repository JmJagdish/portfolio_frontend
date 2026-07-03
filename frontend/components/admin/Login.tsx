"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().trim().email("Enter valid email"),
  password: z
    .string()
    .min(8, "Password minimum 8 characters")
    .max(10, "Password too long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setServerError("");

      const response = await fetch("/api/admin/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      router.replace("/admin/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] flex items-center justify-center px-5 py-4">
      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(0,168,232,0.18)]">
        {/* IMAGE */}

        <div className="lg:block relative min-h-152.5">
          <Image
            src="/admin/admin-login1.png"
            alt="admin login"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#00a8e8]/10 to-transparent" />

          <div className="absolute top-16 left-14">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-[#00a8e8]/20 flex items-center justify-center text-[#00a8e8]">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Secure Access
                </h2>

                <p className="text-slate-600">Manage your dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}

        <div className="flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a8e8]/10 text-[#00a8e8]">
                <LockKeyhole size={34} />
              </div>

              <h1 className="text-4xl font-bold text-slate-900">Admin Login</h1>

              <p className="mt-3 text-slate-500">
                Sign in to access your dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-3.5 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="admin@example.com"
                    {...register("email")}
                    className="h-12 w-full rounded-xl border border-slate-200 pl-12 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={20}
                    className="absolute left-4 top-3.5 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    {...register("password")}
                    className="h-12 w-full rounded-xl border border-slate-200 pl-12 pr-12 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {serverError && (
                <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                  {serverError}
                </div>
              )}

              <button
                disabled={loading}
                className="group flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#00a8e8] font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1 disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Login"}

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={18} className="text-[#00a8e8]" />
              Your data is 100% secure
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
