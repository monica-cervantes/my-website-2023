'use client'
import { styled } from 'styled-components'
import { H3, P, Container } from './globalStyles'

const Welcome = styled.section`
  position: relative;
  top: -90px;

  padding: 30px 30px;
  margin: auto;
  max-width: 1320px;

  text-align: center;

  background: #fff;
  box-shadow: 0px 2px 5px rgb(135 135 135 / 10%);
`;

export default function SectionWelcome() {
  return (
    <Welcome>
      <Container>
        <H3>WELCOME</H3>
        <P>I'm a skilled front-end web developer with over 4 years of experience creating beautiful, functional websites for businesses and individuals alike. From responsive designs to clean coding, I strive to deliver the best user experience possible.</P>
      </Container>
    </Welcome>
  )
} 