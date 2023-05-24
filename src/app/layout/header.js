'use-client'
import Image from 'next/image'
import Logo from '../images/logo.png'
import styles from '../styles/header.module.scss'
import globalStyles from '../styles/global.module.scss'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import Navbar from '../components/navbar'

const Header = ({ layout }) => {
  return (
    <section className={styles.header}>
      <div className={globalStyles.container}>
        <Navbar />
      </div>
    </section>
  )
}

export default Header;