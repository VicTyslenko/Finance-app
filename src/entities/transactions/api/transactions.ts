import { api } from "../../../shared/client";
import type { TransParams, TransactionsResponse } from "../models";
import { transactionsPaths } from "../transactionsPaths";

export const getTransactions = async ({
  user_id,
  limit,
}: TransParams): Promise<TransactionsResponse[]> => {
  if (limit !== undefined && (limit < 1 || limit > 200)) {
    throw new Error(`Limit must be between 1 and 200, got ${limit}`);
  }
  const params = new URLSearchParams({ user_id: String(user_id) });

  if (limit !== undefined) {
    params.set("limit", String(limit));
  }
  const data = await api.get<TransactionsResponse[]>(
    `${transactionsPaths.transactions}?${params}`,
  );

  return data;
};
