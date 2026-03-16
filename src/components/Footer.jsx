import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
    const social = [
        { Icon: FiGithub, href: 'https://github.com/ankitkumar764' },
        { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/' },
        { Icon: FiTwitter, href: 'https://x.com/home?lang=en-in' },
    ];

    return (
        <footer style={{ padding: '80px 24px', background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: '800', color: '#f8fafc' }}>
                        ANKIT<span style={{ color: '#d4af37' }}>.</span>
                    </span>
                </div>

                <nav style={{ display: 'flex', gap: '32px' }}>
                    {['Home', 'About', 'Projects', 'Experience'].map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#64748b', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = '#f8fafc'}
                            onMouseLeave={(e) => e.target.style.color = '#64748b'}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div style={{ display: 'flex', gap: '24px' }}>
                    {social.map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ color: '#64748b', transition: '0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                        >
                            <s.Icon size={18} />
                        </a>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: '#475569', fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px' }}>
                        &copy; {new Date().getFullYear()} Ankit Singh. Crafted for Quality.
                    </p>
                </div>
            </div>
        </footer>
    );
}
