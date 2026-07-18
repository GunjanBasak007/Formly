"use client";
import { Move } from "lucide-react";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import type { FieldRow } from "./types";

const FIELD_TYPE_LABELS = {
  TEXT: "Text",
  NUMBER: "Number",
  EMAIL: "Email",
  YES_NO: "Yes / No",
  PASSWORD: "Password",
} as const;

type Props = {
  field: FieldRow;
  onEdit: (field: FieldRow) => void;
  onDelete: (fieldId: string) => void;
};

export function SortableFieldCard({
  field,
  onEdit,
  onDelete,
}: Props) {
    const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
} = useSortable({
  id: field.id,
});

const style = {
  transform: CSS.Transform.toString(transform),
  transition,
};

return (
<div
  ref={setNodeRef}
    style={style}
     className="flex items-start justify-between gap-4 rounded-lg border bg-card p-4">
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-sm">
            {field.label}
          </span>

          <Badge variant="outline" className="text-xs">
            {FIELD_TYPE_LABELS[field.type]}
          </Badge>

          {field.isRequired && (
            <Badge
              variant="secondary"
              className="text-xs"
            >
              Required
            </Badge>
          )}
        </div>

        {field.description && (
          <p className="text-xs text-muted-foreground truncate">
            {field.description}
          </p>
        )}

        <p className="text-xs text-muted-foreground/60 font-mono">
          {field.labelKey}
        </p>
      </div>

      <div className="flex items-center gap-1 shrink-0">

        
        <Button
          variant="ghost"
          size="icon"
          {...attributes}
          {...listeners}
        >
          <Move className="size-4" />
          <span className="sr-only">
            Move {field.label}
          </span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(field)}
        >
          <PencilIcon className="size-4" />
          <span className="sr-only">
            Edit {field.label}
          </span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive"
          onClick={() => onDelete(field.id)}
        >
          <Trash2Icon className="size-4" />
          <span className="sr-only">
            Delete {field.label}
          </span>
        </Button>
      </div>
    </div>
  );
}