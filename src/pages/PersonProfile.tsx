import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Mail, Globe, Link2, FileText, Share2, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { PersonTag } from "@/components/people/PersonTag";
import { people } from "@/data/people";

export default function PersonProfile() {
  const { id } = useParams();
  const person = people.find((p) => p.id === id);

  if (!person) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Person Not Found</h1>
            <p className="text-muted-foreground mb-4">The person you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Back to Directory</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Directory
        </Link>

        {/* Profile Header */}
        <div className="bg-card rounded-xl border border-border p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Avatar className="h-28 w-28 ring-4 ring-background shadow-lg">
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback className="text-2xl">{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl font-bold text-foreground">{person.name}</h1>
                    {person.verified && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">{person.title}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {person.tags.map((tag) => (
                  <PersonTag key={tag} tag={tag} />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {person.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {person.location}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Link2 className="h-4 w-4" />
                  {person.connections} connections
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="h-4 w-4" />
                  {person.documents} documents
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {person.bio || person.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Activity item {item}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {person.email && (
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${person.email}`} className="text-primary hover:underline">
                      {person.email}
                    </a>
                  </div>
                )}
                {person.website && (
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {person.website}
                    </a>
                  </div>
                )}
                {!person.email && !person.website && (
                  <p className="text-sm text-muted-foreground">No contact information available.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((doc) => (
                    <div
                      key={doc}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Document {doc}</p>
                        <p className="text-xs text-muted-foreground">PDF • 2.4 MB</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
