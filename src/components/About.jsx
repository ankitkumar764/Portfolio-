import { motion } from 'framer-motion';

export default function About() {
    const stats = [
        { value: '20+', label: 'Digital Products' },
        { value: '5+', label: 'Competitions' },
        { value: '3', label: 'Cloud certs' },
        { value: '100+', label: 'DSA Solved' },
    ];

    return (
        <section id="about" style={{ padding: '140px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>Discovery</p>
                    </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {/* Developer Animation Part */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ flex: '1', minWidth: '300px', position: 'relative' }}
                    >
                        <motion.div 
                            animate={{ 
                                y: [0, -15, 0],
                                rotateZ: [0, 1, 0, -1, 0]
                            }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            style={{ position: 'relative', width: '380px', height: '380px', margin: '0 auto' }}
                        >
                            {/* Outer Glow Ring */}
                            <motion.div 
                                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{ position: 'absolute', inset: '-20px', border: '1px solid var(--cyan)', borderRadius: '32px', filter: 'blur(10px)', opacity: 0.3 }} 
                            />
                            
                            <div style={{ 
                                width: '100%', 
                                height: '100%', 
                                borderRadius: '32px', 
                                overflow: 'hidden', 
                                border: '1px solid var(--border)', 
                                background: 'rgba(5, 5, 10, 0.8)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Mac-style Window Header */}
                                <div style={{ display: 'flex', gap: '8px', padding: '20px 24px', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid var(--border)' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f43f5e' }} />
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                                </div>
                                
                                {/* Code Editor Content */}
                                <div style={{ padding: '32px 24px', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '15px', lineHeight: '1.8', color: '#e2e8f0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                        <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>developer</span> <span style={{ color: '#56b6c2' }}>=</span> {'{'}
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                        &nbsp;&nbsp;<span style={{ color: '#e06c75' }}>name</span>: <span style={{ color: '#98c379' }}>'Ankit Kumar'</span>,
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                                        &nbsp;&nbsp;<span style={{ color: '#e06c75' }}>role</span>: <span style={{ color: '#98c379' }}>'MERN Stack Developer'</span>,
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                                        &nbsp;&nbsp;<span style={{ color: '#e06c75' }}>skills</span>: [
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#98c379' }}>'React'</span>, <span style={{ color: '#98c379' }}>'Node'</span>, <span style={{ color: '#98c379' }}>'TypeScript'</span>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.0 }}>
                                        &nbsp;&nbsp;]
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
                                        {'}'}
                                    </motion.div>
                                </div>
                                {/* Bottom Gradient for integration */}
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)', pointerEvents: 'none' }} />
                            </div>

                            {/* Floating UI Elements for 'Animated' feel */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ position: 'absolute', top: '10%', right: '-5%', background: 'var(--cyan-muted)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '12px', color: 'var(--cyan)', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                            >
                                &lt;CODE /&gt;
                            </motion.div>
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{ position: 'absolute', bottom: '15%', left: '-5%', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '12px', color: '#fff', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                            >
                                { '{ JSON }' }
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1.5', minWidth: '320px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: 'var(--text)', marginBottom: '32px', letterSpacing: '-1px' }}>
                            A developer's story <span style={{ color: 'var(--cyan)' }}>told in code.</span>
                        </h2>
                        
                        <p style={{ color: 'var(--text)', fontSize: '18px', lineHeight: '1.6', marginBottom: '24px', fontWeight: '500' }}>
                            My journey began with a curiosity about how things work behind the screen. What started as simple HTML experiments has evolved into a passion for building complex, scalable applications.
                        </p>
                        
                        <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                            Currently a BE student at Swaminarayan University, I spend my days (and many nights) exploring the depths of React, Node.js, and modern system design. I believe that engineering is a form of art, where every semicolon and bracket contributes to a larger masterpiece.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                            <div>
                                <h4 style={{ color: 'var(--text)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ width: '6px', height: '6px', background: 'var(--cyan)', borderRadius: '50%' }}></span>
                                    Interests
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['UI/UX Design', 'Cloud Arch', 'AI/ML', 'Open Source'].map(tag => (
                                        <span key={tag} style={{ fontSize: '12px', color: 'var(--text-dim)', background: 'var(--cyan-muted)', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)' }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ width: '6px', height: '6px', background: 'var(--cyan)', borderRadius: '50%' }}></span>
                                    Core Skills
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {['React', 'Node.js', 'MongoDB', 'C++'].map(tag => (
                                        <span key={tag} style={{ fontSize: '12px', color: 'var(--cyan)', fontWeight: '600' }}>#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats part removed or moved down as per request focus */}
            </div>
        </section>
    );
}
