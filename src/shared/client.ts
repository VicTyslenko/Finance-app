import { API_URL } from "./config";

export class ApiError extends Error {
  status: number;
  payload: unknown;
  constructor(status: number, payload: unknown, message: string) {
    super(message);
    ((this.status = status),
      (this.name = "ApiError"),
      (this.message = message),
      (this.payload = payload));
  }
}

type Options = Omit<RequestInit, "body"> & { body?: unknown };

const request = async <T>(
  path: string,
  { body, headers, ...init }: Options,
): Promise<T> => {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      ...(body !== undefined && { "Content-Type": "application/json" }),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    throw new ApiError(
      response.status,
      payload,
      payload?.detail ?? response.statusText,
    );
  }
  return response.status === 204 ? (undefined as T) : response.json();
};

export const api = {
  get: <T>(path: string, options?: Options): Promise<T> =>
    request(path, { ...options, method: "GET" }),
  post: <T>(path: string, options?: Options, b?: unknown): Promise<T> =>
    request(path, { ...options, body: b, method: "POST" }),
  patch: <T>(path: string, options?: Options, b?: unknown): Promise<T> =>
    request(path, { ...options, body: b, method: "PATCH" }),
  put: <T>(path: string, options?: Options, b?: unknown): Promise<T> =>
    request(path, { ...options, body: b, method: "PUT" }),
  delete: <T>(path: string, options?: Options): Promise<T> =>
    request(path, { ...options, method: "DELETE" }),
};
