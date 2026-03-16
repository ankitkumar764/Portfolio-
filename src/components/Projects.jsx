import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
    {
        num: '01', featured: true,
        title: 'Gemini AI Clone',
        desc: 'An advanced replicate of Google Gemini\'s generative interface. Focused on minimalist chat architecture and seamless response flows.',
        tech: ['React', 'Framer Motion', 'Tailwind'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://geminii-clone-ankit-singh.netlify.app/',
    },
    {
        num: '02', featured: true,
        title: 'Udan — Airline Platform',
        desc: 'A professional airline booking interface with flight telemetry, passenger management, and responsive search results.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://udan-clone-ankit-singh.netlify.app/',
    },
    {
        num: '03', featured: true,
        title: 'Practo Clone',
        desc: 'Healthcare listing and appointment system with ڈاکٹر search loops and clinical management interfaces.',
        tech: ['React', 'Context API', 'CSS Modules'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://practo-clone-ankit-singh.netlify.app/',
    },
    {
        num: '04', featured: false,
        title: 'OYO Habitat Clone',
        desc: 'Boutique hotel booking platform featuring city-based filtering, room detailed views, and refined booking journeys.',
        tech: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://oyo-clone-ankit-singh.netlify.app/',
    },
    {
        num: '05', featured: false,
        title: 'Bombay Closet — Fashion',
        desc: 'Elegant e-commerce store with product discovery streams, category management, and cart functionality.',
        tech: ['React', 'Styled Components', 'Redux'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://bombay-closet-ankit-singh.netlify.app/',
    },
    {
        num: '06', featured: false,
        title: 'Premium Coffee Hub',
        desc: 'Visually rich brand experience with animated product menus and immersive storytelling layouts.',
        tech: ['HTML', 'CSS3', 'Vanilla JS'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://coffee-clone-ankit-singh.netlify.app/',
    },
];

const thumb = (url) => `https://image.thum.io/get/width/800/crop/500/noanimate/${url}`;
const featured = projects.filter(p => p.featured);

export default function Projects() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive(prev => (prev + 1) % featured.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const p = featured[active];

    return (
        <section id="projects" style={{ padding: '120px 24px', background: 'transparent' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Projects</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: '#f8fafc', letterSpacing: '-1.5px' }}>Selected Works.</h2>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.05)' }} />
                    </div>
                </motion.div>

                {/* Featured - Refined Split Layout */}
                <div style={{ marginBottom: '100px' }}>
                    <div style={{ background: '#111112', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', minHeight: '500px', display: 'flex', flexWrap: 'wrap' }}>
                        {/* Image side */}
                        <div style={{ flex: '1.2', minWidth: '320px', position: 'relative', overflow: 'hidden', background: '#000' }}>
                            <AnimatePresence mode="wait">
                                <motion.img key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
                                    src={thumb(p.live)} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', background: '#000' }} />
                            </AnimatePresence>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(17,17,18,0.8) 0%, transparent 40%)' }} />
                        </div>

                        {/* Info side */}
                        <div style={{ flex: '1', minWidth: '320px', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Featured Highlight</p>
                                <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#f8fafc', marginBottom: '24px' }}>{p.title}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>{p.desc}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                                    {p.tech.map(t => <span key={t} style={{ fontSize: '11px', color: '#94a3b8', padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Outfit', sans-serif" }}>{t}</span>)}
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <a href={p.live} target="_blank" rel="noreferrer" style={{ fontSize: '13px', fontWeight: '800', color: '#0a0a0b', background: '#d4af37', padding: '12px 28px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Live View</a>
                                    <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: '13px', fontWeight: '800', color: '#f8fafc', border: '1px solid rgba(248, 250, 252, 0.2)', padding: '12px 28px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>GitHub</a>
                                </div>
                            </motion.div>

                            <div style={{ display: 'flex', gap: '12px', marginTop: '60px' }}>
                                {featured.map((_, i) => (
                                    <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? '40px' : '8px', height: '4px', background: i === active ? '#d4af37' : '#2d2d30', border: 'none', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.4s' }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regular Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
                    {projects.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                            style={{ background: '#111112', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'; e.currentTarget.style.transform = 'translateY(-10px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            className="transition-smooth"
                        >
                            <div style={{ height: '220px', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={thumb(item.live)} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                            </div>
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#f8fafc', marginBottom: '12px' }}>{item.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>{item.desc}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <FiGithub color="#64748b" size={18} />
                                        <FiExternalLink color="#64748b" size={18} />
                                    </div>
                                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1px' }}>Explore</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '100px', width: '100%', textAlign: 'center' }}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
                    >
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 3vw, 26px)', fontStyle: 'italic', fontWeight: '500', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                            <span style={{ color: '#687b94' }}>"</span>
                            <span style={{ color: '#94a3b8' }}>You</span>{' '}
                            <span style={{ color: '#f8fafc' }}>have</span>{' '}
                            <span style={{ color: '#94a3b8' }}>the</span>{' '}
                            <motion.span whileHover={{ scale: 1.1, color: '#fcd34d' }} style={{ display: 'inline-block', color: '#d4af37', textShadow: '0 0 15px rgba(212,175,55,0.4)', cursor: 'default', transition: { duration: 0.2 } }}>right</motion.span>{' '}
                            <span style={{ color: '#94a3b8' }}>to</span>{' '}
                            <span style={{ color: '#f8fafc' }}>perform</span>{' '}
                            <span style={{ color: '#94a3b8' }}>your</span>{' '}
                            <motion.span whileHover={{ scale: 1.1, color: '#6ee7b7' }} style={{ display: 'inline-block', color: '#34d399', textShadow: '0 0 15px rgba(52,211,153,0.4)', cursor: 'default', transition: { duration: 0.2 } }}>actions,</motion.span>
                            <br className="hidden-mobile" />
                            <span style={{ color: '#94a3b8' }}>but</span>{' '}
                            <motion.span whileHover={{ scale: 1.1, color: '#fca5a5' }} style={{ display: 'inline-block', color: '#ef4444', textShadow: '0 0 15px rgba(239,68,68,0.4)', cursor: 'default', transition: { duration: 0.2 } }}>never</motion.span>{' '}
                            <span style={{ color: '#94a3b8' }}>to</span>{' '}
                            <span style={{ color: '#f8fafc' }}>the</span>{' '}
                            <motion.span whileHover={{ scale: 1.1, color: '#c084fc' }} style={{ display: 'inline-block', color: '#a78bfa', textShadow: '0 0 15px rgba(167,139,250,0.4)', cursor: 'default', transition: { duration: 0.2 } }}>fruits</motion.span>{' '}
                            <span style={{ color: '#94a3b8' }}>of</span>{' '}
                            <span style={{ color: '#f8fafc' }}>those</span>{' '}
                            <span style={{ color: '#94a3b8' }}>actions.</span>
                            <span style={{ color: '#687b94' }}>"</span>
                        </h3>
                        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} style={{ fontSize: '13px', color: '#64748b', fontWeight: '500', letterSpacing: '3px', textTransform: 'uppercase' }}>
                            — Words of <span style={{ color: '#d4af37', fontWeight: '700', letterSpacing: '4px' }}>Krishna</span> <span style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))', fontSize: '16px' }}>🪶</span>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
