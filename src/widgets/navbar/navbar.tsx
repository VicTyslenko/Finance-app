import { Tabs } from "./components/tabs";

export const Navbar = () => {
  return (
    <nav className="flex-1 bg-gray-900 pt-5  rounded-r-lg">
      <div className="pl-4">
        <img src="/assets/images/logo-large.svg" alt="finance" className="h-4" />
      </div>
      <Tabs />
    </nav>
  );
};
