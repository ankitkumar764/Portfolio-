import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiCode, FiArrowDown, FiYoutube } from 'react-icons/fi';

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    padding: 120px 24px 80px;
                    background: transparent;
                }

                .hero-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 60px;
                    position: relative;
                    z-index: 10;
                }

                .hero-content {
                    flex: 1.2;
                    min-width: 320px;
                }

                .hero-handwriting {
                    position: absolute;
                    top: -30px;
                    left: -20px;
                    color: var(--cyan);
                    font-size: 28px;
                    transform: rotate(-10deg);
                    z-index: 1;
                }

                .hero-polaroid-container {
                    position: relative;
                    cursor: pointer;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                /* Mobile & Tablet Responsiveness */
                @media (max-width: 1024px) {
                    .hero-container {
                        flex-direction: column;
                        text-align: center;
                        gap: 40px;
                        justify-content: center;
                    }

                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        flex: none;
                        width: 100%;
                    }

                    .hero-handwriting {
                        top: -45px;
                        left: 50%;
                        transform: translateX(-50%) rotate(-5deg);
                        font-size: 24px;
                        width: 100%;
                    }

                    .hero-polaroid-container {
                        width: 100%;
                        margin-top: 40px;
                    }
                    
                    .hero-intro-text {
                        border-left: none !important;
                        padding-left: 0 !important;
                        border-top: 4px solid black;
                        padding-top: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        padding: 100px 16px 60px;
                    }
                    .hero-container {
                        gap: 32px;
                    }
                    .hero-handwriting {
                        font-size: 20px;
                    }
                }
            `}</style>

            <div className="hero-container">

                <motion.div className="hero-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                    
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                        <span className="handwriting hero-handwriting">
                            Oh, hi there!
                        </span>
                        <div className="neo-brutalist" style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--gold)', fontWeight: '700' }}>
                            AVAILABLE FOR WORK
                        </div>
                    </div>

                    <h1 style={{ fontSize: 'clamp(56px, 8vw, 100px)', fontWeight: '800', lineHeight: '1', letterSpacing: '-2px', marginBottom: '32px', color: 'var(--pure-black)', textTransform: 'uppercase' }}>
                        DESIGN DRIVEN <br />
                        <span style={{ color: 'white', textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>FULLSTACK</span> DEV
                    </h1>

                    <p className="hero-intro-text" style={{ color: 'var(--text)', fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: '1.6', marginBottom: '48px', maxWidth: '600px', fontWeight: '500', borderLeft: '4px solid black', paddingLeft: '20px' }}>
                        I'm <span style={{ fontWeight: '800', background: 'var(--gold)', padding: '0 4px' }}>Ankit Kumar</span>, an engineer specialized in building high-performance, analog, and brutally honest digital experiences.
                    </p>

                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '56px', justifyContent: 'inherit' }}>
                        <Link to="projects" smooth duration={800}>
                            <button className="neo-brutalist-button">
                                Explore Projects <FiArrowDown />
                            </button>
                        </Link>
                        <Link to="contact" smooth duration={800}>
                            <button className="neo-brutalist" style={{ padding: '12px 24px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>
                                Let's Talk
                            </button>
                        </Link>
                    </div>

                    {/* Social icons */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'inherit' }}>
                        {[
                            { icon: <FiGithub size={24} />, href: 'https://github.com/ankitkumar764', label: 'GitHub' },
                            { icon: <FiLinkedin size={24} />, href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/', label: 'LinkedIn' },
                            { icon: <FiCode size={24} />, href: 'https://leetcode.com/u/AnkitKumaar/', label: 'LeetCode' },
                            { icon: <FiYoutube size={24} />, href: 'https://youtube.com/@ankitkumar-r1k6z?si=A0xkKkyya8Bwied1', label: 'YouTube' },
                        ].map((link, i) => (
                            <motion.a key={i} href={link.href} target="_blank" rel="noreferrer" 
                                className="neo-brutalist"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', color: 'black', background: i % 2 === 0 ? 'var(--cyan)' : 'var(--gold)' }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Profile Polaroid */}
                <motion.div
                    className="hero-polaroid-container"
                    initial={{ opacity: 0, y: 50, rotate: 10 }}
                    animate={{ opacity: 1, y: 0, rotate: 3 }}
                    whileHover={{ rotate: -2, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                    <div className="neo-brutalist" style={{ position: 'relative', width: 'min(400px, 90vw)', height: 'min(500px, 110vw)', background: 'white', padding: '16px 16px 80px 16px' }}>
                        {/* Tape effect */}
                        <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)', width: '120px', height: '40px', background: 'rgba(255,255,255,0.8)', border: '1px solid #ccc', boxShadow: '1px 1px 3px rgba(0,0,0,0.1)' }} />
                        
                        <img src="/profile.jpg" alt="Ankit Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '3px solid black', filter: 'grayscale(100%) contrast(1.2)' }} />
                        
                        <span className="handwriting" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', fontSize: '32px', color: 'black', whiteSpace: 'nowrap' }}>
                            That's me!
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

