"use client";

import { useEffect, useState } from "react";

const appSlideContent = [
  {
    eyebrow: "Stage 01",
    title: "Strategy and product direction",
    description:
      "We shape the app properly first — defining the core idea, the user flow, the most important features, and the right scope for an MVP that is commercially sensible.",
    imageLabel: "Discovery & planning",
    imageSrc: "/s1.jpg",
  },
  {
    eyebrow: "Stage 02",
    title: "Design and build",
    description:
      "Once the direction is clear, we move into interface design, product structure, and development so the app starts taking real shape with a strong foundation.",
    imageLabel: "Design & development",
    imageSrc: "/s2.jpg",
  },
  {
    eyebrow: "Stage 03",
    title: "Refinement, launch, and growth",
    description:
      "After the core product is built, we refine the experience, resolve the weak points, prepare for launch, and support the next phase of iteration and scale.",
    imageLabel: "Launch & iteration",
    imageSrc: "/s3.jpg",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTransitioning(true);

      window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % appSlideContent.length);
        window.setTimeout(() => {
          setIsTransitioning(false);
        }, 80);
      }, 420);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const activeContent = appSlideContent[activeIndex % appSlideContent.length];
  const stageNumber = activeIndex + 1;

  return (
    <section className="relative overflow-hidden bg-white text-neutral-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="mb-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
            App development
          </p>

          <h2 className="mt-2 text-[22px] font-medium tracking-[-0.03em] text-neutral-900 sm:text-3xl lg:text-[34px]">
            From MVP to launch, built in clear stages
          </h2>
        </div>

        <div className="mx-auto max-w-[1060px]">
          <div
            className={`grid items-center gap-6 rounded-[18px] border border-neutral-200 bg-white p-5 transition-all duration-700 ease-out sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-6 ${
              isTransitioning ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <div className="max-w-[560px]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                {activeContent.eyebrow}
              </p>

              <h3 className="mt-2.5 text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-neutral-900 sm:text-[28px]">
                {activeContent.title}
              </h3>

              <p className="mt-3 max-w-[500px] text-[14px] leading-6 text-neutral-600">
                {activeContent.description}
              </p>

              <div className="mt-4 h-px w-10 bg-neutral-200" />
            </div>

            <div className="lg:pl-4">
              <div className="relative flex h-full rounded-[24px] border border-black/10 bg-white/30 p-3 backdrop-blur-[2px] sm:p-4">
                <div className="relative w-full overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
                  <img
                    src={activeContent.imageSrc}
                    alt={activeContent.imageLabel}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {appSlideContent.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show app stage ${index + 1}`}
                  onClick={() => {
                    if (index === activeIndex) return;
                    setIsTransitioning(true);
                    window.setTimeout(() => {
                      setActiveIndex(index);
                      window.setTimeout(() => {
                        setIsTransitioning(false);
                      }, 80);
                    }, 420);
                  }}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    isActive ? "w-10 bg-neutral-900" : "w-2 bg-neutral-300"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}