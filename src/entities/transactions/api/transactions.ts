import { api } from "../../../shared/client";
import type { TransactionsResponse } from "../models";
import { transactionPaths } from "../transactionPaths";

export const getTransactions = async ({
  user_id,
  limit,
}: {
  user_id: number;
  limit?: number;
}): Promise<TransactionsResponse[]> => {
  if (limit !== undefined && (limit < 1 || limit > 200)) {
    throw new Error(`Limit must be between 1 and 200, got ${limit}`);
  }
  const params = new URLSearchParams({ user_id: String(user_id) });

  if (limit !== undefined) {
    params.set("limit", String(limit));
  }
  const data = await api.get<TransactionsResponse[]>(
    `${transactionPaths.transaction}?${params}`,
  );

  return data;
};
