import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActiveFiltersProps {
  category: string;
  onClearCategory: () => void;
}

export function ActiveFilters({ category, onClearCategory }: ActiveFiltersProps) {
  const categoryLabel = category === 'all' ? 'All People' : 
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Active filters:</span>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted rounded-full text-foreground">
          {categoryLabel}
          <button 
            onClick={onClearCategory}
            className="hover:bg-background rounded-full p-0.5"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted rounded-full text-foreground">
          Verified Only
          <button className="hover:bg-background rounded-full p-0.5">
            <X className="h-3 w-3" />
          </button>
        </span>
      </div>
    </div>
  );
}
