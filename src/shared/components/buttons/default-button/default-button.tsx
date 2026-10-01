import { BASE_CLASS } from "./data";
import { variants } from "./data";
import type { ButtonProps, Variants } from "./models";

export const DefaultButton = ({
  children,
  variant = "primary",
  type = "button",
  customClass,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${BASE_CLASS} ${variant && variants[variant as Variants]} ${customClass ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
