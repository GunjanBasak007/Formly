export type FieldType =
  | "TEXT"
  | "NUMBER"
  | "EMAIL"
  | "YES_NO"
  | "PASSWORD";

export type FieldRow = {
  id: string;
  label: string;
  labelKey: string;
  type: FieldType;
  description?: string | null;
  placeholder?: string | null;
  isRequired: boolean;
  index: number;
};