import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { 
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, Points, BufferGeometry, 
  BufferAttribute, PointsMaterial, AdditiveBlending, SphereGeometry, 
  BoxGeometry, TorusGeometry, Material, CanvasTexture, MeshStandardMaterial, 
  Color, BackSide, MeshPhongMaterial, AmbientLight, DirectionalLight, PointLight 
} from 'three';

interface RotatingObject3DProps {
  type: 'moon' | 'sphere' | 'cube' | 'torus' | 'planet';
  color?: string;
  size?: number;
  speed?: number;
  className?: string;
}

export const RotatingObject3D = ({
  type = 'planet',
  color = '#5e3f94',
  size = 3,
  speed = 0.5,
  className = ''
}: RotatingObject3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const objectRef = useRef<THREE.Mesh | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create starry background
    const createStarField = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 2000;
      const starPositions = new Float32Array(starCount * 3);
      const starSizes = new Float32Array(starCount);
      
      for (let i = 0; i < starCount * 3; i += 3) {
        // Create a sphere of stars
        const radius = 50;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i + 2] = radius * Math.cos(phi);
        
        // Random star size for twinkling effect
        starSizes[i / 3] = Math.random() * 2 + 0.5;
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
      
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });
      
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      starsRef.current = stars;
      
      // Add twinkling animation
      gsap.to(starMaterial, {
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    };
    
    createStarField();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12;
    cameraRef.current = camera;

    // Renderer with transparency
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1); // Set black background
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Object geometry based on type
    let geometry: THREE.BufferGeometry;
    switch (type) {
      case 'moon':
        geometry = new THREE.SphereGeometry(size, 64, 64);
        break;
      case 'planet':
        geometry = new THREE.SphereGeometry(size, 64, 64);
        break;
      case 'cube':
        geometry = new THREE.BoxGeometry(size, size, size);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(size, size / 3, 32, 100);
        break;
      default:
        geometry = new THREE.SphereGeometry(size, 64, 64);
    }

    // Generate procedural planet texture
    const generatePlanetTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      // Create gradient background for the planet
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      
      // Purple/pink gradient for the brand colors
      gradient.addColorStop(0, '#5e3f94');    // Dark purple
      gradient.addColorStop(0.5, '#9050dc');  // Medium purple
      gradient.addColorStop(0.8, '#bb5bac');  // Pinkish purple
      gradient.addColorStop(1, '#ff5bac');    // Pink accent
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some noise/texture for detail
      ctx.globalCompositeOperation = 'multiply';
      
      // Create some crater-like patterns
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100 + 50;
        
        const grd = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grd.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        grd.addColorStop(0.8, 'rgba(0, 0, 0, 0.2)');
        grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Create bright spots (energy fields or cities)
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 40 + 10;
        
        const grd = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grd.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        grd.addColorStop(0.5, 'rgba(255, 187, 255, 0.4)');
        grd.addColorStop(1, 'rgba(255, 100, 255, 0)');
        
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      return canvas;
    };

    // Material
    const createMaterial = () => {
      let material: THREE.Material;
      
      if (type === 'planet' || type === 'moon') {
        // Create procedural texture
        const textureCanvas = generatePlanetTexture();
        
        if (textureCanvas) {
          const planetTexture = new THREE.CanvasTexture(textureCanvas);
          
          // Create bump map for terrain
          const bumpCanvas = document.createElement('canvas');
          bumpCanvas.width = 1024;
          bumpCanvas.height = 1024;
          const bumpCtx = bumpCanvas.getContext('2d');
          
          if (bumpCtx) {
            bumpCtx.fillStyle = 'black';
            bumpCtx.fillRect(0, 0, bumpCanvas.width, bumpCanvas.height);
            
            // Create noise pattern for bump map
            for (let i = 0; i < 5000; i++) {
              const x = Math.random() * bumpCanvas.width;
              const y = Math.random() * bumpCanvas.height;
              const radius = Math.random() * 20 + 5;
              
              const value = Math.random() * 200 + 55;
              bumpCtx.fillStyle = `rgb(${value}, ${value}, ${value})`;
              bumpCtx.beginPath();
              bumpCtx.arc(x, y, radius, 0, Math.PI * 2);
              bumpCtx.fill();
            }
          }
          
          const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
          
          // Create the material with the generated textures
          material = new THREE.MeshStandardMaterial({
            map: planetTexture,
            bumpMap: bumpTexture,
            bumpScale: 0.1,
            roughness: 0.8,
            metalness: 0.2,
            emissive: new THREE.Color(0x330033),
            emissiveIntensity: 0.2
          });
        } else {
          // Fallback material
          material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.3,
            emissive: new THREE.Color(0x330033),
            emissiveIntensity: 0.1
          });
        }
      } else {
        // Standard material for other shapes
        material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          roughness: 0.7,
          metalness: 0.3,
          emissive: new THREE.Color(0x330033),
          emissiveIntensity: 0.1
        });
      }
      
      return material;
    };

    // Create the planet object with atmosphere
    const createPlanetWithAtmosphere = () => {
      // Create the main planet
      const material = createMaterial();
      const planet = new THREE.Mesh(geometry, material);
      scene.add(planet);
      objectRef.current = planet;
      
      // Create atmosphere glow
      const atmosphereGeometry = new THREE.SphereGeometry(size * 1.2, 64, 64);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xa366ff),
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
      });
      
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);
      
      // Create outer glow
      const glowGeometry = new THREE.SphereGeometry(size * 1.4, 64, 64);
      const glowMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xff5bac),
        transparent: true,
        opacity: 0.05,
        side: THREE.BackSide
      });
      
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      scene.add(glow);
      
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);
      
      // Add directional light for main illumination
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);
      
      // Add point lights for highlights
      const purpleLight = new THREE.PointLight(0x9050dc, 1, 20);
      purpleLight.position.set(-5, 3, 5);
      scene.add(purpleLight);
      
      const pinkLight = new THREE.PointLight(0xff5bac, 1, 20);
      pinkLight.position.set(5, -3, 5);
      scene.add(pinkLight);
      
      // GSAP animations
      
      // Planet rotation
      gsap.to(planet.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
      
      // Atmosphere pulsing
      gsap.to(atmosphereMaterial, {
        opacity: 0.25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Outer glow pulsing
      gsap.to(glowMaterial, {
        opacity: 0.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Subtle planet floating animation
      gsap.to(planet.position, {
        y: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Link atmosphere and glow movement to planet
      gsap.to(atmosphere.position, {
        y: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(glow.position, {
        y: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      return { planet, atmosphere, glow };
    };

    const { planet, atmosphere, glow } = createPlanetWithAtmosphere();

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Rotate stars slightly for parallax effect
      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0003;
        starsRef.current.rotation.x += 0.0001;
      }
      
      // User interaction - follow mouse movement slightly
      const mouseMoveHandler = (event: MouseEvent) => {
        if (planet && atmosphere && glow) {
          const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
          
          gsap.to([planet.rotation, atmosphere.rotation, glow.rotation], {
            x: mouseY * 0.1,
            z: mouseX * 0.1,
            duration: 2,
            ease: "power2.out"
          });
        }
      };
      
      document.addEventListener('mousemove', mouseMoveHandler, { once: true });
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', () => {});
      cancelAnimationFrame(frameRef.current);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (objectRef.current && sceneRef.current) {
        sceneRef.current.remove(objectRef.current);
        objectRef.current.geometry.dispose();
        
        if (Array.isArray(objectRef.current.material)) {
          objectRef.current.material.forEach((material: THREE.Material) => material.dispose());
        } else if (objectRef.current.material) {
          objectRef.current.material.dispose();
        }
      }
    };
  }, [type, color, size, speed]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
};

export default RotatingObject3D;