import styles from './Services.module.css'

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Blazing-fast, responsive web applications built with React, Next.js, and modern frameworks. From MVPs to enterprise platforms.',
    color: '#e8f6fb',
    accent: '#2a9fc9',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences for iOS and Android using React Native and Flutter that delight users.',
    color: '#fff5f3',
    accent: '#df6951',
  },
  {
    icon: '☁️',
    title: 'Cloud & Backend',
    desc: 'Scalable APIs, microservices, and cloud infrastructure on AWS, GCP, and Azure. Built for performance and reliability.',
    color: '#f0f9ff',
    accent: '#63b3d1',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Embed intelligence into your product with LLMs, computer vision, recommendation engines, and intelligent automation.',
    color: '#fef9e8',
    accent: '#f0a500',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces backed by user research. We craft design systems that are both functional and stunning.',
    color: '#f5f0ff',
    accent: '#8b5cf6',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    desc: 'Security audits, penetration testing, and best-practice implementation to keep your product and users safe.',
    color: '#f0fff4',
    accent: '#10b981',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>What We Do</p>
          <h2 className={styles.title}>We Offer World-Class<br />Software Services</h2>
          <p className={styles.sub}>From idea to launch, we deliver full-stack digital solutions tailored to your needs and ambitions.</p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={styles.card}
              style={{ '--card-accent': s.accent, '--card-bg': s.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.iconWrap} style={{ background: s.color }}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href="#contact" className={styles.learnMore}>
                Learn more <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
