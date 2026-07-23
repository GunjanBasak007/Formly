import { trpc } from "~/trpc/client";

export const useListResponses = (formId: string) => {
    const {
        data: responses,
        error,
        isFetched,
        isFetching,
        isLoading,
        status,
    } = trpc.response.listResponses.useQuery({ formId });

    return {
        responses,
        error,
        isFetched,
        isFetching,
        isLoading,
        status,
    };
};

export const useGetResponse = (responseId: string) => {
    const {
        data: response,
        error,
        isFetched,
        isFetching,
        isLoading,
        status,
    } = trpc.response.getResponse.useQuery({ responseId });

    return {
        response,
        error,
        isFetched,
        isFetching,
        isLoading,
        status,
    };
};

export const useListFormsWithResponseStats = () => {
    const {
        data: forms,
        error,
        isFetched,
        isFetching,
        isLoading,
        status,
    } = trpc.response.listFormsWithResponseStats.useQuery({});

    return {
        forms,
        error,
        isFetched,
        isFetching,
        isLoading,
        status,
    };
};