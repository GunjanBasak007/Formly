"use client";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError } from "~/components/ui/field";
import { useGetPublishedForm, useSubmitForm } from "~/hooks/api/form";

type FieldType = "TEXT" | "NUMBER" | "EMAIL" | "YES_NO" | "PASSWORD";

type FormField = {
  id: string;
  label: string;
  labelKey: string;
  type: FieldType; 
  description?: string | null;
  placeholder?: string | null;
  isRequired: boolean;
  index: number;
};

function FormFieldInput({
  field,
  register,
  setValue,
  watch,
  errors,
}: {
  field: FormField;
  register: ReturnType<typeof useForm>["register"];
  setValue: ReturnType<typeof useForm>["setValue"];
  watch: ReturnType<typeof useForm>["watch"];
  errors: Record<string, { message?: string }>;
}) {
  const rules = field.isRequired ? { required: `${field.label} is required` } : {};
  const error = errors[field.labelKey];

  if (field.type === "YES_NO") {
    const value = watch(field.labelKey) as string;
    return (
      <Field data-invalid={!!error}>
        <FieldLabel
            htmlFor={field.labelKey}
            className="text-sm font-semibold tracking-wide"
        >
            {field.label}

            {field.isRequired && (
              <span className="ml-1 text-violet-600">*</span>
            )}
          </FieldLabel>
        {field.description && <FieldDescription>{field.description}</FieldDescription>}
        <RadioGroup
          value={value}
          onValueChange={(val) => setValue(field.labelKey, val, { shouldValidate: true })}
          className="
            mt-3
            flex
            gap-8
            rounded-xl
            border
            border-border/60
            p-4
          "
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="yes" id={`${field.labelKey}_yes`} />
            <Label htmlFor={`${field.labelKey}_yes`}>Yes</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="no" id={`${field.labelKey}_no`} />
            <Label htmlFor={`${field.labelKey}_no`}>No</Label>
          </div>
        </RadioGroup>
        {error && <FieldError>{error.message}</FieldError>}
      </Field>
    );
  }

  const inputType: Record<Exclude<FieldType, "YES_NO">, string> = {
    TEXT: "text",
    NUMBER: "number",
    EMAIL: "email",
    PASSWORD: "password",
  };

  return (
    <Field data-invalid={!!error}>
      <FieldLabel
        htmlFor={field.labelKey}
        className="text-sm font-semibold tracking-wide"
      >
        {field.label}

        {field.isRequired && (
          <span className="ml-1 text-violet-600">*</span>
        )}
      </FieldLabel>
      {field.description && <FieldDescription>{field.description}</FieldDescription>}
      <Input
        id={field.labelKey}
        type={inputType[field.type as Exclude<FieldType, "YES_NO">]}
        placeholder={field.placeholder ?? undefined}
        aria-invalid={!!error}
        className="
          h-12
          rounded-xl
          border-border/60
          bg-background
          transition-all
          duration-300
          focus-visible:border-violet-500
          focus-visible:ring-2
          focus-visible:ring-violet-500/20
        "
        {...register(field.labelKey, rules)}
      />
      {error && <FieldError>{error.message}</FieldError>}
    </Field>
  );
}

export default function PublicFormPage({ params }: { params: Promise<{ form_id: string }> }) {
  const { form_id: formId } = use(params);
  const { form, isLoading } = useGetPublishedForm(formId);
  const { submitFormAsync } = useSubmitForm();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: Record<string, unknown>) => {
    if (!form) return;
    const values = form.fields
      .filter((field) => data[field.labelKey] !== undefined && data[field.labelKey] !== "")
      .map((field) => ({
        formFieldId: field.id,
        value: String(data[field.labelKey]),
      }));
    await submitFormAsync({ formId, values });
    setSubmitted(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading form...</p>
      </div>
    );
  }

  if (!form) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold">Form not found</h1>
          <p className="text-sm text-muted-foreground">This form does not exist or has been removed.</p>
        </div>
      </div>
    );
  }

  if (submitted) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-background to-cyan-50 dark:from-violet-950/20 dark:via-background dark:to-cyan-950/20 flex items-center justify-center px-4">
      <Card className="w-full max-w-lg rounded-3xl border-border/60 shadow-xl">
        <CardContent className="flex flex-col items-center px-10 py-12 text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight">
            Response Submitted
          </h1>

          <p className="mt-3 text-muted-foreground">
            Thank you for taking the time to complete this form.
            <br />
            Your response has been recorded successfully.
          </p>

          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500" />

          <p className="mt-6 text-xs text-muted-foreground">
            Powered by <span className="font-semibold">Formly</span>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
  const sortedFields = [...(form.fields ?? [])].sort(
    (a, b) => a.index - b.index
  );

  return (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 via-background to-cyan-50 dark:from-violet-950/20 dark:via-background dark:to-cyan-950/20 flex items-start justify-center px-4 py-16">
    <div className="w-full max-w-3xl">
      <Card className="rounded-3xl border-border/60 bg-background/90 shadow-xl backdrop-blur">
        <CardContent className="p-10">
          <div className="mb-10">
            <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-300">
              Powered by Formly
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight">
              {form.title}
            </h1>

            {form.description && (
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                        {form.description}
              </p>
            )}

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500" />
          </div>

          <form
            onSubmit={handleSubmit(
              onSubmit as Parameters<typeof handleSubmit>[0]
            )}
          >
            <FieldGroup>
              {sortedFields.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  This form has no fields yet.
                </p>
              ) : (
                sortedFields.map((field) => (
                  <FormFieldInput
                    key={field.id}
                    field={field as FormField}
                    register={register}
                    setValue={setValue}
                    watch={watch}
                    errors={
                      errors as Record<
                        string,
                        {
                          message?: string;
                        }
                      >
                    }
                  />
                ))
              )}
            </FieldGroup>

            {sortedFields.length > 0 && (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-8
                  h-12
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-indigo-600
                  to-cyan-500
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-lg
                  hover:shadow-violet-500/25
                "
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
  );
}
