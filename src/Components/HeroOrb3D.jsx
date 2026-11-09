import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroOrb3D({ size = 80 }) {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(false);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 1. Central Glowing Cosmic Star
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, // Radiant amber star
      wireframe: false,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // 2. Translucent Atmosphere Halo
    const haloGeo = new THREE.SphereGeometry(1.05, 24, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    scene.add(halo);

    // 3. Planetary Galaxy Ring 1
    const ring1Geo = new THREE.RingGeometry(1.4, 1.8, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.38;
    ring1.rotation.y = Math.PI * 0.15;
    scene.add(ring1);

    // 4. Secondary Tilted Cosmic Ring
    const ring2Geo = new THREE.RingGeometry(1.9, 2.05, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI * 0.45;
    ring2.rotation.y = -Math.PI * 0.2;
    scene.add(ring2);

    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const speed = hoverRef.current ? 3.2 : 1.0;

      // Rotate planet and atmosphere
      core.rotation.y += 0.8 * delta * speed;
      halo.rotation.y -= 0.5 * delta * speed;
      halo.rotation.x += 0.3 * delta * speed;

      // Rotate planetary rings
      ring1.rotation.z += 0.9 * delta * speed;
      ring2.rotation.z -= 0.6 * delta * speed;

      // Subtle pulse
      const scalePulse = 1 + Math.sin(clock.getElapsedTime() * 3.5) * 0.04;
      core.scale.set(scalePulse, scalePulse, scalePulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      coreGeo.dispose();
      coreMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer relative flex items-center justify-center transition-transform duration-300 hover:scale-115"
      title="Cosmic Star System — Interactive"
      style={{ width: size, height: size }}
    />
  );
}
