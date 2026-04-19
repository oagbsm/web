"use client";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    eyebrow: "Case study 01",
    title: "Security operations platform for teams in high-risk regions",
    summary:
      "A company operating in high-risk areas needed a dependable way to monitor field employees, improve visibility for security teams, and keep location reporting reliable even when internet access was inconsistent.",
    problem:
      "Their teams were working in environments where connectivity could not be trusted 24/7, which made live visibility difficult and created gaps in employee movement tracking.",
    solution:
      "We designed a full internal solution made up of a mobile app for employees and a central operations dashboard for security teams. The mobile app was built to keep recording location data even when offline, store it locally, and sync it back once the connection returned, giving the operations team a more dependable picture of where staff had been and where they were moving.",
    outcome:
      "The result was a stronger operational setup for field security, with better location visibility, more resilient tracking in low-connectivity conditions, and a clearer system for monitoring personnel across sensitive environments.",
    visualLabel: "Placeholder visual",
  },
  {
    eyebrow: "Case study 02",
    title: "Placeholder for second case study",
    summary:
      "A second featured project can sit here with the same structure, giving the section enough weight without overcrowding the page.",
    problem:
      "Placeholder problem text.",
    solution:
      "Placeholder solution text.",
    outcome:
      "Placeholder outcome text.",
    visualLabel: "Placeholder visual",
  },
];

export default function CaseStudies() {
  const featuredStudy = caseStudies[0];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStep, setActiveStep] = useState<"problem" | "solution" | "outcome">("problem");

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const steps: Array<"problem" | "solution" | "outcome"> = [
      "problem",
      "solution",
      "outcome",
    ];

    let currentIndex = 0;
    setActiveStep(steps[currentIndex]);

    const interval = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % steps.length;
      setActiveStep(steps[currentIndex]);
    }, 1800);

    return () => {
      window.clearInterval(interval);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-11">
        <div className="mb-6 flex items-center justify-between gap-6 border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Case studies
            </p>
            <h2 className="mt-3 max-w-[620px] text-[24px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-[28px] lg:text-[34px]">
              Real systems built for real-world operations.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:gap-6 items-stretch">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-5 sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4 pb-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {featuredStudy.eyebrow}
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <h3 className="mt-5 max-w-[720px] text-[23px] font-semibold leading-[1.04] tracking-[-0.06em] text-white sm:text-[28px] lg:text-[36px]">
              {featuredStudy.title}
            </h3>

            <p className="mt-5 max-w-[690px] text-[14px] leading-6 text-white/64 sm:text-[15px] sm:leading-7">
              {featuredStudy.summary}
            </p>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === "problem" ? "w-10 bg-white" : "w-4 bg-white/20"
                  }`}
                />
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === "solution" ? "w-10 bg-white" : "w-4 bg-white/20"
                  }`}
                />
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === "outcome" ? "w-10 bg-white" : "w-4 bg-white/20"
                  }`}
                />
              </div>

              <div className="relative min-h-[170px] overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeStep === "problem"
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
                    Problem
                  </p>
                  <p className="mt-2 max-w-[690px] text-[15px] leading-[1.9] text-white/68">
                    {featuredStudy.problem}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeStep === "solution"
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
                    Solution
                  </p>
                  <p className="mt-2 max-w-[690px] text-[15px] leading-[1.9] text-white/68">
                    {featuredStudy.solution}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeStep === "outcome"
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
                    Outcome
                  </p>
                  <p className="mt-2 max-w-[690px] text-[15px] leading-[1.9] text-white/68">
                    {featuredStudy.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[24px] border border-white/10 overflow-hidden">
            <img
              src="/cs1.jpg"
              alt="Security operations platform mockup"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="relative z-10 flex h-full min-h-[260px] items-end p-4 sm:p-5">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === "problem" ? "w-10 bg-white" : "w-4 bg-white/20"
                  }`}
                />
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === "solution" ? "w-10 bg-white" : "w-4 bg-white/20"
                  }`}
                />
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === "outcome" ? "w-10 bg-white" : "w-4 bg-white/20"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}