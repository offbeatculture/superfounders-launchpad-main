import { ORANGE } from "@/lib/theme";

export function SectionLabel({
  children,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]"
      style={{ color: ORANGE }}
    >
      {children}
    </div>
  );
}
