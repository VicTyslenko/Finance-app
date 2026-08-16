import { ContentHeader } from "../content-header";
import type { Users } from "../../../../../entities/users/models";

type Props = {
  data: Users[];
};

export const Transactions = ({ data }: Props) => {
  return (
    <div className="bg-white shadow-xl flex-1 p-5 rounded-md">
      <ContentHeader title="Transactions" details="View All" />
      {/* Info table */}

      <div className="">
        {data.map((t) => (
          <div
            key={t.full_name}
            className="flex justify-between p-4 border-b border-gray-100"
          >
            {/* Avatar wrapp */}
            <div className="flex gap-2 items-center">
              {/* <img
                className="rounded-full w-10 h-10"
                src={`assets/images/avatars/${t.avatar}`}
                alt="avatar"
              /> */}
              <p className="text-sm font-bold text-black">{t.full_name}</p>
            </div>
            {/* Info wrapp */}
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-black">${t.email}</p>
              <p className="text-xs text-gray-600">{t.created_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
