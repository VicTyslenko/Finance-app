import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { Navbar } from "../widgets/navbar/navbar";

import { MainContent } from "./main-content";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <MainContent />
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
};
