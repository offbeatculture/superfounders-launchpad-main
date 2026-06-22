"use client";

import React, { useEffect } from "react";
import { DARK, MUTED, BORDER } from "@/lib/theme";

const ORANGE = "#F87215";
const ORANGE_HOVER = "#DD6614";

export function HeroSection() {
  useEffect(() => {
    const playerScriptId = "wistia-player-script";
    const embedScriptId = "wistia-embed-jl86kar1ww";

    if (!document.getElementById(playerScriptId)) {
      const script = document.createElement("script");
      script.id = playerScriptId;
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (!document.getElementById(embedScriptId)) {
      const script = document.createElement("script");
      script.id = embedScriptId;
      script.src = "https://fast.wistia.com/embed/jl86kar1ww.js";
      script.async = true;
      script.type = "module";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="px-6 pt-8 pb-10 md:pt-10 md:pb-16">
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

        {/* Wistia Video */}
        <div
          className="relative mt-12 aspect-video rounded-2xl overflow-hidden"
          style={{
            background: "#050505",
            border: `1px solid ${BORDER}`,
            boxShadow: "0 0 120px rgba(248, 114, 21, 0.10)",
          }}
        >
          <style>{`
            wistia-player[media-id='jl86kar1ww']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jl86kar1ww/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
            }

            wistia-player[media-id='jl86kar1ww'] {
              display: block;
              width: 100%;
              height: 100%;
            }
          `}</style>
          {React.createElement("wistia-player" as any, {
  "media-id": "jl86kar1ww",
  aspect: "1.7777777777777777",
  autoplay: true,
  muted: true,
  "silent-autoplay": "allow",
})}

          {/* {React.createElement("wistia-player" as any, {
            "media-id": "jl86kar1ww",
            aspect: "1.7777777777777777",
          })} */}
        </div>

        <p className="text-sm mt-5" style={{ color: MUTED }}>
          Many watch this muted — the words stay on screen the whole time.
        </p>
      </div>

      {/* Mobile Sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 lg:hidden flex items-center justify-between gap-4"
        style={{
          backgroundColor: DARK,
          borderTop: "1px solid #333",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.2)",
        }}
      >
        {/* Left — Price */}
        <div>
          <div
            className="font-display text-lg font-bold"
            style={{ color: ORANGE }}
          >
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
          className="font-display flex-shrink-0 rounded-xl px-6 py-3 text-sm font-bold transition-colors"
          style={{
            backgroundColor: ORANGE,
            color: DARK,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = ORANGE_HOVER;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = ORANGE;
          }}
        >
          JOIN NOW
        </a>
      </div>
    </section>
  );
}