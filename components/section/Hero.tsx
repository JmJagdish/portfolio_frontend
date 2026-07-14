import Image from "next/image";
import Container from "@/ui/Container";
import Badge from "@/ui/Badge";

const HERO_TEXT = "👋 Hello, I'm Jagdish Mahanta";

const HERO_TITLE = "Full Stack Web Developer & UI UX Designer";

const HERO_SUBTITLE = "I design, build and code things for web and mobile";

export default function HeroSection() {
  return (
    <Container className="mt-20">
      <p className="mb-6 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-small font-medium text-primary">
        {HERO_TEXT}
      </p>
      {/* Heading */}

      <h1 className="max-w-5xl text-[2.6em] font-semibold tracking-tight md:text-6xl">
        {HERO_TITLE}
      </h1>

      {/* Subtitle */}

      <p className="mt-8 text-lg font-light tracking-wide md:text-2xl">
        {HERO_SUBTITLE}
      </p>

      {/* Avatar */}

      <div className="relative mt-20 h-64 w-64 group">
        <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-50 group-hover:opacity-80 transition duration-500" />

        <div className="relative h-full w-full rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,168,232,0.25)]">
          <Image
            src="/avatar.png"
            alt="Developer Avatar"
            fill
            sizes="256px"
            className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        <Badge className="absolute -bottom-2 -right-2 shadow-lg">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500" />
            Available
          </span>
        </Badge>
      </div>
    </Container>
  );
}
