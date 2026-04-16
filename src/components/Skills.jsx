import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
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
        color: '#06b6d4',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
            { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
            { name: 'JavaScript', icon: <FaJs />, level: 92, color: '#F7DF1E' },
            { name: 'React', icon: <FaReact />, level: 88, color: '#61DAFB' },
            { name: 'Tailwind', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
        ]
    },
    {
        label: 'Backend',
        color: '#10b981',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933' },
            { name: 'Express.js', icon: <SiExpress />, level: 82, color: '#000000' },
            { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
            { name: 'REST API', icon: <FiGlobe />, level: 88, color: '#9CA3AF' },
        ]
    },
    {
        label: 'Tools',
        color: '#a855f7',
        skills: [
            { name: 'GitHub', icon: <FiGithub />, level: 90, color: '#000000' },
            { name: 'Vercel', icon: <SiVercel />, level: 85, color: '#000000' },
            { name: 'Netlify', icon: <SiNetlify />, level: 85, color: '#00C7B7' },
            { name: 'Postman', icon: <SiPostman />, level: 80, color: '#FF6C37' },
            { name: 'Render', icon: <SiRender />, level: 75, color: '#000000' },
        ]
    },
    {
        label: 'Languages',
        color: '#f59e0b',
        skills: [
            { name: 'C++', icon: <SiCplusplus />, level: 80, color: '#00599C' },
            { name: 'C', icon: <SiC />, level: 75, color: '#A8B9CC' },
            { name: 'JS', icon: <FaJs />, level: 92, color: '#F7DF1E' },
        ]
    }
];

const HudGauge = ({ level, color, isHovered }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;

    return (
        <div style={{ position: 'relative', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ transform: 'rotate(-90deg)', width: '90px', height: '90px' }}>
                {/* Background Track */}
                <circle cx="45" cy="45" r={radius} fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="4" />
                {/* HUD Pulse Ring */}
                <motion.circle
                    cx="45" cy="45" r={radius + 4} fill="transparent" stroke={color} strokeWidth="1" strokeDasharray="2, 4"
                    animate={{ rotate: 360, opacity: isHovered ? 0.8 : 0.2 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {/* Level Progress */}
                <motion.circle
                    cx="45" cy="45" r={radius} fill="transparent" stroke={color} strokeWidth="4" strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    style={{ strokeDasharray: circumference, filter: `drop-shadow(0 0 8px ${color})` }}
                />
            </svg>
            <div style={{ position: 'absolute', fontSize: '14px', fontWeight: '800', fontFamily: "'Space Grotesk', sans-serif" }}>
                {level}%
            </div>
        </div>
    );
};

const SkillCard = ({ skill, catColor }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Magnetic Mouse Tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', cursor: 'none' }}
        >
            <motion.div
                animate={{ borderColor: isHovered ? skill.color : 'black', boxShadow: isHovered ? `12px 12px 0px 0px ${skill.color}` : '8px 8px 0px 0px black' }}
                className="neo-brutalist"
                style={{
                    background: isHovered ? '#fff' : 'var(--bg-card)',
                    padding: '32px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* HUD Corners */}
                <div style={{ position: 'absolute', top: '8px', left: '8px', width: '12px', height: '12px', borderTop: '2px solid black', borderLeft: '2px solid black' }} />
                <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '12px', height: '12px', borderBottom: '2px solid black', borderRight: '2px solid black' }} />
                
                {/* Data Deciphering effect on Hover */}
                {isHovered && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} style={{ position: 'absolute', inset: 0, fontSize: '10px', overflow: 'hidden', pointerEvents: 'none', lineHeight: '1' }}>
                        {Array(20).fill('011010101100101011010101110').join(' ')}
                    </motion.div>
                )}

                <div style={{ fontSize: '40px', color: skill.color, filter: isHovered ? `drop-shadow(0 0 12px ${skill.color})` : 'none', transition: '0.3s' }}>
                    {skill.icon}
                </div>

                <HudGauge level={skill.level} color={skill.color} isHovered={isHovered} />

                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{skill.name}</h4>
                    <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-mut)', marginTop: '4px', textTransform: 'uppercase' }}>System.Load_OK</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '160px 24px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background Data Streams */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', display: 'flex', justifyContent: 'space-around' }}>
                {[...Array(6)].map((_, i) => (
                    <motion.div key={i} animate={{ y: [0, -1000] }} transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }} style={{ writingMode: 'vertical-rl', fontSize: '14px', letterSpacing: '8px' }}>
                        BINARY_STREAM_X{i}_DATA_SECURE_RE_CODE_01010101
                    </motion.div>
                ))}
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                <header style={{ marginBottom: '100px', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px', background: 'black', color: 'white', padding: '4px 12px' }}>
                        <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '2px' }}>STATUS: ONLINE</span>
                        <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff4949' }} />
                    </motion.div>
                    
                    <h2 style={{ fontSize: 'clamp(56px, 10vw, 120px)', fontWeight: '900', textTransform: 'uppercase', lineHeight: '0.9', letterSpacing: '-4px' }}>
                        TECH <br /> <span style={{ color: 'white', textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>STACK</span>
                    </h2>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {SKILL_CATEGORIES.map((cat, i) => (
                        <div key={i}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}
                            >
                                <h3 style={{ fontSize: '24px', fontWeight: '800', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                                    {cat.label} <span style={{ color: cat.color }}>_</span>
                                </h3>
                                <div style={{ height: '4px', flex: 1, background: 'black', position: 'relative' }}>
                                    <div style={{ position: 'absolute', right: 0, top: '-8px', fontSize: '10px', fontWeight: '900' }}>SEC_00{i+1}</div>
                                </div>
                            </motion.div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
                                {cat.skills.map((skill, si) => (
                                    <SkillCard key={si} skill={skill} catColor={cat.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
