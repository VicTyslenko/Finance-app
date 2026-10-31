export const budgetPaths = {
  create: (id: number) => `/budgets?user_id=${id}`,
  delete: (budget_id: number, user_id: number) =>
    `/budgets/${budget_id}?user_id=${user_id}`,
};
