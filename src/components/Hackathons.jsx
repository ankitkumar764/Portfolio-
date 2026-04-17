import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiMapPin, FiGlobe, FiUsers } from 'react-icons/fi';
import hack1 from '../assets/hackathon_1.png';
import hack2 from '../assets/hackathon_2.png';

const hackathonData = {
    online: [
        {
            id: 'on1',
            title: "Social Hackathon v2.0",
            organizer: "Microsoft Learn Student Ambassadors",
            date: "March 2024",
            desc: "Participated in an intense 24-hour sprint focusing on sustainable development goals through cloud-native solutions.",
            image: hack1,
            awards: ["Certificate of Participation"],
            link: "#"
        },
        {
            id: 'on2',
            title: "Code-A-Thon",
            organizer: "Major League Hacking (MLH)",
            date: "December 2023",
            desc: "Built a real-time collaborative workspace for developers, securing a spot in the top 10 finalists.",
            image: hack2,
            awards: ["Top 10 Finalist"],
            link: "#"
        },
        {
            id: 'on3',
            title: "Doppelgänger 30H Sprint",
            organizer: "OpenPools",
            date: "March 2026",
            desc: "A collaborative 30-hour build sprint focused on transforming professional DNA into real-world solutions. Recognized for curiosity, creativity, and high-impact build contributions.",
            image: "https://res.cloudinary.com/dxwlm3gex/image/upload/q_auto/f_auto/v1776427802/doppelanger_certificate_page-0001_ap8lg5.jpg",
            awards: ["Certificate of Recognition", "High Impact Award"],
            link: "https://openpools.in"
        }
    ],
    offline: [
        {
            id: 'off1',
            title: "Innovate India 2024",
            organizer: "Google Developers Group",
            location: "New Delhi, India",
            date: "January 2024",
            desc: "Developed a prototype for decentralized identity management. Presented it physically to the jury alongside an incredible team.",
            teamImage: hack2,
            certificate: hack1,
            awards: ["Certificate of Participation", "Innovation Badge"],
            link: "#"
        }
    ]
};

