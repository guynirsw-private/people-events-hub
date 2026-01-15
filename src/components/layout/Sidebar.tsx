import { Search, Users, Briefcase, Mic2, FlaskConical, GraduationCap, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/people";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Users className="h-4 w-4" />,
  politicians: <Users className="h-4 w-4" />,
  business: <Briefcase className="h-4 w-4" />,
  media: <Mic2 className="h-4 w-4" />,
  scientists: <FlaskConical className="h-4 w-4" />,
  academics: <GraduationCap className="h-4 w-4" />,
};

const categoryColors: Record<string, string> = {
  all: "bg-category-all",
  politicians: "bg-category-politicians",
  business: "bg-category-business",
  media: "bg-category-media",
  scientists: "bg-category-scientists",
  academics: "bg-category-academics",
};

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Sidebar({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }: SidebarProps) {
  const [locationOpen, setLocationOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);

  return (
    <aside className="w-64 shrink-0 border-r border-border bg-sidebar overflow-y-auto scrollbar-thin">
      <div className="p-4 space-y-6">
        {/* Search */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
            Search
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search people..."
              className="pl-9 bg-card"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
            Categories
          </p>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-md text-primary-foreground ${categoryColors[category.id]}`}>
                    {categoryIcons[category.id]}
                  </div>
                  <span>{category.name}</span>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
            Filters
          </p>
          <div className="space-y-1">
            <Collapsible open={locationOpen} onOpenChange={setLocationOpen}>
              <CollapsibleTrigger asChild>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
                  <span>Location</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-3 py-2 space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  United States
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Europe
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  International
                </label>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={statusOpen} onOpenChange={setStatusOpen}>
              <CollapsibleTrigger asChild>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
                  <span>Verification Status</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${statusOpen ? 'rotate-180' : ''}`} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-3 py-2 space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Verified
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Pending
                </label>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={activityOpen} onOpenChange={setActivityOpen}>
              <CollapsibleTrigger asChild>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
                  <span>Activity Level</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activityOpen ? 'rotate-180' : ''}`} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-3 py-2 space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  High Activity
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Medium Activity
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Low Activity
                </label>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <Button variant="link" className="mt-4 px-3 text-primary text-sm h-auto p-0">
            Reset All Filters
          </Button>
        </div>
      </div>
    </aside>
  );
}
