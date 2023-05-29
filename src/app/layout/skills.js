'use client'
import styles from '../styles/home.module.scss'
import Skill from '../components/skill'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import Bootstrap from '../images/bootstrap.png'
import SASS from '../images/sass.png'
import Javascript from '../images/javascript.png'
import Jquery from '../images/jquery.png'
import ReactJS from '../images/react.png'
import NextJS from '../images/next.png'
import GatsbyJS from '../images/gatsby.png'
import Wordpress from '../images/wordpress.png'
import Git from '../images/git.png'
import Photoshop from '../images/photoshop.png'
import { Element, animateScroll as scroll } from 'react-scroll'

const data = [
  {
    "id": 1,
    "logo": HTML,
    "name": "HTML",
  },
  {
    "id": 2,
    "logo": CSS,
    "name": "CSS",
  },
  {
    "id": 3,
    "logo": Bootstrap,
    "name": "Bootstrap",
  },
  {
    "id": 4,
    "logo": SASS,
    "name": "SASS",
  },
  {
    "id": 5,
    "logo": Javascript,
    "name": "Javascript",
  },
  {
    "id": 6,
    "logo": Jquery,
    "name": "Jquery",
  },
  {
    "id": 7,
    "logo": ReactJS,
    "name": "ReactJS",
  },
  {
    "id": 8,
    "logo": NextJS,
    "name": "NextJS",
  },
  {
    "id": 9,
    "logo": GatsbyJS,
    "name": "GatsbyJS",
  },
  {
    "id": 10,
    "logo": Wordpress,
    "name": "Wordpress",
  },
  {
    "id": 11,
    "logo": Git,
    "name": "Git",
  },
  {
    "id": 12,
    "logo": Photoshop,
    "name": "Photoshop",
  }
];

const Skills = () => {
  return (
    <Element className={styles.skills} name="skills">
      <div className={styles.container}>
        <h3>SKILLS</h3>
        {data.map(skill =>
          <Skill 
            key={skill.id}
            logo={skill.logo}
            name={skill.name}
          />
        )}
      </div>
    </Element>
  )
} 

export default Skills;