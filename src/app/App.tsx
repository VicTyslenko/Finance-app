import { MainContent } from "./main-content";
import { Navbar } from "../widgets/navbar/navbar";

export const App = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <MainContent />
    </div>
  );
};
