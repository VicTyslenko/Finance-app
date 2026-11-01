export const budgetPaths = {
  create: (user_id: number) => `/budgets?user_id=${user_id}`,
  delete: (budget_id: number, user_id: number) =>
    `/budgets/${budget_id}?user_id=${user_id}`,
  update: (budget_id: number, user_id: number) =>
    `/budgets/${budget_id}?user_id=${user_id}`,
};
