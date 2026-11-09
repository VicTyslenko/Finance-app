import { useState } from "react";

import { toast } from "react-toastify";

import { useGetPots } from "../../entities/pots/hooks";
import { useDeletePot } from "../../entities/pots/hooks";
import { DefaultButton } from "../../shared/components/buttons/default-button/default-button";
import { DefaultModal } from "../../shared/components/modals/default-modal";
import {
  useModalStore,
  useWarnModalStore,
} from "../../shared/components/modals/modals-store";
import { WarningModal } from "../../shared/components/modals/warning-modal";
import { PagesHeader } from "../../shared/components/pages-header";

import { PotsCard } from "./components/pots-card";
import { NewPotsForm } from "./components/pots-form/pots-form";
import { PotsMoneyForm } from "./components/pots-money-form/pots-money-form";

export const PotsPage = () => {
  const openModal = useModalStore((state) => state.openModal);
  const isOpen = useModalStore((state) => state.isOpen);
  const formMode = useModalStore((state) => state.formMode);
  const warningModal = useWarnModalStore((state) => state.isOpen);
  const closeWarnModal = useWarnModalStore((state) => state.closeWarnModal);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: potsData = [] } = useGetPots({ user_id: 2 });
  const currentPot = potsData.find((p) => p.pot_id === selectedId) ?? null;

  const { mutate: deletePot } = useDeletePot();

  const handleDelete = () => {
    if (!selectedId) return;
    const potName = currentPot?.name;

    deletePot(
      { user_id: 2, pot_id: selectedId },
      {
        onSuccess: () => {
          toast.success(`Pot ${potName} deleted successfully`);
        },
      },
    );
    closeWarnModal();
  };

  const selectedPot = potsData.find((p) => p.pot_id === selectedId) ?? null;

  const renderModal = () => {
    if (formMode === "edit" || formMode === "new") {
      return <NewPotsForm selectedPot={selectedPot} />;
    }

    return <PotsMoneyForm selectedPot={selectedPot} />;
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <PagesHeader title="Pots" />
        <DefaultButton variant="secondary" onClick={() => openModal("new")}>
          + Add New Pot
        </DefaultButton>

        {isOpen && <DefaultModal children={renderModal()} />}
      </div>

      {/* Pots cards */}
      <div className="grid grid-cols-2 gap-6">
        {potsData.map((pot) => (
          <PotsCard
            key={pot.pot_id}
            title={pot.name}
            total={pot.total}
            theme={pot.theme}
            target={pot.target}
            setId={() => {
              setSelectedId(pot.pot_id);
            }}
          />
        ))}
      </div>
      {warningModal && (
        <WarningModal
          description="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
          title="Delete 'Savings'?"
          action={handleDelete}
        />
      )}
    </>
  );
};
