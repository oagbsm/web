"use client";

import React, { useEffect, useRef, useState } from "react";

type Slide = {
  label: "Problem" | "Solution" | "Outcome";
  title: string;
  body: string;
};

const slides: Slide[] = [
  {
    label: "Problem",
    title: "Limited visibility across the campus",
    body:
      "The school had limited visibility over student movement across the campus, which made attendance harder to track and early behavioural concerns more difficult to identify.",
  },
  {
    label: "Solution",
    title: "A camera-connected monitoring layer",
    body:
      "We implemented a system powered by AWS Rekognition and connected it to the existing camera infrastructure, helping the school monitor attendance patterns and surface unusual or antisocial behaviour in key areas.",
  },
  {
    label: "Outcome",
    title: "Stronger safeguarding and attendance oversight",
    body:
      "The result was clearer operational visibility, better attendance monitoring, and a more proactive safeguarding setup across the wider campus environment.",
  },
];

export default function C2() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-black/10" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-5">
          <div
            className={`relative overflow-hidden rounded-[24px] border border-black/10 bg-[#efefec] transform-gpu transition-all duration-1000 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <img
              src="/cs2.jpg"
              alt="Private school monitoring system"
              className="absolute inset-0 h-full w-full scale-[0.9] object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/18 via-white/4 to-transparent" />

            <div className="relative z-10 flex h-full min-h-[220px] items-end p-4 sm:p-5 lg:min-h-[320px]">
              <div className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white/82 px-3 py-2 backdrop-blur-sm">
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide;

                  return (
                    <span
                      key={slide.label}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        isActive ? "w-10 bg-black" : "w-4 bg-black/20"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`rounded-[24px] border border-black/10 bg-white p-5 sm:p-5 lg:p-6 transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/40">
                Private education
              </p>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <h2 className="mt-5 max-w-[760px] text-[26px] font-semibold leading-[1.08] tracking-[-0.03em] text-black sm:text-[30px] lg:text-[36px]">
              Intelligent campus visibility for private education
            </h2>

            <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px]">
              A private school needed a clearer view of movement, attendance, and behaviour across the campus without turning the system into something clumsy or intrusive.
            </p>

            <div className="mt-6 border-t border-black/10 pt-4">
              <div className="mb-4 flex items-center gap-2.5">
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide;

                  return (
                    <button
                      key={slide.label}
                      type="button"
                      aria-label={`Show ${slide.label} slide`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        isActive ? "w-10 bg-black" : "w-4 bg-black/20"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="relative min-h-[180px] overflow-hidden sm:min-h-[170px]">
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide;

                  return (
                    <div
                      key={slide.label}
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-3 opacity-0"
                      }`}
                    >
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/40">
                        {slide.label}
                      </p>
                      <h3 className="mt-3 max-w-[18ch] text-[25px] font-semibold leading-[1.08] tracking-[-0.025em] text-black sm:text-[29px]">
                        {slide.title}
                      </h3>
                      <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-black/68 sm:text-[16px]">
                        {slide.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}