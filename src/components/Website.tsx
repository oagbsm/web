"use client";

import { useEffect, useState } from "react";
import { websiteSlides as slides } from "../data";

export default function Website() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTransitioning(true);

      window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % slides.length);
        window.setTimeout(() => {
          setIsTransitioning(false);
        }, 80);
      }, 420);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];
  const visibleCards = activeSlide.cards.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Websites
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            {activeSlide.title}
          </h2>
        </div>

        <div>
          <div className="relative min-h-[260px] sm:min-h-[520px] lg:min-h-[480px]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCards.map((card, index) => (
                <article
                  key={`${activeSlide.title}-${card.title}-${index}`}
                  className={`group relative overflow-hidden rounded-[24px] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.025] shadow-[0_8px_24px_rgba(0,0,0,0.28)] ${
                    isTransitioning
                      ? "-translate-x-20 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="relative aspect-[4/4.8] overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.18))]" />

                    <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-contain scale-[0.96] transition-transform duration-[4000ms] ease-out group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.35))] transition-opacity duration-500 group-hover:opacity-90" />
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                      <div className="translate-y-10 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="overflow-hidden rounded-[18px] bg-black/45 p-4 backdrop-blur-xl">
                          <span className="text-[10px] uppercase tracking-[0.28em] text-white/48">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-white">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show ${slide.title}`}
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
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    isActive ? "w-12 bg-white" : "w-2.5 bg-white/25 hover:bg-white/45"
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