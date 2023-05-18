'use client'
import styles from '../styles/home.module.scss'
import Image from 'next/image'


const Experience = ( props ) => {
  return (
    <div className={styles.column}>
       <div className={`${styles.job} ${styles.job_details}`}>
          <div className={styles.wrapper}>
            <h2 className={styles.position}>{props.position}</h2>
            <h2 className={styles.job_heading}>{props.year} <span>{props.company}</span></h2>
            <p className={styles.job_summary}>{props.summary}</p>
          </div>
        </div>
        <div className={`${styles.job} ${styles.job_logo}`}>
          <div className={styles.logo_holder}>
            <Image 
              src={props.logo}
              alt="Company Logo"
              width={300}
            /> 
          </div>  
        </div>
    </div>
  )
} 

export default Experience;