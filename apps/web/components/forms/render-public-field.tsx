"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

type Props = {
  field: {
    id: string;
    label: string;
    type: string;
    placeholder?: string | null;
    isRequired: boolean;
  };

  value: string;

  onChange: (value: string) => void;
};

export function RenderPublicField({
  field,
  value,
  onChange,
}: Props) {
  switch (field.type) {
    case "TEXT":
      return (
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
          required={field.isRequired}
        />
      );

    case "EMAIL":
      return (
        <Input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
          required={field.isRequired}
        />
      );

    case "NUMBER":
      return (
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
          required={field.isRequired}
        />
      );

    case "PASSWORD":
      return (
        <Input
          type="password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
          required={field.isRequired}
        />
      );

    case "YES_NO":
      return (
        <div className="flex items-center gap-3 rounded-lg border p-4">
          <Switch
            checked={value === "true"}
            onCheckedChange={(checked) =>
              onChange(String(checked))
            }
          />

          <Label>Yes</Label>
        </div>
      );

    default:
      return (
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
          required={field.isRequired}
        />
      );
  }
}