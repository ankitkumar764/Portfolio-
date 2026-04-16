import { motion } from 'framer-motion';
import { FiFigma, FiExternalLink, FiEye } from 'react-icons/fi';

const designs = [
    {
        title: 'Modern E-commerce Dashboard',
        desc: 'A comprehensive dashboard for managing sales, inventory, and customer analytics with a glassmorphic aesthetic.',
        figmaLink: 'https://www.figma.com/community/file/1344445899478832049',
        preview: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Finance Tracker Mobile App',
        desc: 'Dark-themed mobile application for tracking personal expenses, crypto portfolio, and monthly budgets.',
        figmaLink: 'https://www.figma.com/community/file/1162343204123547612',
        preview: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Travel Experience Platform',
        desc: 'Immersive travel discovery platform focusing on storytelling and high-quality photography.',
        figmaLink: 'https://www.figma.com/community/file/1023456789012345678',
        preview: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    }
];

export default function FigmaDesigns() {
    return (
        <section id="figma" style={{ padding: '120px 24px', background: 'var(--bg-card-str)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>UI/UX Art</p>
                    </div>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
                        Figma <span style={{ color: 'var(--cyan)' }}>Archives_</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
                    {designs.map((design, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="neo-brutalist"
                            style={{ background: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                                <img src={design.preview} alt={design.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', opacity: 0, transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                                >
                                    <a href={design.figmaLink} target="_blank" rel="noreferrer" style={{ background: 'white', padding: '12px 24px', borderRadius: '4px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', color: 'black' }}>
                                        <FiFigma /> VIEW IN FIGMA
                                    </a>
                                </div>
                            </div>
                            
                            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: 'var(--text)' }}>{design.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>{design.desc}</p>
                                
                                <a href={design.figmaLink} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan)', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Inspect Design <FiExternalLink />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
