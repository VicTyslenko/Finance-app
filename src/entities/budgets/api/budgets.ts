import { api } from "../../../shared/client";
import type { Budget, BudgetResponse } from "../models";

import { budgetPaths } from "./paths";

export const getBudgets = async (id: number): Promise<BudgetResponse[]> => {
  const data = await api.get<BudgetResponse[]>(`/budgets/${id}`);

  return data;
};

export const createBudget = async ({
  id,
  body,
}: Budget): Promise<BudgetResponse> => {
  const data = await api.post<BudgetResponse>(budgetPaths.create(id), {}, body);
  return data;
};
