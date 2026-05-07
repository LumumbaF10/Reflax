'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>⟨/⟩</span>
          <span className={styles.logoText}>Reflax</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {['Services', 'Work', 'Process', 'Contact'].map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#contact" className={styles.loginBtn}></a>
          <a href="#contact" className={styles.signupBtn}></a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
        </button>
      </div>
    </nav>
  )
}
