import { useGetPots } from "../../../../../entities/pots/hooks";
import { themeByName } from "../../../../pots/components/pots-form/data";
import { ContentHeader } from "../content-header";

export const Pots = () => {
  const { data: potsData = [] } = useGetPots({ user_id: 2 });
  const totalSaved = potsData?.reduce((acc, p) => acc + p.total, 0);

  return (
    <div className="bg-white shadow-xl p-5 rounded-lg">
      <ContentHeader title="Pots" details="See details" />
      {/* Content */}
      <div className="grid grid-cols-2 gap-5">
        {/* Total */}

        <div className="flex items-center gap-5 rounded-xl bg-[#e3e2d6] p-5">
          <img src="/assets/images/icon-pot.svg" alt="" className="h-10" />
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500">Total Saved</p>
            <p className="text-4xl font-bold text-black">${totalSaved}</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4">
          {potsData.map((d) => {
            const border = themeByName[d.theme];
            return (
              <>
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full w-1 h-10"
                    style={{ backgroundColor: border }}
                  />
                  <div key={d.pot_id} className="flex flex-col gap-1.5">
                    <h3 className="text-gray-500 text-sm">{d.name}</h3>
                    <p className="font-bold text-md text-black">${d.target}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
