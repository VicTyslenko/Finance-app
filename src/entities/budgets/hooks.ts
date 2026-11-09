import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  createBudget,
  deleteBudget,
  getBudgets,
  updateBudget,
} from "./api/budgets";
import type { Budget, UpdateBudget } from "./models";

export const useGetBudgets = (id: number) => {
  return useQuery({
    queryKey: ["budgets", id],
    queryFn: () => getBudgets(id),
  });
};

export const useBudgetCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, body }: Budget) => createBudget({ userId, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ budgetId, userId }: { budgetId: number; userId: number }) =>
      deleteBudget({ budgetId, userId }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};

export const useUpdateBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, body, budgetId }: UpdateBudget) =>
      updateBudget({ userId, budgetId, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};
