import { motion } from 'framer-motion';

export default function AmbientBackground() {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', background: 'var(--bg)', pointerEvents: 'none' }}>
            {/* Elegant Background Grid Layer */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                zIndex: 0
            }} />

            {/* Glowing Abstract Orb 1 - Premium Gold */}
            <motion.div
                animate={{
                    x: [0, 100, -80, 0],
                    y: [0, -120, 60, 0],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '50vw',
                    height: '50vw',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />

            {/* Glowing Abstract Orb 2 - Deep Slate */}
            <motion.div
                animate={{
                    x: [0, -150, 90, 0],
                    y: [0, 140, -100, 0],
                    scale: [1, 1.3, 0.85, 1]
                }}
                transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '5%',
                    width: '45vw',
                    height: '45vw',
                    maxWidth: '700px',
                    maxHeight: '700px',
                    background: 'radial-gradient(circle, rgba(148, 163, 184, 0.04) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
        </div>
    );
}
