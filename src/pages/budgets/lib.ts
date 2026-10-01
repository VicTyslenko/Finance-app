import { ApiError } from "../../shared/client";

export const parseErrorMessage = (error: Error | null) => {
  if (!(error instanceof ApiError)) return error?.message ?? "";

  const { payload } = error;
  if (payload && typeof payload === "object" && "detail" in payload) {
    const { detail } = payload;
    if (Array.isArray(detail)) return detail.find((el) => el.msg)?.msg ?? "";
    if (typeof detail === "string") return detail;
  }
};
