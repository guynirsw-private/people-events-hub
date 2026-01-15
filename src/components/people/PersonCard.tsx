import { Link } from "react-router-dom";
import { Check, MoreVertical, Link2, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PersonTag } from "./PersonTag";
import type { Person } from "@/data/people";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-200 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-background">
            <AvatarImage src={person.avatar} alt={person.name} />
            <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">{person.name}</h3>
            <p className="text-sm text-muted-foreground">{person.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {person.verified && (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {person.tags.map((tag) => (
          <PersonTag key={tag} tag={tag} />
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {person.description}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Link2 className="h-3.5 w-3.5" />
            {person.connections} connections
          </span>
          <span className="flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" />
            {person.documents} docs
          </span>
        </div>
        <Link
          to={`/person/${person.id}`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
