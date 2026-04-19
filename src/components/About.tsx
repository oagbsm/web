export default function About() {
  return (
      <section
        id="about"
        className="bg-[linear-gradient(180deg,#ffffff,#fbf8ff)] text-[#0a0d14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              Why choose Omino
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Clear thinking. Solid builds. Results that hold up.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4f5867] sm:text-lg">
              We design and build websites, apps, and internal systems that actually work in real conditions. Fast, stable, and built around your business, not templates.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] bg-[#f5f6fb] p-5 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Agency team meeting"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div>
              <p className="inline-flex rounded-full border border-[#111827]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]/70">
                Why clients choose us
              </p>
              <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-[0.98] tracking-tight text-[#0a0d14] sm:text-5xl lg:text-6xl">
                Built to support real operations and real growth.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4f5867] sm:text-lg">
                We focus on delivery, clean execution, and systems that improve how your business runs from leads to operations to day to day use.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}