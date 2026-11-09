import type { PotResponse } from "../../../../entities/pots/models";
import { CloseButton } from "../../../../shared/components/buttons/close-button";
import { DefaultButton } from "../../../../shared/components/buttons/default-button/default-button";
import { DefaultInput } from "../../../../shared/components/form/default-input";
import { ProgressBar } from "../../../../shared/components/progress-bar/progress-bar";

import { usePotsMoneyForm } from "./hooks";

export const PotsMoneyForm = ({
  selectedPot,
}: {
  selectedPot: PotResponse | null;
}) => {
  const {
    onSubmit,
    handleSubmit,
    register,
    headerText,
    progressTheme,
    resultAmount,
    closeModal,
    mode,
  } = usePotsMoneyForm({ selectedPot });

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
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm text-gray-500 font-semibold">New Amount</span>
        <span className="text-3xl text-black font-bold">${resultAmount()}</span>
      </div>

      <ProgressBar progress={40} theme={progressTheme} noPadding height={10} />

      <div className="flex justify-between items-center">
        <span className="text-[#696868] text-[12px] font-semibold">
          Percentage
        </span>
        <span className="text-[#696868] text-[14px]">Target of $100</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-xs text-gray-500 font-semibold" htmlFor="amount">
          {mode === "add money" ? "Amount to Add" : "Amount to Withdraw"}
        </label>
        <DefaultInput
          id="amount"
          {...register("amount", { valueAsNumber: true })}
          placeholder="$"
        />
        <DefaultButton
          type="submit"
          variant="secondary"
          customClass="w-full mt-5"
        >
          Confirm Addition
        </DefaultButton>
      </form>
    </div>
  );
};
