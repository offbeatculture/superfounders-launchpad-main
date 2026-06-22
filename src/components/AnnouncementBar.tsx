import { ORANGE, BORDER } from "@/lib/theme";

export function AnnouncementBar() {
  const items = [
    "SUPER FOUNDERS",
    "FOUNDING MEMBERS ONLY",
    "TWO LIVE BOOTCAMPS WITH SWASTIK EVERY MONTH",
    "SWASTIK NANDAKUMAR",
    "BUILT WITH AI",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div className="flex gap-8 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {row.map((t, i) => (
          <span key={i} className="text-[11px] font-semibold flex items-center gap-8" style={{ color: ORANGE, letterSpacing: "0.28em" }}>
            {t} <span style={{ color: "#3A3A3A" }}>•</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}
