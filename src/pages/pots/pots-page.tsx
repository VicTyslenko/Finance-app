import { DefaultButton } from "../../shared/components/buttons/default-button/default-button";
import { DefaultModal } from "../../shared/components/modals/default-modal";
import { useModalStore } from "../../shared/components/modals/modals-store";
import { PagesHeader } from "../../shared/components/pages-header";

import { NewPotsForm } from "./components/pots-form/pots-form";

export const PotsPage = () => {
  const openModal = useModalStore((state) => state.openModal);
  const isOpen = useModalStore((state) => state.isOpen);

  return (
    <div className="flex justify-between items-center">
      <PagesHeader title="Pots" />
      <DefaultButton variant="secondary" onClick={() => openModal()}>
        + Add New Pot
      </DefaultButton>
      {isOpen && (
        <DefaultModal children={<NewPotsForm mode="new" selectedPot="" />} />
      )}
    </div>
  );
};
