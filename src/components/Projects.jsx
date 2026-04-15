import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiArrowRight, FiYoutube, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        num: '01',
        title: 'Gemini AI Clone',
        desc: 'Advanced replica of Google Gemini\'s generative interface. Focused on minimalist chat architecture and seamless response flows.',
        tech: ['React', 'Framer Motion', 'Tailwind'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/GEMINI-CLONE',
        live: 'https://geminii-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=dmcHhVfmmY8&t=2s',
    },
    {
        num: '02',
        title: 'Udan — Airline Platform',
        desc: 'Professional airline booking interface with flight telemetry, passenger management, and extremely responsive search results.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/UDAN-CLONE',
        live: 'https://udan-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=xLVNElGZVE0',
    },
    {
        num: '03',
        title: 'Practo Clone',
        desc: 'Healthcare listing and appointment system with clinical management interfaces and comprehensive search features.',
        tech: ['React', 'Context API', 'CSS Modules'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/PRACTO-CLONE',
        live: 'https://practo-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=b2vbHW9GOdU',
    },
    {
        num: '04',
        title: 'OYO Habitat Clone',
        desc: 'Boutique hotel booking platform featuring city-based filtering, room detailed views, and refined booking journeys.',
        tech: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/OYO-CLONE',
        live: 'https://oyo-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=F2vu_lB1owE',
    },
    {
        num: '05',
        title: 'Bombay Closet',
        desc: 'Elegant e-commerce store with product discovery streams, category management, and dynamic cart functionality.',
        tech: ['React', 'Styled Components', 'Redux'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/BOM-CLOSET-CLONE',
        live: 'https://bombay-closet-ankit-singh.netlify.app/',
    },
    {
        num: '06',
        title: 'Premium Coffee Hub',
        desc: 'Visually rich brand experience with animated product menus and immersive storytelling layouts.',
        tech: ['HTML', 'CSS3', 'Vanilla JS'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/COFEE-CLONE',
        live: 'https://coffee-clone-ankit-singh.netlify.app/',
    },
];

const ProjectCard = ({ project, index }) => {
    // Fetch uncropped full-site image
    const fullImg = `https://image.thum.io/get/width/800/${project.live}`;
    const [isHovered, setIsHovered] = useState(false);

    // Give odd and even cards different subtle background colors for variety
    const bgColors = ['#fff', '#fff9e6', '#f0fdf4', '#fdf2f8'];
    const cardBg = bgColors[index % bgColors.length];

    return (
        <div className="neo-brutalist" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: cardBg, position: 'relative' }}>
            
            {/* Project Cover Image area */}
            <div 
                style={{ height: '240px', borderBottom: '3px solid black', overflow: 'hidden', position: 'relative', background: '#000' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, background: 'var(--gold)', border: '2px solid black', padding: '4px 8px', fontWeight: '800',boxShadow: '2px 2px 0px 0px black' }}>
                    #{project.num}
                </div>
                
                <motion.div
                    animate={{ y: isHovered ? '-40%' : '0%' }}
                    transition={{ duration: isHovered ? 6 : 1.5, ease: isHovered ? "linear" : "easeOut" }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100%' }}
                >
                    <img src={fullImg} alt={project.title} style={{ width: '100%', display: 'block', filter: 'grayscale(20%) contrast(1.1)' }} loading="lazy" />
                </motion.div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', textTransform: 'uppercase' }}>
                    {project.title}
                </h3>
                
                <p style={{ fontSize: '15px', color: 'var(--text-dim)', marginBottom: '24px', flex: 1, lineHeight: '1.6', fontWeight: '500' }}>
                    {project.desc}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                    {project.tech.map(t => (
                        <span key={t} style={{ fontSize: '12px', fontWeight: '700', padding: '4px 10px', border: '2px solid black', background: '#fff', boxShadow: '2px 2px 0px 0px black' }}>
                            {t}
                        </span>
                    ))}
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <a href={project.live} target="_blank" rel="noreferrer" className="neo-brutalist-button" style={{ padding: '8px 16px', fontSize: '14px', flex: 1, justifyContent: 'center' }}>
                        Live Demo <FiExternalLink />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="neo-brutalist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: 'black' }}>
                        <FiGithub size={20} />
                    </a>
                    {project.youtube && (
                        <a href={project.youtube} target="_blank" rel="noreferrer" className="neo-brutalist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: 'black', background: '#ffcf00' }}>
                            <FiYoutube size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '120px 24px', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <div style={{ marginBottom: '80px', position: 'relative' }}>
                    
                    <span className="handwriting" style={{ position: 'absolute', top: '-40px', left: '10px', fontSize: '32px', color: 'var(--cyan)', transform: 'rotate(-5deg)' }}>
                        Blood, sweat & code
                    </span>
                    
                    <h2 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: '800', lineHeight: '1', textTransform: 'uppercase', textShadow: '4px 4px 0 var(--gold)' }}>
                        Projects_
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
                    {projects.map((item, i) => (
                        <motion.div 
                            key={item.num} 
                            initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? '-2deg' : '2deg' }} 
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }} 
                            viewport={{ once: true, margin: "-50px" }} 
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ProjectCard project={item} index={i} />
                        </motion.div>
                    ))}
                </div>
                
                {/* Quote Section */}
                <div style={{ marginTop: '120px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className="neo-brutalist" style={{ padding: '32px', maxWidth: '800px', background: 'var(--gold)', transform: 'rotate(-1deg)' }}>
                        <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '16px' }}>
                            "You have the right to perform your actions,<br/>
                            but never to the fruits of those actions."
                        </h3>
                        <p className="handwriting" style={{ fontSize: '24px', fontWeight: '600' }}>
                            — Krishna
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
