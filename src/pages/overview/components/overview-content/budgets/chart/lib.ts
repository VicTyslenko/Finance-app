// export const option =  {
//   // Sits inside the hole of the donut
//   title: {
//     text: `$${budgetSpent}`,
//     subtext: `of $${limitTotal} limit`,
//     top: "center",
//     itemGap: 2,
//     textStyle: { fontSize: 32, fontWeight: "bold", color: "#201F24" },
//     subtextStyle: { fontSize: 12, color: "#696868" },
//   },
//   tooltip: {
//     trigger: "item",
//     valueFormatter: (value: number) => `$${value}`,
//   },
//   series: [
//     {
//       name: "Budgets",
//       type: "pie",
//       radius: ["82%", "100%"],
//       avoidLabelOverlap: false,
//       label: {
//         show: false,
//         position: "center",
//       },
//       labelLine: {
//         show: false,
//       },
//       data: budgets,
//     },
//     // Inner ring — same slices, washed out
//     {
//       name: "Budgets",
//       type: "pie",
//       radius: ["60%", "82%"],
//       avoidLabelOverlap: false,
//       label: {
//         show: false,
//       },
//       labelLine: {
//         show: false,
//       },
//       itemStyle: { opacity: 0.45 },
//       silent: true,
//       data: budgets,
//     },
//   ],
// };