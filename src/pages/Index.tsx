import { useState } from "react";
import { planets } from "@/data/planetData";
import SolarSystem from "@/components/SolarSystem";
import PlanetInfoSidebar from "@/components/PlanetInfoSidebar";
import PlanetDetailModal from "@/components/PlanetDetailModal";
import { Button } from "@/components/ui/button";
import { Info, Maximize2 } from "lucide-react";

const Index = () => {
  const [selectedPlanetId, setSelectedPlanetId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedPlanet = selectedPlanetId
    ? planets.find((p) => p.id === selectedPlanetId) || null
    : null;

  const handlePlanetClick = (planetId: string) => {
    if (planetId) {
      setSelectedPlanetId(planetId);
    } else {
      setSelectedPlanetId(null);
    }
  };

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Solar System Explorer
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Interactive 3D planetary system with detailed information
              </p>
            </div>
            {selectedPlanet && (
              <Button onClick={handleViewDetails} variant="space" size="sm" className="animate-fade-in">
                <Info className="w-4 h-4 mr-2" />
                Full Details
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 h-screen flex">
        {/* 3D Solar System */}
        <div className="flex-1 relative">
          <SolarSystem onPlanetClick={handlePlanetClick} selectedPlanetId={selectedPlanetId} />
          
          {/* Instructions Overlay */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur border border-border rounded-lg p-4 max-w-xs">
            <h3 className="font-semibold mb-2 flex items-center">
              <Maximize2 className="w-4 h-4 mr-2" />
              Controls
            </h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Click and drag to rotate view</li>
              <li>• Scroll to zoom in/out</li>
              <li>• Click on planets for info</li>
              <li>• Right-click drag to pan</li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-96 p-4">
          <PlanetInfoSidebar planet={selectedPlanet} />
        </div>
      </div>

      {/* Detail Modal */}
      <PlanetDetailModal
        planet={selectedPlanet}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Index;
