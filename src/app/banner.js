'use client'
import Image from 'next/image'
import profilePic from '../../public/images/prof-pic.png'
import leftImage from './images/banner-left.png'
import rightImage from './images/banner-right.png'
import { styled } from 'styled-components'
import { H1, H2, Container } from './globalStyles'

const Banner = styled.section`
  position: relative;
  
  padding: 100px 0;

  background: #2f2f2f;

  overflow: hidden;

  &:before,
  &:after {
    position: absolute;
  }
  
  &:before {
    content: '';

    left: -551px;
    bottom: 0;

    width: 1331px;
    height: 1296px;

    // background: url('/images/banner-left.png') left top/cover no-repeat;
  }

  &:after { 
    content: '';

    right: -919px;
    bottom: -190px;

    width: 1495px;
    height: 1145px;

    background: url('/images/banner-right.png') left top/cover no-repeat;
  }

  svg {
    position: absolute;
    left: -551px;
    bottom: 0;
  }

  .content-wrapper {
    max-width: 620px;

    text-align: center;
  }
`;

const BannerContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SectionBanner({ layout }) {
  return (
    <Banner className="section-banner">
      {/* <Blob /> */}
      <BannerContainer className="container">
        <div className="img-wrapper">
          <Image
            src={profilePic}
            alt="Picture of me"
            width={595}
          />
        </div>
        <div className='content-wrapper'>
          <H1 className='name'>monica cervantes</H1>
          <H2 className='profession'>FRONT-END WEB DEVELOPER</H2>
        </div>
      </BannerContainer>
    </Banner>
  )
}