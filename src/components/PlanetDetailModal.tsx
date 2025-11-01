import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Planet } from "@/data/planetData";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PlanetDetailModalProps {
  planet: Planet | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PlanetDetailModal({
  planet,
  open,
  onOpenChange,
}: PlanetDetailModalProps) {
  if (!planet) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div
              className="w-12 h-12 rounded-full shadow-lg"
              style={{
                backgroundColor: planet.color,
                boxShadow: `0 0 30px ${planet.color}80`
              }}
            />
            <div>
              <DialogTitle className="text-2xl" style={{ color: planet.color }}>
                {planet.name}
              </DialogTitle>
              <DialogDescription>{planet.type}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 text-lg">Description</h4>
            <p className="text-foreground/90">{planet.description}</p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3 text-lg">Physical Characteristics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Diameter</p>
                <p className="font-medium">{planet.diameter}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mass</p>
                <p className="font-medium">{planet.mass}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="font-medium">{planet.temperature}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Composition</p>
                <p className="font-medium text-sm">{planet.composition}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3 text-lg">Orbital Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Distance from Sun</p>
                <p className="font-medium">{planet.distanceFromSun}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Orbital Period</p>
                <p className="font-medium">{planet.orbitalPeriod}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rotation Period</p>
                <p className="font-medium">{planet.rotationPeriod}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Natural Satellites</p>
                <p className="font-medium">{planet.moons} moon(s)</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2 text-lg">Historical Overview</h4>
            <p className="text-foreground/90">{planet.history}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-lg">Current Status</h4>
            <p className="text-foreground/90">{planet.currentStatus}</p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3 text-lg">Interesting Facts</h4>
            <div className="space-y-2">
              {planet.funFacts.map((fact, index) => (
                <div key={index} className="flex items-start">
                  <Badge variant="secondary" className="mr-2 mt-0.5">
                    {index + 1}
                  </Badge>
                  <p className="text-foreground/90 text-sm">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
