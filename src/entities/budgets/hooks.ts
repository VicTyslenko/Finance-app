import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { createBudget, getBudgets } from "./api/budgets";
import type { Budget } from "./models";

export const useGetBudgets = (id: number) => {
  return useQuery({
    queryKey: ["budgets", id],
    queryFn: () => getBudgets(id),
  });
};

export const useBudgetCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: Budget) => createBudget({ id, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};
