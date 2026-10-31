import { DefaultPopup } from "../../../../shared/components/default-popup/default-popup";
import { FormattedAmount } from "../../../../shared/components/formatted-amount";
import { ProgressBar } from "../../../../shared/components/progress-bar/progress-bar";
import { formatDate } from "../../../../shared/lib/formatDate";
import { Avatar } from "../../../overview/components/overview-content/transactions/avatar";
import { BudgetPopupActions } from "../budget-popup-actions";

import type { BudgetCardProps } from "./models";

export const BudgetCard = ({
  background,
  category,
  maxSpend,
  eachSpend,
  latest,
  cardId,
}: BudgetCardProps) => {
  const remaining = Number(maxSpend) - eachSpend;
  const progress = Math.round((eachSpend * 100) / Number(maxSpend));

  return (
    <div className="bg-white rounded-lg p-5">
      {/* Title header */}
      <div className="flex justify-between items-center">
        {/* Title wrap */}
        <div className="flex gap-3 items-center">
          <div
            className="rounded-full w-3 h-3"
            style={{ backgroundColor: background }}
          />
          <h1 className="text-black text-lg font-semibold">{category}</h1>
        </div>
        <DefaultPopup
          triggerEl={
            <button
              type="button"
              aria-label="Budget button"
              className="cursor-pointer p-1"
              onClick={() => console.log("card id", cardId)}
            >
              <img
                src="assets/images/icon-ellipsis.svg"
                alt="three dots actions"
                className="rotate-x-180"
              />
            </button>
          }
          popupContent={<BudgetPopupActions />}
        />
      </div>
      <p className="text-gray-500 mb-4">Maximum of ${maxSpend}</p>
      {/* Progress bar  */}
      <ProgressBar progress={progress} />

      {/* Numbers info */}
      <div className="bg-inherit flex items-center mt-4">
        <div className="flex flex-1 gap-3">
          <div
            className="w-1 rounded-full self-stretch"
            style={{ backgroundColor: background }}
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500 font-semibold">Spent</span>
            <span className="font-bold text-lg text-black">${eachSpend}</span>
          </div>
        </div>

        <div className="flex flex-1 gap-3">
          <div className="w-1 rounded-full self-stretch bg-[#f8f4f0]" />
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-gray-500 text-sm">
              Remaining
            </span>
            <span className="font-bold text-black text-lg">${remaining}</span>
          </div>
        </div>
      </div>

      {/* Latest spending info */}
      <div className="mt-4 bg-[#f8f4f0] p-5 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-md font-bold">Latest Spending</h2>
          <DefaultPopup
            triggerEl={
              <>
                <div className="flex gap-3 items-center">
                  <span className="text-gray-500 text-sm">See all</span>
                  <img src="/assets/images/icon-caret-right.svg" alt="" />
                </div>
              </>
            }
            popupContent={
              <>
                <div>Content</div>
              </>
            }
          />
        </div>

        {/* Counterparties */}
        <div className="flex flex-col gap-2">
          {latest(category).map((cat) => (
            <div
              className="flex justify-between bg-inherit items-center border-gray-300 not-last:border-b pb-3 pt-3"
              key={cat.transaction_id}
            >
              {/* Avatar wrap */}
              <div className="flex gap-3 items-center">
                <Avatar name={cat.counterparty} avatar_url={cat.avatar_url} />
                <p className="text-sm font-bold text-black">
                  {cat.counterparty}
                </p>
              </div>
              {/* Spending info wrap */}
              <div className="flex flex-col gap-2 items-end">
                <FormattedAmount amount={cat.amount} />
                <p className="text-gray-500 text-sm font-semibold">
                  {formatDate({ date: cat.occurred_at })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
