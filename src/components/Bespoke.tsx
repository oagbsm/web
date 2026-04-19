export default function Bespoke() {
  return (
    <section className="bg-[linear-gradient(180deg,#05060a,#0b0d14)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300/80">
            POS & custom systems
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Need something more specialized? We build for that too.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/78 sm:text-lg">
            For retail, hospitality, service businesses, and operations-heavy
            teams, we create POS systems and custom software that fit the
            business instead of forcing the business to fit the software.
          </p>
          <div className="mt-8 space-y-4 text-white/82">
            <p>• Inventory tracking and reporting dashboards</p>
            <p>• Multi-branch sales visibility and role-based access</p>
            <p>• Customer credit, payment, and workflow modules</p>
            <p>• Tailored admin systems for your exact operation</p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:scale-[1.01]"
            >
              Talk About a Custom Build
            </a>
            <a
              href="mailto:hello@technology.cityconsulting.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-base font-semibold text-white transition hover:bg-white/[0.1]"
            >
              Send Requirements
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <video
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
          >
            <source src="/videos/business-systems.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}