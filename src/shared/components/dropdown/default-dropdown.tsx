import { useState, type ReactNode } from "react";

type DefaultDropdownProps = {
  label: string;
  itemsList: ReactNode[];
};

export const DefaultDropdown = ({ label, itemsList }: DefaultDropdownProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className="border cursor-pointer min-w-25 shadow-sm p-2 bg-transparent rounded-md flex justify-center items-center gap-3 relative"
    >
      <span className="text-black text-sm">{label}</span>
      <img src="/assets/images/icon-caret-down.svg" alt="arrow down" />

      {expanded && (
        <div className="border shadow-sm rounded-md p-2 absolute top-11 max-w-fit -right-4">
          {itemsList}
        </div>
      )}
    </div>
  );
};
