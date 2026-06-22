import { ORANGE, MUTED, BORDER, SURFACE } from "@/lib/theme";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Three days with Swastik felt like more than my two years at ISB. He doesn't teach theory — he builds the system with you.",
    n: "R",
    name: "Rahul K.",
    biz: "Manufacturing business, Pune",
  },
  {
    text: "Revenue stayed the same but my profit went up 60% in four months. I stopped chasing customers and started charging what I'm actually worth.",
    n: "S",
    name: "Shalini M.",
    biz: "Interior design, Bangalore",
  },
  {
    text: "He gives land to his son every birthday now. I know because he sent me a WhatsApp message saying money stopped being a question in his life.",
    n: "A",
    name: "Anand S.",
    biz: "3-year member, services business",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[11px] font-semibold mb-6" style={{ color: ORANGE, letterSpacing: "0.28em" }}>
          FROM INSIDE THE ROOM
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-12">
          Founders building <span style={{ color: ORANGE }}>alongside you.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 text-left">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: ORANGE }} />
                ))}
              </div>
              <p className="text-[14px] leading-[1.7] mb-6 flex-1" style={{ color: "#C8C3B7" }}>
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: ORANGE }}
                >
                  {r.n}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{r.name}</div>
                  <div className="text-xs" style={{ color: MUTED }}>{r.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
