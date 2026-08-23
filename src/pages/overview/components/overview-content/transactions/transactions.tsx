import { ContentHeader } from "../content-header";
import { Avatar } from "./avatar";
import type { CounterpartiesResponse } from "../../../../../entities/counterparties/models";

type Props = {
  data: CounterpartiesResponse[];
};

export const Transactions = ({ data }: Props) => {
  const filteredData = data?.slice(0, 5);

  return (
    <div className="bg-white shadow-xl flex-1 p-5 rounded-md">
      <ContentHeader title="Transactions" details="View All" />
      {/* Info table */}

      <div className="">
        {filteredData.map((t) => {
          return (
            <div
              key={t.counterparty_id}
              className="flex justify-between p-4 border-b border-gray-100"
            >
              {/* Avatar wrapp */}
              <div className="flex gap-2 items-center">
                <Avatar name={t.name} avatar_url={t.avatar_url} />
                <p className="text-sm font-bold text-black">{t.name}</p>
              </div>
              {/* Info wrapp */}
              <div className="flex flex-col gap-1">
            
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
