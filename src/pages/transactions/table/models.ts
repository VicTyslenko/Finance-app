import type { TransactionsResponse } from "../../../entities/transactions/models";

export type TableProps = {
  data: TransactionsResponse[];
};



export const sortingValues = {
  LATEST: "Latest",
  OLDEST: "Oldest",
  LOWEST: "Lowest",
  HIGHEST: "Highest",
  DESCEND: "Z to A",
  ASCEND: "A to Z",
} as const;

export type SortingBy = (typeof sortingValues)[keyof typeof sortingValues];
