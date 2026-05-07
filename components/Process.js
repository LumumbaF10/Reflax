import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    icon: '💡',
    title: 'Discover & Plan',
    desc: 'We start with deep discovery sessions to understand your goals, users, and constraints. Then we craft a clear roadmap.',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'Design & Prototype',
    desc: 'Our designers turn ideas into beautiful wireframes and high-fidelity prototypes you can interact with before a single line is written.',
  },
  {
    num: '03',
    icon: '⚙️',
    title: 'Build & Test',
    desc: 'Engineers build your product using modern, maintainable code. Every feature is rigorously tested for quality and performance.',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Launch & Support',
    desc: 'We deploy with zero downtime, monitor closely after launch, and provide ongoing maintenance to keep everything running smoothly.',
  },
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.label}>How We Work</p>
          <h2 className={styles.title}>Your Product Built<br />in 4 Clear Steps</h2>
          <p className={styles.desc}>
            A transparent, collaborative process that keeps you in the loop at every stage — no surprises, just results.
          </p>
          <a href="#contact" className={styles.cta}>Start a Project →</a>

          <div className={styles.imgWrap}>
            <div className={styles.imgBlob}>
              <div className={styles.teamIllustration}>
                <span>👨‍💻</span>
                <span>👩‍🎨</span>
                <span>🧑‍🚀</span>
              </div>
              <p className={styles.teamLabel}>A dedicated team, just for you.</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
