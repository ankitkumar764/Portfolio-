import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component for falling binary data bits
const DataFlux = () => {
  const bits = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 7,
    value: Math.random() > 0.5 ? '1' : '0'
  })), []);

  return (
    <div className="data-flux-container">
      {bits.map(bit => (
        <motion.span
          key={bit.id}
          className="data-bit"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 0.4, 0] }}
          transition={{
            duration: bit.duration,
            repeat: Infinity,
            delay: bit.delay,
            ease: "linear"
          }}
          style={{ left: bit.left }}
        >
          {bit.value}
        </motion.span>
      ))}
    </div>
  );
};

const RoboticWelcome = ({ onComplete }) => {
  const [phase, setPhase] = useState('booting'); 
  const [nameText, setNameText] = useState('');
  const [isDestructive, setIsDestructive] = useState(false);
  const fullName = "ANKIT KUMAR";

  // Trigger destructive jitter on name reveal
  useEffect(() => {
    if (phase === 'reveal') {
      setIsDestructive(true);
      setTimeout(() => setIsDestructive(false), 2000);
    }
  }, [phase]);

  // Deciphering name logic
  useEffect(() => {
    if (phase === 'reveal') {
      let iteration = 0;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?;";
      const interval = setInterval(() => {
        setNameText(fullName.split("").map((letter, index) => {
          if (index < iteration) return fullName[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(""));

        if (iteration >= fullName.length) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 2500);
        }
        iteration += 0.25; 
      }, 35);
      return () => clearInterval(interval);
    }
  }, [phase, onComplete]);

  return (
    <motion.div 
      className={`robotic-container destructive-mode ${isDestructive ? 'vibrating' : ''}`}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5, filter: "brightness(3) blur(30px)" }}
      transition={{ duration: 0.5 }}
    >
      <DataFlux />

      {/* Full Screen Circuitry */}
      <div className="neural-circuitry-container">
        <svg viewBox="0 0 1000 1000" className="circuit-svg">
          <motion.path
            d="M0,100 L200,100 L250,150 L250,300 L300,350 L800,350 L850,400"
            className="circuit-line"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M1000,900 L800,900 L750,850 L750,700 L700,650 L200,650 L150,600"
            className="circuit-line"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.path
            d="M100,0 L100,200 L150,250 L400,250"
            className="circuit-line"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </svg>
      </div>

      {/* Grid and HUD elements */}
      <div className="perspective-grid-container">
        <div className="perspective-grid"></div>
      </div>

      <div className="hud-brackets">
        <div className="bracket tl"></div>
        <div className="bracket tr"></div>
        <div className="bracket bl"></div>
        <div className="bracket br"></div>
      </div>

      <div className="terminal-scanline"></div>
      <div className="terminal-noise-css"></div>
      
      <div className="terminal-content destructive-impact">
        <AnimatePresence mode="wait">
          {phase === 'booting' && (
            <motion.div 
              key="boot"
              className="destructive-log-box"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              onAnimationComplete={() => setTimeout(() => setPhase('reveal'), 3000)}
            >
              <div className="destructive-header">SYS_ANOMALY_DETECTED</div>
              <div className="boot-logs">
                <p>CORRUPTING_MEM_BLOCKS...</p>
                <p>BYPASSING_FIREWALL... [LOCK_BROKEN]</p>
                <p>INITIALIZING_DESTRUCTION_PROTOCOL...</p>
                <p>TARGET: ANKIT_KUMAR</p>
              </div>
              <div className="destructive-progress">
                <motion.div 
                  className="destructive-progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}

          {phase === 'reveal' && (
            <motion.div 
              key="reveal"
              className="destructive-name-reveal"
              initial={{ opacity: 0, scale: 0.5, letterSpacing: "50px" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "12px" }}
              transition={{ type: "spring", damping: 12 }}
            >
              <h1 className="aggressive-glitch-text" data-text={nameText}>
                {nameText}
              </h1>
              <div className="identity-verified">IDENTITY: OVERRIDE_SUCCESS</div>
            </motion.div>
          )}
        </AnimatePresence>

        <button className="destructive-skip-btn" onClick={onComplete}>
          // OVERRIDE_SYSTEM
        </button>
      </div>
    </motion.div>
  );
};

export default RoboticWelcome;
