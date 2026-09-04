import { api } from "../../../shared/client";
import { type CounterpartiesResponse } from "../models";

import { counterpartiesPaths } from "./paths";

export const getAllCounterparties = async (): Promise<
  CounterpartiesResponse[]
> => {
  const data = await api.get<CounterpartiesResponse[]>(counterpartiesPaths.all);
  return data;
};
