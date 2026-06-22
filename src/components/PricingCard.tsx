import { ORANGE, MUTED, BORDER, SURFACE } from "@/lib/theme";
import { Check } from "lucide-react";

export function PricingCardSection() {
  const progress = (124 / 200) * 100;
  return (
    <section className="px-6 pb-20">
      <div className="max-w-xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background: SURFACE,
            border: `1px solid ${ORANGE}`,
            boxShadow: "0 0 80px rgba(232, 65, 10, 0.18)",
          }}
        >
          <p
            className="text-[11px] font-semibold mb-3"
            style={{ color: ORANGE, letterSpacing: "0.28em" }}
          >
            FOUNDING MEMBER ACCESS
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
            Super Founders
          </h3>
          <p className="text-sm md:text-base" style={{ color: "#D4CFC4" }}>
            Two <strong className="text-white">LIVE</strong> bootcamps with Swastik, every month
          </p>

          <div className="my-8">
            <span
              className="font-display text-5xl md:text-6xl"
              style={{ color: ORANGE }}
            >
              ₹1,799
            </span>
            <span className="text-base ml-1" style={{ color: MUTED }}>
              /month
            </span>
          </div>

          <p className="text-sm mb-6" style={{ color: MUTED }}>
            GST included. Not plus GST — <em>included</em>. Locked for life while you stay.
          </p>

<a
  href="https://community.swastiknandakumar.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full py-4 rounded-xl font-bold text-base tracking-wide transition-transform hover:scale-[1.02] text-center"
  style={{
    background: ORANGE,
    color: "#0A0A0A",
    letterSpacing: "0.05em",
  }}
>
  JOIN SUPER FOUNDERS
</a>

<a
  href="https://community.swastiknandakumar.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-4 text-sm underline text-center"
  style={{ color: "#5B9DF7" }}
>
  Click here to join Super Founders now
</a>

          <div className="mt-8 text-left">
            <div className="flex justify-between text-[11px] font-semibold mb-2" style={{ letterSpacing: "0.15em" }}>
              <span style={{ color: ORANGE }}>124 FOUNDERS IN</span>
              <span style={{ color: MUTED }}>PRICE GOES UP AT 200</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "#0A0A0A" }}>
              <div className="h-full rounded-full" style={{ width: `${progress}%`, background: ORANGE }} />
            </div>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: MUTED }}>
              The price steps up with every 100 members — and steps up again at 200.
              Whatever price you lock today is yours for as long as you stay. No countdown
              clock — just seats filling.
            </p>
          </div>

          <div
            className="mt-6 pt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs"
            style={{ borderTop: `1px solid ${BORDER}`, color: MUTED }}
          >
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" style={{ color: "#3BC97A" }} /> UPI AutoPay or card</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" style={{ color: "#3BC97A" }} /> Cancel anytime, 2 clicks</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" style={{ color: "#3BC97A" }} /> GST invoice provided</span>
          </div>
        </div>
      </div>
    </section>
  );
}
