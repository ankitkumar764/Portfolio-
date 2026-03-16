import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
    const contactInfo = [
        { label: 'Email', value: 'ak3185@gamil.com', href: 'mailto:ak3185@gamil.com', icon: <FiMail /> },
        { label: 'LinkedIn', value: 'Ankit Singh', href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/', icon: <FiLinkedin /> },
        { label: 'GitHub', value: 'ankitkumar764', href: 'https://github.com/ankitkumar764', icon: <FiGithub /> },
        { label: 'Location', value: 'Gandhinagar, Gujarat', href: null, icon: <FiMapPin /> },
    ];

    return (
        <section id="contact" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: '#d4af37', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</p>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '800', color: '#f8fafc', letterSpacing: '-1.5px' }}>Get In Touch.</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>

                    {/* Info Side */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#f8fafc', marginBottom: '32px' }}>Let's discuss your next project.</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                            {contactInfo.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '24px', textDecoration: 'none', transition: '0.3s' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <div style={{ color: '#d4af37', background: '#d4af3710', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '4px' }}>{item.label}</p>
                                        <p style={{ color: '#f8fafc', fontWeight: '600', fontSize: '16px' }}>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        style={{ padding: '60px', background: '#111112', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}
                    >
                        <div style={{ marginBottom: '32px' }}>
                            <label style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '12px' }}>Full Name</label>
                            <input type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '12px 0', color: '#f8fafc', outline: 'none', transition: '0.3s' }}
                                onFocus={(e) => e.target.style.borderBottomColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div style={{ marginBottom: '32px' }}>
                            <label style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '12px' }}>Email Address</label>
                            <input type="email" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '12px 0', color: '#f8fafc', outline: 'none', transition: '0.3s' }}
                                onFocus={(e) => e.target.style.borderBottomColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div style={{ marginBottom: '48px' }}>
                            <label style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '12px' }}>Message Body</label>
                            <textarea rows={4} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '12px 0', color: '#f8fafc', outline: 'none', resize: 'none', transition: '0.3s' }}
                                onFocus={(e) => e.target.style.borderBottomColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <button style={{
                            width: '100%', background: '#d4af37', border: 'none', padding: '20px',
                            color: '#0a0a0b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px',
                            borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            Send Message <FiArrowRight />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
