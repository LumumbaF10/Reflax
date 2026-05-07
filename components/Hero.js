import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Best Software Studio</p>

          <h1 className={styles.title}>
            Build, Launch<br />
            <em>and Grow</em> your<br />
            Digital Product
          </h1>

          <p className={styles.desc}>
            We craft high-performance web apps, mobile experiences, and
            custom software solutions — beautifully designed and built to scale.
          </p>

          <div className={styles.ctas}>
            <a href="#services" className={styles.primaryBtn}>
              Explore Services
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#work" className={styles.secondaryBtn}>
              <span className={styles.playIcon}>▶</span>
              View Our Work
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}></span>
              <span className={styles.statLabel}></span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.stat}>
              <span className={styles.statNum}></span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card1}>
            <div className={styles.cardInner}>
              <span className={styles.cardIcon}>🌐</span>
              <div>
                <div className={styles.cardTitle}>Web App</div>
                <div className={styles.cardSub}>React / Next.js</div>
              </div>
            </div>
          </div>

          <div className={styles.card2}>
            <div className={styles.cardInner}>
              <span className={styles.cardIcon}>📱</span>
              <div>
                <div className={styles.cardTitle}>Mobile App</div>
                <div className={styles.cardSub}>iOS & Android</div>
              </div>
            </div>
          </div>

          <div className={styles.heroIllustration}>
            <div className={styles.bigCircle}>
              <div className={styles.innerCircle}>
                <div className={styles.codeBlock}>
                  <div className={styles.codeLine} style={{ width: '80%' }}></div>
                  <div className={styles.codeLine} style={{ width: '60%', background: 'var(--accent)' }}></div>
                  <div className={styles.codeLine} style={{ width: '90%' }}></div>
                  <div className={styles.codeLine} style={{ width: '50%', background: 'var(--blue-deep)' }}></div>
                  <div className={styles.codeLine} style={{ width: '70%' }}></div>
                  <div className={styles.codeLine} style={{ width: '40%', background: 'var(--accent)' }}></div>
                </div>
              </div>
            </div>
            {/* Orbiting elements */}
            <div className={styles.orbitRing}>
              <div className={styles.orbitDot} style={{ '--angle': '0deg' }}>
                <span>⚡</span>
              </div>
              <div className={styles.orbitDot} style={{ '--angle': '120deg' }}>
                <span>🔧</span>
              </div>
              <div className={styles.orbitDot} style={{ '--angle': '240deg' }}>
                <span>🎨</span>
              </div>
            </div>
          </div>

          <div className={styles.card3}>
            <div className={styles.progressLabel}>Project Complete</div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <div className={styles.progressNum}>94%</div>
          </div>
        </div>
      </div>
    </section>
  )
}
