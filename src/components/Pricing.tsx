import { ORANGE, MUTED, BORDER, SURFACE } from "@/lib/theme";

const rows: Array<[string, React.ReactNode, string?]> = [
  ["12 LIVE business bootcamps with me, a year × ₹5,000", "₹60,000", "I've never sold a workshop that cheap in six years"],
  ["12 LIVE AI-implementation bootcamps × ₹5,000", "₹60,000"],
  ["Playbooks, worksheets, prompt libraries", "₹10,000"],
];

export function Pricing() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-semibold mb-6" style={{ color: ORANGE, letterSpacing: "0.28em" }}>
          WHAT IS THIS HONESTLY WORTH
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
          Let me show you the math — at the{" "}
          <span style={{ color: ORANGE }}>lowest prices</span> I've ever put on my own work.
        </h2>

        <div className="rounded-xl overflow-hidden" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          {rows.map(([l, r, note], i) => (
            <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div className="flex justify-between items-center px-5 py-4 gap-4">
                <span className="text-[14px]" style={{ color: "#C8C3B7" }}>{l}</span>
                <span className="text-[15px] font-semibold text-white whitespace-nowrap">{r}</span>
              </div>
              {note && (
                <p className="px-5 pb-3 text-xs italic" style={{ color: MUTED }}>{note}</p>
              )}
            </div>
          ))}
          <div className="flex justify-between items-start px-5 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <span className="text-[14px]" style={{ color: "#C8C3B7" }}>Honest value, per year</span>
            <div className="text-right">
              <div className="text-[15px] font-semibold text-white">₹1,30,000</div>
              <div className="text-xs" style={{ color: MUTED }}>≈ ₹11,000 / month</div>
            </div>
          </div>
          <div className="flex justify-between items-center px-5 py-5" style={{ background: "rgba(232, 65, 10, 0.08)" }}>
            <span className="text-[15px] text-white font-semibold">Your founding price</span>
            <div className="text-right">
              <span className="line-through mr-2 text-sm" style={{ color: MUTED }}>₹11,000</span>
              <span className="font-display text-2xl" style={{ color: ORANGE }}>₹1,799/mo</span>
            </div>
          </div>
        </div>

        <div className="space-y-5 mt-10 text-[15px] leading-[1.75]" style={{ color: "#C8C3B7" }}>
          <p>
            And that's me being stingy. People have paid 1.5 to 4 lakhs for a single
            business workshop with me. Up to 16.5 lakhs for a year of consulting. This is
            the lowest number I've ever put on paper — and it would still be fair at eleven
            thousand a month.
          </p>
          <p className="text-white font-bold text-base">So why isn't it eleven thousand?</p>
          <p>
            Because this is the first recurring membership I've launched in my life — and
            you are the founding members. I want the first people in this room to be the
            people who tell the next thousand, "I was there at the start."
          </p>
          <p>Less than one dinner out. To rebuild your entire business, one engine at a time.</p>
          <p>
            And yes — I know I just spent ten minutes teaching you to charge <em>more</em>,
            and here I am charging you almost nothing. That's the founding-member trade.
            It's the only time I'll ever make it.
          </p>
        </div>

        <div
          className="rounded-xl p-6 mt-10"
          style={{
            background: "rgba(232, 65, 10, 0.06)",
            border: `1.5px solid ${ORANGE}`,
          }}
        >
          <h4 className="font-bold text-lg mb-3" style={{ color: ORANGE }}>
            Grandfathered for life — read this part twice
          </h4>
          <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#E8DFD0" }}>
            For every 100 members who join, the price steps up — on its way to the 9,000-plus
            a month that comparable communities already charge. But whatever price you lock
            in today, you keep <strong className="text-white">for as long as you stay.</strong>{" "}
            Even when this is ₹9,000 a month and climbing, you still pay ₹1,799. Every month.
            As long as you don't drop off.
          </p>
          <p className="text-[14px] leading-[1.75] italic" style={{ color: "#E8DFD0" }}>
            <strong className="not-italic">One straight warning:</strong> if you cancel and
            come back after a few months, you rejoin at whatever the price is then. My team
            has clear instructions on this. The deal is for the people who stay.
          </p>
        </div>

        <h4 className="text-white font-bold text-lg mt-10 mb-4">
          And you risk almost nothing to find out
        </h4>
        <ol className="space-y-3 text-[15px] leading-[1.7] list-decimal pl-5" style={{ color: "#C8C3B7" }}>
          <li>
            <strong className="text-white">It's monthly.</strong> No year locked up, no big
            commitment. Come in, go through the first month's LIVE bootcamps and playbooks,
            and decide.
          </li>
          <li>
            <strong className="text-white">Cancel any month you want</strong> — right from
            your account, in two clicks. If it's not for you, you stop. Simple.
          </li>
          <li>
            <strong className="text-white">The price for life is yours only while you stay.</strong>{" "}
            So the only person who can ever take this deal away from you... is you.
          </li>
        </ol>
        <p className="mt-5 text-[15px]" style={{ color: "#C8C3B7" }}>
          I'm not here to trap anyone into 1,799 rupees a month. I'm here to make this so
          good you never want to leave.
        </p>

        <div className="text-center mt-10">
          <a
  href="https://community.swastiknandakumar.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-12 py-4 rounded-xl font-bold text-base tracking-wide transition-transform hover:scale-[1.03] text-center"
  style={{
    background: ORANGE,
    color: "#0A0A0A",
    letterSpacing: "0.05em",
    boxShadow: "0 0 60px rgba(232,65,10,0.35)",
  }}
>
  JOIN SUPER FOUNDERS
</a>
          <p className="mt-4 text-sm" style={{ color: MUTED }}>
            124 founders in · price goes up at 200
          </p>
        </div>
      </div>
    </section>
  );
}
