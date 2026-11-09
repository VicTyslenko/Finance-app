import { api } from "../../../shared/client";
import type { Budget, BudgetResponse, UpdateBudget } from "../models";

import { budgetPaths } from "./paths";

// Get all budgets for user
export const getBudgets = async (id: number): Promise<BudgetResponse[]> => {
  const data = await api.get<BudgetResponse[]>(`/budgets/${id}`);

  return data;
};
// Create one budget
export const createBudget = async ({
  userId,
  body,
}: Budget): Promise<BudgetResponse> => {
  const data = await api.post<BudgetResponse>(
    budgetPaths.create(userId),
    {},
    body,
  );
  return data;
};
// Delete one budget for user
export const deleteBudget = async ({
  budgetId,
  userId,
}: {
  budgetId: number;
  userId: number;
}) => {
  await api.delete(budgetPaths.delete(budgetId, userId));
};

// Update one budget for user

export const updateBudget = async ({
  budgetId,
  body,
  userId,
}: UpdateBudget): Promise<BudgetResponse> => {
  console.log(budgetId, userId);
  const data = await api.put<BudgetResponse>(
    budgetPaths.update(budgetId, userId),
    {},
    body,
  );
  return data;
};
