import { kpiCards } from "../temp-data";

export const KPICards = () => {
  return (
    <div className="flex justify-between mb-5">
      {kpiCards.map((k, i) => (
        <div
          key={k.title}
          className={`rounded-xl pt-3 pb-3 pl-3 pr-30 shadow gap-3 ${i === 0 ? "bg-black" : "bg-white"}`}
        >
          <h2 className={`text-md ${i === 0 ? "text-white" : "text-gray-400"}`}>
            {k.title}
          </h2>
          <p className={`text-xl ${i === 0 ? "text-white" : "text-black"}`}>
            {k.price}
          </p>
        </div>
      ))}
    </div>
  );
};
// pt-3 pb-3 pl-3 pr-30
