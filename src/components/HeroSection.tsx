"use client";
import { useEffect, useState } from "react";
import { partners } from "../data";

const servicePills = [
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "Automation",
  "iOS App Development",
  "Android App Development",
  "POS Systems",
  "CRM & Automation",
  "Care Home Systems",
  "Travel Agent Platforms",

];

export default function HeroSection() {
  const rotating = servicePills.slice(0, 4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotating.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const carouselPartners = [...partners, ...partners];
  const logoItems = carouselPartners.slice(0, 16);

  return (
    <>
      <section className="relative min-h-[100vh] flex flex-col overflow-hidden pt-[80px] text-white">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/media2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#04060b]/72"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(98,0,234,0.18),transparent_28%),radial-gradient(circle_at_48%_18%,rgba(255,123,0,0.14),transparent_18%),linear-gradient(90deg,rgba(4,6,11,0.88)_0%,rgba(4,6,11,0.74)_44%,rgba(4,6,11,0.38)_100%)]"></div>
        </div>

        <div className="relative mx-auto grid flex-1 max-w-[1480px] items-start gap-8 px-6 pb-10 pt-2 md:px-8 xl:grid-cols-[1.02fr_0.98fr] xl:px-10">
          <div className="max-w-[700px] pt-0">
            <h1 className="max-w-[680px] text-[2.15rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[2.45rem] lg:text-[3rem] xl:text-[3.25rem]">
              <span className="block">Build your</span>
              <span className="block">business with</span>
              <span
                key={rotating[index]}
                className="block bg-[linear-gradient(90deg,#ff59d7_0%,#ff8e53_48%,#ffb347_100%)] bg-clip-text text-transparent animate-[heroWordFade_450ms_ease]"
              >
                {rotating[index]}
              </span>
            </h1>

            <p className="mt-5 max-w-[600px] text-[0.92rem] leading-[1.75] text-zinc-300 sm:text-[0.98rem]">
              We create elite Applications, bespoke software, POS systems, automation, and security-conscious digital infrastructure for businesses that want to look sharper, move faster, and close more clients.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5">
                Book a Free Strategy Call
              </button>
              <a
                href="#websites"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 text-sm font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm transition hover:bg-white/[0.07]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-9 flex max-w-[680px] flex-wrap gap-2.5">
              {servicePills.map((pill) => {
                const isActive = pill === rotating[index];

                return (
                  <div
                    key={pill}
                    className={`rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium backdrop-blur-sm transition-all duration-300 ${
                      isActive
                        ? "border border-white/20 bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
                        : "border border-white/10 bg-white/[0.04] text-zinc-200"
                    }`}
                  >
                    {pill}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden min-h-[560px] items-start justify-end xl:flex">
            <div className="relative w-full max-w-[620px] pt-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                  alt="Team planning session"
                  className="h-[470px] w-full object-cover"
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,21,32,0.94),rgba(15,16,24,0.96))] px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#f0ab61]">
                  Now Delivering
                </p>
                <p className="mt-2.5 text-[1.32rem] font-semibold leading-[1.2] tracking-[-0.03em] text-white">
                  Premium websites, bespoke systems, POS platforms, and automation designed to convert.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-white/8 bg-black/70 backdrop-blur-md">
          <div className="mx-auto max-w-[1600px] px-6 py-3 md:px-8 xl:px-10">
            <div className="mb-3 flex items-center justify-center gap-4">
              <p className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.24em] text-white">
                Partners we use
              </p>
              <div className="hidden h-px w-[120px] bg-white/10 md:block" />
            </div>

            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="hero-logo-track flex min-w-max items-center gap-10">
                {logoItems.map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="flex h-12 w-[140px] shrink-0 items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 object-contain opacity-85 transition duration-300 hover:scale-105 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hero-logo-track {
          animation: hero-logo-scroll 28s linear infinite;
        }

        .hero-logo-track:hover {
          animation-play-state: paused;
        }

        @keyframes hero-logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}