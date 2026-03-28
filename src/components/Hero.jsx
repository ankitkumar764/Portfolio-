import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiCode, FiArrowDown } from 'react-icons/fi';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}<span className="cursor-blink">|</span></span>;
};

export default function Hero() {
    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 80px', background: 'transparent' }}>

            {/* ── Background: Very subtle soft gradients ── */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)', filter: 'blur(80px)' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(148, 163, 184, 0.02) 0%, transparent 70%)', filter: 'blur(80px)' }} />
                
                {/* Floating Gold Dust Particles */}
                {[...Array(15)].map((_, i) => {
                    const randomX = (i * 17) % 100;
                    const randomY = (i * 23) % 100;
                    const randomSize = (i % 3) + 2;
                    const randomDuration = (i % 5) + 4;
                    const randomDelay = (i % 3);
                    
                    return (
                        <motion.div
                            key={`dust-${i}`}
                            animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.1, 0.8, 0.1] }}
                            transition={{ duration: randomDuration, repeat: Infinity, ease: "easeInOut", delay: randomDelay }}
                            style={{ position: 'absolute', top: `${randomY}%`, left: `${randomX}%`, width: `${randomSize}px`, height: `${randomSize}px`, background: '#d4af37', borderRadius: '50%', boxShadow: '0 0 12px rgba(212,175,55,0.8)' }}
                        />
                    );
                })}
            </div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '80px', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>

                {/* Text Content */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
                            Full Stack Engineer
                        </p>

                        <h1 style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-2px', marginBottom: '32px', color: '#f8fafc' }}>
                            Hi, I'm Ankit <br />
                            <span style={{ 
                                background: 'linear-gradient(90deg, #d4af37, #fef08a, #d4af37)', 
                                WebkitBackgroundClip: 'text', 
                                WebkitTextFillColor: 'transparent', 
                                backgroundSize: '200% auto', 
                                animation: 'shine 4s linear infinite',
                                display: 'inline-block',
                                marginTop: '12px'
                            }}>
                                <Typewriter text="— I build scalable web apps" delay={60} />
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
                </div>

                {/* Profile with refined elevation */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', width: '380px', height: '500px' }}>
                        {/* Subtle background frame */}
                        <div style={{ position: 'absolute', inset: '20px -20px -20px 20px', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '4px', zIndex: 0 }} />

                        <div style={{
                            width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', zIndex: 2, position: 'relative',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <img src="/profile.jpg" alt="Ankit Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {/* Soft overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 10, 11, 0.4), transparent 50%)' }} />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
                <FiArrowDown size={14} />
            </motion.div>
        </section>
    );
}
