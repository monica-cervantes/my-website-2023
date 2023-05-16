'use client'
import { styled } from 'styled-components'
import { siteColors, H3, P, Container } from './globalStyles'
import Skill from './skill'
import HTML from './images/html.png'
import CSS from './images/css.png'
import Bootstrap from './images/bootstrap.png'
import SASS from './images/sass.png'
import Javascript from './images/javascript.png'
import Jquery from './images/jquery.png'
import ReactJS from './images/react.png'
import NextJS from './images/next.png'
import GatsbyJS from './images/gatsby.png'
import Wordpress from './images/wordpress.png'
import Git from './images/git.png'
import Photoshop from './images/photoshop.png'

const Skills = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  
  background: ${props => props.color || "#fff"};
`;

const SkillsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const H3Skills = styled(H3)`
  flex: 0 0 100%;
  margin-bottom: 60px;
  width: 100%;

  color: #fff;
  text-align: center;
`;

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

export default function SectionSkills() {
  return (
    <Skills color={siteColors.secondary}>
      <SkillsContainer width={"1320px"}>
        <H3Skills>SKILLS</H3Skills>
        {data.map(skill =>
          <Skill 
            id={skill.id}
            logo={skill.logo}
            name={skill.name}
          />
        )}
      </SkillsContainer>
    </Skills>
  )
} 