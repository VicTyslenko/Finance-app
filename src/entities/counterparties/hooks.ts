import { useQuery } from "@tanstack/react-query";
import { getAllCounterparties } from "./api/counterparties";

export const useGetCounterparties = () => {
  return useQuery({
    queryKey: ["counterparties"],
    queryFn: getAllCounterparties,
  });
};
