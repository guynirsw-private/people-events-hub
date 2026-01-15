export interface Person {
  id: string;
  name: string;
  title: string;
  avatar: string;
  tags: string[];
  description: string;
  connections: number;
  documents: number;
  verified: boolean;
  category: 'politicians' | 'business' | 'media' | 'scientists' | 'academics';
  location?: string;
  email?: string;
  website?: string;
  bio?: string;
}

export const people: Person[] = [
  {
    id: "1",
    name: "Anthony Fauci",
    title: "NIAID Director",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    tags: ["Government", "Healthcare", "Science"],
    description: "American physician-scientist and immunologist serving as the director of the National Institute of Allergy and Infectious...",
    connections: 24,
    documents: 48,
    verified: true,
    category: "scientists",
    location: "Washington, D.C.",
    bio: "Anthony Stephen Fauci is an American physician-scientist and immunologist who served as the director of the National Institute of Allergy and Infectious Diseases from 1984 to 2022."
  },
  {
    id: "2",
    name: "Bill Gates",
    title: "Microsoft Co-founder",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    tags: ["Technology", "Philanthropy", "Healthcare"],
    description: "American business magnate, software developer, investor, author, and philanthropist. Co-founder of Microsoft...",
    connections: 156,
    documents: 289,
    verified: true,
    category: "business",
    location: "Seattle, WA",
    bio: "William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist."
  },
  {
    id: "3",
    name: "Nancy Pelosi",
    title: "Speaker of the House",
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face",
    tags: ["Politics", "Democrat"],
    description: "American politician serving as Speaker of the United States House of Representatives since 2019, and previously from 2007 to...",
    connections: 89,
    documents: 167,
    verified: true,
    category: "politicians",
    location: "San Francisco, CA",
    bio: "Nancy Patricia Pelosi is an American politician who served as the 52nd speaker of the United States House of Representatives."
  },
  {
    id: "4",
    name: "Klaus Schwab",
    title: "WEF Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    tags: ["Economics", "International"],
    description: "German engineer and economist best known as the founder and executive chairman of the World Economic Forum...",
    connections: 234,
    documents: 412,
    verified: true,
    category: "business",
    location: "Geneva, Switzerland",
    bio: "Klaus Martin Schwab is a German engineer and economist best known as the founder and executive chairman of the World Economic Forum."
  },
  {
    id: "5",
    name: "George Soros",
    title: "Investor & Philanthropist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    tags: ["Finance", "Philanthropy"],
    description: "Hungarian-American investor, business magnate, philanthropist, and author. Chairman of Soros Fund Management...",
    connections: 178,
    documents: 356,
    verified: true,
    category: "business",
    location: "New York, NY",
    bio: "George Soros is a Hungarian-American investor, business magnate, philanthropist, and author."
  },
  {
    id: "6",
    name: "Jeff Bezos",
    title: "Amazon Founder",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    tags: ["Technology", "E-commerce", "Media"],
    description: "American entrepreneur, media proprietor, investor, and commercial astronaut. Founder and executive chairman of Amazon...",
    connections: 267,
    documents: 523,
    verified: true,
    category: "business",
    location: "Seattle, WA",
    bio: "Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and commercial astronaut."
  },
  {
    id: "7",
    name: "Rachel Maddow",
    title: "MSNBC Host",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    tags: ["Media", "Politics"],
    description: "American television news program host and liberal political commentator. Host of The Rachel Maddow Show on MSNBC...",
    connections: 45,
    documents: 98,
    verified: true,
    category: "media",
    location: "New York, NY",
    bio: "Rachel Anne Maddow is an American television news program host and liberal political commentator."
  },
  {
    id: "8",
    name: "Christine Lagarde",
    title: "ECB President",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    tags: ["Finance", "International"],
    description: "French politician and lawyer serving as President of the European Central Bank since 2019. Former Managing Director of...",
    connections: 134,
    documents: 245,
    verified: true,
    category: "politicians",
    location: "Frankfurt, Germany",
    bio: "Christine Madeleine Odette Lagarde is a French politician and lawyer serving as President of the European Central Bank."
  },
  {
    id: "9",
    name: "Mark Zuckerberg",
    title: "Meta CEO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    tags: ["Technology", "Social Media"],
    description: "American media magnate, internet entrepreneur, and philanthropist. Co-founder and CEO of Meta Platforms...",
    connections: 312,
    documents: 487,
    verified: true,
    category: "business",
    location: "Palo Alto, CA",
    bio: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist."
  },
  {
    id: "10",
    name: "Dr. Jane Smith",
    title: "Research Scientist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    tags: ["Science", "Healthcare"],
    description: "Leading researcher in molecular biology and genetics. Published over 200 peer-reviewed papers...",
    connections: 56,
    documents: 123,
    verified: true,
    category: "scientists",
    location: "Boston, MA",
    bio: "Dr. Jane Smith is a leading researcher in molecular biology and genetics with over two decades of experience."
  },
  {
    id: "11",
    name: "Prof. Michael Chen",
    title: "Economics Professor",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    tags: ["Economics", "Education"],
    description: "Distinguished professor of economics at Harvard University. Expert in macroeconomic policy...",
    connections: 78,
    documents: 156,
    verified: true,
    category: "academics",
    location: "Cambridge, MA",
    bio: "Professor Michael Chen is a distinguished professor of economics specializing in macroeconomic policy."
  },
  {
    id: "12",
    name: "Sarah Johnson",
    title: "CNN Anchor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    tags: ["Media", "Politics"],
    description: "Award-winning journalist and news anchor. Former White House correspondent...",
    connections: 89,
    documents: 134,
    verified: true,
    category: "media",
    location: "Atlanta, GA",
    bio: "Sarah Johnson is an award-winning journalist and news anchor with extensive experience in political reporting."
  },
];

export const categories = [
  { id: "all", name: "All People", count: 847, color: "all" },
  { id: "politicians", name: "Politicians", count: 324, color: "politicians" },
  { id: "business", name: "Business Leaders", count: 189, color: "business" },
  { id: "media", name: "Media", count: 156, color: "media" },
  { id: "scientists", name: "Scientists", count: 98, color: "scientists" },
  { id: "academics", name: "Academics", count: 80, color: "academics" },
] as const;
