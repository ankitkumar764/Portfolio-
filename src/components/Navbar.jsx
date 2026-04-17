import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: '/certificates', isRoute: true },
    { name: 'Hackathons', to: 'hackathons' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, changeTheme } = useContext(ThemeContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (to, isRoute) => {
        setIsOpen(false);
        if (isRoute) {
            navigate(to);
        } else if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: to } });
        }
    };

    // Handle scroll after navigation to Home
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const target = location.state.scrollTo;
            setTimeout(() => {
                scroller.scrollTo(target, {
                    smooth: true,
                    duration: 800,
                    offset: -80,
                });
            }, 100);
            // Clear state so it doesn't scroll again on refresh
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const isHome = location.pathname === '/';

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            background: scrolled ? 'rgba(var(--bg-rgb), 0.7)' : 'transparent',
            backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-strong)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: scrolled ? '12px 0' : '24px 0',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Signature Logo */}
                <RouterLink to="/" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="AS Logo" style={{ height: '45px', width: 'auto', borderRadius: '8px' }} />
                    </motion.div>
                </RouterLink>

                {/* Minimal Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
                    {navLinks.map((link) => (
                        link.isRoute ? (
                            <RouterLink 
                                key={link.name} 
                                to={link.to}
                                style={{ 
                                    textDecoration: 'none',
                                    color: location.pathname === link.to ? 'var(--cyan)' : 'var(--text-dim)', 
                                    fontSize: '14px', 
                                    fontWeight: '500', 
                                    transition: '0.4s ease' 
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = location.pathname === link.to ? 'var(--cyan)' : 'var(--text-dim)'; }}
                            >
                                {link.name}
                            </RouterLink>
                        ) : (
                            isHome ? (
                                <ScrollLink key={link.name} to={link.to} smooth duration={800} offset={-80}
                                    style={{ cursor: 'pointer', color: 'var(--text-dim)', fontSize: '14px', fontWeight: '500', transition: '0.4s ease', position: 'relative' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; }}
                                >
                                    {link.name}
                                </ScrollLink>
                            ) : (
                                <button 
                                    key={link.name} 
                                    onClick={() => handleNavClick(link.to, false)}
                                    style={{ 
                                        background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)', fontSize: '14px', fontWeight: '500', padding: 0, font: 'inherit'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; }}
                                >
                                    {link.name}
                                </button>
                            )
                        )
                    ))}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    
                    {/* Mobile Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="show-mobile" style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: '8px' }}>
                        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        style={{ position: 'fixed', top: '0', left: 0, right: 0, bottom: 0, background: 'rgba(var(--bg-rgb), 0.95)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', zIndex: 999 }}
                    >
                        <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
                            <FiX size={32} />
                        </button>
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <RouterLink 
                                    key={link.name} 
                                    to={link.to} 
                                    onClick={() => setIsOpen(false)}
                                    style={{ color: 'var(--text)', fontSize: '28px', fontWeight: '700', letterSpacing: '-1px', textDecoration: 'none' }}
                                >
                                    {link.name}
                                </RouterLink>
                            ) : (
                                isHome ? (
                                    <ScrollLink key={link.name} to={link.to} smooth onClick={() => setIsOpen(false)}
                                        style={{ color: 'var(--text)', fontSize: '28px', fontWeight: '700', letterSpacing: '-1px', cursor: 'pointer' }}>
                                        {link.name}
                                    </ScrollLink>
                                ) : (
                                    <button 
                                        key={link.name} 
                                        onClick={() => handleNavClick(link.to, false)}
                                        style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '28px', fontWeight: '700', letterSpacing: '-1px', cursor: 'pointer' }}
                                    >
                                        {link.name}
                                    </button>
                                )
                            )
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

