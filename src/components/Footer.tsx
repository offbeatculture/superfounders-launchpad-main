import { BORDER } from "@/lib/theme";

const FOOTER_HEADING = "#A5A8AD";
const FOOTER_TEXT = "#7D8288";
const FOOTER_LINK = "#B8BCC2";

export function Footer() {
  return (
    <footer
      className="px-6 pt-16 pb-28 text-center"
      style={{
        borderTop: `1px solid ${BORDER}`,
        background: "#050505",
      }}
    >
      <p
        className="mb-7 text-[11px] font-semibold"
        style={{
          color: FOOTER_HEADING,
          letterSpacing: "0.34em",
        }}
      >
        SWASTIK NANDAKUMAR · SUPER FOUNDERS
      </p>
      <p
  className="mb-2 text-[14px] leading-[1.5]"
  style={{ color: FOOTER_TEXT }}
>
  Questions? WhatsApp my team or write to support.
</p>

      {/* <p
        className="mb-2 text-[14px] leading-[1.5]"
        style={{ color: FOOTER_TEXT }}
      >
        Questions?{" "}
        <a href="#" className="underline" style={{ color: FOOTER_LINK }}>
          WhatsApp my team
        </a>{" "}
        or write to{" "}
        <a href="#" className="underline" style={{ color: FOOTER_LINK }}>
          support
        </a>
        .
      </p> */}

      <p
        className="mb-2 text-[14px] leading-[1.5]"
        style={{ color: FOOTER_TEXT }}
      >
        GST invoice issued for every payment · Cancel anytime from your account ·
        Secure payments via UPI AutoPay / card
      </p>
      <p
  className="mb-8 text-[14px] leading-[1.5]"
  style={{ color: FOOTER_TEXT }}
>
  Terms · Privacy · Billing &amp; Cancellation Policy
</p>

      {/* <p
        className="mb-8 text-[14px] leading-[1.5]"
        style={{ color: FOOTER_TEXT }}
      >
        <a href="#" className="underline" style={{ color: FOOTER_LINK }}>
          Terms
        </a>{" "}
        ·{" "}
        <a href="#" className="underline" style={{ color: FOOTER_LINK }}>
          Privacy
        </a>{" "}
        ·{" "}
        <a href="#" className="underline" style={{ color: FOOTER_LINK }}>
          Billing &amp; Cancellation Policy
        </a>
      </p> */}

      <p
        className="mx-auto max-w-4xl text-[14px] leading-[1.6]"
        style={{ color: FOOTER_TEXT }}
      >
        Results mentioned are individual member outcomes and not a promise of
        earnings. Building a business takes real work — that's the whole point.
      </p>
    </footer>
  );
}