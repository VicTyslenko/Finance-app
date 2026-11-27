import type { KPICardsProps } from "../models";

import { kpiCards } from "./data";

export const KPICards = ({ income, expenses, balance }: KPICardsProps) => {
  return (
    <div className="flex gap-6 mb-8">
      {kpiCards({ income, balance, expenses }).map((k, i) => (
        <div
          key={k.title}
          className={`rounded-xl flex-1 p-6 shadow ${i === 0 ? "bg-black" : "bg-white"}`}
        >
          <h2
            className={`text-sm mb-3 ${i === 0 ? "text-white" : "text-gray-500"}`}
          >
            {k.title}
          </h2>
          <p
            className={`text-3xl font-bold ${i === 0 ? "text-white" : "text-black"}`}
          >
            {k.value}
          </p>
        </div>
      ))}
    </div>
  );
};
