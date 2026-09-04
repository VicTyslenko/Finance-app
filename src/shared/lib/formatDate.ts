type FormatDate = {
  date: string;
  lang?: string;
  options?: Intl.DateTimeFormatOptions;
};

const defaultOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
};

export const formatDate = ({
  date,
  lang = "en-GB",
  options = defaultOptions,
}: FormatDate) => {
  const formatted = new Date(date).toLocaleDateString(lang, options);

  return formatted;
};
