import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SearchInput() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full sm:w-64">
      {/* Search icon */}
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />

      {/* Input */}
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="pl-8 pr-8"
      />

      {/* Clear button */}
      {value && (
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={() => setValue("")}
          className="
            absolute right-1 top-1/2 -translate-y-1/2
            h-6 w-6
            text-muted-foreground
            hover:text-foreground
          "
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
