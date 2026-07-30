"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeftIcon, Calendar, Eye } from "lucide-react";

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

  const { responses, isLoading } = useListResponses(formId);

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Button
            variant="ghost"
            size="icon-sm"
            asChild
            className="
              rounded-xl
              transition-all
              hover:bg-violet-100
              dark:hover:bg-violet-900/30
            "
          >
            <Link href={`/dashboard/forms/${formId}`}>
              <ArrowLeftIcon className="size-4" />
              <span className="sr-only">
                Back to form builder
              </span>
            </Link>
          </Button>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Submissions
            </h1>

            <p className="mt-1 text-muted-foreground">
              View and manage all responses submitted for this form.
            </p>
          </div>
        </div>

        <div className="h-1 w-28 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500" />
      </div>

      {/* Table */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-border/60
          bg-card
          shadow-md
          ring-1
          ring-border/40
          transition-all
          duration-300
          hover:shadow-xl
        "
      >
        <Table>
          <TableHeader className="bg-violet-50/60 dark:bg-violet-950/20">
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Submitted At
                </div>
              </TableHead>

              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  Action
                </div>
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
                    <Skeleton className="ml-auto h-8 w-16" />
                  </TableCell>
                </TableRow>
              ))
            ) : responses && responses.length > 0 ? (
              responses.map((response) => (
                <TableRow
                  key={response.id}
                  className="
                    group
                    transition-all
                    duration-300
                    hover:bg-violet-50/60
                    dark:hover:bg-violet-950/20
                  "
                >
                  <TableCell className="text-muted-foreground">
                    {response.submittedAt
                      ? new Intl.DateTimeFormat("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        }).format(new Date(response.submittedAt))
                      : "—"}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="
                        rounded-xl
                        border-violet-200
                        transition-all
                        hover:bg-violet-50
                        hover:text-violet-700
                        dark:hover:bg-violet-900/20
                      "
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
                  className="py-16"
                >
                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/30">
                      <Calendar className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        No submissions yet
                      </h3>

                      <p className="mt-2 text-muted-foreground">
                        Responses submitted to this form will appear here.
                      </p>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl"
                    >
                      <Link href={`/dashboard/forms/${formId}`}>
                        Back to Form
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}