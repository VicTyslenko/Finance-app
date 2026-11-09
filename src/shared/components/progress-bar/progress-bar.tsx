const DEFAULT_HEIGHT = 40;

export const ProgressBar = ({
  progress,
  theme,
  height = DEFAULT_HEIGHT,
  noPadding = false,
}: {
  progress: number;
  height?: number;
  theme: string;
  noPadding?: boolean;
}) => {
  return (
    <div
      className={`bg-[#f8f4f0] rounded-md ${noPadding ? "p-0" : "p-1.5"} w-full`}
      style={{ height }}
    >
      <div
        className="h-full rounded-md"
        style={{
          width: `${progress}%`,
          backgroundColor: `${theme}`,
        }}
      />
    </div>
  );
};
