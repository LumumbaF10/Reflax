import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>⟨/⟩</span>
              <span className={styles.logoText}>Reflax</span>
            </a>
            <p className={styles.tagline}>
              Building digital products that drive<br />real-world impact — Reflax Software Solutions.
            </p>
            <div className={styles.socials}>
              {['𝕏', 'in', 'gh', 'dr'].map(s => (
                <a key={s} href="#" className={styles.social}>{s}</a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.col}>
              <h4>Company</h4>
              <ul>
                {['About Us', 'Careers', 'Blog', 'Press'].map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Services</h4>
              <ul>
                {['Web Dev', 'Mobile Apps', 'AI Integration', 'UI/UX Design'].map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Legal</h4>
              <ul>
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Reflax Software Solutions. All rights reserved.</p>
          <p>Made with ❤️ in  Kenya</p>
        </div>
      </div>
    </footer>
  )
}
