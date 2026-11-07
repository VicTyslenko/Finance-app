export const potsPaths = {
  get: (id: number) => `/pots?user_id=${id}`,
  create: (id: number) => `/pots?user_id=${id}`,
  delete: (pot_id: number, user_id: number) =>
    `/pots/${pot_id}?user_id=${user_id}`,
};
