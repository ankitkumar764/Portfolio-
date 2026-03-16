import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            background: scrolled ? 'rgba(10, 10, 11, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(15px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: scrolled ? '16px 0' : '32px 0',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Signature Logo */}
                <Link to="home" smooth duration={500} style={{ cursor: 'pointer' }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: '28px', letterSpacing: '-1px', display: 'flex', alignItems: 'baseline'
                        }}>
                            <span style={{ fontWeight: '800', color: '#f8fafc' }}>A</span>
                            <span style={{ fontWeight: '300', color: '#d4af37', marginLeft: '2px' }}>S</span>
                            <span style={{ color: '#d4af37', fontSize: '32px', lineHeight: '0', fontWeight: '800' }}>.</span>
                        </span>
                    </motion.div>
                </Link>

                {/* Minimal Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden-mobile">
                    {navLinks.map((link, i) => (
                        <Link key={link.name} to={link.to} smooth duration={800} offset={-80}
                            style={{ cursor: 'pointer', color: '#94a3b8', fontSize: '13px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', transition: '0.4s ease' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#d4af37'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="show-mobile" style={{ background: 'none', border: 'none', color: '#f8fafc', cursor: 'pointer' }}>
                    {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        style={{ position: 'fixed', top: '70px', left: 0, right: 0, background: '#0a0a0b', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '40px 24px', zIndex: 999 }}
                    >
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.to} smooth onClick={() => setIsOpen(false)}
                                style={{ display: 'block', padding: '16px 0', color: '#f8fafc', fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
        </header>
    );
}
