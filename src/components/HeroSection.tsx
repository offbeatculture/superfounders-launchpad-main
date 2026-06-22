import { ORANGE,  DARK, MUTED, BORDER } from "@/lib/theme";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-[11px] font-semibold mb-6"
          style={{ color: ORANGE, letterSpacing: "0.28em" }}
        >
          FOR BOOTSTRAPPED BUSINESS OWNERS
        </p>
       <h1 className="font-display text-4xl md:text-4xl text-white">
  Watch this before you spend one more rupee trying to get{" "}
  <span style={{ color: ORANGE }}>more customers.</span>
</h1>

        <div
          className="relative mt-12 aspect-video rounded-2xl flex items-center justify-center cursor-pointer group overflow-hidden"
          style={{
            background: "#050505",
            border: `1px solid ${BORDER}`,
            boxShadow: "0 0 120px rgba(232, 65, 10, 0.08)",
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ background: ORANGE }}
            >
              <Play className="w-8 h-8 ml-1" fill="#0A0A0A" stroke="#0A0A0A" />
            </div>
            <p
              className="text-[11px] font-semibold"
              style={{ color: MUTED, letterSpacing: "0.28em" }}
            >
              PRESS PLAY · SOUND ON
            </p>
          </div>
        </div>
        <p className="text-sm mt-5" style={{ color: MUTED }}>
          Many watch this muted — the words stay on screen the whole time.
        </p>
      </div>

 {/* Mobile Sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 lg:hidden flex items-center justify-between gap-4"
        style={{ backgroundColor: DARK, borderTop: `1px solid #333`, boxShadow: "0 -4px 24px rgba(0,0,0,0.2)" }}
      >
        {/* Left — Price */}
        <div>
          <div className="font-display text-lg font-bold" style={{ color: ORANGE }}>
            ₹1,799/mo
          </div>
          <div className="text-xs" style={{ color: "#aaa" }}>
            Founding price · locked for life
          </div>
        </div>

        {/* Right — Button */}
        <a
          href="https://community.swastiknandakumar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display flex-shrink-0 rounded-xl px-6 py-3 text-sm font-bold"
          style={{ backgroundColor: ORANGE, color: DARK }}
        >
          JOIN NOW
        </a>
      </div>

    </section>
  );
}
