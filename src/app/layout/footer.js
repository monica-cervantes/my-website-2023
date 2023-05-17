'use client'
import styles from '../styles/footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer({ layout }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.copyright}>&copy; 2023 Monica Cervantes</p>
        <div className="footer-links">
          <a href="tel:+639270772480" className={styles.link}>
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="mailto:cervantesmonicalouise@gmail.com" className={styles.link}>
            <FontAwesomeIcon icon={faEnvelope} />  
          </a>
          <a href="#" className={styles.link}>
            <FontAwesomeIcon icon={faGithub} />  
          </a>
        </div>
      </div>
    </div>
  )
}