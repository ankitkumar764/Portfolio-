import { motion } from 'framer-motion';

export default function About() {
    const stats = [
        { value: '20+', label: 'Digital Products' },
        { value: '5+', label: 'Competitions' },
        { value: '3', label: 'Cloud certs' },
        { value: '100+', label: 'DSA Solved' },
    ];

    return (
        <section id="about" style={{ padding: '120px 24px', background: 'transparent' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>About Me</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: '#f8fafc', letterSpacing: '-1.5px' }}>My Approach.</h2>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.05)' }} />
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>

                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <p style={{ color: '#f8fafc', fontSize: '20px', lineHeight: '1.6', marginBottom: '24px', fontWeight: '500' }}>
                            Hi, I'm <span style={{ color: '#d4af37' }}>Ankit Singh</span>, pursuing my BE at Swaminarayan XCG.
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                            Currently pursuing a Bachelor of Engineering at Swaminarayan University X CG, Kalol, Ahmedabad (2025–2029). I am passionate about Full Stack Web Development and enjoy building clean, responsive, and user-friendly web applications.
                        </p>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px' }}>
                            I am constantly improving my skills in web development, problem-solving, and modern technologies. I believe in learning by building real-world projects. My goal is to become a skilled developer and contribute to impactful digital solutions.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            {[
                                { label: 'Focus', value: 'Full Stack Development' },
                                { label: 'Location', value: 'Gandhinagar, Gujarat' },
                            ].map(item => (
                                <div key={item.label}>
                                    <p style={{ fontSize: '11px', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', fontWeight: '800' }}>{item.label}</p>
                                    <p style={{ color: '#f8fafc', fontWeight: '600', fontSize: '14px' }}>{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {stats.map((s, i) => (
                            <motion.div key={i} whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.5)', boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)' }}
                                className="glass-premium"
                                style={{ borderRadius: '12px', padding: '40px 20px', textAlign: 'center', transition: 'all 0.4s ease', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                                <div style={{ fontSize: '40px', fontWeight: '800', color: '#f8fafc', marginBottom: '8px', fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
