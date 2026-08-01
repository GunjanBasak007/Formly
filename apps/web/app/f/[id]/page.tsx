"use client";

import { useParams } from "next/navigation";

import { PublicForm } from "~/components/forms/public-form";
import { useGetPublishedForm } from "~/hooks/api/form";

export default function PublicFormPage() {
  const params = useParams();

  const formId = params.id as string;

  const {
    form,
    isLoading,
  } = useGetPublishedForm(formId);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!form) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md rounded-3xl border bg-background p-10 text-center shadow-sm">
        <h1 className="text-2xl font-bold">
          This form is not available
        </h1>

        <p className="mt-4 text-muted-foreground">
          The form may have been removed, is no longer accepting
          responses, or has not been published yet.
        </p>
      </div>
    </div>
  );
}

  return <PublicForm form={form} />;
}