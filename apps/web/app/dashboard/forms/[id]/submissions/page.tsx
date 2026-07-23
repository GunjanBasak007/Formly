"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

import { useListResponses } from "~/hooks/api/response";

export default function SubmissionsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id: formId } = use(params);

    const {
        responses,
        isLoading,
    } = useListResponses(formId);

    return (
        <div className="p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon-sm"
                    asChild
                >
                    <Link href={`/dashboard/forms/${formId}`}>
                        <ArrowLeftIcon className="size-4" />
                        <span className="sr-only">
                            Back to form builder
                        </span>
                    </Link>
                </Button>

                <h1 className="text-2xl font-bold">
                    Submissions
                </h1>
            </div>

            <div className="rounded-lg border overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted">
                        <TableRow>
                            <TableHead>
                                Submitted At
                            </TableHead>

                            <TableHead className="text-right">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Skeleton className="h-4 w-40" />
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <Skeleton className="h-8 w-16 ml-auto" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : responses && responses.length > 0 ? (
                            responses.map((response) => (
                                <TableRow key={response.id}>
                                    <TableCell className="text-muted-foreground">
                                        {response.submittedAt
                                            ? new Date(
                                                  response.submittedAt
                                              ).toLocaleString()
                                            : "—"}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                        >
                                            <Link
                                                href={`/dashboard/forms/${formId}/submissions/${response.id}`}
                                            >
                                                View
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={2}
                                    className="h-24 text-center text-muted-foreground"
                                >
                                    No submissions yet.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}