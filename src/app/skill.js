'use client'
import { styled } from 'styled-components'
import { siteColors, H3, P, Container } from './globalStyles'
import Image from 'next/image'

const  ColCustom = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 23.5%;
  padding: 30px 20px;
  margin: 12.5px 0;
  width: 23.5%;

  background: ${props => props.boxColor || "#fff"};

  .skill-name {
    margin-top: 21px;
    
    font-size: 32px;
  }
`;

export default function Skill( props ) {
  return (
    <ColCustom boxColor={siteColors.primary}>
      <Image 
        src={props.logo}
        alt="Skill Logo"
      />
      <h4 className='skill-name'>{props.name}</h4>
    </ColCustom>
  )
} 