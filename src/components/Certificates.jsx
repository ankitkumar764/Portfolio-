import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCheckCircle } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const certificates = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2025",
        description: "Foundational knowledge of cloud concepts, security, technology, and billing.",
        link: "#",
        icon: "☁️"
    },
    {
        title: "Google Cloud Digital Leader",
        issuer: "Google Cloud",
        date: "2024",
        description: "Understanding of Google Cloud core products and services.",
        link: "#",
        icon: "⚡"
    },
    {
        title: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "2024",
        description: "Knowledge of cloud services and how those services are provided with Azure.",
        link: "#",
        icon: "🔷"
    }
];

export default function Certificates() {
    return (
        <>
        <Helmet>
                <title>Certifications - Ankit Kumar</title>
                <meta name="description" content="Professional certifications earned by Ankit Kumar, including AWS, Google Cloud, and Microsoft Azure certifications." />
                <meta name="keywords" content="Ankit Kumar, Certifications, AWS, Google Cloud, Azure, Professional Certifications" />
                <meta name="author" content="Ankit Kumar" />
                <meta property="og:title" content="Certifications - Ankit Kumar" />
                <meta property="og:description" content="Professional certifications earned by Ankit Kumar." />
                <meta property="og:type" content="website" />
            </Helmet>
        <section style={{ padding: '160px 24px 100px', minHeight: '100vh', position: 'relative', background: 'var(--bg)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--cyan)', fontSize: '14px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>Validation</p>
                        <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: '800', color: 'var(--text)', marginBottom: '24px', letterSpacing: '-2px' }}>
                        Professional <span style={{ color: 'var(--cyan)' }}>Certifications.</span>
                    </h1>
                    <p style={{ color: 'var(--text-dim)', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
                        A collection of verified skills and professional credentials earned through rigorous examinations and practical projects.
                    </p>
                </motion.div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid var(--border)',
                                borderRadius: '24px',
                                padding: '40px',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {/* Accent Glow */}
                            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--cyan)', filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none' }} />
                            
                            <div style={{ fontSize: '48px', marginBottom: '24px' }}>{cert.icon}</div>
                            
                            <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px', lineHeight: '1.2' }}>{cert.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                                <span style={{ color: 'var(--cyan)', fontWeight: '600', fontSize: '14px' }}>{cert.issuer}</span>
                                <span style={{ width: '4px', height: '4px', background: 'var(--text-dim)', borderRadius: '50%', opacity: 0.3 }} />
                                <span style={{ color: 'var(--text-dim)', fontSize: '14px' }}>{cert.date}</span>
                            </div>
                            
                            <p style={{ color: 'var(--text-dim)', lineHeight: '1.6', marginBottom: '32px', fontSize: '15px' }}>
                                {cert.description}
                            </p>
                            
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan)', fontSize: '13px', fontWeight: '600' }}>
                                    <FiCheckCircle /> Verified
                                </div>
                                <motion.a 
                                    href={cert.link}
                                    whileHover={{ scale: 1.1 }}
                                    style={{ 
                                        width: '44px', 
                                        height: '44px', 
                                        borderRadius: '12px', 
                                        background: 'rgba(255,255,255,0.05)', 
                                        border: '1px solid var(--border)', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        color: 'var(--text)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <FiExternalLink />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ marginTop: '100px', textAlign: 'center', padding: '60px', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%)', border: '1px solid var(--border-strong)' }}
                >
                    <FiAward size={48} style={{ color: 'var(--cyan)', marginBottom: '24px', opacity: 0.5 }} />
                    <h2 style={{ fontSize: '28px', color: 'var(--text)', marginBottom: '16px' }}>Want to see more details?</h2>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '32px' }}>Download my full resume to see academic records and other achievements.</p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: 'var(--cyan)', color: '#000', border: 'none', padding: '16px 40px', borderRadius: '14px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}
                    >
                        Download CV
                    </motion.button>
                </motion.div>
            </div>
        </section>
        </>
    );
}
