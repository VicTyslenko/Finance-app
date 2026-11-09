import type { TransactionsResponse } from "../../../../entities/transactions/models";
import type { BudgetTheme, Category } from "../../../../shared/models";

export type BudgetCardProps = {
  category: Category;
  background: BudgetTheme;
  maxSpend: string;
  eachSpend: number;
  latest: (cat: Category) => TransactionsResponse[];
  onDelete: () => void;
};

