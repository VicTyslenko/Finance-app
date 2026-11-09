import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import {
  createPot,
  deletePot,
  editPot,
  getPots,
  potWithdraw,
  setPotDeposit,
  type BaseQuery,
  type WithdrawProps,
} from "./api/pots";
import type { CreatePotBody, UpdatePotQuery } from "./models";

export const useGetPots = ({ user_id }: { user_id: number }) =>
  useQuery({
    queryKey: ["pots", user_id],
    queryFn: () => getPots(user_id),
  });

export const useCreatePot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ user_id, body }: CreatePotBody) =>
      createPot({ user_id, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const useUpdatePot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ user_id, pot_id, body }: UpdatePotQuery) =>
      editPot({ user_id, pot_id, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const useDeletePot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ user_id, pot_id }: { user_id: number; pot_id: number }) =>
      deletePot({ user_id, pot_id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const usePotDeposit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      pot_id,
      user_id,
      amount,
    }: {
      pot_id: number;
      user_id: number;
      amount: number;
    }) => setPotDeposit({ pot_id, user_id, body: { amount } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const usePotWithdraw = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ user_id, pot_id, body }: WithdrawProps) =>
      potWithdraw({ user_id, pot_id, body }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pots"] }),
  });
};
