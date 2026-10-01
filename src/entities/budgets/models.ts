export type CreateBudgetBody = {
  category: string;
  maximum_spend: string;
  theme: string;
};

export type Budget = {
  body: CreateBudgetBody;
  id: number;
};

export type CreateBudgetResponse = {
  budget_id: number;
  category: string;
  maximum_spend: string;
  theme: string;
  createdAt: Date;
};
