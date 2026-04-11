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
                    fontSize: isActive ? '12px' : '15px',
                    color: isActive ? 'var(--cyan)' : 'var(--text-mut)'
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{ 
                    position: 'absolute', 
                    left: 0, 
                    pointerEvents: 'none', 
                    textTransform: isActive ? 'uppercase' : 'none', 
                    letterSpacing: isActive ? '2px' : 'inherit', 
                    fontWeight: isActive ? '700' : '500' 
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
                        borderBottom: `2px solid ${isFocused ? 'var(--cyan)' : 'var(--border)'}`, 
                        padding: '12px 0 8px', color: 'var(--text)', outline: 'none', 
                        resize: 'none', transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        fontFamily: 'inherit', fontSize: '16px'
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
                        borderBottom: `2px solid ${isFocused ? 'var(--cyan)' : 'var(--border)'}`, 
                        padding: '12px 0 8px', color: 'var(--text)', outline: 'none', 
                        transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        fontFamily: 'inherit', fontSize: '16px'
                    }}
                />
            )}
            {isFocused && (
                <motion.div 
                    layoutId="underline"
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}
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
        { label: 'Location', value: 'Gandhinagar, IN', href: null, icon: <FiMapPin /> },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            
            // Fire premium cyan and white confetti
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#06b6d4', '#f8fafc', '#0f172a']
            });

            // Reset form after delay
            setTimeout(() => {
                setStatus('idle');
            }, 6000);
        }, 1500);
    };

    return (
        <section id="contact" style={{ padding: '140px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>Connect</p>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-2px', lineHeight: '1.1' }}>
                        Let's start a <span style={{ color: 'var(--text-dim)' }}>conversation.</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '100px', alignItems: 'center' }}>

                    {/* Info Side */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '48px', lineHeight: '1.4' }}>
                           I'm always open to discussing <span style={{ color: 'var(--cyan)' }}>new projects</span> or creative ideas.
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                            {contactInfo.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '24px', textDecoration: 'none', transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: item.href ? 'pointer' : 'default' }}
                                    onMouseEnter={(e) => { if (item.href) { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.children[0].style.background = 'var(--cyan)'; e.currentTarget.children[0].style.color = '#fff'; } }}
                                    onMouseLeave={(e) => { if (item.href) { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.children[0].style.background = 'var(--cyan-muted)'; e.currentTarget.children[0].style.color = 'var(--cyan)'; } }}
                                >
                                    <div style={{ color: 'var(--cyan)', background: 'var(--cyan-muted)', border: '1px solid var(--border)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', transition: '0.3s' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '11px', color: 'var(--text-mut)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '4px' }}>{item.label}</p>
                                        <p style={{ color: 'var(--text)', fontWeight: '600', fontSize: '18px' }}>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dynamic Form Side */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        style={{ 
                            padding: '64px', 
                            borderRadius: '32px', 
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)', 
                            boxShadow: '0 40px 100px rgba(0,0,0,0.3)', 
                            position: 'relative', 
                            overflow: 'hidden' 
                        }}
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
                                            width: '100%', background: 'linear-gradient(135deg, var(--cyan), #818cf8)', border: 'none', padding: '22px',
                                            color: '#fff', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px',
                                            borderRadius: '16px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                                            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.4)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.3)'; }}
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
                                        style={{ width: '48px', height: '48px', border: '3px solid var(--border)', borderTop: '3px solid var(--cyan)', borderRadius: '50%' }}
                                    />
                                    <p style={{ marginTop: '24px', color: 'var(--text-dim)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>
                                        Transmitting...
                                    </p>
                                </motion.div>
                            )}

                            {status === 'success' && (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} 
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '380px', textAlign: 'center' }}
                                >
                                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--cyan-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', border: '1px solid var(--border)' }}>
                                        <motion.div
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                        >
                                            <FiArrowRight size={48} color="var(--cyan)" style={{ transform: 'rotate(-45deg)' }} />
                                        </motion.div>
                                    </div>
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                                        style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text)', marginBottom: '16px', letterSpacing: '-1px' }}
                                    >
                                        Message Sent!
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} 
                                        style={{ color: 'var(--text-dim)', lineHeight: '1.7', fontSize: '16px' }}
                                    >
                                        Thanks for reaching out.<br/>I'll be in touch very soon.
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
