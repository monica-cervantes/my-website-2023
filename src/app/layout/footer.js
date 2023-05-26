'use client'
import styles from '../styles/footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ layout }) => {
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
          <a href="https://github.com/monica-cervantes" className={styles.link}>
            <FontAwesomeIcon icon={faGithub} />  
          </a>
          <a href="https://www.linkedin.com/in/monicalouisecervantes/" className={styles.link}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;