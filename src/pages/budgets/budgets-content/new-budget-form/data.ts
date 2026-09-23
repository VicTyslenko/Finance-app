import { budgetCategory } from "../../models";

export const budgetThemes = [
  { name: "Green", value: "#08751C" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Cyan", value: "#00FFFF" },
  { name: "Turqouise", value: "#40E0D0" },
  { name: "Navy", value: "#000080" },
  { name: "Red", value: "#FF0000" },
  { name: "Purple", value: "#800080" },
];

export const DEFAULT_THEME = budgetThemes[0];

export const defaultValues = {
  category: budgetCategory.ENTERTAINMENT,
  maxSpend: "",
  theme: DEFAULT_THEME.name,
};
