import type { HTMLAttributes } from "react";

export type Variants = "primary" | "secondary" | "danger";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconPath?: string;
  customClass?: string;
  variant?: Variants;
}
