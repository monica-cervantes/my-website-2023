'use-client'
import styles from '../styles/header.module.scss'
import globalStyles from '../styles/global.module.scss'
import Navbar from '../components/navbar'

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={globalStyles.container}>
        <Navbar />
      </div>
    </section>
  )
}

export default Header;