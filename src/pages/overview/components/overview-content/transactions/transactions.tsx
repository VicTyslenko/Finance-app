import { ContentHeader } from "../content-header";
import { Avatar } from "./avatar";
import { trimmedNumber, amountStyle } from "./lib";

import type { TransactionsResponse } from "../../../../../entities/transactions/models";
type Props = {
  data: TransactionsResponse[];
};

export const Transactions = ({ data }: Props) => {
  return (
    <div className="bg-white shadow-xl flex-1 p-5 rounded-md">
      <ContentHeader title="Transactions" details="View All" />
      {/* Info table */}

      <div className="">
        {data.map((t) => {
          const formattedData = new Date(t.occurred_at).toLocaleDateString(
            "en-GB",
            { day: "numeric", month: "short", year: "numeric" },
          );
          return (
            <div
              key={t.transaction_id}
              className="flex justify-between p-4 border-b border-gray-100"
            >
              {/* Avatar wrapp */}
              <div className="flex gap-2 items-center">
                <Avatar name={t.counterparty_slug} avatar_url={t.avatar_url} />
                <p className="text-sm font-bold text-black">
                  {t.counterparty_slug}
                </p>
              </div>
              {/* Info wrapp */}
              <div className="flex flex-col gap-1 items-end">
                <p className={`${amountStyle(t.amount)}`}>
                  {t.amount < 0
                    ? `-$${trimmedNumber(t.amount)}`
                    : `+$${trimmedNumber(t.amount)}`}
                </p>
                <p className="text-sm text-gray-600">{formattedData}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
