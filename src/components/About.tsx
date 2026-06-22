import { ORANGE, BORDER } from "@/lib/theme";

export function About() {
  return (
    <section className="px-6 py-20 md:py-28" style={{ borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-[11px] font-semibold mb-6" style={{ color: ORANGE, letterSpacing: "0.28em" }}>
          WHY LISTEN TO ME
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
          I started in <span style={{ color: ORANGE }}>door-to-door sales.</span>
        </h2>

        <div className="space-y-5 text-[15px] leading-[1.75]" style={{ color: "#C8C3B7" }}>
          <p>
            Literally knocking, one house after the next, for a full year — for Amazon.
            That's where I learned to sell. Not in a classroom. On a doorstep, with the door
            shutting in my face.
          </p>
          <p>
            When I started coaching, I was twenty-four. A kid talking about scaling to
            business owners twice my age. Who listens to that? Almost nobody — in the
            beginning.
          </p>
          <p>
            I know the feeling you're sitting in, because it was mine. You've built
            something good. You <em>know</em> it's better than half the stuff winning out
            there. And somebody louder, with a flashier scheme, keeps walking off with the
            customer that should've been yours. Genuinely good at the work — and invisible.
            That was me.
          </p>
          <p>
            So I learned the thing nobody teaches you. Not even an MBA — I've had IIM and
            ISB founders tell me three days with me felt like more than their two years of
            MBA. I learned there's a <strong className="text-white">system</strong> under
            every business that wins. The same handful of engines, whether you sell cakes or
            solar panels or chemical exports.
          </p>
          <p className="text-white font-bold text-base">
            Nine years consulting. Five years coaching. Over 50,000 owners through my
            workshops and trainings.
          </p>
          <p>
            Businesses doubled. Crore thresholds crossed. Owners who couldn't pay their own
            salary now taking home more profit than they used to do in revenue.
          </p>
          <p>
            If a door-to-door kid could figure it out, so can you. That part I'm sure of.
          </p>
        </div>
      </div>
    </section>
  );
}
