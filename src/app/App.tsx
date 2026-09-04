import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar } from "../widgets/navbar/navbar";

import { MainContent } from "./main-content";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="flex h-dvh overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <MainContent />
      </QueryClientProvider>
    </div>
  );
};
