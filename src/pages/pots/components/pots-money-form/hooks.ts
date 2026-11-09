
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { usePotDeposit, usePotWithdraw } from "../../../../entities/pots/hooks";
import type { PotResponse } from "../../../../entities/pots/models";
import { useModalStore } from "../../../../shared/components/modals/modals-store";

import type { DepositBody } from "./validation";

export const usePotsMoneyForm = ({
  selectedPot,
}: {
  selectedPot: PotResponse | null;
}) => {
  const { handleSubmit, register, watch } = useForm<DepositBody>({
    defaultValues: { amount: 0 },
  });

  // Mutation functions from Tanstack
  const { mutate: setPotDeposit } = usePotDeposit();
  const { mutate: potWithdraw } = usePotWithdraw();

  const closeModal = useModalStore((state) => state.closeModal);
  const mode = useModalStore((state) => state.formMode);

  const initialAmount = selectedPot?.total ?? 0;
  const inputValue = watch("amount") || 0;

  const headerText =
    mode === "add money" ? "Add to ‘Savings’" : "Withdraw from ‘Savings’";
  const progressTheme = mode === "add money" ? "green" : "brown";

  //   Display the amount when user typing
  const resultAmount = (): number => {
    let result = 0;
    if (mode === "add money") {
      result = initialAmount + inputValue;
    }
    if (mode === "withdraw") {
      result = initialAmount - inputValue;
    }
    return result;
  };

  //   Submit form function
  const onSubmit = async (values: DepositBody) => {
    if (!selectedPot) return;

    if (mode === "add money") {
      setPotDeposit(
        {
          user_id: 2,
          pot_id: selectedPot?.pot_id,
          amount: values.amount,
        },
        {
          onSuccess: () => {
            toast.success(`Pot ${selectedPot.name} deposit is set.`);
            closeModal();
          },
        },
      );
    } else if (mode === "withdraw") {
      potWithdraw(
        {
          user_id: 2,
          pot_id: selectedPot.pot_id,
          body: { amount: values.amount },
        },
        {
          onSuccess: () => {
            toast.success(`Pot ${selectedPot.name} has withdrawn.`);
            closeModal();
          },
        },
      );
    }
  };
  return {
    onSubmit,
    resultAmount,
    headerText,
    progressTheme,
    handleSubmit,
    register,
    closeModal,
    mode,
  };
};
