import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: '#d4af37',
      height: 8,
      width: 8,
      borderRadius: '50%',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: 'rgba(212, 175, 55, 0.2)',
      border: '1px solid #d4af37',
      height: 48,
      width: 48,
      borderRadius: '50%',
      mixBlendMode: 'difference'
    }
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
}
