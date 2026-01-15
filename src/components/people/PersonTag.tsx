interface PersonTagProps {
  tag: string;
}

const tagStyles: Record<string, { bg: string; text: string }> = {
  Government: { bg: "bg-tag-government", text: "text-tag-government-text" },
  Healthcare: { bg: "bg-tag-healthcare", text: "text-tag-healthcare-text" },
  Science: { bg: "bg-tag-science", text: "text-tag-science-text" },
  Technology: { bg: "bg-tag-technology", text: "text-tag-technology-text" },
  Philanthropy: { bg: "bg-tag-philanthropy", text: "text-tag-philanthropy-text" },
  Politics: { bg: "bg-tag-politics", text: "text-tag-politics-text" },
  Democrat: { bg: "bg-tag-politics", text: "text-tag-politics-text" },
  Economics: { bg: "bg-tag-economics", text: "text-tag-economics-text" },
  Finance: { bg: "bg-tag-finance", text: "text-tag-finance-text" },
  Media: { bg: "bg-tag-media", text: "text-tag-media-text" },
  "E-commerce": { bg: "bg-tag-ecommerce", text: "text-tag-ecommerce-text" },
  "Social Media": { bg: "bg-tag-social", text: "text-tag-social-text" },
  International: { bg: "bg-tag-international", text: "text-tag-international-text" },
  Education: { bg: "bg-tag-science", text: "text-tag-science-text" },
};

export function PersonTag({ tag }: PersonTagProps) {
  const style = tagStyles[tag] || { bg: "bg-muted", text: "text-muted-foreground" };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
    >
      {tag}
    </span>
  );
}
