"use client";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import { ShareFormDialog } from "~/components/forms/share-form-dialog";
import { SiteHeader } from "~/components/site-header";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Link from "next/link";
import {
  MoreHorizontal,
  PencilIcon,
  Trash2,
  FileText,
  Calendar,
  MessageSquare,
  Share2,
} from "lucide-react";

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import {
  useCreateForm,
  useDeleteForm,
  useListForms,
} from "~/hooks/api/form";
import { useListFormsWithResponseStats } from "~/hooks/api/response";

type CreateFormValues = {
  title: string;
  description: string;
};

export default function FormsPage() {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const [selectedForm, setSelectedForm] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const { createFormAsync, isError, error } = useCreateForm();
  const { deleteFormAsync } = useDeleteForm();

  const { forms, isLoading } = useListForms();
  const { forms: statsForms } = useListFormsWithResponseStats();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<CreateFormValues> = async (values) => {
    await createFormAsync({
      title: values.title,
      description: values.description || undefined,
    });

    reset();
    setOpen(false);
  };

  const responseStats = new Map(
    (statsForms ?? []).map((form) => [
      form.id,
      form.responseCount,
    ])
  );

  return (
  <>
  <div className="flex flex-col gap-8 p-8">
    <SiteHeader
      title="Forms"
      description="Create, organize and monitor all your forms."
      action={
        <Button
            onClick={() => setOpen(true)}
            className="
              rounded-xl
              bg-linear-to-r
              from-violet-600
              via-indigo-600
              to-cyan-500
              text-white
              shadow-lg
              transition-colors
              duration-300
              hover:scale-105
              hover:shadow-violet-500/25
            "
          >
          <Plus className="mr-2 h-4 w-4" />
          Create Form
        </Button>
      }
    />

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg ring-1 ring-border/40 transition-all duration-300 hover:shadow-xl">
        <Table>
          <TableHeader className="bg-violet-50/60 dark:bg-violet-950/20">
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  Form
                </div>
              </TableHead>

              <TableHead>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Created
                </div>
              </TableHead>

              <TableHead>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  Responses
                </div>
              </TableHead>
              <TableHead className="w-16" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-24 text-center text-muted-foreground"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : !forms || forms.length === 0 ? (
              <TableRow>
                <TableRow>
                  <TableCell colSpan={4} className="py-16">
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/30">
                        <FileText className="h-8 w-8" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          No forms yet
                      </h3>

                        <p className="mt-2 text-muted-foreground">
                          Create your first form to start collecting responses.
                        </p>
                      </div>

                      <Button
                        onClick={() => setOpen(true)}
                        className="
                          rounded-xl
                          bg-linear-to-r
                          from-violet-600
                          via-indigo-600
                          to-cyan-500
                        "
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Create Form
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableRow>
            ) : (
              forms.map((form) => (
                <TableRow
                  key={form.id}
                  className="
                    group
                    transition-all
                    duration-300
                    hover:bg-violet-50/60
                    dark:hover:bg-violet-950/20
                    hover:shadow-sm
                    hover:translate-x-1
                  "
                >
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold text-foreground transition-colors group-hover:text-violet-600">
                        {form.title}
                      </span>

                     <span className="italic text-muted-foreground/70">
                        {form.description?.trim() || "No description provided"}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-sm whitespace-nowrap text-muted-foreground">
                    {form.createdAt
                      ? new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(form.createdAt))
                      : "—"}
                  </TableCell>

                  <TableCell>
                    <Link
                      href={`/dashboard/forms/${form.id}/submissions`}
                      className="
                        font-medium
                        text-violet-600
                        transition-all
                        hover:text-violet-700
                        hover:underline
                        "
                    >
                      {responseStats.get(form.id) ?? 0}
                    </Link>
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="
                            opacity-70
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            hover:bg-violet-100
                            dark:hover:bg-violet-900/30
                          "
                        >
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">
                            Open menu
                          </span>
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        className="w-48 rounded-xl border-border/60 shadow-xl"
                      >
                        <DropdownMenuItem
                          onSelect={(e) => e.preventDefault()}
                          asChild
                        >
                          <Link href={`/dashboard/forms/${form.id}`}>
                            <PencilIcon className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={() => {
                                  setSelectedForm({
                                  id: form.id,
                                  title: form.title,
                                  });

                                  setShareDialogOpen(true);
                                }}
                              >
                                <Share2 className="mr-2 h-4 w-4" />
                                Share Form
                              </DropdownMenuItem>

                        <DropdownMenuItem
                          onSelect={(e) => e.preventDefault()}
                          asChild
                        >
                          <Link
                            href={`/dashboard/forms/${form.id}/submissions`}
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            Responses
                          </Link>
                        </DropdownMenuItem>

                          <DropdownMenuSeparator />

                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedForm({
                              id: form.id,
                              title: form.title,
                            });

                            setDeleteOpen(true);
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-3xl border-border/60 bg-background shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              Create a new form
            </DialogTitle>

            <p className="text-sm text-muted-foreground">
              Give your form a name and an optional description.
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>

                <Input
                className="rounded-xl"
                  id="title"
                  placeholder="e.g. Customer Feedback"
                  {...register("title", {
                    required: true,
                    maxLength: 55,
                  })}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="description">
                  Description
                </FieldLabel>

                <Textarea
                  className="min-h-28 rounded-xl resize-none"
                  id="description"
                  placeholder="What is this form for? (optional)"
                  {...register("description", {
                    maxLength: 300,
                  })}
                />
              </Field>

              {isError && (
                <p className="text-sm text-destructive">
                  {error?.message}
                </p>
              )}
            </FieldGroup>

            <DialogFooter className="mt-4">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
                onClick={() => {
                  reset();
                  setOpen(false);
                }}
              >
                Cancel
              </Button>

              <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    rounded-xl
                    bg-linear-to-r
                    from-violet-600
                    via-indigo-600
                    to-cyan-500
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-lg
                    hover:shadow-violet-500/20
                  "
                >
                {isSubmitting
                  ? "Creating..."
                  : "Create Form"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      >
        <DialogContent className="rounded-3xl border-border/60 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Delete Form
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete{" "}
            <span className="font-semibold">
              {selectedForm?.title}
            </span>
            ?
            <br />
            This action cannot be undone. All fields and
            responses will be permanently deleted.
          </p>

          <DialogFooter>
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => {
                setDeleteOpen(false);
                setSelectedForm(null);
              }}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              className="rounded-xl"
              onClick={async () => {
                if (!selectedForm) return;

                await deleteFormAsync({
                  formId: selectedForm.id,
                });

                setDeleteOpen(false);
                setSelectedForm(null);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <ShareFormDialog
        open={shareDialogOpen}
        onOpenChange={setShareDialogOpen}
        form={selectedForm}
    />
  </>
);
}