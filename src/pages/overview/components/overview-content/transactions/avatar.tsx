type AvatarProps = {
  name: string;
  avatar_url: string | null;
};
export const Avatar = ({ name, avatar_url }: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      {!avatar_url ? (
        <div className="w-10 h-10 rounded-full bg-blue-200 text-sm text-black flex items-center justify-center">
          {initials}
        </div>
      ) : (
        <img className="rounded-full w-10 h-10" src={avatar_url} alt="avatar" />
      )}
    </>
  );
};
