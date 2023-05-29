'use client'
import styles from '../styles/home.module.scss'
import globalStyles from '../styles/global.module.scss'
import Experience from '../components/experience'
import Rivan from '../images/rivan.png'
import Fullstack from '../images/fullstack.png'
import Shell from '../images/shell-logo.png'
import ClarkOutsourcing from '../images/clark-outsourcing.png'
import { Element, animateScroll as scroll } from 'react-scroll'

const data = [
  {
    "id": 1,
    "logo": Fullstack,
    "company": "Fullstack HQ Inc.",
    "position": "Front-End Web Developer",
    "year": "2017",
    "summary": "I played a crucial role in transforming complex PSD layouts into HTML/CSS and Javascript templates, ensuring pixel-perfect accuracy and maintaining the integrity of the design. This involved meticulous attention to detail and a deep understanding of front-end development principles. I excelled in creating responsive websites that provided an optimal user experience across various devices and screen sizes. With knowledge in WordPress and ReactJS, I built dynamic and visually appealing websites, tailoring custom solutions to meet project requirements."
  }, 
  {
    "id": 2,
    "logo": Fullstack,
    "company": "Fullstack HQ Inc.",
    "position": "Web Developer Trainer",
    "year": "2019",
    "summary": "I had the privilege of training and mentoring new developers, helping them understand and apply coding standards and techniques. By providing guidance and support, I assisted them in honing their skills and achieving consistent quality in their work. Through my contributions in these areas, I made significant contributions to the success of the team and the overall growth of the organization."
  },
  {
    "id": 3,
    "logo": Shell,
    "company": "Shell Guagua",
    "position": "Office Staff",
    "year": "2020",
    "summary": "I performed vital administrative duties such as recording and organizing information, updating paperwork, and maintaining documents. Additionally, I fulfilled general office clerk responsibilities, including managing communications, scheduling appointments, and handling emails. Through my attention to detail and organizational skills, I contributed to the overall efficiency and effectiveness of office operations, facilitating smooth communication and supporting informed decision-making."
  },
  {
    "id": 4,
    "logo": ClarkOutsourcing,
    "company": "Clark Outsourcing",
    "position": "Front-End Web Developer",
    "year": "2022",
    "summary": "In my current role, I work closely with a US client, engaging in various website development and maintenance tasks. This includes creating and implementing custom code, performing site maintenance and edits, running thorough testing, configuring program-specific aspects in ERP systems, and implementing new websites with client-design elements. By collaborating with the US client, I ensure that their specific requirements and preferences are met, delivering high-quality websites that align with their expectations and provide an excellent user experience."
  }
];

const Timeline = () => {
  return (
    <Element className={styles.timeline} name="timeline">
      <div className={globalStyles.container__sm}>
        <div className='row-custom'>
          {data.map(experience => 
            <Experience
              key={experience.id}
              logo={experience.logo}
              company={experience.company}
              position={experience.position}
              year={experience.year}
              summary={experience.summary}
            />
          )}
        </div>
      </div>
    </Element>
  )
} 

export default Timeline;