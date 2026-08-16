import { api } from "../../../shared/client";
import type { Users } from "../models";
import { usersPaths } from "./paths";

export const getUsers = async (): Promise<Users[]> => {
  const data = await api.get<Users[]>(`${usersPaths.getUsers}`);
  return data;
};
