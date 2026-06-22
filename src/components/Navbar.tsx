import { BORDER, MUTED } from "@/lib/theme";

export function Navbar() {
  return (
    <header
      style={{ borderBottom: `1px solid ${BORDER}` }}
      className="w-full"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 text-center">
        <span
          className="text-[11px] font-semibold"
          style={{ color: MUTED, letterSpacing: "0.28em" }}
        >
          SWASTIK NANDAKUMAR
        </span>
      </div>
    </header>
  );
}
