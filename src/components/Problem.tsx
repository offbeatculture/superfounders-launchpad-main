import { BORDER } from "@/lib/theme";

const ORANGE = "#F87215";

export function Problem() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[11px] font-semibold mb-6"
          style={{ color: ORANGE, letterSpacing: "0.25em" }}
        >
          PREFER READING? HERE'S THE WHOLE THING, IN WRITING.
        </p>

        <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
          A 4-rupee packet of salt.
        </h2>

        <div
          className="space-y-5 text-[15px] leading-[1.75]"
          style={{ color: "#C8C3B7" }}
        >
          <p>That's it. Four rupees.</p>

          <p>
            A cricketer puts his name on it, calls it a performance drink, and
            sells the exact same packet for forty. A brand in the US sells it
            for a hundred and twenty.
          </p>

          <p>Same salt. Same powder. Same everything.</p>

          <p className="text-white font-semibold text-base">
            The only thing that changed was the story wrapped around it.
          </p>

          <p>
            Now here's the part that should scare you. In the next twelve
            months, AI is going to do to your business what digital did to
            Kodak. And almost nobody reading this is ready for it.
          </p>

          <p>
            Stay with me for a few minutes. I'm going to show you how to build a
            business that gets people to pay you{" "}
            <strong className="text-white">more</strong> — without more
            customers, without more headache, and without being the cheapest guy
            in your market.
          </p>
        </div>

        <hr className="my-16" style={{ borderColor: BORDER }} />

        <p
          className="text-[11px] font-semibold mb-6"
          style={{ color: ORANGE, letterSpacing: "0.28em" }}
        >
          THE REAL PROBLEM
        </p>

        <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
          There's one number you've been chasing your whole career.{" "}
          <span style={{ color: ORANGE }}>It's the wrong one.</span>
        </h2>

        <div
          className="space-y-5 text-[15px] leading-[1.75]"
          style={{ color: "#C8C3B7" }}
        >
          <p>
            It's not that the market is saturated. It's not that your customers
            have too many options. It's not that you need to be cheaper. Those
            are just the three things you blame.
          </p>

          <p>
            Here's the lie you've built your whole business on:{" "}
            <strong className="text-white">
              you grow by getting more customers.
            </strong>
          </p>

          <p>
            Almost every business owner in this country has bought into it. "If
            I can just get 10x more customers — then I've made it."
          </p>

          <p>Let me show you why that lie is killing you.</p>

          <p>
            Say you run a coffee shop. One lakh a month, 100 customers, twenty
            thousand in ads. The "obvious" move? Double the ads. Get 200
            customers. Two lakhs. Easy.
          </p>

          <p>
            Except — now you need more chairs. More tables. A manager. More
            staff. More inventory, and more of it spoiling when the 200 don't
            show.
          </p>

          <p>
            Your customers went up. So did your expenses. So did your personal
            effort. So did your stress.
          </p>

          <p className="text-white font-bold text-base">
            Have you lived this? Revenue went from 1 lakh to 2 lakh… and profit
            actually went <em>down</em>?
          </p>

          <p>That's not scaling. That's buying yourself a bigger headache.</p>

          <blockquote
            className="rounded-xl p-5 my-6 italic"
            style={{
              background: "rgba(248, 114, 21, 0.08)",
              borderLeft: `3px solid ${ORANGE}`,
              color: "#E8DFD0",
            }}
          >
            There's a saying I hate: "I'd rather sit in a Ferrari and cry."
            That's not a flex. Having the money and still feeling like a failure
            is worse than being broke.
          </blockquote>

          <p>And that's still not the bad part. Here's the bad part.</p>

          <p>
            <strong className="text-white">
              We are standing in a Nokia moment.
            </strong>{" "}
            2007 — Nokia had fifty percent market share. Every second phone on
            earth. By 2013 — bankrupt. Not because they stopped innovating.
            Because they thought they were in the phone business when the world
            had moved on to what a phone could <em>do</em>. Same trap killed
            Kodak — who <em>invented</em> the digital camera and still died.
          </p>

          <p>
            Now look at your own business. Honestly. If your only edge is "I do
            good work" — AI does good-enough work now. If your only edge is your
            website, your copy, your service script — give me one hour and I'll
            clone every bit of it.
          </p>

          <p>
            If you're undifferentiated, your business doesn't dramatically
            explode. It just... slowly stops mattering. And it's not just you
            who pays for that. It's your team. It's the people at home who
            depend on this thing you built.
          </p>

          <p className="text-white font-bold text-base">
            If there's a knot in your stomach right now — breathe. Because this
            is not your fault.
          </p>

          <p>
            Nobody taught you this. Your MBA taught you to <em>manage</em> a
            business, not build one. The gurus sold you one more lead-gen hack
            instead of changing how you see your business. And the whole
            internet is screaming at you to copy funded startups — who are
            playing a completely different game, with completely different
            rules.
          </p>

          <p>You were handed the wrong map.</p>

          <p>But here's the truth that sets you free:</p>

          <blockquote
            className="rounded-xl p-5 my-6 italic font-semibold"
            style={{
              background: "rgba(248, 114, 21, 0.08)",
              borderLeft: `3px solid ${ORANGE}`,
              color: "#F5F0E8",
            }}
          >
            The best known beats the best. Every single time. The best-known
            restaurant beats the best restaurant. The best-known coach beats the
            best coach.
          </blockquote>

          <p>
            You don't have a quality problem. You have a{" "}
            <strong className="text-white">differentiation</strong> problem and
            a <strong className="text-white">system</strong> problem. And both
            of those can be engineered. On purpose. Starting this month.
          </p>
        </div>
      </div>
    </section>
  );
}