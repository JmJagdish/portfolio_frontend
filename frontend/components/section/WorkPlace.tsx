"use client";

import Image from "next/image";

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
    <section className="relative overflow-hidden bg-[#f8fbff] py-20 sm:py-24">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00a8e8]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Places I Have <span className="text-[#00a8e8]">Worked</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
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
    </section>
  );
}
