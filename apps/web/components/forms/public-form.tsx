"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";

import { useSubmitForm } from "~/hooks/api/form";
import { RenderPublicField } from "./render-public-field";

type Props = {
  form: {
    id: string;
    title: string;
    description?: string | null;
    fields: {
      id: string;
      label: string;
      labelKey: string;
      type: string;
      placeholder?: string | null;
      description?: string | null;
      isRequired: boolean;
    }[];
  };
};

export function PublicForm({ form }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { submitFormAsync, status } = useSubmitForm();

  const handleSubmit = async () => {
    try {
      // Validate required fields
      for (const field of form.fields) {
        if (field.isRequired && !(values[field.id] ?? "").trim()) {
          toast.error(`${field.label} is required`);
          return;
        }
      }

      await submitFormAsync({
        formId: form.id,
        values: form.fields.map((field) => ({
          formFieldId: field.id,
          value: values[field.id] ?? "",
        })),
      });

      setSubmitted(true);
      setValues({});

      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form");
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-3xl border bg-background p-10 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold">Thank You!</h1>

          <p className="mt-4 text-muted-foreground">
            Your response for <span className="font-semibold">{form.title}</span> has been recorded
            successfully.
          </p>

          <Button
            className="mt-8"
            onClick={() => {
              setSubmitted(false);
              setValues({});
            }}
          >
            Submit Another Response
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-3xl border bg-background p-8 shadow-sm">
        <h1 className="text-4xl font-bold">{form.title}</h1>

        {form.description && <p className="mt-3 text-muted-foreground">{form.description}</p>}

        <div className="mt-10">
          {form.fields.length === 0 ? (
            <div className="rounded-2xl border border-dashed p-10 text-center">
              <h2 className="text-xl font-semibold">No questions available</h2>

              <p className="mt-2 text-muted-foreground">
                This form has been published, but no questions have been added yet.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {form.fields.map((field) => (
                <div key={field.id} className="space-y-3">
                  <label className="font-medium">
                    {field.label}

                    {field.isRequired && <span className="ml-1 text-destructive">*</span>}
                  </label>

                  <RenderPublicField
                    field={field}
                    value={values[field.id] ?? ""}
                    onChange={(value) =>
                      setValues((prev) => ({
                        ...prev,
                        [field.id]: value,
                      }))
                    }
                  />

                  {field.description && (
                    <p className="text-sm text-muted-foreground">{field.description}</p>
                  )}
                </div>
              ))}

              <Button
                className="mt-10 w-full"
                onClick={handleSubmit}
                disabled={status === "pending"}
              >
                {status === "pending" ? "Submitting..." : "Submit Form"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
