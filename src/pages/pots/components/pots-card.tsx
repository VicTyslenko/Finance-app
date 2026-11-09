import { DefaultPopup } from "../../../shared/components/default-popup/default-popup";
import { useModalStore } from "../../../shared/components/modals/modals-store";
import { ProgressBar } from "../../../shared/components/progress-bar/progress-bar";
import { PopupActions } from "../../shared/popup-actions";
import { BUTTONS_CLASS, potsPopupData } from "../data";
import type { PotsCardProps } from "../models";

import { potThemes, DEFAULT_POT_THEME } from "./pots-form/data";

export const PotsCard = ({
  title,
  total,
  theme,
  target,
  setId,
}: PotsCardProps) => {
  const openModal = useModalStore((state) => state.openModal);

  const searchedTheme =
    potThemes.find((t) => t.name === theme)?.value || DEFAULT_POT_THEME.value;

  const percentageSaved = (total * 100) / target;
  console.log(percentageSaved);
  return (
    <div className="bg-white rounded-lg p-5 min-w-130">
      <div className="flex justify-between items-center mb-10">
        <div className="flex gap-3">
          <span
            className="w-4 h-4 bg-green-800 rounded-full"
            style={{ backgroundColor: searchedTheme }}
          />
          <p className="text-black text-md font-semibold">{title}</p>
        </div>
        <DefaultPopup
          triggerEl={
            <button
              type="button"
              aria-label="Budget button"
              className="cursor-pointer p-1"
              onClick={setId}
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
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-sm text-gray-500 font-semibold">Total Saved</h2>
        <p className="text-3xl text-black font-bold">${total}</p>
      </div>
      <ProgressBar
        progress={Math.round(percentageSaved)}
        theme={searchedTheme}
        height={10}
        noPadding
      />
      <div className="flex justify-between items-center mt-4">
        <span className="text-[#696868] text-[12px] font-semibold">
          {percentageSaved.toPrecision(3)}%
        </span>
        <span className="text-[#696868] text-[14px]">Target of ${target}</span>
      </div>
      {/* Action buttons */}
      <div className="flex items-center gap-5 mt-5">
        <button
          onClick={() => {
            openModal("add money");
            setId();
          }}
          className={`${BUTTONS_CLASS}`}
        >
          + Add Money
        </button>
        <button
          onClick={() => {
            openModal("withdraw");
            setId();
          }}
          className={`${BUTTONS_CLASS}`}
        >
          Widthraw
        </button>
      </div>
    </div>
  );
};
