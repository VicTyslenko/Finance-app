import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { createPot, deletePot, getPots } from "./api/pots";
import type { CreatePotBody } from "./models";

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
