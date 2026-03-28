import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const platforms = [
    { name: 'LeetCode', Icon: SiLeetcode, url: 'https://leetcode.com/u/AnkitKumaar/', color: '#fbbf24', desc: 'Solved' },
    { name: 'GitHub', Icon: FiGithub, url: 'https://github.com/ankitkumar764', color: '#f1f5f9', desc: '30+ PRs' },
    { name: 'LinkedIn', Icon: FiLinkedin, url: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/', color: '#60a5fa', desc: 'Professional' },
    { name: 'YouTube', Icon: FiYoutube, url: 'https://youtube.com/@ankitkumar-r1k6z?si=A0xkKkyya8Bwied1', color: '#f87171', desc: 'Dev content' },
    { name: 'Twitter / X', Icon: FiTwitter, url: 'https://x.com/home?lang=en-in', color: '#67e8f9', desc: 'Tech updates' },
];

export default function Profiles() {
    return (
        <section style={{ padding: '80px 24px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', color: 'var(--text-dim)', marginBottom: '40px' }}>
                    Find me across the web
                </motion.h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                    {platforms.map((p, i) => (
                        <motion.a
                            key={i}
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.04 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '24px 28px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(99,102,241,0.1)', borderRadius: '16px', backdropFilter: 'blur(16px)', textDecoration: 'none', minWidth: '110px', transition: 'all 0.3s', cursor: 'pointer' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color + '50'; e.currentTarget.style.boxShadow = `0 8px 30px ${p.color}20`; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <p.Icon size={30} style={{ color: p.color, filter: `drop-shadow(0 0 6px ${p.color}60)` }} />
                            <div>
                                <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>{p.name}</div>
                                <div style={{ color: '#475569', fontSize: '11px' }}>{p.desc}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
