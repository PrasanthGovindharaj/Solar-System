import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { planets } from "@/data/planetData";

interface PlanetMeshProps {
  planet: typeof planets[0];
  onClick: () => void;
}

function PlanetMesh({ planet, onClick }: PlanetMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current && planet.orbitSpeed > 0) {
      orbitRef.current.rotation.y += planet.orbitSpeed * 0.001;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[planet.orbitRadius, 0, 0]} onClick={onClick}>
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial
          color={planet.color}
          emissive={planet.id === "sun" ? planet.color : undefined}
          emissiveIntensity={planet.id === "sun" ? 1 : 0}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {planet.orbitRadius > 0 && (
        <lineLoop>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={64}
              array={
                new Float32Array(
                  Array.from({ length: 64 }, (_, i) => {
                    const angle = (i / 64) * Math.PI * 2;
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
          <lineBasicMaterial color="#4a5568" opacity={0.3} transparent />
        </lineLoop>
      )}
    </group>
  );
}

interface SolarSystemProps {
  onPlanetClick: (planetId: string) => void;
}

export default function SolarSystem({ onPlanetClick }: SolarSystemProps) {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 30, 50], fov: 60 }}>
        <color attach="background" args={["#0a0e1a"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Stars
          radius={300}
          depth={60}
          count={5000}
          factor={7}
          saturation={0}
          fade
          speed={1}
        />
        
        {planets.map((planet) => (
          <PlanetMesh
            key={planet.id}
            planet={planet}
            onClick={() => onPlanetClick(planet.id)}
          />
        ))}
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={20}
          maxDistance={100}
        />
      </Canvas>
    </div>
  );
}
