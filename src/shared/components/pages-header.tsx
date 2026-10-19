export const PagesHeader = ({ title }: { title: string }) => {
  return (
    <header className="sticky top-0 bg-[#f8f4f0] z-10 text-xl font-bold text-black pb-8 pt-8">
      {title}
    </header>
  );
};
