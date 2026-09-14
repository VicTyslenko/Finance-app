import { useModalStore } from "./modals-store";

interface ModalProps {
  children: React.ReactNode;
}
export const DefaultModal = ({ children }: ModalProps) => {
  const modal = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  if (!modal) return;

  return (
    <div
      onMouseDown={closeModal}
      className="fixed inset-0 z-50 flex bg-black/50 justify-center items-center"
    >
      {/* Modal content */}
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        className="p-4 rounded-lg bg-white text-black"
      >
        {children}
      </div>
    </div>
  );
};
