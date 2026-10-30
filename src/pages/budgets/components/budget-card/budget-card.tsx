import { DefaultPopup } from "../../../../shared/components/default-popup/default-popup";
import { ProgressBar } from "../../../../shared/components/progress-bar/progress-bar";

type Props = {
  category: string;
  background: string;
  maxSpend: string;
  eachSpend: number;
};

export const BudgetCard = ({
  background,
  category,
  maxSpend,
  eachSpend,
}: Props) => {
  const remaining = Number(maxSpend) - eachSpend;

  const progress = Math.round((eachSpend * 100) / Number(maxSpend));
  console.log(progress);
  return (
    <div className="bg-white rounded-lg p-5 border">
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
            <>
              <button>Clck here</button>
            </>
          }
          popupContent={
            <>
              <div>Some content</div>
            </>
          }
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
        <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};
