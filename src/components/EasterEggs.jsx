import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
];

export default function EasterEggs() {
    const [inputKeySequence, setInputKeySequence] = useState([]);
    const [isKonamiActive, setIsKonamiActive] = useState(false);

    useEffect(() => {
        // High-end Console Easter Egg
        console.log(
            '%c🚀 You found the hidden console message! \n%cI am a developer who loves building extraordinary digital experiences. \nTry entering the Konami Code on the site for a surprise!',
            'color: #d4af37; font-size: 20px; font-weight: bold; background: #0a0a0b; padding: 10px;',
            'color: #f8fafc; font-size: 14px; background: #0a0a0b; padding: 10px;'
        );
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            setInputKeySequence((prev) => {
                const newSequence = [...prev, e.key];
                if (newSequence.length > KONAMI_CODE.length) {
                    newSequence.shift(); // Keep array at exactly the length of Konami Code
                }
                
                // Validate sequence against the master sequence
                const isMatch = newSequence.length === KONAMI_CODE.length && newSequence.every((key, index) => key.toLowerCase() === KONAMI_CODE[index].toLowerCase() || key === KONAMI_CODE[index]);
                
                if (isMatch && !isKonamiActive) {
                    setIsKonamiActive(true);
                    triggerMegaConfetti();
                    setTimeout(() => setIsKonamiActive(false), 8000);
                }
                
                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isKonamiActive]);

    const triggerMegaConfetti = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Since particles fall down, start a bit higher than random
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#d4af37', '#f8fafc']
            });
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#d4af37', '#f8fafc']
            });
        }, 250);
    };

    return (
        <>
            <div style={{
                position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--gold)', color: 'var(--bg)', padding: '12px 24px',
                borderRadius: '8px', fontWeight: '800', zIndex: 9999,
                boxShadow: '0 10px 30px rgba(212,175,55,0.4)', textTransform: 'uppercase', letterSpacing: '2px',
                transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: isKonamiActive ? 1 : 0,
                pointerEvents: 'none'
            }}>
                🎉 Cheat Code Activated! 🎉
            </div>
        </>
    );
}
