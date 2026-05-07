import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.cta}>
          <div className={styles.blob}></div>
          <p className={styles.label}>Let's Work Together</p>
          <h2 className={styles.title}>
            Ready to Build Something<br />
            <em>Extraordinary?</em>
          </h2>
          <p className={styles.desc}>
            Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
          </p>
          <div className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.input}
            />
            <button className={styles.btn}>Get Free Consultation</button>
          </div>
          <p className={styles.note}>No commitment required · Response within 24h</p>
        </div>

        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <div>
              <div className={styles.contactLabel}>Location</div>
              <div className={styles.contactVal}>Kakamega, Kenya</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <div>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactVal}>alexdummy450@gmail.com</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <div>
              <div className={styles.contactLabel}>Phone</div>
              <div className={styles.contactVal}>+254 785 263 57</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
