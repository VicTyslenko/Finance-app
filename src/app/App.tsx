import { Overview } from "../pages/overview/overview";

import { Navbar } from "../widgets/navbar/navbar";

export const App = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Overview />
    </div>
  );
};
