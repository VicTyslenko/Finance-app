import * as z from "zod";

export const validationPotSchema = z.object({
  potName: z.string().max(30),
  target: z.string(),
  theme: z.string(),
});

export type PotsValidationBody = z.infer<typeof validationPotSchema>;
