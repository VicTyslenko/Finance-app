import type { BudgetResponse } from "../../../../entities/budgets/models";
import type { FormMode } from "../../../../shared/components/modals/modals-store";

export type BudgetFormProps = {
  mode: FormMode;
  selectedBudget?: BudgetResponse;
};
