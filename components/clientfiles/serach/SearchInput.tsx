// components/clientfiles/search/SearchInput.tsx
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
}

export function SearchInput({ value, onChange, onClear }: SearchInputProps) {
  return (
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className="pl-8 pr-8"
      />

      {value && (
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={onClear}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
