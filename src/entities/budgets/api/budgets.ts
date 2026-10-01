import { api } from "../../../shared/client";
import type { Budget, CreateBudgetResponse } from "../models";

import { budgetPaths } from "./paths";

export const createBudget = async ({
  id,
  body,
}: Budget): Promise<CreateBudgetResponse> => {
  const data = await api.post<CreateBudgetResponse>(
    budgetPaths.create(id),
    {},
    body,
  );
  return data;
};
