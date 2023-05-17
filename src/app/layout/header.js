'use-client'
import Image from 'next/image';
import Logo from '../images/logo.png'
import styles from '../styles/header.module.scss'
import globalStyles from '../styles/global.module.scss'

export default function Header({ layout }) {
  return (
    <section className={styles.header}>
      <div className={globalStyles.container}>
        <nav className={styles.header__navbar}>
          <a className="navbar-brand" href="#">
            <Image 
              src={Logo}
              alt="logo"
            />
          </a>
          <button className={styles.header__navbar_toggler} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={styles.header__navbar_collapse} id="navbarSupportedContent">
            <ul className={styles.header__navbar_nav}>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="#">Home <span className={styles.header__sr_only}>(current)</span></a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="#">Experience</a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="#">Skills</a>
              </li>
              <li className={styles.header__nav_item}>
                <a className={styles.header__nav_link} href="#">Works</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  )
}