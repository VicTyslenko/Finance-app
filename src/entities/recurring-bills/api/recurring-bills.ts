import { api } from "../../../shared/client";
import { billsPaths } from "../billsPaths";
import type { RecBillsResponse } from "../models";

export const getRecurringBills = async (
  user_id: number,
): Promise<RecBillsResponse[]> => {
  const data = api.get<RecBillsResponse[]>(billsPaths.getBills(user_id));
  return data;
};
