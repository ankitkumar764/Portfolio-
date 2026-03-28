import { useState } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

const projects = [
    {
        num: '01',
        title: 'Gemini AI Clone',
        desc: 'Advanced replica of Google Gemini\'s generative interface. Focused on minimalist chat architecture and seamless response flows.',
        tech: ['React', 'Framer Motion', 'Tailwind'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://geminii-clone-ankit-singh.netlify.app/',
    },
    {
        num: '02',
        title: 'Udan — Airline Platform',
        desc: 'Professional airline booking interface with flight telemetry, passenger management, and extremely responsive search results.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://udan-clone-ankit-singh.netlify.app/',
    },
    {
        num: '03',
        title: 'Practo Clone',
        desc: 'Healthcare listing and appointment system with clinical management interfaces and comprehensive search features.',
        tech: ['React', 'Context API', 'CSS Modules'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://practo-clone-ankit-singh.netlify.app/',
    },
    {
        num: '04',
        title: 'OYO Habitat Clone',
        desc: 'Boutique hotel booking platform featuring city-based filtering, room detailed views, and refined booking journeys.',
        tech: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://oyo-clone-ankit-singh.netlify.app/',
    },
    {
        num: '05',
        title: 'Bombay Closet',
        desc: 'Elegant e-commerce store with product discovery streams, category management, and dynamic cart functionality.',
        tech: ['React', 'Styled Components', 'Redux'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://bombay-closet-ankit-singh.netlify.app/',
    },
    {
        num: '06',
        title: 'Premium Coffee Hub',
        desc: 'Visually rich brand experience with animated product menus and immersive storytelling layouts.',
        tech: ['HTML', 'CSS3', 'Vanilla JS'],
        github: 'https://github.com/ankitkumar764',
        live: 'https://coffee-clone-ankit-singh.netlify.app/',
    },
];

const TiltCard = ({ children, className, style }) => {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    // Cinematic 3D Rotations
    const rotateX = useTransform(y, [0, 1], [10, -10]); 
    const rotateY = useTransform(x, [0, 1], [-10, 10]);
    
    // Dynamic Glow specific to mouse pointer position
    const glowX = useTransform(x, [0, 1], [-20, 120]);
    const glowY = useTransform(y, [0, 1], [-20, 120]);
    const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.15) 0%, transparent 60%)`;

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width);
        y.set(mouseY / rect.height);
    };

    const handleMouseLeave = () => {
        // Return to flat position smoothly
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <div style={{ perspective: '1200px', height: '100%' }}>
            <motion.div
                className={className}
                style={{ 
                    ...style,
                    rotateX, 
                    rotateY, 
                    transformStyle: 'preserve-3d',
                    position: 'relative'
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
                {/* Embedded Glow tracking pointer */}
                <motion.div 
                    style={{
                        position: 'absolute', inset: 0,
                        background: glowBackground,
                        pointerEvents: 'none',
                        zIndex: 1, borderRadius: 'inherit'
                    }}
                />
                <div style={{ transform: 'translateZ(30px)', height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2, position: 'relative' }}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    // Fetch uncropped full-site image to perform scrolling parallax hover effect
    const fullImg = `https://image.thum.io/get/width/800/${project.live}`;

    return (
        <TiltCard 
            className="glass-premium"
            style={{ borderRadius: '16px', border: '1px solid var(--border-strong)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(var(--bg-card-str-rgb),0.6)' }}
        >
            <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '260px', 
                    overflow: 'hidden', 
                    backgroundColor: '#050505',
                    borderBottom: '1px solid var(--border-strong)'
                }}
            >
                {/* Cinematic Scrolling Video Preview */}
                <motion.div
                    animate={{ y: isHovered ? '-60%' : '0%' }}
                    transition={{ duration: isHovered ? 8 : 1.5, ease: isHovered ? "linear" : "easeOut" }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100%' }}
                >
                    <img src={fullImg} alt={project.title} style={{ width: '100%', display: 'block' }} loading="lazy" />
                </motion.div>
                
                {/* Overlay Vignette Gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-card-rgb),1) 0%, transparent 60%)', pointerEvents: 'none' }} />
                
                {/* Project Number Floating on Image */}
                <div style={{ position: 'absolute', bottom: '20px', right: '24px', pointerEvents: 'none' }}>
                    <span style={{ fontSize: '48px', fontWeight: '800', color: 'rgba(212,175,55,0.2)', fontFamily: "'Outfit', sans-serif", letterSpacing: '-2px' }}>
                        {project.num}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: '16px' }}>
                    {project.title}
                </h3>
                
                <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: '1.7', marginBottom: '28px', flex: 1 }}>
                    {project.desc}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                    {project.tech.map(t => (
                        <span key={t} style={{ fontSize: '11px', color: '#cbd5e1', padding: '6px 14px', borderRadius: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Outfit', sans-serif" }}>
                            {t}
                        </span>
                    ))}
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <a href={project.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '800', color: 'var(--bg)', background: 'var(--gold)', padding: '14px 28px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s', boxShadow: '0 8px 20px rgba(212,175,55,0.25)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(212,175,55,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(212,175,55,0.25)'; }}>
                        View Case Study <FiArrowRight size={16} />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
                        <FiGithub size={20} /> Preview
                    </a>
                </div>
            </div>
        </TiltCard>
    );
};

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '120px 24px', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--gold)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        Showcase
                    </p>
                    <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-2px', lineHeight: '1.1' }}>
                        Cinematic Works.
                    </h2>
                </motion.div>

                {/* Grid of 3D Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {projects.map((item, i) => (
                        <motion.div 
                            key={item.num} 
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, margin: "-50px" }} 
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ProjectCard project={item} />
                        </motion.div>
                    ))}
                </div>

                {/* Quote Section */}
                <div style={{ marginTop: '140px', width: '100%', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(20px, 3vw, 32px)', fontStyle: 'italic', fontWeight: '500', lineHeight: '1.6', margin: '0 0 24px 0', color: 'var(--text-dim)' }}>
                            <span style={{ color: '#475569' }}>"</span>
                            You have the <span style={{ color: 'var(--gold)' }}>right</span> to perform your actions,
                            <br />
                            but <span style={{ color: 'var(--text)' }}>never</span> to the fruits of those actions.
                            <span style={{ color: '#475569' }}>"</span>
                        </h3>
                        <p style={{ fontSize: '13px', color: 'var(--text-mut)', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>
                            — Words of <span style={{ color: 'var(--gold)', fontWeight: '800' }}>Krishna</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
