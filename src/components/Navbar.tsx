// import { BORDER } from "@/lib/theme";

// const ORANGE = "#F87215";

// export function Navbar() {
//   return (
//     <header
//       style={{ borderBottom: `1px solid ${BORDER}` }}
//       className="w-full"
//     >
//       <div className="max-w-6xl mx-auto px-6 py-5 text-center">
//         <span
//           className="text-[11px] font-semibold"
//           style={{
//             color: ORANGE,
//             letterSpacing: "0.28em",
//           }}
//         >
//           SWASTIK NANDAKUMAR
//         </span>
//       </div>
//     </header>
//   );
// }
import { BORDER } from "@/lib/theme";

const NAV_TEXT = "#6F737A";

export function Navbar() {
  return (
    <header
      className="w-full bg-[#050505]"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <div className="mx-auto flex h-[66px] max-w-6xl items-center justify-center px-6">
        <span
          className="text-[13px] font-semibold"
          style={{
            color: NAV_TEXT,
            letterSpacing: "0.42em",
          }}
        >
          SWASTIK NANDAKUMAR
        </span>
      </div>
    </header>
  );
}