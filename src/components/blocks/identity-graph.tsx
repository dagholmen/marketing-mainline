import { useMemo, useRef } from 'react';

import { Line, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Node data with labels matching the reference image
const hubData = [
  { id: 'cgshangbaiair', color: '#444444', size: 1.5, labelColor: '#444444' },
  { id: 'moduair', color: '#444444', size: 1.5, labelColor: '#444444' },
  { id: 'beaiyuir', color: '#444444', size: 1.5, labelColor: '#444444' },
  { id: 'genee339', color: '#666666', size: 1.2, labelColor: '#666666' },
  { id: 'williamtong', color: '#888888', size: 1.2, labelColor: '#888888' },
  { id: 'marcelomeau', color: '#AAAAAA', size: 1.2, labelColor: '#AAAAAA' },
  { id: 'puflei', color: '#444444', size: 1.2, labelColor: '#444444' },
  { id: 'nanfangzhoumo', color: '#666666', size: 1.2, labelColor: '#666666' },
  { id: 'xizhi', color: '#444444', size: 1.2, labelColor: '#444444' },
  { id: 'degewa', color: '#666666', size: 1.2, labelColor: '#666666' },
  { id: 'wozhi64', color: '#666666', size: 1.2, labelColor: '#666666' },
  { id: 'guangzhou_air', color: '#444444', size: 1.2, labelColor: '#444444' },
  { id: 'airgini', color: '#888888', size: 1.2, labelColor: '#888888' }
];

// Node colors - all changed to grayscale
const nodeColors = {
  darkGray: '#222222',
  mediumDarkGray: '#444444',
  mediumGray: '#666666',
  gray: '#888888',
  lightGray: '#AAAAAA',
  veryLightGray: '#CCCCCC',
  nearWhite: '#EEEEEE'
};

interface NodeProps {
  position: number[];
  color: string;
  size: number;
  label?: string;
  labelColor?: string;
}

interface SquareNodeProps {
  position: number[];
  color: string;
  size: number;
}

interface ConnectionProps {
  start: number[];
  end: number[];
  color: string;
}

// Add this with other interfaces
interface NodeData {
  id: string;
  position: number[];
  color: string;
  size: number;
  isSquare?: boolean;
  isHub?: boolean;
  label?: string;
  labelColor?: string;
}

// Node component with animation
function Node({ position, color, size }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(
    new THREE.Vector3(position[0], position[1], position[2])
  );

  // Use fixed offset values instead of random
  const offset = useRef(
    new THREE.Vector3(
      (Math.sin(position[0] * 0.5) * 2 - 1) * 0.1,
      (Math.cos(position[1] * 0.5) * 2 - 1) * 0.1,
      (Math.sin(position[2] * 0.5) * 2 - 1) * 0.1
    )
  );

  // Animation for subtle node movement
  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.x =
        initialPosition.current.x +
        Math.sin(time * 0.5 + offset.current.x) * 0.5 * offset.current.x;
      meshRef.current.position.y =
        initialPosition.current.y +
        Math.sin(time * 0.5 + offset.current.y) * 0.5 * offset.current.y;
      meshRef.current.position.z =
        initialPosition.current.z +
        Math.sin(time * 0.5 + offset.current.z) * 0.5 * offset.current.z;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={
          [position[0], position[1], position[2]] as [number, number, number]
        }
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

// Square node component
function SquareNode({ position, color, size }: SquareNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(
    new THREE.Vector3(position[0], position[1], position[2])
  );

  // Use fixed offset values instead of random
  const offset = useRef(
    new THREE.Vector3(
      (Math.sin(position[0] * 0.5) * 2 - 1) * 0.1,
      (Math.cos(position[1] * 0.5) * 2 - 1) * 0.1,
      (Math.sin(position[2] * 0.5) * 2 - 1) * 0.1
    )
  );

  // Animation for subtle node movement
  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.x =
        initialPosition.current.x +
        Math.sin(time * 0.5 + offset.current.x) * 0.5 * offset.current.x;
      meshRef.current.position.y =
        initialPosition.current.y +
        Math.sin(time * 0.5 + offset.current.y) * 0.5 * offset.current.y;
      meshRef.current.position.z =
        initialPosition.current.z +
        Math.sin(time * 0.5 + offset.current.z) * 0.5 * offset.current.z;
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={
        [position[0], position[1], position[2]] as [number, number, number]
      }
    >
      <boxGeometry args={[size * 1.8, size * 1.8, size * 1.8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Connection line component
function Connection({ start, end, color }: ConnectionProps) {
  return (
    <Line
      points={[
        [start[0], start[1], start[2]],
        [end[0], end[1], end[2]]
      ]}
      color={color}
      opacity={0.6}
      transparent
    />
  );
}

// Main graph component
function Graph() {
  // Use useMemo to ensure nodes and connections are only calculated once
  const { nodes, connections } = useMemo(() => {
    const nodesResult: NodeData[] = [];
    const connectionsResult: ConnectionProps[] = [];

    // Create hub nodes in a more spherical distribution
    const hubNodes = hubData.map((hub, index) => {
      // Use golden ratio distribution for more uniform spherical coverage
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const i = index / hubData.length;
      const theta = 2 * Math.PI * i * goldenRatio;
      const phi = Math.acos(1 - 2 * i);

      // Use consistent radius for spherical shape
      const radius = 20;

      // Calculate positions on sphere
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const position = [x, y, z];

      nodesResult.push({
        id: hub.id,
        position,
        color: hub.color,
        size: hub.size,
        label: hub.id,
        labelColor: hub.labelColor,
        isHub: true
      });

      return { id: hub.id, position };
    });

    // Connect main green hubs (same logic)
    const greenHubs = hubNodes.filter(
      (hub, index) => hubData[index].color === nodeColors.mediumGray
    );
    for (let i = 0; i < greenHubs.length; i++) {
      for (let j = i + 1; j < greenHubs.length; j++) {
        connectionsResult.push({
          start: greenHubs[i].position,
          end: greenHubs[j].position,
          color: '#AAAAAA'
        });
      }
    }

    // Create satellite nodes in spherical shells around hubs
    hubNodes.forEach((hub, hubIndex) => {
      const satelliteCount =
        hubData[hubIndex].id === 'cgshangbaiair' ||
        hubData[hubIndex].id === 'beaiyuir'
          ? 60
          : hubData[hubIndex].id === 'williamtong' ||
              hubData[hubIndex].id === 'marcelomeau'
            ? 40
            : 25;

      for (let i = 0; i < satelliteCount; i++) {
        // Use deterministic values based on indices instead of Math.random()
        const u =
          (i / satelliteCount) * 0.9 + (hubIndex / hubData.length) * 0.1;
        const v = ((i * 13) % satelliteCount) / satelliteCount;

        // Calculate spherical coordinates
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);

        // Use consistent satellite distance with small variations
        const distance = 4 + Math.sin(i * 0.7 + hubIndex * 0.3) * 1;

        // Position on sphere around hub
        const x = hub.position[0] + distance * Math.sin(phi) * Math.cos(theta);
        const y = hub.position[1] + distance * Math.sin(phi) * Math.sin(theta);
        const z = hub.position[2] + distance * Math.cos(phi);

        const position = [x, y, z];

        // Color distribution - grayscale variation
        let color;
        const colorIndex = (hubIndex * 7 + i * 13) % 100;
        if (colorIndex < 50) {
          color = nodeColors.darkGray; // 50% dark gray nodes
        } else if (colorIndex < 65) {
          color = nodeColors.mediumDarkGray; // 15% medium-dark gray
        } else if (colorIndex < 75) {
          color = nodeColors.mediumGray; // 10% medium gray
        } else if (colorIndex < 85) {
          color = nodeColors.gray; // 10% gray
        } else if (colorIndex < 95) {
          color = nodeColors.lightGray; // 10% light gray
        } else {
          color = hubData[hubIndex].color; // 5% same as hub
        }

        // Shape distribution (same as before)
        const isSquare = i % 5 === 0;

        // Create satellite node
        const nodeId = `${hub.id}_satellite_${i}`;
        nodesResult.push({
          id: nodeId,
          position,
          color,
          size: 0.5,
          isSquare,
          isHub: false
        });

        // Connect to hub
        connectionsResult.push({
          start: hub.position,
          end: position,
          color: '#AAAAAA' // Light gray for all connections
        });
      }
    });

    // Create connections that ensure more spherical distribution
    // Use smaller number of connections to avoid clutter
    for (let i = 0; i < 80; i++) {
      // Connect nodes that help create a more spherical structure
      const sourceIndex = i % nodesResult.length;

      // Find a target that's in a different quadrant for better distribution
      const targetIndex =
        (i * 29 + Math.floor(nodesResult.length / 2)) % nodesResult.length;

      if (sourceIndex !== targetIndex) {
        connectionsResult.push({
          start: nodesResult[sourceIndex].position,
          end: nodesResult[targetIndex].position,
          color: '#AAAAAA'
        });
      }
    }

    // Add some cross-connections that pass through the center
    // to ensure the structure appears filled from all angles
    for (let i = 0; i < 20; i++) {
      const sourceIndex = i % hubNodes.length;
      const targetIndex =
        (i + Math.floor(hubNodes.length / 2)) % hubNodes.length;

      if (sourceIndex !== targetIndex) {
        connectionsResult.push({
          start: hubNodes[sourceIndex].position,
          end: hubNodes[targetIndex].position,
          color: '#AAAAAA'
        });
      }
    }

    return { nodes: nodesResult, connections: connectionsResult };
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  // Rotation animation (same as before)
  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render connections */}
      {connections.map((connection, index) => (
        <Connection
          key={`connection-${index}`}
          start={connection.start}
          end={connection.end}
          color={connection.color}
        />
      ))}

      {/* Render nodes */}
      {nodes.map((node) =>
        node.isSquare ? (
          <SquareNode
            key={node.id}
            position={node.position}
            color={node.color}
            size={node.size}
          />
        ) : (
          <Node
            key={node.id}
            position={node.position}
            color={node.color}
            size={node.size}
            label={node.label}
            labelColor={node.labelColor}
          />
        )
      )}
    </group>
  );
}

// Main component with adjusted camera
export function IdentityGraph() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    >
      <Canvas camera={{ position: [0, 0, 85], fov: 45 }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <Graph />
      </Canvas>
    </div>
  );
}
