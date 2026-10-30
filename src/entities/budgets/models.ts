import type { BudgetTheme, Category } from "../../shared/models";

export type CreateBudgetBody = {
  category: string;
  maximum_spend: string;
  theme: string;
};

export type Budget = {
  body: CreateBudgetBody;
  id: number;
};

export type BudgetResponse = {
  budget_id: number;
  category: Category;
  maximum_spend: string;
  theme: BudgetTheme;
  createdAt: Date;
};
