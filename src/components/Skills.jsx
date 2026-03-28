import { motion } from 'framer-motion';
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap 
} from 'react-icons/fa';
import { 
    SiTailwindcss, SiMongodb, SiExpress, SiPostman, 
    SiVercel, SiNetlify, SiRender, SiCplusplus, SiC 
} from 'react-icons/si';
import { FiGithub, FiGlobe } from 'react-icons/fi';

const SKILL_CATEGORIES = [
    {
        label: 'Frontend',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'Tailwind', icon: <SiTailwindcss /> },
        ]
    },
    {
        label: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'REST API', icon: <FiGlobe /> },
        ]
    },
    {
        label: 'Tools',
        skills: [
            { name: 'GitHub', icon: <FiGithub /> },
            { name: 'Vercel', icon: <SiVercel /> },
            { name: 'Netlify', icon: <SiNetlify /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Render', icon: <SiRender /> },
        ]
    },
    {
        label: 'Languages',
        skills: [
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'C', icon: <SiC /> },
            { name: 'JS', icon: <FaJs /> },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '120px 24px', background: 'transparent' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    style={{ marginBottom: '80px' }}
                >
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--gold)', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Expertise</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px' }}>Technical Stack.</h2>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                    {SKILL_CATEGORIES.map((cat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            <h3 style={{ 
                                fontFamily: "'Outfit', sans-serif", 
                                color: 'var(--text)', 
                                fontSize: '20px', 
                                fontWeight: '700', 
                                marginBottom: '28px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '12px' 
                            }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }}></span>
                                {cat.label}
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '16px' }}>
                                {cat.skills.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        style={{
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            padding: '20px 10px',
                                            textAlign: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '12px',
                                            transition: 'border-color 0.3s ease',
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                                    >
                                        <div style={{ fontSize: '28px', color: 'var(--gold)', opacity: 0.9 }}>
                                            {skill.icon}
                                        </div>
                                        <span style={{ 
                                            fontSize: '11px', 
                                            color: 'var(--text-dim)', 
                                            fontWeight: '600', 
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase'
                                        }}>
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
