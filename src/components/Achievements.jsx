import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const achievements = [
    {
        title: 'Problem Solver of the Month',
        org: 'Swaminarayan University',
        date: 'February 2024',
        desc: 'Recognized for excellent performance in logical reasoning and competitive programming challenges.',
        icon: <FiAward size={24} color="var(--gold)" />,
    },
    {
        title: 'Top 10 Finalist - Code-A-Thon',
        org: 'Major League Hacking (MLH)',
        date: 'December 2023',
        desc: 'Advanced to the final round among 500+ participants globally with a unique real-time collaboration tool.',
        icon: <FiStar size={24} color="var(--cyan)" />,
    },
    {
        title: 'Open Source Contributor',
        org: 'GitHub Community',
        date: 'Ongoing',
        desc: 'Actively contributing to various open-source projects, improving documentation and fixing UI bugs.',
        icon: <FiTrendingUp size={24} color="#10b981" />,
    },
    {
        title: 'Postman Certified API Student',
        org: 'Postman',
        date: 'January 2024',
        desc: 'Demonstrated proficiency in API testing, documentation, and mock server creation.',
        icon: <FiCheckCircle size={24} color="#FF6C37" />,
    }
];

export default function Achievements() {
    return (
        <section id="achievements" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Milestones
                    </p>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px' }}>
                        Awards & <span style={{ color: 'var(--cyan)' }}>Achievements.</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ 
                                padding: '40px', 
                                background: 'rgba(255, 255, 255, 0.03)', 
                                border: '1px solid var(--border)', 
                                borderRadius: '24px',
                                backdropFilter: 'blur(10px)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ 
                                width: '60px', 
                                height: '60px', 
                                borderRadius: '16px', 
                                background: 'rgba(255, 255, 255, 0.05)', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginBottom: '24px',
                                border: '1px solid var(--border)' 
                            }}>
                                {item.icon}
                            </div>
                            
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)', marginBottom: '8px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--cyan)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>
                                {item.org} • {item.date}
                            </p>
                            
                            <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '1.6' }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background Accent */}
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--cyan-muted) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0.2, pointerEvents: 'none' }} />
        </section>
    );
}
