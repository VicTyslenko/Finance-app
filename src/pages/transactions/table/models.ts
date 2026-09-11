import type { TransactionsResponse } from "../../../entities/transactions/models";

export type TableProps = {
  data: TransactionsResponse[];
};

export const categories = {
  ALL: "All transactions",
  ENTERTAINMENT: "Entertainment",
  BILLS: "Bills",
  GROCERIES: "Groceries",
  DINING: "Dining out",
  TRANSPORT: "Transportation",
} as const;

export type Category = (typeof categories)[keyof typeof categories];

export const sortingValues = {
  LATEST: "Latest",
  OLDEST: "Oldest",
  LOWEST: "Lowest",
  HIGHEST: "Highest",
  DESCEND: "Z to A",
  ASCEND: "A to Z",
} as const;

export type SortingBy = (typeof sortingValues)[keyof typeof sortingValues];
