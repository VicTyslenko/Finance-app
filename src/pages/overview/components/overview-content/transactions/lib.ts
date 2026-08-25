export const trimmedNumber = (amount: number) =>
  Number(String(amount).replaceAll("-", ""));

export const amountStyle = (amount: number) =>
  `font-semibold text-md ${amount < 0 ? "text-black" : "text-green-700"}`;
