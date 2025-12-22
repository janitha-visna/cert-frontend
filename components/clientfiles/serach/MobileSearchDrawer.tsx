"use client";

import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { SearchInput } from "../serach/SearchInput";
import { SystemSelect } from "../toolbar/SystemSelect";
import { SchemaSelect } from "../toolbar/SchemaSelect";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  system?: string;
  schema?: string;
  onSystemChange?: (v: string | undefined) => void;
  onSchemaChange?: (v: string | undefined) => void;
  onApply?: () => void; // optional apply callback
}

export function MobileFilterDrawer({
  search,
  onSearchChange,
  system,
  schema,
  onSystemChange,
  onSchemaChange,
  onApply,
}: Props) {
  // Local state for drawer inputs
  const [localSearch, setLocalSearch] = useState(search);
  const [localSystem, setLocalSystem] = useState<string | undefined>(system);
  const [localSchema, setLocalSchema] = useState<string | undefined>(schema);

  // Sync parent changes when props change
  useEffect(() => {
    setLocalSearch(search);
    setLocalSystem(system);
    setLocalSchema(schema);
  }, [search, system, schema]);

  // Apply filters
  const handleApply = () => {
    onSearchChange(localSearch);
    onSystemChange?.(localSystem);
    onSchemaChange?.(localSchema);
    onApply?.();
  };

  // Clear filters
  const handleClear = () => {
    setLocalSearch("");
    setLocalSystem(undefined);
    setLocalSchema(undefined);
    onSearchChange("");
    onSystemChange?.(undefined);
    onSchemaChange?.(undefined);
  };

  return (
    <Drawer>
      {/* Trigger button for mobile only */}
      <DrawerTrigger asChild>
        <Button variant="outline" className="sm:hidden w-full">
          Search & Filters
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bottom-0 h-[80vh] p-4">
        <DrawerHeader>
          <DrawerTitle>Search & Filters</DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-4 mt-4">
          {/* Search Input */}
          <div className="flex flex-col gap-1">
            <Label className="font-semibold">Search</Label>
            <SearchInput
              value={localSearch}
              onChange={setLocalSearch}
              onClear={() => setLocalSearch("")}
            />
          </div>

          {/* System Select */}
          <div className="flex flex-col gap-1">
            <Label className="font-semibold">System</Label>
            <SystemSelect value={localSystem} onChange={setLocalSystem} />
          </div>

          {/* Schema Select */}
          <div className="flex flex-col gap-1">
            <Label className="font-semibold">Schema</Label>
            <SchemaSelect value={localSchema} onChange={setLocalSchema} />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            <Button className="flex-1" onClick={handleApply}>
              Apply
            </Button>
            <Button variant="outline" className="flex-1" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
