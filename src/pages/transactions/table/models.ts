import type { TransactionsResponse } from "../../../entities/transactions/models";

export type TableProps = {
  data: TransactionsResponse[];
  searchValue: string;
};
