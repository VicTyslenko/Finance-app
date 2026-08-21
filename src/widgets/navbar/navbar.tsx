import { Tabs } from "./components/tabs";
import { useState } from "react";

export const Navbar = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      className={`relative ${minimized ? "flex-0" : "flex-1"} bg-gray-900 pt-5 rounded-r-lg`}
    >
      <nav>
        {!minimized && (
          <div className="pl-4">
            <img
              src="/assets/images/logo-large.svg"
              alt="finance"
              className="h-4"
            />
          </div>
        )}

        {/* Tabs wrapper */}
        <div className="flex flex-col gap-100">
          <Tabs minimized={minimized} />
          <button
            onClick={() => setMinimized((prev) => !prev)}
            className="flex items-center gap-3  cursor-pointer pl-4"
          >
            <img src="/assets/images/icon-minimize-menu.svg" alt="" />
            {!minimized && <span>Minimize menu</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};
