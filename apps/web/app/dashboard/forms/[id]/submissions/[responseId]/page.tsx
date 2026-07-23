"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

import { useGetFields } from "~/hooks/api/form";
import { useGetResponse } from "~/hooks/api/response";

export default function ResponsePage({
    params,
}: {
    params: Promise<{
        id: string;
        responseId: string;
    }>;
}) {
    const { id: formId, responseId } = use(params);

    const {
        fields,
        isLoading: fieldsLoading,
    } = useGetFields(formId);

    const {
        response,
        isLoading: responseLoading,
    } = useGetResponse(responseId);

    const isLoading = fieldsLoading || responseLoading;

    if (isLoading) {
        return (
            <div className="p-6 space-y-4">
                <Skeleton className="h-8 w-48" />

                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full" />
                ))}
            </div>
        );
    }

    if (!response) {
        return (
            <div className="p-6">
                <p className="text-muted-foreground">
                    Response not found.
                </p>
            </div>
        );
    }

    const fieldMap = new Map(
        (fields ?? []).map((field) => [field.id, field])
    );

    return (
        <div className="p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon-sm"
                    asChild
                >
                    <Link
                        href={`/dashboard/forms/${formId}/submissions`}
                    >
                        <ArrowLeftIcon className="size-4" />
                    </Link>
                </Button>

                <div>
                    <h1 className="text-2xl font-bold">
                        Response Preview
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Submitted{" "}
                        {response.submittedAt
                            ? new Date(
                                  response.submittedAt
                              ).toLocaleString()
                            : "—"}
                    </p>
                </div>
            </div>

            <div className="grid gap-4">
                {(response.values ?? []).map((item) => {
                    const field = fieldMap.get(item.formFieldId);

                    return (
                        <Card key={item.formFieldId}>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    {field?.label ?? "Unknown Field"}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                {item.value ? (
                                    <p>{item.value}</p>
                                ) : (
                                    <p className="text-muted-foreground">
                                        —
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}