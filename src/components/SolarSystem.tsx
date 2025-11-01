import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { planets } from "@/data/planetData";
import { toast } from "sonner";

// Import planet textures
import sunTexture from "@/assets/textures/sun.png";
import mercuryTexture from "@/assets/textures/mercury.png";
import venusTexture from "@/assets/textures/venus.png";
import earthTexture from "@/assets/textures/earth.png";
import moonTexture from "@/assets/textures/moon.png";
import marsTexture from "@/assets/textures/mars.png";
import jupiterTexture from "@/assets/textures/jupiter.png";
import saturnTexture from "@/assets/textures/saturn.png";
import uranusTexture from "@/assets/textures/uranus.png";
import neptuneTexture from "@/assets/textures/neptune.png";

const textureMap: Record<string, string> = {
  sun: sunTexture,
  mercury: mercuryTexture,
  venus: venusTexture,
  earth: earthTexture,
  moon: moonTexture,
  mars: marsTexture,
  jupiter: jupiterTexture,
  saturn: saturnTexture,
  uranus: uranusTexture,
  neptune: neptuneTexture,
};

interface PlanetMeshProps {
  planet: typeof planets[0];
  onClick: () => void;
  isSelected: boolean;
}

function PlanetMesh({ planet, onClick, isSelected }: PlanetMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  const texture = useTexture(textureMap[planet.id]);

  useFrame(() => {
    if (orbitRef.current && planet.orbitSpeed > 0) {
      orbitRef.current.rotation.y += planet.orbitSpeed * 0.001;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const handleClick = () => {
    onClick();
    toast.success(`Viewing ${planet.name}`, {
      description: planet.type,
      duration: 2000,
    });
  };

  return (
    <group ref={orbitRef}>
      <mesh
        ref={meshRef}
        position={[planet.orbitRadius, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={isSelected ? 1.2 : 1}
      >
        <sphereGeometry args={[planet.size, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive={planet.id === "sun" ? new THREE.Color(planet.color) : undefined}
          emissiveMap={planet.id === "sun" ? texture : undefined}
          emissiveIntensity={planet.id === "sun" ? 1.5 : 0}
          roughness={0.8}
          metalness={0.2}
        />
        
        {/* Atmospheric glow for certain planets */}
        {(planet.id === "earth" || planet.id === "jupiter" || planet.id === "saturn") && (
          <mesh scale={1.05}>
            <sphereGeometry args={[planet.size, 32, 32]} />
            <meshBasicMaterial
              color={planet.color}
              transparent
              opacity={0.15}
              side={THREE.BackSide}
            />
          </mesh>
        )}

        {/* Hover label */}
        {hovered && (
          <Html distanceFactor={10}>
            <div className="bg-card/95 backdrop-blur border border-border rounded-lg px-4 py-2 shadow-xl pointer-events-none whitespace-nowrap">
              <p className="font-bold text-sm" style={{ color: planet.color }}>
                {planet.name}
              </p>
              <p className="text-xs text-muted-foreground">{planet.type}</p>
            </div>
          </Html>
        )}
      </mesh>

      {/* Orbital path */}
      {planet.orbitRadius > 0 && (
        <lineLoop>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={128}
              array={
                new Float32Array(
                  Array.from({ length: 128 }, (_, i) => {
                    const angle = (i / 128) * Math.PI * 2;
                    return [
                      Math.cos(angle) * planet.orbitRadius,
                      0,
                      Math.sin(angle) * planet.orbitRadius,
                    ];
                  }).flat()
                )
              }
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={isSelected ? planet.color : "#4a5568"}
            opacity={isSelected ? 0.6 : 0.2}
            transparent
          />
        </lineLoop>
      )}
    </group>
  );
}

interface CameraControllerProps {
  selectedPlanetId: string | null;
}

function CameraController({ selectedPlanetId }: CameraControllerProps) {
  const { camera } = useThree();
  const selectedPlanet = selectedPlanetId
    ? planets.find((p) => p.id === selectedPlanetId)
    : null;

  useFrame(() => {
    if (selectedPlanet) {
      const targetPosition = new THREE.Vector3(
        selectedPlanet.orbitRadius + selectedPlanet.size * 5,
        selectedPlanet.size * 2,
        selectedPlanet.size * 5
      );
      camera.position.lerp(targetPosition, 0.05);
      camera.lookAt(selectedPlanet.orbitRadius, 0, 0);
    }
  });

  return null;
}

// Animated shooting stars
function ShootingStar() {
  const ref = useRef<THREE.Mesh>(null);
  const [reset, setReset] = useState(false);
  const startPosition = useRef({
    x: Math.random() * 100 - 50,
    y: Math.random() * 50 + 20,
    z: Math.random() * 100 - 50,
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x -= 0.5;
      ref.current.position.y -= 0.3;
      ref.current.position.z -= 0.2;

      if (ref.current.position.x < -60) {
        ref.current.position.set(
          startPosition.current.x,
          startPosition.current.y,
          startPosition.current.z
        );
        setReset(!reset);
      }
    }
  });

  return (
    <mesh ref={ref} position={[startPosition.current.x, startPosition.current.y, startPosition.current.z]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

interface SolarSystemProps {
  onPlanetClick: (planetId: string) => void;
  selectedPlanetId?: string | null;
}

export default function SolarSystem({ onPlanetClick, selectedPlanetId = null }: SolarSystemProps) {
  const [localSelectedPlanet, setLocalSelectedPlanet] = useState<string | null>(
    selectedPlanetId
  );

  useEffect(() => {
    setLocalSelectedPlanet(selectedPlanetId);
  }, [selectedPlanetId]);

  const handlePlanetClick = (planetId: string) => {
    setLocalSelectedPlanet(planetId);
    onPlanetClick(planetId);
  };

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 30, 50], fov: 60 }}>
        <color attach="background" args={["#0a0e1a"]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#FDB813" />
        <pointLight position={[50, 50, 50]} intensity={0.3} color="#4169E1" />
        
        {/* Enhanced starfield */}
        <Stars
          radius={300}
          depth={80}
          count={8000}
          factor={8}
          saturation={0}
          fade
          speed={2}
        />

        {/* Shooting stars */}
        {Array.from({ length: 5 }).map((_, i) => (
          <ShootingStar key={i} />
        ))}

        {/* Planets */}
        {planets.map((planet) => (
          <PlanetMesh
            key={planet.id}
            planet={planet}
            onClick={() => handlePlanetClick(planet.id)}
            isSelected={localSelectedPlanet === planet.id}
          />
        ))}

        {/* Camera animation controller */}
        <CameraController selectedPlanetId={localSelectedPlanet} />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={120}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Reset camera button */}
      {localSelectedPlanet && (
        <button
          onClick={() => {
            setLocalSelectedPlanet(null);
            onPlanetClick("");
          }}
          className="absolute top-4 left-4 bg-card/95 backdrop-blur border border-border rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
        >
          Reset View
        </button>
      )}
    </div>
  );
}
