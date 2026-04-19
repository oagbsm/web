"use client";

export default function Industries() {
  return (
    <section className="w-full bg-black py-20">
      <div className="w-full relative overflow-hidden">
        <div className="flex animate-slide">
          {["/i1.jpg", "/i2.jpg", "/i3.jpg", "/i4.jpg"].map((img, i) => (
            <div key={i} className="min-w-full">
              <img
                src={img}
                alt=""
                className="w-full aspect-[18/9] md:aspect-[24/9] object-contain object-center scale-[1.08]"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0%); }
          25% { transform: translateX(0%); }
          30% { transform: translateX(-100%); }
          55% { transform: translateX(-100%); }
          60% { transform: translateX(-200%); }
          85% { transform: translateX(-200%); }
          90% { transform: translateX(-300%); }
          100% { transform: translateX(-300%); }
        }

        .animate-slide {
          animation: slide 20s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}