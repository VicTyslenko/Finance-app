import * as z from "zod";

export const validationPotSchema = z.object({
  name: z.string().max(30).min(2),
  target: z.number().max(12),
  theme: z.string(),
});

export type PotsValidationBody = z.infer<typeof validationPotSchema>;
