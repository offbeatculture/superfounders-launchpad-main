import { ORANGE, MUTED, BORDER, SURFACE } from "@/lib/theme";

const shifts = [
  {
    n: "SHIFT 01",
    t: "Stop selling what you think you sell",
    body: (
      <>
        Two questions. What business do I <em>think</em> I'm in — and what business am I{" "}
        <em>actually</em> in? You're not in the skincare business. You're in the confidence
        business. Your customer doesn't care about ingredients; they care what people say
        when they walk out the door. Answer the second question correctly and you stop
        being one of a thousand.
      </>
    ),
  },
  {
    n: "SHIFT 02",
    t: "Build the one thing AI can never copy",
    body: (
      <>
        My cousin is a doctor in a small town near Mangalore. Hundreds of doctors there —
        he's <em>the</em> famous one. Why? For 15 years, any patient can knock at 2am and
        he sees them. Can the others do that? Of course. <em>Will</em> they? Never. Your X
        factor is the thing you're willing to do that your competitor simply won't. In an
        AI world, it's the only moat left.
      </>
    ),
  },
  {
    n: "SHIFT 03",
    t: "Stop yanking the costliest lever",
    body: (
      <>
        There are only three ways to grow. More customers — the only lever that{" "}
        <em>costs</em> you. More per customer — walk into McDonald's for a ₹45 burger, walk
        out at ₹170, from three questions. And more often — repeats and referrals, nearly
        free. Nudge all three just 10% and it's 1.1 × 1.1 × 1.1 — a{" "}
        <strong className="text-white">33% bigger business.</strong> This month. Almost
        entirely for free.
      </>
    ),
  },
];

export function WhatChanges() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-semibold mb-6" style={{ color: ORANGE, letterSpacing: "0.28em" }}>
          THE THREE SHIFTS
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-12 max-w-3xl">
          Three shifts that change everything.{" "}
          <span style={{ color: ORANGE }}>Here they are, free.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {shifts.map((s) => (
            <div
              key={s.n}
              className="rounded-xl p-6"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <p className="text-[11px] font-semibold mb-4" style={{ color: ORANGE, letterSpacing: "0.25em" }}>
                {s.n}
              </p>
              <h3 className="font-display text-2xl text-white mb-4 leading-tight">{s.t}</h3>
              <p className="text-[14px] leading-[1.7]" style={{ color: "#B8B3A7" }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 space-y-5 text-[15px] leading-[1.75]" style={{ color: "#C8C3B7" }}>
          <p className="text-white font-bold text-base">
            Now here's my honest problem with giving you these three shifts.
          </p>
          <p>
            Knowing them isn't the same as building them into your business. Your business
            isn't one thing — it runs on seven, eight{" "}
            <strong className="text-white">engines</strong>: your offer, your marketing,
            your sales, your operations, your money. And it only grows as fast as the{" "}
            <em>slowest</em> one.
          </p>
          <p>
            You can't go to ChatGPT and type "build my sales engine" — it hands you generic
            garbage, because you don't yet know enough to feed it the right input. And you
            can't fix every engine in a weekend. You'll burn out and quit.
          </p>
          <p>
            There's only one way this works:{" "}
            <strong className="text-white">
              one engine a month. Learned properly, then built — with AI — for your specific
              business.
            </strong>{" "}
            With the prompts. With the accountability. With someone in the room when you get
            stuck.
          </p>
          <p>That's not a course. That's the thing I built next.</p>
        </div>
      </div>
    </section>
  );
}
