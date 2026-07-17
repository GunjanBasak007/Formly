import { trpc } from "~/trpc/client";

export const useGetDashboardStats = () => {
  const {
    data: analytics,
    error,
    isFetched,
    isFetching,
    isLoading,
    status,
  } = trpc.analytics.getDashboardStats.useQuery();

  return {
    analytics,
    error,
    isFetched,
    isFetching,
    isLoading,
    status,
  };
};