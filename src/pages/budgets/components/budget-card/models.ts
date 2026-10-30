import type { TransactionsResponse } from "../../../../entities/transactions/models";
import type { Category } from "../../../../shared/models";

export type BudgetCardProps = {
  category: string;
  background: string;
  maxSpend: string;
  eachSpend: number;
  latest: (cat: Category) => TransactionsResponse[];
};
