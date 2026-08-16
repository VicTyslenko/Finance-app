import { MainContent } from "./main-content";
import { Navbar } from "../widgets/navbar/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="flex min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <MainContent />
      </QueryClientProvider>
    </div>
  );
};
