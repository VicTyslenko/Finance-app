import { useEffect, useRef, useState, useLayoutEffect } from "react";

import type { DefaultPopupProps } from "./models";

export const DefaultPopup = ({
  triggerEl,
  popupContent,
}: DefaultPopupProps) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top?: number; left?: number } | null>(null);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current!.getBoundingClientRect();
    const popup = popupRef.current!.getBoundingClientRect();
    const viewportHeight = document.documentElement.clientHeight;

    const positionDown = trigger.bottom + 8;
    const fitsBelow = positionDown <= viewportHeight;

    const top = fitsBelow ? positionDown : trigger.top - popup.height;
    const left = fitsBelow ? trigger.right - popup.width : trigger.left + 20;
    setPos({
      top,
      left,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handler = (event: MouseEvent) => {
      const trigger = triggerRef.current;
      const popup = popupRef.current;

      if (trigger?.contains(event.target as Node)) return;
      if (popup?.contains(event.target as Node)) return;
      setOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const closeOnScroll = () => setOpen(false);

    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("scroll", closeOnScroll, true);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("scroll", closeOnScroll, true);
    };
  }, [open]);

  return (
    <>
      <div ref={triggerRef} onMouseDown={() => setOpen((prev) => !prev)}>
        {triggerEl}
      </div>
      {open && (
        <div
          ref={popupRef}
          className={`fixed p-2.5 z-50 rounded-md bg-white shadow-md border border-gray-200`}
          style={pos ?? { visibility: "hidden" }}
          onClick={() => setOpen(false)}
        >
          {popupContent}
        </div>
      )}
    </>
  );
};
