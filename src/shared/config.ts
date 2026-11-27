const currentEnv = import.meta.env.MODE;

export const API_URL =
  currentEnv === "development"
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_PROD_API_URL;
