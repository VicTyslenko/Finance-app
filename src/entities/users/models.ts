export type Users = {
  user_id: number;
  email: string;
  full_name: string;
  created_at: string;
  avatar_url: string | null;
};

export type UserResponse = {
  user_id: number;
  email: string;
  full_name: string;
  created_at: string;
  avatar_url: string;
  balance: number;
};
