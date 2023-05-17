'use client'
import styles from '../styles/home.module.scss'
import Image from 'next/image'

export default function Skill( props ) {
  return (
    <div className={styles.column}>
      <Image 
        src={props.logo}
        alt="Skill Logo"
      />
      <h4 className={styles.skill_name}>{props.name}</h4>
    </div>
  )
} 