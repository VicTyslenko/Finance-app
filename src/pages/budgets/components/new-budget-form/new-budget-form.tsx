import { useForm, type SubmitHandler } from "react-hook-form";

import { useBudgetCreate } from "../../../../entities/budgets/hooks";
import { CloseButton } from "../../../../shared/components/buttons/close-button";
import { DefaultButton } from "../../../../shared/components/buttons/default-button/default-button";
import { DefaultDropdown } from "../../../../shared/components/dropdown/default-dropdown";
import { DropdownItem } from "../../../../shared/components/dropdown/dropdown-item";
import { DefaultInput } from "../../../../shared/components/form/default-input";
import { FormLabel } from "../../../../shared/components/form/form-label";
import { useModalStore } from "../../../../shared/components/modals/modals-store";
import { parseErrorMessage } from "../../lib";
import { budgetCategory } from "../../models";

import { budgetThemes, DEFAULT_THEME, defaultValues } from "./data";
import type { Body } from "./validation";

export const NewBudgetForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm<Body>({
    defaultValues,
  });

  const closeModal = useModalStore((state) => state.closeModal);

  const { mutate: createBudget, error } = useBudgetCreate();

  const onSubmit: SubmitHandler<Body> = async (values) => {
    setValue("maximum_spend", "");
    createBudget({ id: 2, body: values }, { onSuccess: () => closeModal() });
  };

  const category = watch("category") || budgetCategory.ENTERTAINMENT;
  const theme = watch("theme") || DEFAULT_THEME.name;
  const currentColor =
    budgetThemes.find((o) => o.name === theme)?.value ?? DEFAULT_THEME.value;

  const errorMessage = parseErrorMessage(error);

  return (
    <div className="flex flex-col gap-3 w-125">
      {/* Header */}

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Budget</h1>

        <CloseButton onClose={closeModal} />
      </div>
      {/* Description */}
      <p className="text-gray-600 text-sm">
        Choose a category to set a spending budget. These categories can help
        you monitor spending .
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Budget category */}
        <div>
          <FormLabel text="Budget Category" />
          <DefaultDropdown
            customClass="w-full"
            itemsList={Object.values(budgetCategory).map((c) => (
              <DropdownItem
                key={c}
                isSelected={category === c}
                onSelect={() => {
                  setValue("category", c);
                }}
                text={c}
              />
            ))}
            title={category}
          />
        </div>

        {/* Maximum spend */}
        <div>
          <FormLabel text="Maximum Spend" />
          <DefaultInput
            {...register("maximum_spend")}
            placeholder="$  e.g.2000"
          />
        </div>

        {/* Theme */}
        <div>
          <FormLabel text="Theme" />
          <DefaultDropdown
            directionUp
            withColor={currentColor}
            customClass="w-full"
            itemsList={budgetThemes.map((t) => (
              <DropdownItem
                color={t.value}
                key={t.name}
                isSelected={theme === t.name}
                onSelect={() => {
                  setValue("theme", t.name);
                }}
                text={t.name}
              />
            ))}
            title={theme}
          />
        </div>
        {errorMessage && <p className="text-red-700 text-sm">{errorMessage}</p>}
        <DefaultButton
          type="submit"
          className="bg-black text-white text-sm p-3 cursor-pointer font-bold rounded-md"
        >
          Add Budget
        </DefaultButton>
      </form>
    </div>
  );
};
