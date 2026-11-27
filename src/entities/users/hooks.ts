import { useQuery } from "@tanstack/react-query";

import { getUser, getUsers } from "./api/users";

export const useGetUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

export const useGetUser = (id: number) =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(id),
  });
