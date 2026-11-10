import { useQuery } from "@tanstack/react-query";

import { getRecurringBills } from "./api/recurring-bills";

export const useGetRecurringBills = (user_id: number) => {
  return useQuery({
    queryKey: ["recurring-bills", user_id],
    queryFn: () => getRecurringBills(user_id),
    enabled: !!user_id,
  });
};
