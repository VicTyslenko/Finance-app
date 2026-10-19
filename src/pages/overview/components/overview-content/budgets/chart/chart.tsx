import { useEffect, useRef } from "react";

import * as echarts from "echarts";

import { budgets } from "../../../temp-data";

import type { ChartProps } from "./models";

const option = ({
  totalSpend,
  limit,
}: {
  totalSpend: number;
  limit: number;
}) => ({
  // Sits inside the hole of the donut
  title: {
    text: `$${totalSpend}`,
    subtext: `of $${limit} limit`,
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
});

export const Chart = ({ limit, totalSpend }: ChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);

  // Create once on mount, dispose on unmount
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = echarts.init(containerRef.current);
    chartRef.current = chart;

    // init measures the container once, so keep it in sync with layout changes
    const observer = new ResizeObserver(() => chart.resize());
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  // Push new data into the existing chart whenever the props change
  useEffect(() => {
    chartRef.current?.setOption(option({ totalSpend, limit }));
  }, [totalSpend, limit]);

  return <div ref={containerRef} className="h-60 w-50 flex-1" />;
};
