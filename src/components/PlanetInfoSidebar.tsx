import { Planet, celestialEvents } from "@/data/planetData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Calendar, History, Sparkles } from "lucide-react";

interface PlanetInfoSidebarProps {
  planet: Planet | null;
}

export default function PlanetInfoSidebar({ planet }: PlanetInfoSidebarProps) {
  if (!planet) {
    return (
      <Card className="h-full bg-card/95 backdrop-blur border-border p-6">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Globe className="w-16 h-16 mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-semibold mb-2">Select a Planet</h3>
          <p className="text-muted-foreground">Click on any planet to view detailed information</p>
        </div>
      </Card>
    );
  }

  const relatedEvents = celestialEvents.filter(event => 
    event.planets?.includes(planet.id)
  );

  return (
    <Card className="h-full bg-card/95 backdrop-blur border-border">
      <ScrollArea className="h-full">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: planet.color }}>
                {planet.name}
              </h2>
              <Badge variant="secondary" className="text-sm">
                {planet.type}
              </Badge>
            </div>
            <div
              className="w-16 h-16 rounded-full shadow-lg"
              style={{
                backgroundColor: planet.color,
                boxShadow: `0 0 30px ${planet.color}80`
              }}
            />
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">
                <Globe className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="status">
                <Sparkles className="w-4 h-4 mr-2" />
                Status
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="w-4 h-4 mr-2" />
                History
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <p className="text-foreground/90">{planet.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Diameter</p>
                  <p className="font-semibold">{planet.diameter}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Mass</p>
                  <p className="font-semibold">{planet.mass}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Distance from Sun</p>
                  <p className="font-semibold">{planet.distanceFromSun}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="font-semibold">{planet.temperature}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Orbital Period</p>
                  <p className="font-semibold">{planet.orbitalPeriod}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Rotation Period</p>
                  <p className="font-semibold">{planet.rotationPeriod}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Moons</p>
                  <p className="font-semibold">{planet.moons}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Composition</p>
                  <p className="font-semibold text-sm">{planet.composition}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="status" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Current Status</h4>
                <p className="text-foreground/90">{planet.currentStatus}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Discovery</h4>
                <p className="text-foreground/90">{planet.discovered}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Fun Facts</h4>
                <ul className="space-y-2">
                  {planet.funFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-foreground/90 text-sm">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Historical Overview</h4>
                <p className="text-foreground/90">{planet.history}</p>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              {relatedEvents.length > 0 ? (
                <div className="space-y-3">
                  {relatedEvents.map(event => (
                    <Card key={event.id} className="p-4 bg-muted/50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{event.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                      <p className="text-sm text-foreground/90">{event.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Visibility: {event.visibility}
                      </p>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground">No upcoming celestial events involving {planet.name}</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </Card>
  );
}
