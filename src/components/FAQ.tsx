import { useState } from "react";
import { MUTED, BORDER, SURFACE } from "@/lib/theme";
import { Plus, Minus } from "lucide-react";

const ORANGE = "#F87215";

const faqs: Array<[string, string]> = [
  [
    "When exactly are the live sessions?",
    "Third Wednesday and Fourth Wednesday of every month, at 7pm IST — live on Zoom. Recordings go up the same night.",
  ],
  [
    "What if I miss a session?",
    "Every session is recorded and posted inside the community the same night, with a written playbook attached.",
  ],
  [
    "I'm not technical. Will the AI part go over my head?",
    "No. The fourth-Wednesday sessions are built so a non-technical owner can follow along step by step. You will not be writing code.",
  ],
  [
    "What do I need besides the membership?",
    "A paid plan for one AI tool — Claude or ChatGPT, a few hundred rupees a month. That's it. Everything else is inside.",
  ],
  [
    'How does "grandfathered for life" actually work?',
    "Whatever price you join at today, you keep for as long as your membership stays active. Cancel and rejoin later, you rejoin at the current price.",
  ],
  [
    "How do I pay? Is it safe?",
    "UPI AutoPay or card via a secure Indian payments gateway. GST invoice issued every month, automatically.",
  ],
  [
    "What if I join and it's not for me?",
    'Cancel from your account in two clicks. No questions, no calls, no "win-back" nonsense.',
  ],
  [
    "I don't have a business yet. Should I still join?",
    "Yes — the early engines positioning, offer, X-factor are exactly what you want to nail before launching.",
  ],
  [
    "Is this connected to your other courses or the bootcamp?",
    "It's separate. This is the only place where you get me, LIVE, every month, building with you.",
  ],
  [
    "What happens at 200 members?",
    "The price steps up for new joiners. Existing members keep their founding price as long as they stay.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-[11px] font-semibold mb-6"
          style={{
            color: ORANGE,
            letterSpacing: "0.28em",
          }}
        >
          QUESTIONS OWNERS ACTUALLY ASK
        </p>

        <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
          Before you decide<span style={{ color: ORANGE }}>.</span>
        </h2>

        <div className="space-y-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-left px-5 py-4"
                >
                  <span className="text-white font-semibold text-[15px]">
                    {q}
                  </span>

                  {isOpen ? (
                    <Minus
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: ORANGE }}
                    />
                  ) : (
                    <Plus
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: ORANGE }}
                    />
                  )}
                </button>

                {isOpen && (
                  <p
                    className="px-5 pb-5 text-[14px] leading-[1.7]"
                    style={{ color: "#C8C3B7" }}
                  >
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* <div className="text-center mt-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              color: "#C8C3B7",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: ORANGE }}
            />
            Still have a question? Chat with my team on WhatsApp
          </span>
        </div> */}
      </div>
    </section>
  );
}