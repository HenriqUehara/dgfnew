import { LOGO_GREEN, LOGO_WHITE } from "./logo-assets";

export type LogoVariant = "green" | "white";
interface LogoProps {
  variant?: LogoVariant;
  height?: number;
  decorative?: boolean;
}
// Proporção real do arquivo (2420×1120) — reservar width/height evita layout shift.
const ASPECT = 2420 / 1120;
export function Logo({ variant = "green", height = 28, decorative = false }: LogoProps) {
  const src = variant === "white" ? LOGO_WHITE : LOGO_GREEN;
  const width = Math.round(height * ASPECT);
  return (
    <img
      src={src}
      alt={decorative ? "" : "DGF Investimentos — 25 anos"}
      aria-hidden={decorative || undefined}
      width={width}
      height={height}
      style={{ height, width: "auto", display: "block" }}
      draggable={false}
      loading={height >= 24 ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
export default Logo;
