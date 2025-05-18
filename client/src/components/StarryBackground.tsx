import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface StarryBackgroundProps {
  starCount?: number;
  className?: string;
}

export const StarryBackground = ({
  starCount = 2000,
  className = ''
}: StarryBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 0;
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer with transparency
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create starry background
    const createStarField = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starSizes = new Float32Array(starCount);
      const starColors = new Float32Array(starCount * 3);
      
      for (let i = 0; i < starCount * 3; i += 3) {
        // Create a sphere of stars
        const radius = 100;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i + 2] = radius * Math.cos(phi);
        
        // Random star size for twinkling effect
        starSizes[i / 3] = Math.random() * 2 + 0.5;
        
        // Random star color - mostly white with some purple/pink accent
        const colorChoice = Math.random();
        if (colorChoice > 0.9) {
          // Purple star
          starColors[i] = 0.6;     // R
          starColors[i + 1] = 0.2;  // G
          starColors[i + 2] = 1.0;  // B
        } else if (colorChoice > 0.8) {
          // Pink star
          starColors[i] = 1.0;     // R
          starColors[i + 1] = 0.4;  // G
          starColors[i + 2] = 0.8;  // B
        } else {
          // White star
          starColors[i] = 1.0;     // R
          starColors[i + 1] = 1.0;  // G
          starColors[i + 2] = 1.0;  // B
        }
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
      
      // Create the star material with custom shader for better looking stars
      const starMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
          pixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float pixelRatio;
          
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float pulse = sin(time * 0.2 + position.x + position.y + position.z) * 0.1 + 0.9;
            gl_PointSize = size * pixelRatio * pulse;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          
          void main() {
            float r = 0.0;
            vec2 cxy = 2.0 * gl_PointCoord - 1.0;
            r = dot(cxy, cxy);
            if (r > 1.0) {
                discard;
            }
            float alpha = 1.0 - r;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true
      });
      
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      starsRef.current = stars;
    };
    
    createStarField();

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Update star twinkling
      if (starsRef.current) {
        const material = starsRef.current.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = clock.getElapsedTime();
        }
        
        // Rotate stars very slowly
        starsRef.current.rotation.y += 0.0001;
        starsRef.current.rotation.x += 0.00005;
      }
      
      // Make the stars follow scroll slightly for parallax effect
      if (starsRef.current && cameraRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollRatio = scrollY / maxScroll;
        
        // Subtle camera movement based on scroll
        gsap.to(cameraRef.current.position, {
          y: -scrollRatio * 5,
          duration: 1,
          ease: "power2.out"
        });
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
      
      // Update star pixel ratio
      if (starsRef.current) {
        const material = starsRef.current.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.pixelRatio.value = Math.min(window.devicePixelRatio, 2);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      if (starsRef.current && starsRef.current.geometry) {
        starsRef.current.geometry.dispose();
        if (starsRef.current.material) {
          if (Array.isArray(starsRef.current.material)) {
            starsRef.current.material.forEach(material => material.dispose());
          } else {
            starsRef.current.material.dispose();
          }
        }
      }
    };
  }, [starCount]);

  return (
    <div 
      ref={containerRef} 
      className={`fixed top-0 left-0 w-screen h-screen pointer-events-none z-0 ${className}`}
    />
  );
};

export default StarryBackground;