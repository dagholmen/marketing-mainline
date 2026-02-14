import { ArrowRight, Users, Building2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const DiscoveryRelatedProducts = () => {
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
          {/* Discovery APIs */}
          <Card className="bg-background/50 backdrop-blur-sm border-border/50 md:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Search className="size-5 text-green-600" />
                </div>
                <CardTitle>Discovery APIs</CardTitle>
              </div>
              <CardDescription>
                Search and discover people and companies at scale.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col justify-between p-4 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium mb-1">People Search</div>
                    <div className="text-sm text-muted-foreground mb-3">Sales Navigator compatible search</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded w-fit">5 credits</div>
                </div>
                <div className="flex flex-col justify-between p-4 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium mb-1">Company Search</div>
                    <div className="text-sm text-muted-foreground mb-3">Sales Navigator compatible search</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded w-fit">5 credits</div>
                </div>
                <div className="flex flex-col justify-between p-4 rounded-lg border bg-card/50">
                  <div>
                    <div className="font-medium mb-1">Find Employees</div>
                    <div className="text-sm text-muted-foreground mb-3">List all employees at a company</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded w-fit">5 credits</div>
                </div>
              </div>
              <Button asChild className="w-full mt-4" variant="outline">
                <a href="/products#people-search">
                  Explore Discovery APIs <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
