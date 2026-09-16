import type { ButtonHTMLAttributes } from "react";

export type Variants = "primary" | "secondary" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconPath?: string;
  customClass?: string;
  variant?: Variants;
}
