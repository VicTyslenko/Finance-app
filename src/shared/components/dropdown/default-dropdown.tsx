import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface DefaultDropdownProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  itemsList: ReactNode[];
  label?: string;
  customClass?: string;
}

export const DefaultDropdown = ({
  title,
  itemsList,
  label,
  customClass,
}: DefaultDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node))
        setExpanded(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <div ref={dropdownRef} className={`flex items-center gap-2`}>
      {label && <p className="text-gray-600 text-sm">{label}</p>}
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className={`border cursor-pointer shadow-sm p-2 bg-transparent z-20 rounded-md flex justify-center items-center gap-3 relative ${customClass ?? ""}`}
      >
        <span className="text-black text-sm">{title}</span>
        <img
          src="/assets/images/icon-caret-down.svg"
          alt="arrow down"
          className={`${expanded ? "rotate-180" : ""}`}
        />

        {expanded && (
          <div className="border shadow-sm rounded-md p-2 absolute top-11  w-max whitespace-nowrap bg-white z-10">
            {itemsList}
          </div>
        )}
      </div>
    </div>
  );
};
