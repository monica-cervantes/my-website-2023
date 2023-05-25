'use client'
import Image from 'next/image'
import profilePic from '../images/profile-pic.png'
import styles from '../styles/home.module.scss'
import Blob from '../components/blob'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__container}>
        <Blob />
        <div className={styles.banner__img_wrapper}>
          <Image
            src={profilePic}
            alt="Picture of me"
            width={500}
          />
        </div>
        <div className={styles.banner__content_wrapper}>
          <h1 className='name'>monica cervantes</h1>
          <h2 className='profession'>FRONT-END WEB DEVELOPER</h2>
        </div>
      </div>
    </section>
  )
}

export default Banner;