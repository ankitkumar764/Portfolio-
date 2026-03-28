import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { ThemeContext } from '../contexts/ThemeContext';
import { FiTerminal, FiCode, FiActivity } from 'react-icons/fi';

export default function LiveActivity() {
    const { theme } = useContext(ThemeContext);
    const [commits, setCommits] = useState([]);
    const [leetStats, setLeetStats] = useState(null);

    useEffect(() => {
        // Fetch recent commits from GitHub push events
        fetch('https://api.github.com/users/ankitkumar764/events/public')
            .then(res => res.json())
            .then(data => {
                if(Array.isArray(data)) {
                    const pushEvents = data.filter(event => event.type === 'PushEvent').slice(0, 10);
                    const recentCommits = pushEvents.flatMap(event => 
                        event.payload.commits.map(c => ({
                            repo: event.repo.name.split('/')[1] || event.repo.name,
                            message: c.message,
                            url: `https://github.com/${event.repo.name}/commit/${c.sha}`,
                            date: new Date(event.created_at).toLocaleDateString()
                        }))
                    ).slice(0, 4);
                    setCommits(recentCommits);
                }
            })
            .catch(err => console.error(err));

        // Fetch LeetCode Stats utilizing public scraping API
        fetch('https://leetcode-stats-api.herokuapp.com/AnkitKumaar')
            .then(res => res.json())
            .then(data => {
                if(data.status === 'success') {
                    setLeetStats(data);
                }
            })
            .catch(err => console.error(err));
    }, []);

    // Theme Customization for GitHub Calendar map to match the Premium Gold Aesthetic
    const explicitTheme = {
        light: ['var(--pure-black)', '#fef08a', '#facc15', '#eab308', '#ca8a04'],
        dark: ['var(--pure-black)', '#d4af3740', '#d4af3780', '#d4af37c0', '#d4af37']
    };

    return (
        <section id="activity" style={{ padding: '120px 24px', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--gold)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Telemetry</p>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px' }}>Live Activity.</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    
                    {/* GitHub Heatmap Bento Full Width */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="glass-premium"
                        style={{ gridColumn: '1 / -1', padding: '40px', borderRadius: '16px', border: '1px solid var(--border)', background: 'var(--bg-card)', overflowX: 'auto' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                            <FiActivity size={24} color="var(--gold)" />
                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)' }}>Contribution Graph</h3>
                        </div>
                        <div style={{ minWidth: '800px' }}>
                            <GitHubCalendar 
                                username="ankitkumar764" 
                                blockSize={16} 
                                blockMargin={6} 
                                colorScheme={theme}
                                theme={explicitTheme}
                                fontSize={14}
                            />
                        </div>
                    </motion.div>

                    {/* Recent Commits Terminal Box */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass-premium"
                        style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <FiTerminal size={22} color="var(--gold)" />
                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)' }}>Latest Commits</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                            {commits.length > 0 ? commits.map((commit, i) => (
                                <a key={i} href={commit.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', padding: '16px', borderRadius: '8px', background: 'var(--border)', border: '1px solid var(--border-strong)', transition: '0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--gold)', fontFamily: "'Outfit', sans-serif" }}>{commit.repo}</span>
                                        <span style={{ fontSize: '11px', color: 'var(--text-mut)' }}>{commit.date}</span>
                                    </div>
                                    <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: '1.5' }}>
                                        {commit.message.length > 55 ? commit.message.substring(0, 55) + '...' : commit.message}
                                    </p>
                                </a>
                            )) : (
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <p style={{ color: 'var(--text-mut)', fontSize: '14px', animation: 'pulse 1.5s infinite' }}>Establishing link to GitHub...</p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* LeetCode Algorithmic Data Box */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass-premium"
                        style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <FiCode size={22} color="var(--gold)" />
                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)' }}>LeetCode Telemetry</h3>
                        </div>
                        
                        {leetStats ? (
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
                                    <span style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1', color: 'var(--text)', letterSpacing: '-2px' }}>
                                        {leetStats.totalSolved}
                                    </span>
                                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-mut)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '2px' }}>Problems Solved</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div style={{ background: 'var(--border)', padding: '16px', borderRadius: '8px' }}>
                                        <p style={{ fontSize: '11px', color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Easy</p>
                                        <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>{leetStats.easySolved}</p>
                                    </div>
                                    <div style={{ background: 'var(--border)', padding: '16px', borderRadius: '8px' }}>
                                        <p style={{ fontSize: '11px', color: '#f59e0b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Medium</p>
                                        <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>{leetStats.mediumSolved}</p>
                                    </div>
                                    <div style={{ background: 'var(--border)', padding: '16px', borderRadius: '8px' }}>
                                        <p style={{ fontSize: '11px', color: '#ef4444', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Hard</p>
                                        <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>{leetStats.hardSolved}</p>
                                    </div>
                                    <div style={{ background: 'var(--border)', padding: '16px', borderRadius: '8px' }}>
                                        <p style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Ranking</p>
                                        <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text)' }}>#{leetStats.ranking.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{ color: 'var(--text-mut)', fontSize: '14px', animation: 'pulse 1.5s infinite' }}>Connecting to LeetCode API...</p>
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>
            <style>{`
                @keyframes pulse {
                    0% { opacity: 0.6; }
                    50% { opacity: 1; }
                    100% { opacity: 0.6; }
                }
            `}</style>
        </section>
    );
}
