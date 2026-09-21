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
  withColor?: string;
}

export const DefaultDropdown = ({
  title,
  itemsList,
  label,
  customClass,
  withColor,
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
        className={`border cursor-pointer shadow-sm pt-2 pb-2 pl-3 pr-3 bg-transparent rounded-md relative flex justify-between items-center gap-3  ${customClass ?? ""}`}
      >
        {withColor ? (
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: withColor }}
            />
            <span className="text-black text-sm">{title}</span>
          </div>
        ) : (
          <span className="text-black text-sm">{title}</span>
        )}
        <img
          src="/assets/images/icon-caret-down.svg"
          alt="arrow down"
          className={`${expanded ? "rotate-180" : ""}`}
        />

        {expanded && (
          <div
            className={`border z-30 shadow-sm rounded-md p-2 absolute top-11 left-0 whitespace-nowrap bg-white ${customClass ? "w-full" : "w-max"}`}
          >
            {itemsList}
          </div>
        )}
      </div>
    </div>
  );
};
