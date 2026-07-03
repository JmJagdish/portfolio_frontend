import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserPlus, LogIn } from "lucide-react";

export default function AdminPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] flex items-center justify-center px-5 py-10">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00a8e8]/20 blur-3xl" />

      <div className="relative grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(0,168,232,0.15)] backdrop-blur-xl lg:grid-cols-2">
        {/* Left Image Section */}

        <div className="flex flex-col items-center justify-center bg-[#f8fbff] p-8 sm:p-12">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <Image
              src="/admin/admin.png"
              alt="Admin Login"
              fill
              priority
              sizes="400px"
              className="object-contain"
            />
          </div>

          <h2 className="mt-6 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Manage your portfolio
            <span className="text-[#00a8e8]">easily</span>
          </h2>

          <p className="mt-3 max-w-sm text-center text-slate-500">
            Access your admin panel to manage projects, messages and content.
          </p>
        </div>

        {/* Right Content */}

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <span className="mb-5 w-fit rounded-full bg-[#00a8e8]/10 px-5 py-2 text-sm font-semibold text-[#00a8e8]">
            Admin Portal
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Welcome
            <br />
            <span className="text-[#00a8e8]">Admin</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Login to continue managing your website dashboard and control your
            application data.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/admin/login"
              className="flex items-center justify-center gap-2 rounded-full bg-[#00a8e8] px-7 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              href="/admin/register"
              className="flex items-center justify-center gap-2 rounded-full border border-[#00a8e8] px-7 py-3 font-semibold text-[#00a8e8] transition hover:bg-[#00a8e8] hover:text-white"
            >
              <UserPlus size={18} />
              Create Account
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <ArrowRight size={16} className="text-[#00a8e8]" />
            Secure admin access
          </div>
        </div>
      </div>
    </main>
  );
}
