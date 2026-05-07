import styles from './Testimonials.module.css'

const testimonials = [
    {
        quote: "Reflax transformed our clunky internal tool into a polished SaaS product in just 3 months. The team's technical depth and design taste is unmatched.",
        name: 'Amara Nwosu',
        role: 'CTO, FinServe Africa',
        avatar: '👩🏾‍💼',
        stars: 5,
    },
    {
        quote: "We went from napkin sketch to live mobile app in 10 weeks. Their process is transparent and the quality speaks for itself — App Store rating shot up to 4.9.",
        name: 'James Kariuki',
        role: 'Founder, ShopFlow Kenya',
        avatar: '👨🏿‍💻',
        stars: 5,
    },
    {
        quote: "Exceptional engineering team. They not only delivered on spec but proactively suggested optimizations that saved us thousands in cloud costs monthly.",
        name: 'Sophie Andersen',
        role: 'VP Engineering, MediCare SaaS',
        avatar: '👩🏼‍🔬',
        stars: 5,
    },
]

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.label}>Client Love</p>
                    <h2 className={styles.title}>What Our Clients<br />Say About Us</h2>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={t.name} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
                            <div className={styles.stars}>
                                {'★'.repeat(t.stars)}
                            </div>
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.avatar}</div>
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.brands}>
                    <p className={styles.brandsLabel}>Trusted by teams at</p>
                    <div className={styles.brandLogos}>
                        {['Safaricom', 'Andela', 'Flutterwave', 'Jumia', 'Twiga Foods'].map(b => (
                            <span key={b} className={styles.brand}>{b}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
