"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Link from "next/link";
import {
  MoreHorizontal,
  PencilIcon,
  Trash2,
} from "lucide-react";
import { Button } from "~/components/ui/button";
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
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { useCreateForm, useListForms,useDeleteForm } from "~/hooks/api/form";

type CreateFormValues = {
  title: string;
  description: string;
};

export default function FormsPage() {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<{
        id: string;
        title: string;
    } | null>(null);
  const { createFormAsync, isError, error } = useCreateForm();
  const { deleteFormAsync } = useDeleteForm();
  const { forms, isLoading } = useListForms();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateFormValues>({
    defaultValues: { title: "", description: "" },
  });

  const onSubmit: SubmitHandler<CreateFormValues> = async (values) => {
    await createFormAsync({
      title: values.title,
      description: values.description || undefined,
    });
    reset();
    setOpen(false);
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Forms</h1>
        <Button onClick={() => setOpen(true)}>Create Form</Button>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-16" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  Loading...
                </TableCell>
              </TableRow>
            ) : !forms || forms.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No forms yet. Create your first one.
                </TableCell>
              </TableRow>
            ) : (
              forms.map((form) => (
                <TableRow key={form.id}>
                  <TableCell className="font-medium">{form.title}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {form.description ?? "—"}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {form.createdAt ? new Date(form.createdAt).toLocaleDateString() : "—"}
                  </TableCell>
                  <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new form</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  placeholder="e.g. Customer Feedback"
                  {...register("title", { required: true, maxLength: 55 })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  placeholder="What is this form for? (optional)"
                  {...register("description", { maxLength: 300 })}
                />
              </Field>
              {isError && (
                <p className="text-sm text-destructive">{error?.message}</p>
              )}
            </FieldGroup>

            <DialogFooter className="mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => { reset(); setOpen(false); }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Form"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>


      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Form</DialogTitle>
                </DialogHeader>

                <p className="text-sm text-muted-foreground">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold">
                    {selectedForm?.title}
                  </span>
                  ?
                  <br />
                  This action cannot be undone. All fields and responses
                  will be permanently deleted.
                </p>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setDeleteOpen(false);
                      setSelectedForm(null);
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="destructive"
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
  );
}
