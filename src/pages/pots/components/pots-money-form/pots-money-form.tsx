import { useState } from "react";

import type { PotResponse } from "../../../../entities/pots/models";
import { CloseButton } from "../../../../shared/components/buttons/close-button";
import { DefaultInput } from "../../../../shared/components/form/default-input";
import { useModalStore } from "../../../../shared/components/modals/modals-store";
import { ProgressBar } from "../../../../shared/components/progress-bar/progress-bar";

export const PotsMoneyForm = ({
  selectedPot,
}: {
  selectedPot: PotResponse | null;
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const mode = useModalStore((state) => state.formMode);

  const [inputValue, setInputValue] = useState("");
  const initialAmount = selectedPot?.total ?? 0;

  const newAmount = initialAmount + Number(inputValue);

  const headerText =
    mode === "add money" ? "Add to ‘Savings’" : "Withdraw from ‘Savings’";

  const progressTheme = mode === "add money" ? "green" : "brown";
  return (
    <div className="w-125">
      {/* Header */}

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{headerText}</h1>

        <CloseButton onClose={closeModal} />
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm">
        {mode === "new"
          ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
          : "If your saving targets change, feel free to update your pots."}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 font-semibold">New Amount</span>
        <span className="text-3xl text-black font-bold">${newAmount}</span>
      </div>

      <ProgressBar progress={40} theme={progressTheme} noPadding height={10} />
      <div className="flex justify-between items-center">
        <span className="text-[#696868] text-[12px] font-semibold">
          Percentage
        </span>
        <span className="text-[#696868] text-[14px]">Target of $100</span>
      </div>
      <label className="text-xs text-gray-500 font-semibold" htmlFor="amount">
        Amount to Add
      </label>
      <DefaultInput
        id="amount"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="$"
      />
    </div>
  );
};
