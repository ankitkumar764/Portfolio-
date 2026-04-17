import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StartingIntro = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [phase, setPhase] = useState('deciphering');
  const targetName = "ANKIT SINGH";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setName(prev => 
        targetName
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetName[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetName.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('role'), 500);
      }

      iteration += 1 / 3;
    }, 30);

    const timer = setTimeout(() => {
      setPhase('receding');
      setTimeout(onComplete, 1000);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      color: 'white',
      fontFamily: "'Space Grotesk', sans-serif"
    }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <motion.div
          animate={phase === 'receding' ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '8px', 
            marginBottom: '20px', 
            opacity: 0.4,
            fontWeight: '300'
          }}>
            Establishing Connection...
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(40px, 8vw, 100px)', 
            fontWeight: '900', 
            margin: 0,
            letterSpacing: '-2px',
            fontVariantNumeric: 'tabular-nums'
          }}>
            {name}
          </h1>

          <AnimatePresence>
            {phase === 'role' && (
              <motion.div
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ 
                  marginTop: '10px',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#06b6d4', // Cyan accent
                  textTransform: 'uppercase',
                  letterSpacing: '4px'
                }}
              >
                Web Developer
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Progress Bar */}
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '2px',
          background: 'rgba(255,255,255,0.1)',
          overflow: 'hidden'
        }}>
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'white'
            }}
          />
        </div>
      </motion.div>

      {/* Shutter Reveal Exit */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={phase === 'receding' ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'white', 
          zIndex: 2,
          transformOrigin: 'left'
        }}
      />

      <button
        onClick={onComplete}
        style={{
          position: 'absolute',
          bottom: '40px',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '8px 16px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          cursor: 'pointer',
          borderRadius: '4px',
          zIndex: 10
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default StartingIntro;
