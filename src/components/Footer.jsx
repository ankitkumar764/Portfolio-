import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
    const social = [
        { Icon: FiGithub, href: 'https://github.com/ankitkumar764' },
        { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/ankit-kumar-7721b0376/' },
        { Icon: FiTwitter, href: 'https://x.com/home?lang=en-in' },
    ];

    return (
        <footer style={{ padding: '80px 24px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', letterSpacing: '-1px', display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '800', color: 'var(--text)' }}>A</span>
                        <span style={{ fontWeight: '300', color: 'var(--gold)', marginLeft: '2px' }}>S</span>
                        <span style={{ color: 'var(--gold)', fontWeight: '800' }}>.</span>
                    </span>
                </div>

                <nav style={{ display: 'flex', gap: '32px' }}>
                    {['Home', 'About', 'Projects', 'Experience'].map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-mut)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-mut)'}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div style={{ display: 'flex', gap: '24px' }}>
                    {social.map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ color: 'var(--text-mut)', transition: '0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mut)'}
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
