import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';

const educationData = [
    {
        institution: "Swaminarayan University",
        period: "2025 – 2029",
        degree: "B.E. Computer Engineering",
        location: "Ahmedabad, Gujarat",
        details: "Focusing on Full-Stack Development, Cloud Computing, and AI/ML.",
        grade: "CGPA 9.6",
        icon: <FiBookOpen />,
        color: "var(--cyan)"
    },
    {
        institution: "Parwati High School",
        period: "2022 – 2024",
        degree: "Higher Secondary (XI–XII)",
        location: "Bikram, Patna",
        details: "Specialized in Science (PCM) with a focus on Mathematics and Physics.",
        grade: "Cleared with distinction",
        icon: <FiAward />,
        color: "var(--gold)"
    },
    {
        institution: "Gyan Deep Vidhyalay",
        period: "2020 – 2022",
        degree: "Secondary (IX–X)",
        location: "Patna, Bihar",
        details: "Foundation years focusing on core science and technology concepts.",
        grade: "Top of class",
        icon: <FiMapPin />,
        color: "var(--cyan)"
    }
];

const CornerBracket = ({ position }) => {
    const isTop = position.includes('top');
    const isLeft = position.includes('left');
    
    return (
        <div style={{
            position: 'absolute',
            [isTop ? 'top' : 'bottom']: '0',
            [isLeft ? 'left' : 'right']: '0',
            width: '12px',
            height: '12px',
            borderTop: isTop ? '2px solid rgba(255,255,255,0.2)' : 'none',
            borderBottom: !isTop ? '2px solid rgba(255,255,255,0.2)' : 'none',
            borderLeft: isLeft ? '2px solid rgba(255,255,255,0.2)' : 'none',
            borderRight: !isLeft ? '2px solid rgba(255,255,255,0.2)' : 'none',
        }} />
    );
};

export default function EducationJourney() {
    return (
        <section id="education" style={{ padding: '120px 24px', background: 'transparent', position: 'relative' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--gold)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>Academic Route</p>
                        <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                    </div>
                    <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '800', color: 'var(--text)', marginBottom: '20px', letterSpacing: '-2px' }}>
                        Education <span style={{ color: 'var(--cyan)' }}>Journey.</span>
                    </h2>
                    <div style={{ width: '100px', height: '4px', background: 'black', margin: '0 auto' }} />
                </motion.div>

                {/* Timeline Container */}
                <div style={{ position: 'relative' }}>
                    
                    {/* Vertical Line */}
                    <div style={{ 
                        position: 'absolute', 
                        left: '0', 
                        top: '0', 
                        bottom: '0', 
                        width: '2px', 
                        background: 'linear-gradient(to bottom, var(--cyan), var(--gold), var(--cyan))',
                        opacity: 0.3
                    }} />

                    {/* Timeline Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                        {educationData.map((edu, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                style={{ position: 'relative', paddingLeft: '60px' }}
                            >
                                {/* Milestone Dot */}
                                <motion.div 
                                    whileHover={{ scale: 1.2 }}
                                    style={{ 
                                        position: 'absolute', 
                                        left: '-9px', 
                                        top: '0', 
                                        width: '20px', 
                                        height: '20px', 
                                        borderRadius: '50%', 
                                        background: edu.color,
                                        border: '4px solid var(--bg)',
                                        boxShadow: `0 0 15px ${edu.color}`,
                                        zIndex: 2
                                    }} 
                                />

                                {/* Content Card */}
                                <div style={{ 
                                    background: 'var(--bg-card)', 
                                    border: '1px solid var(--border)', 
                                    borderRadius: '4px', 
                                    padding: '32px',
                                    position: 'relative',
                                    transition: '0.4s ease'
                                }}
                                className="neo-brutalist"
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = edu.color; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                                >
                                    <CornerBracket position="top-left" />
                                    <CornerBracket position="top-right" />
                                    <CornerBracket position="bottom-left" />
                                    <CornerBracket position="bottom-right" />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                                <div style={{ color: edu.color, fontSize: '20px' }}>{edu.icon}</div>
                                                <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', letterSpacing: '-0.5px' }}>{edu.institution}</h3>
                                            </div>
                                            <p style={{ color: edu.color, fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{edu.degree}</p>
                                        </div>
                                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '12px', fontWeight: '600' }}>
                                                <FiCalendar /> {edu.period}
                                            </div>
                                        </div>
                                    </div>

                                    <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', maxWidth: '700px' }}>
                                        {edu.details}
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '13px' }}>
                                            <FiMapPin style={{ color: edu.color }} /> {edu.location}
                                        </div>
                                        {edu.grade && (
                                            <div style={{ background: 'black', color: 'white', padding: '4px 12px', fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>
                                                {edu.grade}
                                            </div>
                                        )}
                                    </div>

                                    {/* Coordinate Tag */}
                                    <div style={{ position: 'absolute', right: '16px', top: '-12px', fontSize: '9px', fontWeight: '900', color: 'var(--text-mut)', opacity: 0.5 }}>
                                        EDU_REF_ID: 00{index + 1}_LOG
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
