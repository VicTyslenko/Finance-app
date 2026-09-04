import { amountStyle } from "../../pages/overview/components/overview-content/transactions/lib";
import { trimmedNumber } from "../lib/trimmedNumber";

export const FormattedAmount = ({ amount }: { amount: number }) => {
  return (
    <p className={`${amountStyle(amount)}`}>
      {amount < 0 ? `-$${trimmedNumber(amount)}` : `+$${trimmedNumber(amount)}`}
    </p>
  );
};
