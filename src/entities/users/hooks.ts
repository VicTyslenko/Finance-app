import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/users";

export const useGetUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
