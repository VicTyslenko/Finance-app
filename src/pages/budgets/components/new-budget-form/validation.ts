import * as z from "zod";

export const validationSchema = z.object({
  category: z.string(),
  maximum_spend: z.string(),
  theme: z.string(),
});

export type BudgetValidationBody = z.infer<typeof validationSchema>;
