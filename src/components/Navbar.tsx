"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Briefcase, Stethoscope, Hotel, Store, Globe, Smartphone, Rocket, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const serviceSections = [
  {
    title: "Websites",
    items: ["Business websites", "Landing pages", "Client portals"],
  },
  {
    title: "Apps",
    items: ["Web apps", "Mobile apps", "Internal tools"],
  },
  {
    title: "MVPs",
    items: ["Fast product builds", "Prototype to launch", "Early-stage systems"],
  },
];

const serviceIcons: Record<string, ReactNode> = {
  Websites: <Globe size={16} />,
  Apps: <Smartphone size={16} />,
  MVPs: <Rocket size={16} />,
};

const industrySections = [
  {
    title: "Healthcare",
    items: ["Clinics", "Home care", "Patient systems"],
  },
  {
    title: "Fintech",
    items: ["Client portals", "Internal tools", "Secure dashboards"],
  },
  {
    title: "Hospitality",
    items: ["Hotels", "Bookings", "Operations"],
  },
  {
    title: "Other sectors",
    items: ["Entertainment", "Retail", "Professional services"],
  },
];

const industryIcons: Record<string, ReactNode> = {
  Healthcare: <Stethoscope size={16} />,
  Fintech: <Briefcase size={16} />,
  Hospitality: <Hotel size={16} />,
  "Other sectors": <Store size={16} />,
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<"services" | "industries" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const open = activeMenu !== null;
  const currentSections = activeMenu === "industries" ? industrySections : serviceSections;

  useEffect(() => {
    if (mobileMenuOpen) {
      setActiveMenu(null);
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="border-b border-white/8 bg-[#060608]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between px-6 md:px-8 xl:px-10">
          <div className="flex min-w-[180px] items-center">
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-[1.35rem] font-semibold tracking-[-0.02em] text-white">
                <span className="text-red-500">O</span>mino
              </span>
              <span className="mt-[2px] text-[11px] font-medium tracking-[-0.01em] text-zinc-400">
                Software engineering
              </span>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-12 lg:flex xl:gap-14">
            <Link
              href="/#websites"
              onMouseEnter={() => setActiveMenu("services")}
              className={`relative pb-1 text-[15px] font-semibold transition flex items-center gap-1 ${
                activeMenu === "services" ? "text-white" : "text-zinc-300 hover:text-white"
              }`}
            >
              Services
              <ChevronDown size={14} className={`mt-[1px] transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} />
            </Link>
            <button
              type="button"
              onMouseEnter={() => setActiveMenu("industries")}
              className={`relative pb-1 text-[15px] font-semibold transition flex items-center gap-1 ${
                activeMenu === "industries" ? "text-white" : "text-zinc-300 hover:text-white"
              }`}
            >
              Industries
              <ChevronDown size={14} className={`mt-[1px] transition-transform ${activeMenu === "industries" ? "rotate-180" : ""}`} />
            </button>
            <Link
              href="/#case-studies"
              onMouseEnter={() => setActiveMenu(null)}
              className="text-[15px] font-semibold text-zinc-300 transition hover:text-white"
            >
              Work
            </Link>
            <Link
              href="/#about"
              onMouseEnter={() => setActiveMenu(null)}
              className="text-[15px] font-semibold text-zinc-300 transition hover:text-white"
            >
              Company
            </Link>
          </nav>

          <div className="flex min-w-[200px] items-center justify-end gap-4 pr-1 sm:pr-2">
            <div className="hidden items-center justify-end gap-5 lg:flex">
              <div className="hidden xl:block">
                <p className="text-[12px] font-medium tracking-[-0.01em] text-zinc-400">
                  Websites · Apps · MVPs
                </p>
              </div>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-white transition hover:text-zinc-200"
              >
                Contact us
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-white/8 bg-[#07070b] transition-all duration-300 ${
          open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
        onMouseEnter={() => {
          if (activeMenu) setActiveMenu(activeMenu);
        }}
      >
        <div className="mx-auto max-w-[1480px] px-6 md:px-8 xl:px-10">
          <div
            className={`grid gap-8 py-7 ${
              activeMenu === "industries"
                ? "mx-auto max-w-[1100px] lg:grid-cols-4"
                : "mx-auto max-w-[820px] lg:grid-cols-3"
            } xl:gap-8 xl:py-8`}
          >
            {currentSections.map((section, index) => (
              <div
                key={section.title}
                className={`min-w-0 ${
                  activeMenu === "industries"
                    ? "p-2"
                    : "p-2"
                }`}
              >
                <div className="mb-3 flex items-center gap-2">
                  {activeMenu === "industries" && industryIcons[section.title] ? (
                    <span className="text-zinc-300">{industryIcons[section.title]}</span>
                  ) : null}
                  {activeMenu === "services" && serviceIcons[section.title] ? (
                    <span className="text-zinc-500">{serviceIcons[section.title]}</span>
                  ) : null}
                  <p className="text-sm font-medium text-white">
                    {section.title}
                  </p>
                </div>
                <ul className="space-y-1 text-sm text-zinc-400">
                  {section.items.map((item) => {
                    const isWebsiteSection = activeMenu === "services" && section.title === "Websites";
                    const isAppSection = activeMenu === "services" && section.title === "Apps";

                    if (isWebsiteSection) {
                      return (
                        <li key={item}>
                          <Link
                            href="/#websites"
                            className="block transition hover:text-white"
                          >
                            {item}
                          </Link>
                        </li>
                      );
                    }

                    if (isAppSection) {
                      return (
                        <li key={item}>
                          <Link
                            href="/#apps"
                            className="block transition hover:text-white"
                          >
                            {item}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={item} className="transition hover:text-white">
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`border-b border-white/8 bg-[#07070b] transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="space-y-1 px-6 py-5">
          <div className="space-y-1">
            <p className="px-4 pt-2 text-[13px] font-semibold text-white">
              Services
            </p>

            <Link
              href="/#websites"
              className="block rounded-2xl px-4 py-2 text-[14px] text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Websites
            </Link>

            <Link
              href="/#apps"
              className="block rounded-2xl px-4 py-2 text-[14px] text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apps
            </Link>
          </div>

          <Link
            href="/#case-studies"
            className="block rounded-2xl px-4 py-3 text-[15px] font-semibold text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </Link>

          <Link
            href="/#about"
            className="block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-semibold text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Company
          </Link>

          <Link
            href="/#contact"
            className="block rounded-2xl px-4 py-3 text-[15px] font-semibold text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}