const HackathonCard = ({ hack, type }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    // Calculate rotation logic
    const rotateX = isHovered && cardRef.current ? ((mousePos.y / cardRef.current.offsetHeight) - 0.5) * -12 : 0;
    const rotateY = isHovered && cardRef.current ? ((mousePos.x / cardRef.current.offsetWidth) - 0.5) * 12 : 0;

    return (
        <motion.div
            ref={cardRef}
            layout
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }) }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                rotateX,
                rotateY
            }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ 
                rotateX: { type: 'spring', stiffness: 300, damping: 20 },
                rotateY: { type: 'spring', stiffness: 300, damping: 20 },
                layout: { duration: 0.4 },
                default: { duration: 0.4 }
            }}
            style={{
                position: 'relative',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transformStyle: 'preserve-3d',
                boxShadow: isHovered 
                    ? `0 30px 60px rgba(0,0,0,0.6), 0 0 40px var(--cyan-muted)` 
                    : '0 10px 30px rgba(0,0,0,0.3)',
                zIndex: isHovered ? 10 : 1,
            }}
        >
            {/* Holographic Glowing Mouse Tracking Spotlight */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'absolute',
                            pointerEvents: 'none',
                            inset: 0,
                            background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 60%)`,
                            zIndex: 20,
                            borderRadius: '24px',
                            mixBlendMode: 'overlay',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Inner Content that 'levitates' in 3D */}
            <div style={{ transform: 'translateZ(40px)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    
                    {type === 'offline' ? (
                        <div style={{ display: 'flex', gap: '4px', padding: '12px', height: '240px', background: 'rgba(255, 255, 255, 0.01)' }}>
                            {/* Team Snapshot */}
                            <div style={{ position: 'relative', flex: 2.2, borderRadius: '16px', overflow: 'hidden' }}>
                                <img 
                                    src={hack.teamImage} 
                                    alt="Team Snapshot" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-rgb), 0.8), transparent 50%)' }} />
                                <div style={{ position: 'absolute', bottom: '12px', left: '12px', display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--cyan-muted)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-strong)', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', color: 'var(--cyan)', fontWeight: '700' }}>
                                    <FiUsers size={14} /> Team Match
                                </div>
                            </div>

                            {/* Certificate Side Badge with float effect */}
                            <motion.div 
                                animate={{ y: isHovered ? -10 : 0 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                style={{ position: 'relative', flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                            >
                                <img 
                                    src={hack.certificate} 
                                    alt="Certificate" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '20px', fontSize: '10px', color: '#fff', fontWeight: '700', textTransform: 'uppercase' }}>
                                    <FiAward size={12} color="var(--cyan)" /> Cert
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                            <img 
                                src={hack.image} 
                                alt="Certificate" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-rgb), 0.95) 0%, transparent 100%)', pointerEvents: 'none' }} />
                            
                            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                                <div style={{ background: 'var(--cyan-muted)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-strong)', color: 'var(--cyan)', padding: '6px 12px', borderRadius: '30px', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FiGlobe size={14} /> Global Link
                                </div>
                            </div>
                        </div>
                    )}

                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', background: 'var(--bg-card)', zIndex: 2 }}>
                        {type === 'offline' && hack.location && (
                            <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FiMapPin size={14} color="var(--cyan)" /> {hack.location}
                            </div>
                        )}
                        
                        <div style={{ marginBottom: '12px' }}>
                            <span style={{ fontSize: '12px', color: 'var(--cyan)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                {hack.organizer}
                            </span>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text)', marginTop: '4px', letterSpacing: '-0.5px' }}>
                                {hack.title}
                            </h3>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-mut)', fontSize: '13px', marginBottom: '16px' }}>
                            <FiCalendar size={14} /> {hack.date}
                        </div>

                        <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '1.6', flex: 1, marginBottom: '24px' }}>
                            {hack.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                            {hack.awards.map((award, i) => (
                                <span key={i} style={{ 
                                    fontSize: '11px', 
                                    padding: '6px 12px', 
                                    background: 'rgba(255,255,255,0.03)', 
                                    border: '1px solid var(--border)', 
                                    borderRadius: '6px', 
                                    color: 'var(--text)',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    <FiAward size={12} style={{ color: 'var(--cyan)' }} />
                                    {award}
                                </span>
                            ))}
                        </div>

                        <a href={hack.link} target="_blank" rel="noreferrer" style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '8px', 
                            fontSize: '13px', 
                            fontWeight: '700', 
                            color: 'var(--cyan)', 
                            textTransform: 'uppercase', 
                            letterSpacing: '1px',
                            transition: '0.3s'
                        }}>
                            View Achievement <FiExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Hackathons() {
    const [activeTab, setActiveTab] = useState('online');

    return (
        <section id="hackathons" style={{ padding: '100px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', perspective: '2000px' }}>
                
                {/* Section Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    style={{ marginBottom: '60px', textAlign: 'center' }}
                >
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Adventures & Builds
                    </p>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px', lineHeight: '1.2' }}>
                        Hackathons & <span style={{ color: 'var(--cyan)' }}>Awards</span>.
                    </h2>
                </motion.div>

                {/* Cyberpunk Tabs Tracker */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
                    <div style={{ position: 'relative', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '30px', border: '1px solid var(--border)', display: 'flex', gap: '8px' }}>
                        
                        {/* Smooth Sliding Pill Indicator */}
                        <motion.div 
                            animate={{ x: activeTab === 'online' ? 0 : '100%' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            style={{ 
                                position: 'absolute', 
                                width: '50%', 
                                height: 'calc(100% - 12px)', 
                                top: '6px', 
                                left: '6px', 
                                background: 'var(--cyan)', 
                                borderRadius: '24px', 
                                zIndex: 1,
                                boxShadow: '0 0 20px var(--cyan-muted)'
                            }} 
                        />

                        <button 
                            onClick={() => setActiveTab('online')}
                            style={{
                                position: 'relative', zIndex: 2,
                                padding: '12px 32px',
                                borderRadius: '24px',
                                background: 'transparent',
                                color: activeTab === 'online' ? '#fff' : 'var(--text-dim)',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: '800',
                                fontSize: '14px',
                                letterSpacing: '1px',
                                transition: 'color 0.3s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            <FiGlobe size={16} /> Online
                        </button>
                        <button 
                            onClick={() => setActiveTab('offline')}
                            style={{
                                position: 'relative', zIndex: 2,
                                padding: '12px 32px',
                                borderRadius: '24px',
                                background: 'transparent',
                                color: activeTab === 'offline' ? '#fff' : 'var(--text-dim)',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: '800',
                                fontSize: '14px',
                                letterSpacing: '1px',
                                transition: 'color 0.3s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            <FiMapPin size={16} /> Offline
                        </button>
                    </div>
                </div>

                {/* Grid Container */}
                <div style={{ minHeight: '400px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}
                        >
                            {hackathonData[activeTab].map((hack) => (
                                <div key={hack.id} style={{ perspective: '1200px' }}>
                                    <HackathonCard hack={hack} type={activeTab} />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Huge Abstract Holographic Backdrop Glow */}
            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--cyan-muted) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: -1 }} />
        </section>
    );
}
