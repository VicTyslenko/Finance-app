import { api } from "../../../shared/client";
import type {
  BaseQuery,
  CreatePotBody,
  PotResponse,
  UpdatePotQuery,
} from "../models";
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

export const editPot = async ({
  user_id,
  pot_id,
  body,
}: UpdatePotQuery): Promise<PotResponse> => {
  const data = await api.put<PotResponse>(
    potsPaths.update(user_id, pot_id),
    {},
    body,
  );
  return data;
};

export const deletePot = async ({
  user_id,
  pot_id,
}: {
  user_id: number;
  pot_id: number;
}) => {
  await api.delete(potsPaths.delete(pot_id, user_id));
};

type DepositProps = {
  pot_id: number;
  user_id: number;
  body: {
    amount: number;
  };
};
export const setPotDeposit = async ({
  pot_id,
  user_id,
  body,
}: DepositProps): Promise<PotResponse> => {
  const data = await api.post<PotResponse>(
    potsPaths.deposit(user_id, pot_id),
    {},
    body,
  );
  return data;
};

export interface WithdrawProps extends BaseQuery {
  body: { amount: number };
}
export const potWithdraw = async ({
  user_id,
  pot_id,
  body,
}: WithdrawProps): Promise<PotResponse> => {
  const data = await api.post<PotResponse>(
    potsPaths.withdraw(user_id, pot_id),
    {},
    body,
  );
  return data;
};
