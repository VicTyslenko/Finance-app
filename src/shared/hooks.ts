import { useEffect, useState } from "react";

export const useDebounce = (value: string, duration: number) => {
  const [newValue, setNewValue] = useState("");

  setTimeout(() => {
    setNewValue(value);
  }, duration);

  return { newValue };
};
