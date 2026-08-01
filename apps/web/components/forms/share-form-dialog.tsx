"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  form: {
    id: string;
    title: string;
  } | null;
};

export function ShareFormDialog({
  open,
  onOpenChange,
  form,
}: Props) {
  const [copied, setCopied] = useState(false);

  const url =
    form == null
      ? ""
      : `${window.location.origin}/f/${form.id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      toast.success("Link copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);

      toast.error("Failed to copy link");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="rounded-3xl">
        <DialogHeader>
          <DialogTitle>
            Share Form
          </DialogTitle>

          <p className="text-sm text-muted-foreground">
            Anyone with this link can fill out your form.
          </p>
        </DialogHeader>

        <Input
          readOnly
          value={url}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>

          <Button
            onClick={handleCopy}
            disabled={copied}
          >
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}