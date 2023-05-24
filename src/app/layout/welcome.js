'use client'
import styles from '../styles/home.module.scss'
import globalStyles from '../styles/global.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome__container}>
        <h3>WELCOME</h3>
        <p>I am an enthusiastic and skilled front-end web developer with a degree in Information Technology and over 4 years of web development experience. I excel at translating PSD designs into responsive websites and am dedicated to delivering beautiful and functional websites that provide the best user experience. I am a team player, fast learner, and eager to contribute my knowledge and skills to your team and clients.</p>
      </div>
    </section>
  )
} 

export default Welcome;