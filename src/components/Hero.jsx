import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiCode, FiArrowDown } from 'react-icons/fi';
import ParticleCanvas from './ParticleCanvas';

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
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)', filter: 'blur(80px)' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(148, 163, 184, 0.02) 0%, transparent 70%)', filter: 'blur(80px)' }} />
            </motion.div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '80px', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>

                {/* Text Content with 3D Mouse Parallax + Scroll Parallax */}
                <motion.div style={{ flex: '1', minWidth: '300px', perspective: '1000px', y: textY }}>
                    <motion.div 
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateX: mousePosition.x, rotateY: mousePosition.y }}
                        transition={{ type: 'spring', stiffness: 75, damping: 15, mass: 0.5 }}
                    >
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ transform: 'translateZ(50px)' }}>
                            <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
                                Full Stack Engineer
                            </p>

                            <h1 style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-2px', marginBottom: '32px', color: '#f8fafc',  minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span>Hi, I'm Ankit</span>
                                <span style={{ 
                                    background: 'linear-gradient(90deg, #d4af37, #fef08a, #d4af37)', 
                                    WebkitBackgroundClip: 'text', 
                                    WebkitTextFillColor: 'transparent', 
                                    backgroundSize: '200% auto', 
                                    animation: 'shine 4s linear infinite',
                                    display: 'inline-block',
                                    marginTop: '8px'
                                }}>
                                    <Typewriter phrases={['— I build apps.', '— I solve problems.', '— I create experiences.']} delay={60} />
                                </span>
                            </h1>

                            <p style={{ color: '#94a3b8', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6', marginBottom: '56px', maxWidth: '600px', fontWeight: '400' }}>
                                I'm a BE student at Swaminarayan University X CG, specializing in clean, responsive Full Stack Web Development.
                            </p>

                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
                                <Link to="projects" smooth duration={800}>
                                    <button style={{
                                        background: '#d4af37', border: 'none', borderRadius: '4px', padding: '18px 36px',
                                        color: '#0a0a0b', fontSize: '14px', fontWeight: '700', cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)', textTransform: 'uppercase', letterSpacing: '1px'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.3)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)'; }}
                                    >
                                        View My Work
                                    </button>
                                </Link>
                                <Link to="contact" smooth duration={800}>
                                    <button style={{
                                        background: 'transparent', border: '1px solid rgba(248, 250, 252, 0.2)', borderRadius: '4px', padding: '17px 35px',
                                        color: '#f8fafc', fontSize: '14px', fontWeight: '700', cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textTransform: 'uppercase', letterSpacing: '1px'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(248, 250, 252, 0.2)'; }}
                                    >
                                        Contact Me
                                    </button>
                                </Link>
                            </div>

                            {/* Social icons */}
                            <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
                                {[
                                    { icon: <FiGithub size={20} />, href: 'https://github.com/ankitkumar764', label: 'GitHub' },
                                    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/', label: 'LinkedIn' },
                                    { icon: <FiCode size={20} />, href: 'https://leetcode.com/u/AnkitKumaar/', label: 'LeetCode' },
                                ].map((link, i) => (
                                    <motion.a key={i} href={link.href} target="_blank" rel="noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + (i * 0.1) }}
                                        style={{ color: '#64748b', transition: '0.3s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
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
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1, rotateX: mousePosition.x * 0.5, rotateY: mousePosition.y * 0.5 }} 
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], rotateX: { type: 'spring', stiffness: 75, damping: 15 }, rotateY: { type: 'spring', stiffness: 75, damping: 15 } }} 
                    style={{ position: 'relative', transformStyle: 'preserve-3d', perspective: '1000px', y: imageY }}
                >
                    <div style={{ position: 'relative', width: '380px', height: '500px', transform: 'translateZ(30px)' }}>
                        <div style={{ position: 'absolute', inset: '20px -20px -20px 20px', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '4px', zIndex: 0, transform: 'translateZ(-20px)' }} />

                        <div style={{
                            width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', zIndex: 2, position: 'relative',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <img src="/profile.jpg" alt="Ankit Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 10, 11, 0.4), transparent 50%)' }} />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - Fades out on scroll */}
            <motion.div
                animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                style={{ opacity: bgOpacity, position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
                <FiArrowDown size={14} />
            </motion.div>
        </section>
    );
}
