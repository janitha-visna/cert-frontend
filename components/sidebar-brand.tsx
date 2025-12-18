// components/sidebar-brand.tsx
import { Building2 } from "lucide-react";

export function SidebarBrand() {
  return (
    <div className="flex h-14 items-center gap-2 px-3">
      <Building2 className="h-5 w-5 text-primary" />
      <span className="text-sm font-semibold truncate">CeyCert (Pvt) Ltd</span>
    </div>
  );
}
