import { useEffect, useRef } from "react";

import * as echarts from "echarts";

import { budgets, budgetSpent } from "../../temp-data";

const limitTotal = budgets.reduce((acc, { value }) => {
  const result = acc + value;
  return result;
}, 0);

const option = {
  // Sits inside the hole of the donut
  title: {
    text: `$${budgetSpent}`,
    subtext: `of $${limitTotal} limit`,
    top: "center",
    itemGap: 2,
    textStyle: { fontSize: 32, fontWeight: "bold", color: "#201F24" },
    subtextStyle: { fontSize: 12, color: "#696868" },
  },
  tooltip: {
    trigger: "item",
    valueFormatter: (value: number) => `$${value}`,
  },
  series: [
    {
      name: "Budgets",
      type: "pie",
      radius: ["82%", "100%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: budgets,
    },
    // Inner ring — same slices, washed out
    {
      name: "Budgets",
      type: "pie",
      radius: ["60%", "82%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      itemStyle: { opacity: 0.45 },
      silent: true,
      data: budgets,
    },
  ],
};
export const Chart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    chart.setOption(option);

    // init measures the container once, so keep it in sync with layout changes
    const observer = new ResizeObserver(() => chart.resize());
    if (chartRef.current) observer.observe(chartRef.current);

    return () => {
      observer.disconnect();
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="h-60 w-50 flex-1" />;
};
