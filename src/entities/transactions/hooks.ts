import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "./api/transactions";
import type { TransParams } from "./models";

export const useGetTransactions = ({ user_id, limit }: TransParams) =>
  useQuery({
    queryKey: ["transactions", user_id, limit],
    queryFn: () => getTransactions({ user_id, limit }),
  });
