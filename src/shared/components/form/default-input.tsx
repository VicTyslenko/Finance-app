import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const DefaultInput = ({ ...props }: InputProps) => {
  return (
    <div className="border bg-transparent rounded-md shadow-md p-2">
      <input
        type="text"
        className="w-full h-full outline-none placeholder:text-sm text-gray-600 text-sm"
        {...props}
      />
    </div>
  );
};
