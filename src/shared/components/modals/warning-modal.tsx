import { useEffect } from "react";

import { CloseButton } from "../buttons/close-button";
import { DefaultButton } from "../buttons/default-button/default-button";

import { useWarnModalStore } from "./modals-store";

type WarningModalProps = {
  children?: React.ReactNode;
  description: string;
  title: string;
  confirmText: string;
  action: () => void;
};

export const WarningModal = ({
  confirmText,
  description,
  title,
  action,
}: WarningModalProps) => {
  const closeModal = useWarnModalStore((state) => state.closeWarnModal);
  const isOpen = useWarnModalStore((state) => state.isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  return (
    <div
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      className="fixed flex items-center justify-center inset-0 z-50 bg-black/50"
    >
      {/* Modal content */}
      <div className="bg-white rounded-lg p-6 max-w-135 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-xl font-bold">{title}</h1>
          <CloseButton onClose={closeModal} />
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm">{description}</p>
        <DefaultButton onClick={action} variant="danger">
          {confirmText}
        </DefaultButton>
        <DefaultButton onClick={closeModal} variant="transparent">
          No, Go Back
        </DefaultButton>
      </div>
    </div>
  );
};
