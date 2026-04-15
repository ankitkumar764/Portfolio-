import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RoboticWelcome = ({ onComplete }) => {
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    // 1. Enter and draw signature (0 - 2.5s)
    const timer1 = setTimeout(() => setPhase('revealing'), 3000);
    // 2. Open up to portfolio (3.0s - 4.2s)
    const timer2 = setTimeout(() => onComplete(), 4200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  // A stylized fake SVG signature mimicking 'Ankit Kumar'
  const signatureVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)', // White/Paper background
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Background Scrolling Marquee for Premium Aesthetic */}
        <div style={{ position: 'absolute', top: '10%', left: 0, right: 0, opacity: 0.05, overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <motion.h1 
                initial={{ x: 0 }} animate={{ x: '-50%' }} transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
                style={{ fontSize: '15vw', fontWeight: '800', fontFamily: 'Space Grotesk', textTransform: 'uppercase' }}
            >
                CREATIVE DEVELOPER / ENGINEER / PROBLEM SOLVER / CREATIVE DEVELOPER / ENGINEER / PROBLEM SOLVER
            </motion.h1>
        </div>
        <div style={{ position: 'absolute', bottom: '10%', left: 0, right: 0, opacity: 0.05, overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <motion.h1 
                initial={{ x: '-50%' }} animate={{ x: '0%' }} transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
                style={{ fontSize: '15vw', fontWeight: '800', fontFamily: 'Space Grotesk', textTransform: 'uppercase' }}
            >
                PORTFOLIO 2026 / ANKIT KUMAR / PORTFOLIO 2026 / ANKIT KUMAR / PORTFOLIO 2026 / ANKIT KUMAR
            </motion.h1>
        </div>

        {/* Circular Expansion Reveal Mask */}
        <motion.div
            initial={{ clipPath: 'circle(100% at 50% 50%)' }}
            animate={phase === 'revealing' ? { clipPath: 'circle(0% at 50% 50%)' } : { clipPath: 'circle(100% at 50% 50%)' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{
                position: 'absolute',
                inset: 0,
                background: '#0a0a0a', // Dark dramatic contrast overlay
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* The SVG Signature Animation */}
            <div style={{ position: 'relative', width: '300px', height: '150px' }}>
                <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    {/* Simulated A */}
                    <motion.path d="M 50 120 C 45 100, 70 30, 90 20 C 100 40, 110 90, 105 120" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    <motion.path d="M 60 70 L 95 75" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    {/* Simulated n */}
                    <motion.path d="M 115 120 C 115 100, 115 80, 115 80 C 125 65, 140 70, 145 120" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    {/* Simulated k */}
                    <motion.path d="M 155 120 L 155 40" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    <motion.path d="M 180 80 C 160 90, 150 100, 155 100 C 170 100, 180 110, 185 120" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    {/* Simulated i */}
                    <motion.path d="M 200 120 L 200 80" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    <motion.circle cx="200" cy="65" r="3" fill="white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} />
                    {/* Simulated t */}
                    <motion.path d="M 220 120 L 220 50" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                    <motion.path d="M 210 70 L 235 70" stroke="white" strokeWidth="4" strokeLinecap="round" variants={signatureVariants} initial="hidden" animate="visible" />
                </svg>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="handwriting"
                    style={{ position: 'absolute', bottom: '-20px', left: '0', right: '0', textAlign: 'center', color: 'var(--cyan)', fontSize: '24px', letterSpacing: '2px' }}
                >
                    personal portfolio.
                </motion.p>
            </div>
        </motion.div>

        {/* Skip button logic */}
        <button 
            onClick={onComplete}
            style={{
                position: 'absolute',
                bottom: '40px',
                background: 'transparent',
                border: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '12px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#fff',
                opacity: 0.5,
                zIndex: 100000
            }}
        >
            Skip Intro
        </button>

      </motion.div>
    </AnimatePresence>
  );
};

export default RoboticWelcome;
