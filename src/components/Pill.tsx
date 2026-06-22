import { ORANGE } from "@/lib/theme";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
      style={{ borderColor: `${ORANGE}55`, color: ORANGE }}
    >
      {children}
    </span>
  );
}
