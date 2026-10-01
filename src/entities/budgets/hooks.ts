import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createBudget } from "./api/budgets";
import type { Budget } from "./models";

export const useBudgetCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: Budget) => createBudget({ id, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};
