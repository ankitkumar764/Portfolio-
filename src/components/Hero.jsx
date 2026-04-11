import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiCode, FiArrowDown } from 'react-icons/fi';
import ParticleCanvas from './ParticleCanvas';
import Hero3D from './Hero3D';
import confetti from 'canvas-confetti';

const Typewriter = ({ phrases, typingSpeed = 70, deletingSpeed = 40, pauseTime = 1500 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timer;
        const currentPhrase = phrases[loopNum % phrases.length];
        
        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentPhrase.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setText(currentPhrase.substring(0, text.length + 1));
                if (text.length === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }, typingSpeed);
        }
        return () => clearTimeout(timer);
    }, [text, isDeleting, phrases, loopNum, typingSpeed, deletingSpeed, pauseTime]);

    return <span>{text}<span className="cursor-blink">|</span></span>;
};

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isSpinning, setIsSpinning] = useState(false);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;
        // Map pointer position to -15deg to 15deg rotation
        const rotateY = ((clientX / width) - 0.5) * 30;
        const rotateX = ((clientY / height) - 0.5) * -30;
        setMousePosition({ x: rotateX, y: rotateY });
    };

    // Parallax Scroll Hooks
    const { scrollY } = useScroll();
    
    // Apple-style Parallax Values
    // Background moves down (slow scroll illusion)
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
    const bgOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    
    // Text moves up fast
    const textY = useTransform(scrollY, [0, 1000], [0, -250]);
    
    // Image moves up semi-fast but slower than text
    const imageY = useTransform(scrollY, [0, 1000], [0, -50]);

    return (
        <section id="home" onMouseMove={handleMouseMove} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 80px', background: 'transparent', perspective: '1000px' }}>

            {/* Immersive Background Elements with Parallax Scroll */}
            <motion.div style={{ position: 'absolute', inset: 0, y: bgY, opacity: bgOpacity, pointerEvents: 'none' }}>
                <ParticleCanvas />
                <Hero3D />
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />
            </motion.div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap-reverse', position: 'relative', zIndex: 10 }}>

                {/* Text Content with 3D Mouse Parallax + Scroll Parallax */}
                <motion.div style={{ flex: '1.2', minWidth: '320px', perspective: '1000px', y: textY }}>
                    <motion.div 
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateX: mousePosition.x, rotateY: mousePosition.y }}
                        transition={{ type: 'spring', stiffness: 75, damping: 15, mass: 0.5 }}
                    >
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ transform: 'translateZ(50px)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--cyan)' }} />
                                <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                    Available for work
                                </p>
                            </div>

                            <h1 style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-3px', marginBottom: '24px', color: 'var(--text)', display: 'flex', flexDirection: 'column' }}>
                                <span>Design driven</span>
                                <span style={{ 
                                    background: 'linear-gradient(90deg, var(--cyan), #818cf8, var(--cyan))', 
                                    WebkitBackgroundClip: 'text', 
                                    WebkitTextFillColor: 'transparent', 
                                    backgroundSize: '200% auto', 
                                    animation: 'shine 4s linear infinite',
                                    display: 'inline-block'
                                }}>
                                    Fullstack Dev
                                </span>
                            </h1>

                            <p style={{ color: 'var(--text-dim)', fontSize: 'clamp(17px, 2vw, 21px)', lineHeight: '1.6', marginBottom: '48px', maxWidth: '600px', fontWeight: '400' }}>
                                I'm <span style={{ color: 'var(--text)', fontWeight: '600' }}>Ankit Kumar</span>, a Full Stack Engineer specialized in building high-performance, visually stunning digital experiences.
                            </p>

                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '56px' }}>
                                <Link to="projects" smooth duration={800}>
                                    <button style={{
                                        background: 'var(--cyan)', border: 'none', borderRadius: '12px', padding: '20px 40px',
                                        color: '#fff', fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)', letterSpacing: '0.5px'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.4)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.3)'; }}
                                    >
                                        Explore Projects
                                    </button>
                                </Link>
                                <Link to="contact" smooth duration={800}>
                                    <button style={{
                                        background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-strong)', borderRadius: '12px', padding: '19px 39px',
                                        color: 'var(--text)', fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', backdropFilter: 'blur(10px)'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.borderColor = 'var(--cyan)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                                    >
                                        Let's Talk
                                    </button>
                                </Link>
                            </div>

                            {/* Social icons */}
                            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                                {[
                                    { icon: <FiGithub size={22} />, href: 'https://github.com/ankitkumar764', label: 'GitHub' },
                                    { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/', label: 'LinkedIn' },
                                    { icon: <FiCode size={22} />, href: 'https://leetcode.com/u/AnkitKumaar/', label: 'LeetCode' },
                                ].map((link, i) => (
                                    <motion.a key={i} href={link.href} target="_blank" rel="noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + (i * 0.1) }}
                                        style={{ color: 'var(--text-dim)', transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.background = 'rgba(6, 182, 212, 0.05)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Profile with refined elevation + Mouse Tilt + Scroll Parallax */}
                <motion.div 
                    onDoubleClick={() => {
                        setIsSpinning(true);
                        setTimeout(() => setIsSpinning(false), 2000);
                        confetti({ particleCount: 80, spread: 70, origin: { y: 0.4 }, colors: ['#06b6d4', '#f8fafc', '#0f172a'] });
                    }}
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateX: isSpinning ? 360 : mousePosition.x * 0.5, 
                        rotateY: isSpinning ? 720 : mousePosition.y * 0.5 
                    }} 
                    transition={{ 
                        duration: isSpinning ? 2 : 1.2, 
                        ease: [0.16, 1, 0.3, 1], 
                        rotateX: { type: 'spring', stiffness: 75, damping: 15 }, 
                        rotateY: { type: 'spring', stiffness: 75, damping: 15 } 
                    }} 
                    style={{ position: 'relative', transformStyle: 'preserve-3d', perspective: '1000px', y: imageY, cursor: 'crosshair', flex: '1', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{ position: 'relative', width: 'min(400px, 90vw)', height: 'min(520px, 120vw)', transform: 'translateZ(30px)' }}>
                        {/* Decorative Background Frames */}
                        <div style={{ position: 'absolute', inset: '-20px', border: '1px solid var(--cyan)', borderRadius: '24px', opacity: 0.2, transform: 'translateZ(-40px) rotate(3deg)' }} />
                        <div style={{ position: 'absolute', inset: '-20px', border: '1px solid var(--border-strong)', borderRadius: '24px', opacity: 0.4, transform: 'translateZ(-20px) rotate(-3deg)' }} />

                        <div style={{
                            width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden', zIndex: 2, position: 'relative',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.5)', border: '1px solid var(--border-strong)',
                            background: 'rgba(var(--bg-rgb), 0.5)', backdropFilter: 'blur(10px)'
                        }}>
                            <img src="/profile.jpg" alt="Ankit Singh" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'luminosity', filter: 'contrast(1.1) brightness(0.9)' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-rgb), 0.8), transparent 60%)' }} />
                            
                            {/* Floating Stats or Tags inside the image container */}
                            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', display: 'flex', gap: '12px' }}>
                                <div style={{ background: 'rgba(6, 182, 212, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: '600', color: 'var(--cyan)' }}>
                                    Full Stack
                                </div>
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: '600', color: 'var(--text)' }}>
                                    UI/UX
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - Fades out on scroll */}
            <motion.div
                animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                style={{ opacity: bgOpacity, position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-mut)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
                <FiArrowDown size={14} />
            </motion.div>
        </section>
    );
}
