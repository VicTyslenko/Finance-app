import z from "zod";

export const validationSchema = z.object({
  amount: z.number(),
});

export type DepositBody = z.infer<typeof validationSchema>;
