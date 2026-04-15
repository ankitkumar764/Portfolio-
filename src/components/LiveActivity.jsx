import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { FiTerminal, FiCode, FiActivity } from 'react-icons/fi';

export default function LiveActivity() {
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
                        (event.payload.commits || []).map(c => ({
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

    // Neo-Brutalist Github Heatmap Colors
    const explicitTheme = {
        light: ['#ebedf0', '#ffcf00', '#ffaa00', '#ff7700', '#ff4949'],
        dark:  ['#ebedf0', '#ffcf00', '#ffaa00', '#ff7700', '#ff4949']
    };

    return (
        <section id="activity" style={{ padding: '120px 24px', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                
                <div style={{ marginBottom: '60px', position: 'relative' }}>
                    <span className="handwriting" style={{ position: 'absolute', top: '-30px', left: '10px', fontSize: '28px', color: 'var(--cyan)', transform: 'rotate(-5deg)' }}>
                        Proof of work!
                    </span>
                    <h2 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: '800', lineHeight: '1', textTransform: 'uppercase', textShadow: '4px 4px 0 var(--cyan)' }}>
                        Live Activity
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    
                    {/* GitHub Heatmap Bento Full Width */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="neo-brutalist"
                        style={{ gridColumn: '1 / -1', padding: '40px', background: '#fff', overflowX: 'auto' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', borderBottom: '3px solid black', paddingBottom: '16px' }}>
                            <FiActivity size={32} color="var(--cyan)" />
                            <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--pure-black)', textTransform: 'uppercase' }}>Contribution Graph</h3>
                        </div>
                        <div style={{ minWidth: '800px' }}>
                            <GitHubCalendar 
                                username="ankitkumar764" 
                                blockSize={16} 
                                blockMargin={6} 
                                colorScheme="light"
                                theme={explicitTheme}
                                fontSize={14}
                            />
                        </div>
                    </motion.div>

                    {/* Recent Commits Terminal Box */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="neo-brutalist"
                        style={{ padding: '32px', background: '#fff', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '3px solid black', paddingBottom: '16px' }}>
                            <FiTerminal size={28} color="var(--gold)" />
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--pure-black)', textTransform: 'uppercase' }}>Latest Commits</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                            {commits.length > 0 ? commits.map((commit, i) => (
                                <a key={i} href={commit.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', padding: '16px', background: '#f4f0ea', border: '2px solid black', boxShadow: '2px 2px 0px 0px black', transition: '0.1s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '4px 4px 0px 0px black' }} onMouseLeave={(e) => {  e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '2px 2px 0px 0px black' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--pure-black)' }}>{commit.repo}</span>
                                        <span style={{ fontSize: '12px', color: 'var(--text-mut)', fontWeight: '600' }}>{commit.date}</span>
                                    </div>
                                    <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: '1.5', fontWeight: '500' }}>
                                        {commit.message.length > 55 ? commit.message.substring(0, 55) + '...' : commit.message}
                                    </p>
                                </a>
                            )) : (
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <p className="handwriting" style={{ color: 'var(--text)', fontSize: '24px', animation: 'pulse 1.5s infinite' }}>Establishing link to GitHub...</p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* LeetCode Algorithmic Data Box */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="neo-brutalist"
                        style={{ padding: '32px', background: 'var(--gold)', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '3px solid black', paddingBottom: '16px' }}>
                            <FiCode size={28} color="black" />
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--pure-black)', textTransform: 'uppercase' }}>LeetCode Telemetry</h3>
                        </div>
                        
                        {leetStats ? (
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                                    <span style={{ fontSize: '72px', fontWeight: '800', lineHeight: '0.8', color: 'var(--pure-black)', letterSpacing: '-4px' }}>
                                        {leetStats.totalSolved}
                                    </span>
                                    <span className="handwriting" style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '4px' }}>Problems Solved</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div style={{ background: '#fff', padding: '16px', border: '2px solid black', boxShadow: '2px 2px 0px 0px black' }}>
                                        <p style={{ fontSize: '13px', color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Easy</p>
                                        <p style={{ fontSize: '28px', fontWeight: '800', color: 'var(--pure-black)' }}>{leetStats.easySolved}</p>
                                    </div>
                                    <div style={{ background: '#fff', padding: '16px', border: '2px solid black', boxShadow: '2px 2px 0px 0px black' }}>
                                        <p style={{ fontSize: '13px', color: '#f59e0b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Medium</p>
                                        <p style={{ fontSize: '28px', fontWeight: '800', color: 'var(--pure-black)' }}>{leetStats.mediumSolved}</p>
                                    </div>
                                    <div style={{ background: '#fff', padding: '16px', border: '2px solid black', boxShadow: '2px 2px 0px 0px black' }}>
                                        <p style={{ fontSize: '13px', color: '#ef4444', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Hard</p>
                                        <p style={{ fontSize: '28px', fontWeight: '800', color: 'var(--pure-black)' }}>{leetStats.hardSolved}</p>
                                    </div>
                                    <div style={{ background: 'var(--cyan)', padding: '16px', border: '2px solid black', boxShadow: '2px 2px 0px 0px black' }}>
                                        <p style={{ fontSize: '13px', color: 'black', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Ranking</p>
                                        <p style={{ fontSize: '24px', fontWeight: '800', color: 'white', textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>#{leetStats.ranking.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p className="handwriting" style={{ color: 'var(--text)', fontSize: '24px', animation: 'pulse 1.5s infinite' }}>Connecting to LeetCode API...</p>
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
