export const BillsTotalCard = ({ total }: { total: number }) => {
  return (
    <div className="bg-black rounded-lg p-5 flex-2">
      <img
        src="/assets/images/icon-recurring-bills.svg"
        alt="recurring bills"
        className="mb-15"
      />
      <h2 className="text-white text-sm font-light mb-3">Total Bills</h2>
      <p className="text-white font-bold text-3xl">${total}</p>
    </div>
  );
};
