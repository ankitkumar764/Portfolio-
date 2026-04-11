import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';
import hack1 from '../assets/hackathon_1.png';
import hack2 from '../assets/hackathon_2.png';

const hackathons = [
    {
        id: 1,
        title: "Social Hackathon v2.0",
        organizer: "Microsoft Learn Student Ambassadors",
        date: "March 2024",
        desc: "Participated in an intense 24-hour sprint focusing on sustainable development goals through cloud-native solutions.",
        image: hack1,
        awards: ["Certificate of Participation"],
        link: "#"
    },
    {
        id: 2,
        title: "Innovate India 2024",
        organizer: "Google Developers Group",
        date: "January 2024",
        desc: "Developed a prototype for decentralized identity management during this national-level hackathon event.",
        image: hack2,
        awards: ["Certificate of Participation", "Innovation Badge"],
        link: "#"
    },
    {
        id: 3,
        title: "Code-A-Thon",
        organizer: "Major League Hacking (MLH)",
        date: "December 2023",
        desc: "Built a real-time collaborative workspace for developers, securing a spot in the top 10 finalists.",
        image: hack1, // Using placeholder again
        awards: ["Certificate of Participation"],
        link: "#"
    }
];

const HackathonCard = ({ hack, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
    >
        {/* Certificate Preview/Overlay */}
        <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
            <img 
                src={hack.image} 
                alt={hack.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 10, 11, 0.9) 0%, transparent 100%)', pointerEvents: 'none' }} />
            
            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                <div style={{ background: 'rgba(56, 189, 248, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(56, 189, 248, 0.3)', color: 'var(--gold)', padding: '6px 12px', borderRadius: '30px', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FiAward size={14} /> Certified
                </div>
            </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {hack.organizer}
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text)', marginTop: '4px', letterSpacing: '-0.5px' }}>
                    {hack.title}
                </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '13px', marginBottom: '16px' }}>
                <FiCalendar size={14} /> {hack.date}
            </div>

            <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
                {hack.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {hack.awards.map((award, i) => (
                    <span key={i} style={{ 
                        fontSize: '10px', 
                        padding: '4px 10px', 
                        background: 'rgba(255,255,255,0.05)', 
                        border: '1px solid var(--border)', 
                        borderRadius: '4px', 
                        color: 'var(--text-dim)',
                        fontFamily: "'Outfit', sans-serif"
                    }}>
                        {award}
                    </span>
                ))}
            </div>

            <a href={hack.link} target="_blank" rel="noreferrer" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '12px', 
                fontWeight: '700', 
                color: 'var(--gold)', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                transition: '0.3s'
            }} onMouseEnter={(e) => { e.currentTarget.style.gap = '12px'; }} onMouseLeave={(e) => { e.currentTarget.style.gap = '8px'; }}>
                View Certificate <FiExternalLink size={14} />
            </a>
        </div>
    </motion.div>
);

export default function Hackathons() {
    return (
        <section id="hackathons" style={{ padding: '100px 24px', background: 'rgba(10, 10, 11, 0.3)', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Section Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    style={{ marginBottom: '60px', textAlign: 'center' }}
                >
                    <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--gold)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Participation
                    </p>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', color: 'var(--text)', letterSpacing: '-1.5px', lineHeight: '1.2' }}>
                        Hackathons & <span style={{ color: 'var(--gold)' }}>Awards</span>.
                    </h2>
                </motion.div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {hackathons.map((hack, index) => (
                        <HackathonCard key={hack.id} hack={hack} index={index} />
                    ))}
                </div>
            </div>

            {/* Subtle background glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
        </section>
    );
}
