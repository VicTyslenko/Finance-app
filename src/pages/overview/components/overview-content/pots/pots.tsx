import { details } from "../../temp-data";
import { ContentHeader } from "../content-header";

export const Pots = () => {
  return (
    <div className="bg-white shadow-xl p-5 rounded-md">
      <ContentHeader title="Pots" details="See details" />
      {/* Content */}
      <div className="flex gap-5">
        {/* Total */}
        <div className="rounded-md bg-[#e3e2d6] p-4 pr-15">
          <div className="flex items-center gap-3">
            <span className="size-10 bg-[#277C78] [mask:url(/assets/images/icon-nav-pots.svg)_center/contain_no-repeat]" />

            <div className="flex flex-col">
              <p className="text-xs text-black">Total Saved</p>
              <p className="font-extrabold text-2xl text-black">$850</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4">
          {details.map((d) => (
            <div
              key={d.title}
              className={`border-l-4 flex flex-col gap-1.5 ${d.border} pl-3`}
            >
              <h3 className="text-gray-500 text-sm">{d.title}</h3>
              <p className="font-bold text-md text-black">{d.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
