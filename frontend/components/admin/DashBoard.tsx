"use client";

import {
  Users,
  Mail,
  FolderKanban,
  TrendingUp,
  Eye,
  Settings,
} from "lucide-react";

const stats = [
  {
    title: "Total Messages",
    value: "128",
    icon: Mail,
    description: "New contact requests",
  },
  {
    title: "Projects",
    value: "30+",
    icon: FolderKanban,
    description: "Published projects",
  },
  {
    title: "Visitors",
    value: "12.5K",
    icon: Eye,
    description: "Monthly visitors",
  },
  {
    title: "Users",
    value: "540",
    icon: Users,
    description: "Registered users",
  },
];

const recentMessages = [
  {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    message: "Interested in collaboration",
  },
  {
    name: "Amit Kumar",
    email: "amit@gmail.com",
    message: "Need website development",
  },
  {
    name: "John Smith",
    email: "john@gmail.com",
    message: "Project discussion",
  },
];

export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-[#f8fbff] p-5 sm:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Admin <span className="text-[#00a8e8]">Dashboard</span>
            </h1>

            <p className="mt-2 text-slate-500">
              Manage your portfolio data and activities
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-full bg-[#00a8e8] px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1">
            <Settings size={18} />
            Settings
          </button>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,168,232,0.12)] backdrop-blur-xl transition hover:-translate-y-2"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a8e8]/10 text-[#00a8e8]">
                <item.icon size={25} />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                {item.value}
              </h2>

              <h3 className="mt-2 font-semibold text-slate-700">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Messages */}

        <div className="mt-10 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,168,232,0.12)] backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">
              Recent Messages
            </h2>

            <TrendingUp className="text-[#00a8e8]" />
          </div>

          <div className="space-y-4">
            {recentMessages.map((item) => (
              <div
                key={item.email}
                className="flex flex-col gap-3 rounded-2xl bg-[#f8fbff] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">{item.name}</h3>

                  <p className="text-sm text-slate-500">{item.email}</p>
                </div>

                <p className="text-sm text-[#00a8e8]">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
