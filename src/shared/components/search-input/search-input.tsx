import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = ({ ...props }: InputProps) => {
  return (
    <div className="border border-gray-300 relative rounded-md shadow-sm h-9 focus-within:border-gray-900">
      <input
        type="text"
        className="placeholder:text-xs text-sm text-black placeholder:text-gray-400 pl-3 pr-9 w-full h-full outline-none bg-transparent rounded-md"
        {...props}
      />
      <span className="absolute top-2.5 right-3.25">
        <img src="/assets/images/icon-search.svg" alt="search icon" />
      </span>
    </div>
  );
};
