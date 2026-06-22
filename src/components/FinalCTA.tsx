import { MUTED, BORDER } from "@/lib/theme";

const ORANGE = "#F87215";

export function FinalCTA() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[11px] font-semibold mb-6"
          style={{
            color: ORANGE,
            letterSpacing: "0.28em",
          }}
        >
          TWO PATHS
        </p>

        <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
          Right now, you're at a{" "}
          <span style={{ color: ORANGE }}>fork.</span>
        </h2>

        <div
          className="space-y-5 text-[15px] leading-[1.75]"
          style={{ color: "#C8C3B7" }}
        >
          <p>Walk with me a few months into the future.</p>

          <p>
            You've sat through the first engine. For the first time, you
            actually know what business you're <em>really</em> in — and you've
            stopped sounding like everyone else. The next month, you built your
            X factor — and customers have started talking about you to other
            people, for free.
          </p>

          <p>
            By month four, you've got a real sales engine running, and you
            noticed something: you stopped chasing more customers, and your
            profit went <em>up</em> anyway. It gave you your evenings back,
            didn't it.
          </p>

          <p>
            A year in, you're not the best-kept secret in your market anymore.
            You're the best <em>known.</em> Money — and the time to actually
            enjoy it. A business AI made stronger, not weaker.
          </p>

          <p>
            That's not a fantasy. One owner I did this with now gifts his son a
            piece of land on every birthday, because money stopped being a
            question in his life. That's just what happens when you build the
            engines on purpose.
          </p>

          <p className="font-bold text-base" style={{ color: ORANGE }}>
            But that's a year from now. Right now — two paths.
          </p>

          <p>
            <strong className="text-white">The painful path:</strong> you close
            this page, keep doing exactly what you've been doing, and let the AI
            wave decide what happens to your business and the people counting on
            you. You sit on what used to work — while the world quietly moves on
            without you.
          </p>

          <p>
            <strong className="text-white">The smart path:</strong> you spend
            less than one dinner, lock a founding price you'll never see again,
            and start building a business that can't be copied and can't be
            wiped out — with me in the room with you twice a month. I've already
            done the hard part. The system is built. The prompts are written.
            You just have to walk in.
          </p>

          <p>
            This is bigger than a community. It's a movement — the founders of
            India, in one room, getting stronger together every month. You help
            me build that, and I help you become undeniable. That's the deal.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://community.swastiknandakumar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 rounded-xl font-bold text-base transition-transform hover:scale-[1.03] text-center"
            style={{
              background: ORANGE,
              color: "#0A0A0A",
              letterSpacing: "0.05em",
              boxShadow: "0 0 80px rgba(248, 114, 21, 0.4)",
            }}
          >
            JOIN SUPER FOUNDERS
          </a>

       <a
  href="https://community.swastiknandakumar.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-4 text-sm underline"
  style={{ color: "#60A5FA" }}
>
  Click here to join Super Founders now
</a>

          <p className="mt-3 text-sm" style={{ color: MUTED }}>
            124 in. At 200, the price goes up.
          </p>

          <div className="mt-10 font-display text-2xl md:text-3xl text-white leading-tight">
            <div>I'll see you inside.</div>
            <div>This is Swastik. Go.</div>
          </div>
        </div>
      </div>
    </section>
  );
}