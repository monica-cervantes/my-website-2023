'use client'
import Image from 'next/image'
import profilePic from '../images/profile-pic.png'
import styles from '../styles/home.module.scss'
import Blob from '../components/blob'

export default function Banner({ layout }) {
  return (
    <section className={styles.banner}>
      <Blob />
      <div className={styles.banner__container}>
        <div className="img-wrapper">
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