import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';
import { SiJavascript, SiCplusplus, SiC } from 'react-icons/si';

const courses = [
    {
        id: 1,
        title: "JavaScript Basics and Advanced",
        provider: "SoloLearn",
        icon: SiJavascript,
        color: "#facc15",
        date: "Completed",
        desc: "Deep dive into closures, prototypes, async programming, and modern ES6+ architecture."
    },
    {
        id: 2,
        title: "C++ Object Oriented Programming",
        provider: "SoloLearn",
        icon: SiCplusplus,
        color: "#38bdf8",
        date: "Completed",
        desc: "Comprehensive study of memory management, pointers, polymorphism, and STL libraries."
    },
    {
        id: 3,
        title: "C Programming Fundamentals",
        provider: "SoloLearn",
        icon: SiC,
        color: "#94a3b8",
        date: "Completed",
        desc: "Strong foundation in procedural programming, standard I/O, and hardware-level memory."
    },
    {
        id: 4,
        title: "Introduction to C++",
        provider: "SoloLearn",
        icon: SiCplusplus,
        color: "#00599C",
        date: "March 2026",
        desc: "Mastered fundamental C++ concepts including basic syntax, variables, data types, and control flow structures.",
        certId: "CC-VULA17A9"
    }
];

export default function CourseCertificates() {
    return (
        <section id="coursework" style={{ padding: '80px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    style={{ marginBottom: '50px', textAlign: 'center' }}
                >
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Continuous Learning
                    </p>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1px' }}>
                        Course <span style={{ color: 'var(--cyan)' }}>Certifications</span>.
                    </h2>
                </motion.div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                padding: '32px',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s'
                            }}
                        >
                            {/* Ambient Theme Glow per language */}
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: course.color, filter: 'blur(80px)', opacity: 0.1, pointerEvents: 'none' }} />

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ 
                                    width: '56px', height: '56px', 
                                    borderRadius: '16px', background: 'rgba(0,0,0,0.3)', 
                                    border: `1px solid ${course.color}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: course.color
                                }}>
                                    <course.icon size={28} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', lineHeight: '1.2' }}>
                                        {course.title}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>
                                        <FiBookOpen color={course.color} /> {course.provider}
                                    </div>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
                                {course.desc}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: course.color, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    <FiCheckCircle size={14} /> {course.date}
                                </div>
                                <div style={{ color: 'var(--text-mut)', fontSize: '11px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <FiAward /> Verified
                                    </div>
                                    {course.certId && <span style={{ fontSize: '9px', opacity: 0.7 }}>ID: {course.certId}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
