import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';

const LiquidGold = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        // 1. Base Idle Rotation
        meshRef.current.rotation.x += delta * 0.15;
        meshRef.current.rotation.y += delta * 0.2;
        
        // 2. Scroll Storytelling Magic
        const scrollY = window.scrollY;
        
        // The object smoothly rises, twists dynamically, and scales elegantly as user scrolls
        meshRef.current.position.y = scrollY * 0.002;
        meshRef.current.rotation.z = scrollY * 0.005;
        
        const scale = Math.max(0.2, 1.8 - scrollY * 0.0018);
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
            <mesh ref={meshRef} position={[3.5, 0, -2]} scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[1, 128, 128]} />
                <MeshDistortMaterial 
                    color="#d4af37" 
                    envMapIntensity={2.5} 
                    clearcoat={1} 
                    clearcoatRoughness={0.1} 
                    metalness={0.9} 
                    roughness={0.15} 
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
};

export default function Hero3D() {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />
                <LiquidGold />
                {/* City environment yields hyper-realistic sharp metallic reflections */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
