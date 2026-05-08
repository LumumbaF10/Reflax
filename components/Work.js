import styles from './Work.module.css'


const projects = [
  {
    title: 'Asili studios',
    category: 'Web App',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Fashion E-comerce site',
    color: '#e8f6fb',
    emoji: '',
    screenshot: 'images/asili-studios.png',
    link: '#',
  },
  {
    title: 'Vyema community',
    category: 'Web App',
    tech: ['Next js', 'Firebase'],
    desc: 'Landing page for CBO',
    color: '#fff5f3',
    emoji: '',
    screenshot: '/images/vyema.png',
    link: 'https://vyema001.github.io/vyemacommunity./',
  },
  {
    title: 'Reflax',
    category: 'Landing page',
    tech: ['Next.js', 'Python', 'AWS'],
    desc: 'Landing page for software solution company',
    color: '#f0fff4',
    emoji: '',
    screenshot: '/images/Reflax.png',
    link: '#',
  },
]

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Our Portfolio</p>
          <h2 className={styles.title}>Top Projects We've<br />Delivered</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={p.title} className={styles.card} style={{ '--bg': p.color }}>
              <div className={styles.cardVisual} style={{ background: p.color }}>
                <span className={styles.emoji}>{p.emoji}</span>
                {p.screenshot ? (
                  <div className={styles.mockScreenImg}>
                    <img src={p.screenshot} alt={p.title} className={styles.screenshot} />
                  </div>
                ) : (
                  <div className={styles.mockScreen}>
                    <div className={styles.screenBar}></div>
                    <div className={styles.screenLine}></div>
                    <div className={styles.screenLine} style={{ width: '60%' }}></div>
                    <div className={styles.screenLine} style={{ width: '80%' }}></div>
                    <div className={styles.screenLine} style={{ width: '45%' }}></div>
                  </div>
                )}
              </div>
              <div className={styles.cardBody}>
                <span className={styles.category}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tech.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
                    Visit Site ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaBtn}>View All Projects →</a>
        </div>
      </div>
    </section>
  )
}
