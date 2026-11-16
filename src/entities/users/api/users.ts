import { api } from "../../../shared/client";
import type { UserResponse, Users } from "../models";

import { usersPaths } from "./paths";

export const getUsers = async (): Promise<Users[]> => {
  const data = await api.get<Users[]>(`${usersPaths.getUsers}`);
  return data;
};

export const getUser = async (user_id: number): Promise<UserResponse> => {
  const data = await api.get<UserResponse>(usersPaths.getUser(user_id));
  return data;
};
