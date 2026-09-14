import { useModalStore } from "./modals-store";

export const DefaultModal = () => {
  const modal = useModalStore((state) => state.isOpen);

  if (!modal) return;

  
  return <div>Modal is opened!!</div>;
};
