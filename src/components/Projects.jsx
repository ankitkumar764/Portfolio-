import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowRight, FiYoutube, FiExternalLink, FiLayout, FiDatabase } from 'react-icons/fi';
import { SiPostman, SiFigma } from 'react-icons/si';

// Static Thumbnails
import tictactoeImg from '../assets/tictactoe.png';
import whackamoleImg from '../assets/whackamole.png';
import todoImg from '../assets/todo.png';
import algorangeImg from '../assets/algorange.png';

const projects = [
    {
        num: '01',
        title: 'Gemini AI Clone',
        category: 'Clones',
        desc: 'Advanced replica of Google Gemini\'s generative interface. Focused on minimalist chat architecture and seamless response flows.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/GEMINI-CLONE',
        live: 'https://geminii-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=dmcHhVfmmY8&t=2s',
        figma: 'https://www.figma.com/community/file/1344445899478832049',
    },
    {
        num: '02',
        title: 'Udan — Airline Platform',
        category: 'Clones',
        desc: 'Professional airline booking interface with flight telemetry, passenger management, and extremely responsive search results.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/UDAN-CLONE',
        live: 'https://udan-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=xLVNElGZVE0',
    },
    {
        num: '03',
        title: 'Practo Clone',
        category: 'Clones',
        desc: 'Healthcare listing and appointment system with clinical management interfaces and comprehensive search features.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/PRACTO-CLONE',
        live: 'https://practo-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=b2vbHW9GOdU',
    },
    {
        num: '04',
        title: 'OYO Habitat Clone',
        category: 'Clones',
        desc: 'Boutique hotel booking platform featuring city-based filtering, room detailed views, and refined booking journeys.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/OYO-CLONE',
        live: 'https://oyo-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=F2vu_lB1owE',
        postman: 'https://documenter.getpostman.com/view/OYO_API_DOCS',
    },
    {
        num: '05',
        title: 'Algo Rangers',
        category: 'Full Stack',
        desc: 'Advanced algorithm visualizer and competitive programming platform with real-time sorting and graph simulations.',
        tech: ['React', 'Node.js', 'Express', 'Canvas API'],
        github: 'https://github.com/ankitkumar764/AlgoRangers',
        live: 'https://algo-rangers.vercel.app/',
        youtube: 'https://www.youtube.com/watch?v=placeholder',
        image: algorangeImg,
    },
    {
        num: '06',
        title: 'Bombay Closet',
        category: 'Frontend',
        desc: 'Elegant e-commerce store with product discovery streams, category management, and dynamic cart functionality.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/BOM-CLOSET-CLONE',
        live: 'https://bombay-closet-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=placeholder',
    },
    {
        num: '07',
        title: 'Premium Coffee Hub',
        category: 'Frontend',
        desc: 'Visually rich brand experience with animated product menus and immersive storytelling layouts.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/ankitkumar764/FRONT/tree/main/COFEE-CLONE',
        live: 'https://coffee-clone-ankit-singh.netlify.app/',
        youtube: 'https://www.youtube.com/watch?v=placeholder',
    },
    {
        num: '08',
        title: 'Tic-Tac-Toe Pro',
        category: 'Games',
        desc: 'Classic Tic-Tac-Toe with an AI difficulty selector, smooth animations, and a scoreboard.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        github: 'https://github.com/ankitkumar764/JS_Project/tree/main/tic-tac',
        live: 'https://ankitsinghtic-tac.netlify.app/',
        image: tictactoeImg,
    },
    {
        num: '09',
        title: 'Whack-A-Mole',
        category: 'Games',
        desc: 'High-speed browser game testing reflexes. Features difficulty levels, sound effects, and session high scores.',
        tech: ['Vanilla JS', 'DOM Manipulation', 'CSS Animations'],
        github: 'https://github.com/ankitkumar764/JS_Project/tree/main/whack_mole',
        live: 'https://ankit-singh-whack-a-mole.netlify.app/',
        image: whackamoleImg,
    },
    {
        num: '10',
        title: 'Productivity Forge (Todo)',
        category: 'Games',
        desc: 'Advanced task management with persistent storage, filtering, and priority tagging.',
        tech: ['React', 'LocalStorage', 'Tailwind'],
        github: 'https://github.com/ankitkumar764/JS_Project/tree/main/todo',
        live: 'https://ankit-singh-todo.netlify.app/',
        image: todoImg,
    }
];

const ProjectCard = ({ project, index }) => {
    // Fetch uncropped full-site image if no local image provided
    const displayImg = project.image || `https://image.thum.io/get/width/800/${project.live}`;
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
                    animate={{ y: isHovered ? '-20%' : '0%' }}
                    transition={{ duration: isHovered ? 4 : 1.5, ease: isHovered ? "linear" : "easeOut" }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100%' }}
                >
                    <img src={displayImg} alt={project.title} style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.1)' }} loading="lazy" />
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
                
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <a href={project.live} target="_blank" rel="noreferrer" className="neo-brutalist-button" style={{ padding: '8px 16px', fontSize: '14px', flex: 1, justifyContent: 'center' }}>
                        Live Demo <FiExternalLink />
                    </a>
                    <a href={project.github} title="GitHub Repository" target="_blank" rel="noreferrer" className="neo-brutalist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: 'black' }}>
                        <FiGithub size={20} />
                    </a>
                    {project.youtube && (
                        <a href={project.youtube} title="YouTube Demo" target="_blank" rel="noreferrer" className="neo-brutalist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: 'black', background: '#ffcf00' }}>
                            <FiYoutube size={20} />
                        </a>
                    )}
                    {project.postman && (
                        <a href={project.postman} title="API Documentation" target="_blank" rel="noreferrer" className="neo-brutalist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: 'black', background: '#FF6C37' }}>
                            <SiPostman size={20} />
                        </a>
                    )}
                    {project.figma && (
                        <a href={project.figma} title="Figma Design" target="_blank" rel="noreferrer" className="neo-brutalist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', color: 'black', background: '#F24E1E' }}>
                            <SiFigma size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = useMemo(() => {
        let result = projects;
        if (activeCategory !== 'All') {
            result = projects.filter(p => p.category === activeCategory);
        }
        return result;
    }, [activeCategory]);

    const displayedProjects = useMemo(() => {
        return showAll ? filteredProjects : filteredProjects.slice(0, 4);
    }, [filteredProjects, showAll]);

    // Reset showAll when category changes
    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setShowAll(false);
    };

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

                {/* Category Filter */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '60px' }}>
                    {['All', 'Games', 'Clones', 'Full Stack', 'Frontend'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            style={{
                                padding: '10px 20px',
                                background: activeCategory === cat ? 'var(--cyan)' : 'white',
                                color: activeCategory === cat ? 'white' : 'black',
                                border: '3px solid black',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                cursor: 'pointer',
                                boxShadow: activeCategory === cat ? '0px 0px 0px 0px black' : '4px 4px 0px 0px black',
                                transform: activeCategory === cat ? 'translate(4px, 4px)' : 'none',
                                transition: 'all 0.1s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((item, i) => (
                            <motion.div 
                                layout
                                key={item.num} 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={item} index={i} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* See More Button */}
                {!showAll && filteredProjects.length > 4 && (
                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <button 
                            onClick={() => setShowAll(true)}
                            className="neo-brutalist-button"
                            style={{ padding: '16px 48px', fontSize: '18px', fontWeight: '800' }}
                        >
                            See More Projects <FiArrowRight />
                        </button>
                    </div>
                )}

                
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
