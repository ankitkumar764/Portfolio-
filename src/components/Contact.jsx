import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiArrowRight } from 'react-icons/fi';
import confetti from 'canvas-confetti';

const AnimatedInput = ({ label, type = "text", rows }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const isActive = isFocused || value !== '';

    return (
        <div style={{ position: 'relative', marginBottom: rows ? '48px' : '40px' }}>
            <motion.label 
                animate={{ 
                    y: isActive ? -28 : 12, 
                    fontSize: isActive ? '11px' : '15px',
                    color: isActive ? 'var(--gold)' : 'var(--text-mut)'
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{ 
                    position: 'absolute', 
                    left: 0, 
                    pointerEvents: 'none', 
                    textTransform: isActive ? 'uppercase' : 'none', 
                    letterSpacing: isActive ? '2px' : 'inherit', 
                    fontWeight: isActive ? '800' : '500' 
                }}
            >
                {label}
            </motion.label>
            
            {rows ? (
                <textarea 
                    rows={rows} 
                    value={value}
                    required
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ 
                        width: '100%', background: 'transparent', border: 'none', 
                        borderBottom: `2px solid ${isFocused ? 'var(--gold)' : 'var(--border)'}`, 
                        padding: '12px 0 8px', color: 'var(--text)', outline: 'none', 
                        resize: 'none', transition: 'border-color 0.3s',
                        fontFamily: 'inherit', fontSize: '15px'
                    }}
                />
            ) : (
                <input 
                    type={type} 
                    value={value}
                    required
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ 
                        width: '100%', background: 'transparent', border: 'none', 
                        borderBottom: `2px solid ${isFocused ? 'var(--gold)' : 'var(--border)'}`, 
                        padding: '12px 0 8px', color: 'var(--text)', outline: 'none', 
                        transition: 'border-color 0.3s',
                        fontFamily: 'inherit', fontSize: '15px'
                    }}
                />
            )}
        </div>
    );
};

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const contactInfo = [
        { label: 'Email', value: 'ak3185@gmail.com', href: 'mailto:ak3185@gmail.com', icon: <FiMail /> },
        { label: 'LinkedIn', value: 'Ankit Singh', href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/', icon: <FiLinkedin /> },
        { label: 'GitHub', value: 'ankitkumar764', href: 'https://github.com/ankitkumar764', icon: <FiGithub /> },
        { label: 'Location', value: 'Gandhinagar, Gujarat', href: null, icon: <FiMapPin /> },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            
            // Fire premium gold and white confetti
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#d4af37', '#f8fafc', '#1e1e20']
            });

            // Reset form after delay
            setTimeout(() => {
                setStatus('idle');
            }, 6000);
        }, 1500);
    };

    return (
        <section id="contact" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--gold)', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</p>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px' }}>Get In Touch.</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>

                    {/* Info Side */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginBottom: '32px', letterSpacing: '-0.5px' }}>Let's discuss your next project.</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                            {contactInfo.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '24px', textDecoration: 'none', transition: '0.3s', cursor: item.href ? 'pointer' : 'default' }}
                                    onMouseEnter={(e) => { if (item.href) e.currentTarget.style.transform = 'translateX(10px)'; }}
                                    onMouseLeave={(e) => { if (item.href) e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <div style={{ color: 'var(--bg)', background: 'var(--gold)', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', boxShadow: '0 8px 20px rgba(212,175,55,0.2)' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '11px', color: 'var(--text-mut)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '4px' }}>{item.label}</p>
                                        <p style={{ color: 'var(--text)', fontWeight: '600', fontSize: '16px' }}>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dynamic Form Side */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass-premium"
                        style={{ padding: '60px', borderRadius: '16px', border: '1px solid var(--border-strong)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden' }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'idle' && (
                                <motion.form 
                                    key="form"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                                    onSubmit={handleSubmit}
                                >
                                    <AnimatedInput label="Full Name" />
                                    <AnimatedInput label="Email Address" type="email" />
                                    <AnimatedInput label="Message Body" rows={4} />

                                    <button 
                                        type="submit"
                                        style={{
                                            width: '100%', background: 'var(--text)', border: '1px solid var(--border)', padding: '20px',
                                            color: 'var(--bg)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px',
                                            borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#0a0a0b'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.color = 'var(--bg)'; }}
                                    >
                                        Send Message <FiArrowRight />
                                    </button>
                                </motion.form>
                            )}

                            {status === 'loading' && (
                                <motion.div 
                                    key="loading"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '380px' }}
                                >
                                    <motion.div 
                                        animate={{ rotate: 360 }} 
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        style={{ width: '40px', height: '40px', border: '3px solid var(--border)', borderTop: '3px solid var(--gold)', borderRadius: '50%' }}
                                    />
                                    <p style={{ marginTop: '24px', color: 'var(--text-dim)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>
                                        Sending...
                                    </p>
                                </motion.div>
                            )}

                            {status === 'success' && (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} 
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '380px', textAlign: 'center' }}
                                >
                                    <svg width="100" height="100" viewBox="0 0 50 50">
                                        <motion.circle 
                                            cx="25" cy="25" r="20" fill="none" stroke="var(--gold)" strokeWidth="3"
                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                        <motion.path 
                                            d="M15 25 L22 32 L35 17" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                        />
                                    </svg>
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                                        style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', marginTop: '24px', letterSpacing: '-0.5px' }}
                                    >
                                        Message Sent!
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} 
                                        style={{ color: 'var(--text-mut)', marginTop: '8px', lineHeight: '1.6' }}
                                    >
                                        Thank you for reaching out.<br/>I'll get back to you shortly.
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
