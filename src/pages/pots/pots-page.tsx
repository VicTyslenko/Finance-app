import { useGetPots } from "../../entities/pots/hooks";
import { DefaultButton } from "../../shared/components/buttons/default-button/default-button";
import { DefaultModal } from "../../shared/components/modals/default-modal";
import { useModalStore } from "../../shared/components/modals/modals-store";
import { PagesHeader } from "../../shared/components/pages-header";

import { PotsCard } from "./components/pots-card";
import { NewPotsForm } from "./components/pots-form/pots-form";

export const PotsPage = () => {
  const openModal = useModalStore((state) => state.openModal);
  const isOpen = useModalStore((state) => state.isOpen);
  const formMode = useModalStore((state) => state.formMode);

  const { data: potsData = [] } = useGetPots({ user_id: 2 });
  return (
    <>
      <div className="flex justify-between items-center">
        <PagesHeader title="Pots" />
        <DefaultButton variant="secondary" onClick={() => openModal("new")}>
          + Add New Pot
        </DefaultButton>

        {isOpen && (
          <DefaultModal
            children={<NewPotsForm mode={formMode} selectedPot="" />}
          />
        )}
      </div>
      {/* Pots cards */}
      <div className="grid grid-cols-2 gap-6">
        {potsData.map((pot) => (
          <PotsCard key={pot.pot_id} title={pot.name} total={pot.total} />
        ))}
      </div>
    </>
  );
};
