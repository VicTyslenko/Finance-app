import { useEffect, useRef, useState } from "react";

import type { DefaultPopupProps } from "./models";

export const DefaultPopup = ({
  triggerEl,
  popupContent,
}: DefaultPopupProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={rootRef} className="relative">
      <div onClick={() => setOpen((prev) => !prev)}>{triggerEl}</div>
      {open && (
        <div className="fixed top-full border rounded-md bg-white shadow">
          {popupContent}
        </div>
      )}
    </div>
  );
};
