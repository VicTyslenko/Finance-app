type SummaryCardsProps = {
  total: number;
  rows: {
    title: string;
    value: number;
    qty: number;
    titleColor: string;
    valueColor: string;
  }[];
};

export const SummaryCards = ({ total, rows }: SummaryCardsProps) => {
  return (
    <div className="flex flex-2 flex-col gap-5">
      {/* Total card */}
      <div className="bg-black rounded-lg p-5 flex-2">
        <img
          src="/assets/images/icon-recurring-bills.svg"
          alt="recurring bills"
          className="mb-15"
        />
        <h2 className="text-white text-sm font-light mb-3">Total Bills</h2>
        <p className="text-white font-bold text-3xl">${total}</p>
      </div>
      {/* Summary card */}
      <div className="bg-white rounded-lg p-6 flex flex-col gap-4">
        <h2 className="text-md text-black font-semibold">Summary</h2>
        {rows.map((r) => (
          <div
            key={r.title}
            className="pl-0 pr-3 pb-3 pt-3 not-last:border-b border-gray-300 flex justify-between items-center"
          >
            <span className={`text-sm ${r.titleColor}`}>{r.title}</span>
            <span className={`font-bold text-md ${r.valueColor}`}>{`${r.qty}($${r.value.toFixed(2)})`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
