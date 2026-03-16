import { motion } from 'framer-motion';
import { FiTarget, FiCode, FiZap, FiUsers, FiDownload } from 'react-icons/fi';

const items = [
    { Icon: FiTarget, color: '#d4af37', title: 'Problem Solving Mindset', desc: 'I enjoy breaking down complex problems and building logical and efficient solutions using programming and algorithms.', tag: 'Mindset' },
    { Icon: FiCode, color: '#94a3b8', title: 'Clean Code', desc: 'I focus on writing clean, readable and maintainable code with proper structure and best development practices.', tag: 'Quality' },
    { Icon: FiZap, color: '#d4af37', title: 'Fast Learner', desc: 'I quickly adapt to new technologies, tools and frameworks while continuously improving my development skills.', tag: 'Adaptability' },
    { Icon: FiUsers, color: '#94a3b8', title: 'Team Collaboration', desc: 'Comfortable using Git and GitHub for version control and working in collaborative development environments.', tag: 'Collaboration' },
];

export default function Experience() {
    return (
        <section id="experience" style={{ padding: '120px 24px', background: 'transparent' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Value Proposition</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: '#f8fafc', letterSpacing: '-1.5px' }}>What I Bring.</h2>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.05)' }} />
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
                    {items.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                            style={{ background: '#111112', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', padding: '40px', transition: '0.4s ease' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: item.color + '10', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: `1px solid ${item.color}20` }}>
                                <item.Icon size={18} style={{ color: item.color }} />
                            </div>
                            <p style={{ fontSize: '10px', fontWeight: '800', color: item.color, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>{item.tag}</p>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', marginBottom: '16px' }}>{item.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Resume Banner */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    style={{ padding: '80px 40px', background: '#111112', border: '1px solid rgba(212, 175, 55, 0.1)', borderRadius: '4px', textAlign: 'center' }}
                >
                    <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#f8fafc', marginBottom: '16px' }}>Ready for the next challenge.</h3>
                    <p style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Exploring full-time opportunities where I can contribute to high-impact engineering teams.</p>
                    <a href="/resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'transparent', color: '#d4af37', border: '1px solid #d4af37', padding: '16px 40px', borderRadius: '4px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.4s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <FiDownload /> Get Full Résumé
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
