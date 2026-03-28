import { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Resize Handlers
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Initialize Particles
        const particlesArray = [];
        // Scale particle count based on screen size (prevent mobile lag)
        const numParticles = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
        
        for (let i = 0; i < numParticles; i++) {
            particlesArray.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: 'rgba(212, 175, 55, 0.6)'
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesArray.length; i++) {
                let p1 = particlesArray[i];
                p1.x += p1.speedX;
                p1.y += p1.speedY;

                // Bounce off edges smoothly
                if (p1.x < 0 || p1.x > canvas.width) p1.speedX *= -1;
                if (p1.y < 0 || p1.y > canvas.height) p1.speedY *= -1;

                ctx.fillStyle = p1.color;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles that are within close proximity
                for (let j = i; j < particlesArray.length; j++) {
                    let p2 = particlesArray[j];
                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 - distance / 1000})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'transparent' }} />;
};

export default ParticleCanvas;
