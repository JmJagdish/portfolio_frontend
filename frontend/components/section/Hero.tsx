import Image from "next/image";

const HERO_TITLE = "Full Stack Web Developer & UI UX Designer";

const HERO_SUBTITLE = "I design, build and code things for web and mobile";

export default function HeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto mt-16 flex min-h-screen max-w-7xl flex-col items-center px-6 pt-16 text-center">
        {/* Heading */}

        <h1 className="max-w-5xl text-[2.6em] font-semibold tracking-tight text-secondary md:text-6xl">
          {HERO_TITLE}
        </h1>

        {/* Subtitle */}

        <p className="mt-8 text-lg font-light tracking-wide text-gray-500 md:text-2xl">
          {HERO_SUBTITLE}
        </p>

        {/* Avatar */}

        <div className="relative mt-20 h-64 w-64 group">
          <div className="absolute inset-0 rounded-full bg-[#00a8e8] blur-3xl opacity-50 group-hover:opacity-80 transition duration-500" />

          <div className="relative h-full w-full rounded-full overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,168,232,0.25)]">
            <Image
              src="/avatar.png"
              alt="Developer Avatar"
              fill
              sizes="256px"
              className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold text-[#00a8e8]">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
