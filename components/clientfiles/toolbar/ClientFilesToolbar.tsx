"use client";


import { SearchInput } from "../serach/SearchInput";
import { SystemSelect } from "./SystemSelect";
import { SchemaSelect } from "./SchemaSelect";
import { Label } from "@radix-ui/react-label";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  system?: string;
  schema?: string;
  onSystemChange?: (v: string) => void;
  onSchemaChange?: (v: string) => void;
}

export function ClientFilesToolbar({
  search,
  onSearchChange,
  system,
  schema,
  onSystemChange,
  onSchemaChange,
}: Props) {
  return (
    <div
      className="flex
        flex-col
        items-start
        gap-2
        sm:flex-row
        sm:items-center
        sm:flex-wrap"
    >
      {/* 🔍 Search label + input */}
      <div className="flex items-center gap-2">
        <Label className="whitespace-nowrap text-sm font-semibold">
          Search:
        </Label>

        <SearchInput
          value={search}
          onChange={onSearchChange}
          onClear={() => onSearchChange("")}
        />
      </div>

      <SystemSelect value={system} onChange={onSystemChange} />
      <SchemaSelect value={schema} onChange={onSchemaChange} />
    </div>
  );
}
