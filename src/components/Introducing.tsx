import { MUTED, BORDER, SURFACE } from "@/lib/theme";
import { Check, X } from "lucide-react";

const ORANGE = "#F87215";

const works = [
  "You've tried courses before and nothing stuck",
  'You "don\'t get" AI and think it\'s not for you',
  "You're not technical and can't write a line of code",
  "You're just starting and don't have the business yet",
  "You think you've already tried everything",
];

const isnt = [
  "A magic lead-gen hack to get rich by Friday — genuinely, go look elsewhere",
  "A library of recordings you'll never open",
  'Motivation. You\'ll get diagnosis and systems, not "you\'re doing great"',
];

export function Introducing() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="text-[11px] font-semibold mb-4"
          style={{
            color: ORANGE,
            letterSpacing: "0.28em",
          }}
        >
          INTRODUCING
        </p>

        <h2 className="font-display text-5xl md:text-6xl mb-6">
          <span className="text-white">Super</span>{" "}
          <span style={{ color: ORANGE }}>Founders.</span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-[15px] leading-[1.75]"
          style={{ color: "#C8C3B7" }}
        >
          The first community in India built to make a bootstrapped business
          owner <em>undeniable</em> — without funding, without an MBA, and
          without figuring it out alone.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12 text-left">
          {[
            {
              h: "THIRD WEDNESDAY · 7PM · LIVE WITH SWASTIK",
              t: "I teach one engine. To completion.",
              b: "Sales, positioning, your offer, operations — one engine of your business, taught properly. Not a reel, not a teaser. Until you actually understand it.",
            },
            {
              h: "FOURTH WEDNESDAY · 7PM · LIVE WITH SWASTIK",
              t: "We build that engine. With AI.",
              b: "The exact prompts, the exact data to feed in, step by step — so you walk out having actually built that engine for your own business. Done with you, not at you.",
            },
          ].map((c) => (
            <div
              key={c.h}
              className="rounded-xl p-6"
              style={{
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${ORANGE}`,
              }}
            >
              <p
                className="text-[11px] font-semibold mb-4"
                style={{
                  color: ORANGE,
                  letterSpacing: "0.2em",
                }}
              >
                {c.h}
              </p>

              <h3 className="font-display text-2xl text-white mb-3">
                {c.t}
              </h3>

              <p
                className="text-[14px] leading-[1.7]"
                style={{ color: "#B8B3A7" }}
              >
                {c.b}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[15px]" style={{ color: "#C8C3B7" }}>
          One engine a month, all year. A completely re-built business.
        </p>

        <p
          className="mt-3 text-[14px] max-w-2xl mx-auto"
          style={{ color: MUTED }}
        >
          One honest thing, because I don't hide the ball: you'll want a paid AI
          tool — Claude or ChatGPT — to build alongside me. A few hundred rupees
          a month, and it's the one thing you bring. Everything else is in here.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16 text-left">
          <div>
            <h4 className="text-white font-bold text-lg mb-5">
              And it works even if…
            </h4>

            <ul className="space-y-3">
              {works.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-lg p-3"
                  style={{
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <Check
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    style={{ color: "#3BC97A" }}
                  />

                  <span className="text-[14px]" style={{ color: "#C8C3B7" }}>
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">
              What it isn't
            </h4>

            <ul className="space-y-3">
              {isnt.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-lg p-3"
                  style={{
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <X
                    className="w-4 h-4 mt-1 flex-shrink-0"
                    style={{ color: "#E54848" }}
                  />

                  <span className="text-[14px]" style={{ color: "#C8C3B7" }}>
                    {w}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="mt-5 text-[14px] leading-[1.7]"
              style={{ color: MUTED }}
            >
              This is for the owner willing to do real work, one month at a
              time, to build something AI can't wipe out. If that's you, you're
              in the right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}