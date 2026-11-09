import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.015);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x080808, 1);
    container.appendChild(renderer.domElement);

    // 2. Cinematic Volumetric Lighting
    const ambientLight = new THREE.AmbientLight(0x1a0505, 1.5);
    scene.add(ambientLight);

    const crimsonKeyLight = new THREE.PointLight(0xdc2626, 4.0, 35);
    crimsonKeyLight.position.set(0, 4, 6);
    scene.add(crimsonKeyLight);

    const crimsonRimLight = new THREE.PointLight(0x991b1b, 2.5, 30);
    crimsonRimLight.position.set(8, -4, 4);
    scene.add(crimsonRimLight);

    // 3. Subtle Floating Micro-Embers / Dust
    const particleCount = 280;
    const particleCoords = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particleCoords[i * 3] = (Math.random() - 0.5) * 28;
      particleCoords[i * 3 + 1] = (Math.random() - 0.5) * 28;
      particleCoords[i * 3 + 2] = (Math.random() - 0.5) * 20;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    // Soft glowing circle texture for embers
    const createEmberTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 180, 180, 0.9)");
      gradient.addColorStop(0.3, "rgba(220, 38, 38, 0.5)");
      gradient.addColorStop(0.8, "rgba(185, 28, 28, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const emberTexture = createEmberTexture();

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.Float32BufferAttribute(particleCoords, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      map: emberTexture,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Mouse & Scroll Interaction with Lerp
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let scrollY = 0;
    let targetScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY || document.documentElement.scrollTop;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5. Animation Loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Smooth scroll lerping
      scrollY += (targetScrollY - scrollY) * 0.05;
      const scrollFactor = scrollY * 0.0015;

      // Gentle ember drift
      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.04;

      // Subtle light oscillation
      crimsonKeyLight.position.x = Math.sin(elapsedTime * 0.5) * 4 + mouseX * 2;
      crimsonKeyLight.position.y = 4 + Math.cos(elapsedTime * 0.4) * 2 - mouseY * 2;

      // Camera parallax
      camera.position.x = mouseX * 1.2;
      camera.position.y = -mouseY * 0.8 - scrollFactor * 4;
      camera.lookAt(0, -scrollFactor * 4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      particleGeo.dispose();
      particleMat.dispose();
      emberTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
