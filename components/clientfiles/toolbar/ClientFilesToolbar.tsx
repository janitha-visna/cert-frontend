"use client";


import { SearchInput } from "../serach/SearchInput";
import { SystemSelect } from "./SystemSelect";
import { SchemaSelect } from "./SchemaSelect";
import { Label } from "@radix-ui/react-label";
import { MobileFilterDrawer } from "../serach/MobileSearchDrawer";


interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  system?: string;
  schema?: string;
  onSystemChange?: (v: string | undefined) => void; // allow undefined
  onSchemaChange?: (v: string | undefined) => void; // allow undefined
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
    <>
      {/* Desktop Toolbar */}
      <div className="hidden sm:flex items-center gap-2 flex-wrap">
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

      {/* Mobile Drawer */}
      <MobileFilterDrawer
        search={search}
        onSearchChange={onSearchChange}
        system={system}
        schema={schema}
        onSystemChange={onSystemChange}
        onSchemaChange={onSchemaChange}
      />
    </>
  );
}

