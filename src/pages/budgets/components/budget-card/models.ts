import type { TransactionsResponse } from "../../../../entities/transactions/models";
import type { Category } from "../../../../shared/models";

export type BudgetCardProps = {
  category: Category;
  background: string;
  maxSpend: string;
  eachSpend: number;
  latest: (cat: Category) => TransactionsResponse[];
};
