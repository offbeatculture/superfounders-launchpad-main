import { ORANGE, BORDER, SURFACE } from "@/lib/theme";
import { Check } from "lucide-react";

const items: Array<[string, string]> = [
  ["Every LIVE bootcamp with me", "— two a month, live on Zoom, for as long as you're a member"],
  ["Instant recordings", "of all of them, so you never miss one"],
  ["Detailed playbooks", "of every session — the Rapid Scaling Bootcamp playbooks are already inside"],
  ["The exact AI prompts I use", "— including the \"what business am I really in\" playbook and the X-Factor playbook"],
  ["Worksheets", "for every engine"],
  ["A business assessment", "the moment you walk in, so you know your slowest engine on day one"],
  ["The community itself", "— a room full of founders sharing wins, asking questions, building alongside you"],
];

export function WhatYouGet() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-semibold mb-6" style={{ color: ORANGE, letterSpacing: "0.28em" }}>
          THE MOMENT YOU JOIN
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
          Everything is already <span style={{ color: ORANGE }}>waiting</span> inside.
        </h2>

        <ul className="space-y-3">
          {items.map(([bold, rest]) => (
            <li
              key={bold}
              className="flex items-start gap-3 rounded-lg p-4"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#3BC97A" }} />
              <p className="text-[15px] leading-[1.6]" style={{ color: "#C8C3B7" }}>
                <strong className="text-white">{bold}</strong> {rest}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
