import { ArrowRight, Users, Building2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const RelatedProducts = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Related API Endpoints
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Explore additional endpoints to power your product features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* People APIs */}
          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Users className="size-5 text-blue-600" />
                </div>
                <CardTitle>People APIs</CardTitle>
              </div>
              <CardDescription>
                Enrich and find people profiles with verified contact data.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium">Enrich People</div>
                    <div className="text-sm text-muted-foreground">Get full profile from LinkedIn URL</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">1 credit</div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium">Find People</div>
                    <div className="text-sm text-muted-foreground">Find person by name + company</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">1 credit</div>
                </div>
              </div>
              <Button asChild className="w-full mt-4" variant="outline">
                <a href="/products#people-enrich">
                  Explore People APIs <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Company APIs */}
          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Building2 className="size-5 text-purple-600" />
                </div>
                <CardTitle>Company APIs</CardTitle>
              </div>
              <CardDescription>
                Get comprehensive company data including firmographics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium">Enrich Company</div>
                    <div className="text-sm text-muted-foreground">Full company profile from LinkedIn</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">1 credit</div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium">Find Company</div>
                    <div className="text-sm text-muted-foreground">Find company by name or domain</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">1 credit</div>
                </div>
              </div>
              <Button asChild className="w-full mt-4" variant="outline">
                <a href="/products#company-enrich">
                  Explore Company APIs <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
