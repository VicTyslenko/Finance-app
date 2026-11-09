import * as z from "zod";

export const validationPotSchema = z.object({
  name: z.string().max(30).min(2),
  target: z
    .number()
    .positive() // gt=0
    .max(9_999_999_999.99) // what numeric(12,2) can hold
    .multipleOf(0.01), // max 2 decimal places

  theme: z.string(),
});

export type PotsValidationBody = z.infer<typeof validationPotSchema>;
