import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAxiosInterceptor from "@/hooks/useAxiosInterceptor";

export default function ReactQueryClientProvider({ children }) {
  const queryClient = new QueryClient();

  useAxiosInterceptor();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}