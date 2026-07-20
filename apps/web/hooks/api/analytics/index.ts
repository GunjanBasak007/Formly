import { trpc } from "~/trpc/client";

//For generating dashboard stat
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


//For generating response over time

export const useGetResponsesOverTime = () => {
  const {
    data: responsesOverTime,
    error,
    isFetched,
    isFetching,
    isLoading,
    status,
  } = trpc.analytics.getResponsesOverTime.useQuery();

  return {
    responsesOverTime,
    error,
    isFetched,
    isFetching,
    isLoading,
    status,
  };
};