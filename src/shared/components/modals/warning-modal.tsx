import { DefaultButton } from "../buttons/default-button/default-button";

import { useWarnModalStore } from "./modals-store";

type Props = {
  children?: React.ReactNode;
  description: string;
  title: string;
  confirmText: string;
};

export const WarningModal = ({ confirmText, description, title }: Props) => {
  const closeModal = useWarnModalStore((state) => state.closeWarnModal);
  const isOpen = useWarnModalStore((state) => state.isOpen);

  if (!isOpen) return;

  return (
    <div
      onMouseDown={closeModal}
      className="fixed inline-0 flex items-center justify-center"
    >
      {/* Modal content */}
      <div
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) return;
        }}
        className="border rounded-md bg-white p-4"
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-3">
          <p className="font-bold text-3xl text-black">{title}</p>
          <img src="/assets/icons/icon-close-modal.svg" alt="close modal" />
        </div>
        {/* Description */}
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <DefaultButton className="mb-4" variant="danger">
          {confirmText}
        </DefaultButton>
        <DefaultButton variant="transparent">No, Go Back</DefaultButton>
      </div>
    </div>
  );
};
