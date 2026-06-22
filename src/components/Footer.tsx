import { ORANGE, MUTED, BORDER } from "@/lib/theme";

export function Footer() {
  return (
    <footer className="px-6 py-12 text-center" style={{ borderTop: `1px solid ${BORDER}` }}>
      <p className="text-[11px] font-semibold mb-4" style={{ color: MUTED, letterSpacing: "0.28em" }}>
        SWASTIK NANDAKUMAR · SUPER FOUNDERS
      </p>
      <p className="text-sm mb-2" style={{ color: "#C8C3B7" }}>
        Questions? <a href="#" className="underline" style={{ color: ORANGE }}>WhatsApp my team</a> or write to{" "}
        <a href="#" className="underline" style={{ color: ORANGE }}>support</a>.
      </p>
      <p className="text-xs mb-3" style={{ color: MUTED }}>
        GST invoice issued for every payment · Cancel anytime from your account · Secure
        payments via UPI AutoPay / card
      </p>
      <p className="text-xs mb-6" style={{ color: MUTED }}>
        <a href="#" className="underline">Terms</a> · <a href="#" className="underline">Privacy</a> · <a href="#" className="underline">Billing &amp; Cancellation Policy</a>
      </p>
      <p className="text-xs max-w-2xl mx-auto" style={{ color: MUTED }}>
        Results mentioned are individual member outcomes and not a promise of earnings.
        Building a business takes real work — that's the whole point.
      </p>
    </footer>
  );
}
