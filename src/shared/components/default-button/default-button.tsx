import { BASE_CLASS } from "./data";
import type { ButtonProps } from "./models";

export const DefaultButton = ({
  children,
  customClass,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${customClass ?? BASE_CLASS}`} {...props}>
      {children}
    </button>
  );
};
