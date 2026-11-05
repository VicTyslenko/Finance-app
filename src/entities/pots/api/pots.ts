import { api } from "../../../shared/client";
import type { CreatePotBody, PotResponse } from "../models";
import { potsPaths } from "../potsPaths";

export const getPots = async (user_id: number): Promise<PotResponse[]> => {
  const data = await api.get<PotResponse[]>(potsPaths.get(user_id));
  return data;
};

export const createPot = async ({
  user_id,
  body,
}: CreatePotBody): Promise<PotResponse> => {
  const data = await api.post<PotResponse>(potsPaths.create(user_id), {}, body);
  return data;
};
