'use client'
import styles from '../styles/home.module.scss'
import globalStyles from '../styles/global.module.scss'
import Experience from '../components/experience'
import Rivan from '../images/rivan.png'
import Fullstack from '../images/fullstack.png'
import Shell from '../images/shell-logo.png'
import ClarkOutsourcing from '../images/clark-outsourcing.png'

const data = [
  {
    "id": 1,
    "logo": Rivan,
    "company": "Rivan IT Training Systems",
    "position": "On-the-job Training",
    "year": "2016",
    "summary": "Assist on setting up router and switches used on bootcamps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 2,
    "logo": Fullstack,
    "company": "Fullstack HQ Inc.",
    "position": "Front-End Web Developer",
    "year": "2017",
    "summary": "Build websites using various technologies like Wordpress and ReactJS. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 3,
    "logo": Fullstack,
    "company": "Fullstack HQ Inc.",
    "position": "Web Developer Trainer",
    "year": "2019",
    "summary": "Help them familiarize and apply coding standards and techniques. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 4,
    "logo": Shell,
    "company": "Shell Guagua",
    "position": "Office Staff",
    "year": "2020",
    "summary": "Carry out clerical duties. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 5,
    "logo": ClarkOutsourcing,
    "company": "Clark Outsourcing",
    "position": "Front-End Web Developer",
    "year": "2022",
    "summary": "Help US client to build websites for their customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={globalStyles.container__sm}>
        <div className='row-custom'>
          {data.map(experience => 
            <Experience
              id={experience.id}
              logo={experience.logo}
              company={experience.company}
              position={experience.position}
              year={experience.year}
              summary={experience.summary}
            />
          )}
        </div>
      </div>
    </div>
  )
} 