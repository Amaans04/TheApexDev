import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleBackgroundProps {
  particleCount?: number;
  color?: string;
  size?: number;
  speed?: number;
  minDistance?: number;
}

const ParticleBackground = ({
  particleCount = 100,
  color = "#ffffff",
  size = 0.5,
  speed = 0.05,
  minDistance = 150,
}: ParticleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles
    const particles = new THREE.BufferGeometry();
    const particlePositions = [];
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width - width / 2;
      const y = Math.random() * height - height / 2;
      const z = Math.random() * 30 - 15;

      particlePositions.push(x, y, z);
      
      // Random velocity for each particle
      particleVelocities.push(
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.5) * speed
      );
    }

    particles.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: size,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    // Create point cloud
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Mouse interaction setup
    const mouse = new THREE.Vector2();
    container.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / width) * 2 - 1;
      mouse.y = -(e.clientY / height) * 2 + 1;
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.attributes.position.array as number[];

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        positions[idx] += particleVelocities[idx];
        positions[idx + 1] += particleVelocities[idx + 1];
        positions[idx + 2] += particleVelocities[idx + 2];

        // Boundary check
        if (Math.abs(positions[idx]) > width / 2) {
          particleVelocities[idx] = -particleVelocities[idx];
        }
        if (Math.abs(positions[idx + 1]) > height / 2) {
          particleVelocities[idx + 1] = -particleVelocities[idx + 1];
        }
        if (Math.abs(positions[idx + 2]) > 15) {
          particleVelocities[idx + 2] = -particleVelocities[idx + 2];
        }
      }
      
      particles.attributes.position.needsUpdate = true;
      
      // Mouse interaction effect
      particleSystem.rotation.x += mouse.y * 0.001;
      particleSystem.rotation.y += mouse.x * 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [particleCount, color, size, speed, minDistance]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
