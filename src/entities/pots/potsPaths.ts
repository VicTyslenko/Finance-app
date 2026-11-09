export const potsPaths = {
  get: (id: number) => `/pots?user_id=${id}`,
  create: (id: number) => `/pots?user_id=${id}`,
  update: (user_id: number, pot_id: number) =>
    `/pots/${pot_id}?user_id=${user_id}`,
  delete: (pot_id: number, user_id: number) =>
    `/pots/${pot_id}?user_id=${user_id}`,
  deposit: (user_id: number, pot_id: number) =>
    `/pots/${pot_id}/deposit?user_id=${user_id}`,
  withdraw: (user_id: number, pot_id: number) =>
    `/pots/${pot_id}/withdraw?user_id=${user_id}`,
};
