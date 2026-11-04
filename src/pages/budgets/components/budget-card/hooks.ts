import {
  useModalStore,
  useWarnModalStore,
} from "../../../../shared/components/modals/modals-store";

export const useBudgetCard = () => {
  const openWarnModal = useWarnModalStore((state) => state.openWarnModal);
  const openModal = useModalStore((state) => state.openModal);

  const handleClick = (action: string) => {
    if (action === "delete") {
      openWarnModal();
    }
    if (action === "edit") {
      openModal("edit");
    }
  };

  return { handleClick };
};
