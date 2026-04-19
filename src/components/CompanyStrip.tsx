"use client";

import { partners } from "../data";

export default function CompanyStrip() {
  const items = [...partners, ...partners];

  const logoOverrides: Record<string, string> = {
    Microsoft: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg",
    Amazon: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg",
    Twilio: "https://www.vectorlogo.zone/logos/twilio/twilio-ar21.svg",
  };

  const itemClassOverrides: Record<string, string> = {
    Microsoft: "w-[178px]",
    Amazon: "w-[176px]",
    Salesforce: "w-[176px]",
    Twilio: "w-[148px]",
  };

  const imageClassOverrides: Record<string, string> = {
    Microsoft: "h-9",
    Amazon: "h-8.5",
    Salesforce: "h-9",
    Twilio: "h-8",
  };

  return (
    <section className="relative border-t border-white/8 bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 py-6 md:px-8 xl:px-10">
        <div className="mb-4 flex items-center justify-center gap-4">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.24em] text-white">
            Partners we use
          </p>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="company-track flex min-w-max items-center gap-8 md:gap-10">
            {items.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className={`flex h-14 shrink-0 items-center justify-center px-2 ${itemClassOverrides[partner.name] ?? "w-[158px]"}`}
              >
                <img
                  src={logoOverrides[partner.name] ?? partner.logo}
                  alt={partner.name}
                  className={`${imageClassOverrides[partner.name] ?? "h-8"} w-full object-contain opacity-70 transition duration-300 hover:scale-105 hover:opacity-100`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .company-track {
          animation: company-scroll 30s linear infinite;
        }

        .company-track:hover {
          animation-play-state: paused;
        }

        @keyframes company-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}