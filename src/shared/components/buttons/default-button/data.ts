export const BASE_CLASS =
  "cursor-pointer p-2 flex justify-center gap-3 rounded-lg min-w-[100px] items-center text-sm font-bold";

export const variants = {
  primary: `${BASE_CLASS} border bg-transparent text-black`,
  secondary: `${BASE_CLASS} bg-black text-white p-3`,
  danger: `${BASE_CLASS} bg-[#C94736] text-white p-4`,
  transparent: "text-gray-700 font-light text-sm cursor-pointer",
};
