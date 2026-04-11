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
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
            { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
        ]
    },
    {
        label: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
            { name: 'Express.js', icon: <SiExpress color="#FFFFFF" /> },
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'REST API', icon: <FiGlobe color="#9CA3AF" /> },
        ]
    },
    {
        label: 'Tools',
        skills: [
            { name: 'GitHub', icon: <FiGithub color="#FFFFFF" /> },
            { name: 'Vercel', icon: <SiVercel color="#FFFFFF" /> },
            { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
            { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
            { name: 'Render', icon: <SiRender color="#FFFFFF" /> },
        ]
    },
    {
        label: 'Languages',
        skills: [
            { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
            { name: 'C', icon: <SiC color="#A8B9CC" /> },
            { name: 'JS', icon: <FaJs color="#F7DF1E" /> },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '140px 24px', background: 'transparent' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    style={{ marginBottom: '80px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>Expertise</p>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-2px' }}>Technical Stack.</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
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
                                fontSize: '18px', 
                                fontWeight: '700', 
                                marginBottom: '32px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '12px',
                                letterSpacing: '0.5px'
                            }}>
                                <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}></span>
                                {cat.label}
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '16px' }}>
                                {cat.skills.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        whileHover={{ y: -8, borderColor: 'var(--cyan)', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.1)' }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '16px',
                                            padding: '24px 12px',
                                            textAlign: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '12px',
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            cursor: 'default'
                                        }}
                                    >
                                        <div style={{ fontSize: '32px', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }}>
                                            {skill.icon}
                                        </div>
                                        <span style={{ 
                                            fontSize: '12px', 
                                            color: 'var(--text-dim)', 
                                            fontWeight: '600', 
                                            letterSpacing: '0.5px'
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
