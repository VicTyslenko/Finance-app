import { DUE_SOON_DAYS } from "./data";

export const dateEnding = (value: string) => {
  const lastEl = Number(value.split("").slice(-1).join(""));
  switch (lastEl) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const isDueSoon = (due_day: number, paid: boolean) => {
  const today = new Date().getDate();
  return !paid && due_day >= today && due_day <= today + DUE_SOON_DAYS;
};
