import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import {
  useBudgetCreate,
  useUpdateBudget,
} from "../../../../entities/budgets/hooks";
import { useModalStore } from "../../../../shared/components/modals/modals-store";
import { parseErrorMessage } from "../../lib";
import { budgetCategory } from "../../models";

import { budgetThemes, DEFAULT_THEME, defaultValues } from "./data";
import type { BudgetFormProps } from "./models";
import { type BudgetValidationBody } from "./validation";

export const useBudgetForm = ({ selectedBudget, mode }: BudgetFormProps) => {
  const { register, handleSubmit, watch, setValue, reset } =
    useForm<BudgetValidationBody>({
      defaultValues: selectedBudget ? selectedBudget : defaultValues,
    });

  const closeModal = useModalStore((state) => state.closeModal);

  const { mutate: createBudget, error } = useBudgetCreate();
  const { mutate: updateBudget } = useUpdateBudget();

  const onSubmit: SubmitHandler<BudgetValidationBody> = async (values) => {
    const onSuccess = () => {
      (reset(), closeModal());
      const message = mode === "new" ? "Budget created!" : "Budget updated!";
      toast.success(`${message}`);
    };

    if (mode === "new") {
      createBudget({ userId: 2, body: values }, { onSuccess });
      return;
    }
    if (!selectedBudget) return;

    updateBudget(
      {
        budgetId: selectedBudget?.budget_id,
        body: values,
        userId: 2,
      },
      { onSuccess },
    );
  };

  const category = watch("category") || budgetCategory.ENTERTAINMENT;
  const theme = watch("theme") || DEFAULT_THEME.name;
  const currentColor =
    budgetThemes.find((o) => o.name === theme)?.value ?? DEFAULT_THEME.value;

  const errorMessage = parseErrorMessage(error);

  return {
    closeModal,
    category,
    currentColor,
    errorMessage,
    onSubmit,
    register,
    handleSubmit,
    setValue,
    theme,
  };
};
