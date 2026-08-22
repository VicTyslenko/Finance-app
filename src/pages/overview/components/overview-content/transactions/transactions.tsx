import { ContentHeader } from "../content-header";
import type { Users } from "../../../../../entities/users/models";
import { Avatar } from "./avatar";

type Props = {
  data: Users[];
};

export const Transactions = ({ data }: Props) => {
  const filteredData = data.slice(0, 5);

  return (
    <div className="bg-white shadow-xl flex-1 p-5 rounded-md">
      <ContentHeader title="Transactions" details="View All" />
      {/* Info table */}

      <div className="">
        {filteredData.map((t) => {
          return (
            <div
              key={t.user_id}
              className="flex justify-between p-4 border-b border-gray-100"
            >
              {/* Avatar wrapp */}
              <div className="flex gap-2 items-center">
                <Avatar name={t.full_name} avatar_url={t.avatar_url} />
                <p className="text-sm font-bold text-black">{t.full_name}</p>
              </div>
              {/* Info wrapp */}
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-black">${t.email}</p>
                <p className="text-xs text-gray-600">{t.created_at}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
