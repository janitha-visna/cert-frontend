"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SystemSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  systems?: { id: string; name: string }[];
}

export function SystemSelect({
  value,
  onChange,
  systems = [
    { id: "iso9001", name: "ISO 9001" },
    { id: "iso14001", name: "ISO 14001" },
    { id: "iso27001", name: "ISO 27001" },
  ],
}: SystemSelectProps) {
  return (
    <div className="flex items-center gap-2">
      <Label className="whitespace-nowrap">System:</Label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select system" />
        </SelectTrigger>

        <SelectContent>
          {systems.map((system) => (
            <SelectItem key={system.id} value={system.id}>
              {system.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
