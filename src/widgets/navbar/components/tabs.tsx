import type { CSSProperties } from "react";

import { useSearchParams } from "react-router";

import { TABS_DATA } from "../data";
import { logoPath } from "../lib";

const baseClass = "flex p-4 gap-3 cursor-pointer  max-w-80";
type Props = {
  minimized: boolean;
};
export const Tabs = ({ minimized }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get("page") ?? "overview";
  const handleToggleTabs = (value: string) => {
    const trimmed = value.toLowerCase();

    setSearchParams((prev) => {
      prev.set("page", trimmed);
      return prev;
    });
  };

  return (
    <div className="flex flex-col mt-10">
      {TABS_DATA.map((t) => {
        const isActive = currentTab === t.title.toLowerCase();

        return (
          <button
            onClick={() => handleToggleTabs(t.title)}
            key={t.title}
            className={`${baseClass} ${
              isActive
                ? "bg-white text-black rounded-r-xl font-semibold"
                : "text-gray-300"
            }`}
          >
            <span
              aria-hidden
              style={{ "--icon": `url(${logoPath(t.icon)})` } as CSSProperties}
              className={`size-5 shrink-0 mask-(--icon) mask-center mask-no-repeat mask-contain ${
                isActive ? "bg-[#277c78]" : "bg-current"
              }`}
            />
            {!minimized && t.title}
          </button>
        );
      })}
    </div>
  );
};
