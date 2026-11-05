import { DefaultPopup } from "../../../shared/components/default-popup/default-popup";
import { PopupActions } from "../../shared/popup-actions";
import { potsPopupData } from "../data";

type PotsCardProps = {
  title: string;
  total: number;
};
export const PotsCard = ({ title, total }: PotsCardProps) => {
  return (
    <div className="bg-white rounded-lg p-5 min-w-130">
      <div className="flex justify-between items-center mb-10">
        <div className="flex gap-3">
          <span className="w-4 h-4 bg-green-800 rounded-full" />
          <p className="text-black text-md font-semibold">{title}</p>
        </div>
        <DefaultPopup
          triggerEl={
            <button
              type="button"
              aria-label="Budget button"
              className="cursor-pointer p-1"
              // onClick={onDelete}
            >
              <img
                src="assets/images/icon-ellipsis.svg"
                alt="three dots actions"
                className="rotate-x-180"
              />
            </button>
          }
          popupContent={<PopupActions data={potsPopupData} />}
        />
      </div>
      {/* Total saved */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-gray-500 font-semibold">Total Saved</h2>
        <p className="text-3xl text-black font-bold">${total}</p>
      </div>
    </div>
  );
};
