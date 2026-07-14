"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import Section from "@/ui/Section";

const companies = [
  {
    name: "Technogenr",
    logo: "/workplaces/technogenr.png",
  },
  {
    name: "PCS GLOBAL",
    logo: "/workplaces/pcs_global.png",
  },
  {
    name: "MSTUSA",
    logo: "/workplaces/logo_mst.png",
  },
  {
    name: "Ablyworks",
    logo: "/workplaces/ablyworks.png",
  },
];

export default function WorkPlaces() {
  return (
    <Container>
      <Section className="relative overflow-hidden bg-background">
        {/* Background Glow */}

        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-background
       blur-3xl shadow-[0_20px_50px_rgba(0,168,232,0.25)]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Heading */}

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-secondary sm:text-4xl">
              Places I Have <span className="text-primary">Worked</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-text-light">
              Companies and teams where I contributed to building modern web
              solutions.
            </p>
          </div>

          {/* Logos */}

          <div className="overflow-hidden rounded-3xl p-6">
            <div className="relative overflow-hidden">
              <div className="flex w-max animate-scroll items-center">
                {[...companies, ...companies, ...companies].map(
                  (company, index) => (
                    <div
                      key={index}
                      className="mx-6 flex h-32 w-56 shrink-0 items-center justify-center transition duration-300"
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          sizes="220px"
                          priority={index < companies.length}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
