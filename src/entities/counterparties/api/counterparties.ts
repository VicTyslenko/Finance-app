import { type CounterpartiesResponse } from "../models";
import { api } from "../../../shared/client";
import { counterpartiesPaths } from "./paths";

export const getAllCounterparties = async (): Promise<
  CounterpartiesResponse[]
> => {
  const data = await api.get<CounterpartiesResponse[]>(counterpartiesPaths.all);
  return data;
};
