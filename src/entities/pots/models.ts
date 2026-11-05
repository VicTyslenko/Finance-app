import type { PotsValidationBody } from "../../pages/pots/components/pots-form/validation";

export type PotResponse = {
  pot_id: number;
  name: string;
  target: number;
  total: number;
  theme: string;
  created_at: string;
};

export type CreatePotBody = {
  user_id: number;
  body: PotsValidationBody;
};
