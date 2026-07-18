"use client";
import { SortableFieldCard } from "~/components/form-builder/SortableFieldCard";

import { use, useEffect, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { PlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { useGetFields, useCreateField, useUpdateField, useDeleteField, useGetForm,
  useUpdatePublishStatus, useUpdateFieldOrder, } from "~/hooks/api/form";

import {
  DndContext,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import type { FieldRow } from "~/components/form-builder/types";

const FIELD_TYPES = ["TEXT", "NUMBER", "EMAIL", "YES_NO", "PASSWORD"] as const;
type FieldType = (typeof FIELD_TYPES)[number];

const FIELD_TYPE_LABELS: Record<FieldType, string> = {
  TEXT: "Text",
  NUMBER: "Number",
  EMAIL: "Email",
  YES_NO: "Yes / No",
  PASSWORD: "Password",
};

type FieldFormValues = {
  label: string;
  type: FieldType;
  description: string;
  placeholder: string;
  isRequired: boolean;
};



const DEFAULT_VALUES: FieldFormValues = {
  label: "",
  type: "TEXT",
  description: "",
  placeholder: "",
  isRequired: false,
};

function FieldForm({
  onSubmit,
  isSubmitting,
  defaultValues,
  onCancel,
  submitLabel,
}: {
  onSubmit: SubmitHandler<FieldFormValues>;
  isSubmitting: boolean;
  defaultValues: FieldFormValues;
  onCancel: () => void;
  submitLabel: string;
}) {
  const { register, handleSubmit, control, watch, reset } = useForm<FieldFormValues>({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const type = watch("type");
  const hasPlaceholder = type !== "YES_NO";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="label">Label</FieldLabel>
          <Input
            id="label"
            placeholder="e.g. Full Name"
            {...register("label", { required: true, maxLength: 100 })}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="type">Type</FieldLabel>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="type" className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {FIELD_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {FIELD_TYPE_LABELS[t]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            id="description"
            placeholder="Helper text shown below the field (optional)"
            {...register("description")}
          />
        </Field>

        {hasPlaceholder && (
          <Field>
            <FieldLabel htmlFor="placeholder">Placeholder</FieldLabel>
            <Input
              id="placeholder"
              placeholder="e.g. Enter your name"
              {...register("placeholder")}
            />
          </Field>
        )}

        <div className="flex items-center gap-2">
          <Controller
            name="isRequired"
            control={control}
            render={({ field }) => (
              <Checkbox id="isRequired" checked={field.value} onCheckedChange={field.onChange} />
            )}
          />
          <Label htmlFor="isRequired" className="text-sm font-medium">
            Required field
          </Label>
        </div>
      </FieldGroup>

      <DialogFooter className="mt-6">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : submitLabel}
        </Button>
      </DialogFooter>
    </form>
  );
}

export default function FormBuilderPage({ params }: { params: Promise<{ id: string }> }) {
  // TODO: Debug this line
  const { id: formId } = use(params);

  const { form } = useGetForm(formId);
  const { updatePublishStatusAsync } = useUpdatePublishStatus();

  const { fields, isLoading } = useGetFields(formId);
  const { createFieldAsync, isError: isCreateError, error: createError } = useCreateField(formId);
  const { updateFieldAsync } = useUpdateField(formId);
  const { deleteFieldAsync } = useDeleteField(formId);
  const { updateFieldOrderAsync } = useUpdateFieldOrder(formId);

  const [createOpen, setCreateOpen] = useState(false);
  const [editingField, setEditingField] = useState<FieldRow | null>(null);
  const [orderedFields, setOrderedFields] = useState<FieldRow[]>([]);

  useEffect(() => {
      if (fields) {
        setOrderedFields(fields as FieldRow[]);
    }
  }, [fields]);


  const handleCreate: SubmitHandler<FieldFormValues> = async (values) => {
    await createFieldAsync({
      formId,
      label: values.label,
      type: values.type,
      description: values.description || undefined,
      placeholder: values.placeholder || undefined,
      isRequired: values.isRequired,
    });
    setCreateOpen(false);
  };

  const handleUpdate: SubmitHandler<FieldFormValues> = async (values) => {
    if (!editingField) return;
    await updateFieldAsync({
      fieldId: editingField.id,
      label: values.label,
      type: values.type,
      description: values.description || null,
      placeholder: values.placeholder || null,
      isRequired: values.isRequired,
    });
    setEditingField(null);
  };

  const handleDelete = async (fieldId: string) => {
    await deleteFieldAsync({ fieldId });
  };

  const handlePublish = async () => {
  if (!form) return;

  await updatePublishStatusAsync({
    formId,
    isPublished: !form.isPublished,
  });
};

const handleDragEnd = async (event: DragEndEvent) => {
  const { active, over } = event;

  if (!over) return;

  if (active.id === over.id) return;

  const oldIndex = orderedFields.findIndex(
    (field) => field.id === active.id,
  );

  const newIndex = orderedFields.findIndex(
    (field) => field.id === over.id,
  );

  const reorderedFields = arrayMove(
    orderedFields,
    oldIndex,
    newIndex,
  );

  // Update the UI immediately
  setOrderedFields(reorderedFields);

  // Save the new order in the database
  await updateFieldOrderAsync({
    fields: reorderedFields.map((field, index) => ({
      id: field.id,
      index,
    })),
  });
};
  return (
    <div className="p-6 flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Form Builder</h1>

          {form && (
            <Badge
             variant={form.isPublished ? "default" : "secondary"}
            className="mt-2"
          >
          {form.isPublished ? "Published" : "Draft"}
      </Badge>
    )}
</div>

  <div className="flex gap-2">
    <Button
      variant={form?.isPublished ? "destructive" : "default"}
      onClick={handlePublish}
    >
      {form?.isPublished ? "Unpublish" : "Publish"}
    </Button>

    <Button onClick={() => setCreateOpen(true)}>
      <PlusIcon className="size-4" />
      Add Field
    </Button>
  </div>
</div>

<DndContext onDragEnd={handleDragEnd}>
  <SortableContext
    items={orderedFields.map((field) => field.id)}
    strategy={verticalListSortingStrategy}
  >
    <div className="flex flex-col gap-3">
      {isLoading ? (
        <p className="text-sm text-muted-foreground">
          Loading fields...
        </p>
      ) : !orderedFields.length ? (
        <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
          No fields yet. Add your first field.
        </div>
      ) : (
      orderedFields.map((field) => (
          <SortableFieldCard
            key={field.id}
            field={field}
            onEdit={setEditingField}
            onDelete={handleDelete}
        />
      ))
  )}
    </div>
  </SortableContext>
</DndContext>
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add field</DialogTitle>
          </DialogHeader>
          {isCreateError && <p className="text-sm text-destructive">{createError?.message}</p>}
          <FieldForm
            defaultValues={DEFAULT_VALUES}
            onSubmit={handleCreate}
            isSubmitting={false}
            onCancel={() => setCreateOpen(false)}
            submitLabel="Add Field"
          />
        </DialogContent>
      </Dialog>

      {/* Edit field modal */}
      <Dialog
        open={!!editingField}
        onOpenChange={(open) => {
          if (!open) setEditingField(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit field</DialogTitle>
          </DialogHeader>
          {editingField && (
            <FieldForm
              defaultValues={{
                label: editingField.label,
                type: editingField.type,
                description: editingField.description ?? "",
                placeholder: editingField.placeholder ?? "",
                isRequired: editingField.isRequired,
              }}
              onSubmit={handleUpdate}
              isSubmitting={false}
              onCancel={() => setEditingField(null)}
              submitLabel="Save Changes"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
