"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SchemaSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  schemas?: { id: string; name: string }[];
}

export function SchemaSelect({
  value,
  onChange,
  schemas = [
    { id: "all", name: "All Schemas" },
    { id: "qms", name: "QMS" },
    { id: "ems", name: "EMS" },
    { id: "ohsms", name: "OHSMS" },
  ],
}: SchemaSelectProps) {
  return (
    <div className="flex items-center gap-2">
      <Label className="whitespace-nowrap">Schema:</Label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select schema" />
        </SelectTrigger>

        <SelectContent>
          {schemas.map((schema) => (
            <SelectItem key={schema.id} value={schema.id}>
              {schema.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
