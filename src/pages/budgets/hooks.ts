import { useState } from "react";

import { toast } from "react-toastify";

import { useDeleteBudget, useGetBudgets } from "../../entities/budgets/hooks";
import {
  useModalStore,
  useWarnModalStore,
} from "../../shared/components/modals/modals-store";

export const useBudgetsPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Modals states
  const openModal = useModalStore((state) => state.openModal);
  const isModalOpen = useModalStore((state) => state.isOpen);
  const closeWarningModal = useWarnModalStore((state) => state.closeWarnModal);
  const isWarningOpen = useWarnModalStore((state) => state.isOpen);
  const formMode = useModalStore((state) => state.formMode);

  // Tanstack data/mutation
  const { data: budgets = [] } = useGetBudgets(2);
  const { mutate: deleteBudget } = useDeleteBudget();

  const selectedBudget = budgets.find((b) => b.budget_id === selectedId);

  const limit = budgets.reduce((acc, { maximum_spend }) => {
    return (acc += Number(maximum_spend));
  }, 0);

  // Delete budget function
  const handleConfirmDelete = () => {
    if (!selectedId) return;

    deleteBudget(
      { budgetId: selectedId, userId: 2 },
      {
        onSuccess: () => {
          (setSelectedId(null), closeWarningModal());
          toast.success("Budget deleted!");
        },
        onError: () => {
          toast.error("Couldn't delete the budget");
        },
      },
    );
  };
  return {
    selectedId,
    openModal,
    budgets,
    limit,
    handleConfirmDelete,
    selectedBudget,
    formMode,
    isWarningOpen,
    isModalOpen,
    setSelectedId,
  };
};
