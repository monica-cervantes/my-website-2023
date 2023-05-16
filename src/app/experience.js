'use client'
import { styled } from 'styled-components'
import { siteColors, H3, P, Container } from './globalStyles'
import Image from 'next/image'

const  ColCustom = styled.div`
position: relative;

display: flex;
flex: 0 0 100%;
padding: 25px 20px;
margin-bottom: 150px;

text-align: center;

&:before {
  content: '';

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  width: 23px;
  height: 23px;

  background-color: ${props => props.primary || "#fff"};
  border-radius: 50%;

  transform: translate(-50%, -50%);
}

&:nth-child(odd) {
  flex-direction: row-reverse;

  .logo-holder {
    justify-content: flex-end;
    margin: 0 128px 0 10px;

    img {
      margin-left: 25px;
      margin-right: 0;
    }
  }

  .wrapper {
    margin-right: auto;
    margin-left: 30px;

    text-align: left;
  }

  .job-logo {
    justify-content: flex-end;
  }

  .job-details {
    &:before {
      right: auto;
      left: 10px;
    }
  }

  .job-heading {
    justify-content: flex-start;
  }
}

.job {
  position: relative;

  flex: 0 0 50%;
}

.job-details {
  &:before {
    right: 10px;

    display: none;
  }
}

.job-logo {
  display: flex;
  align-items: center;
}

.position {
  font-size: 40px;
  text-transform: uppercase;
}

.job-heading {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 25px;
  font-weight: 400;

  span {
    padding: 1px 0;
    padding-left: 15px;
    margin: 10px 0;
    margin-left: 15px;

    border-left: 1px solid ${props => props.secondary || "#fff"};
  }
}

.job-summary {
  font-size: 22px;
  letter-spacing: 1px;
  line-height: 1.5;
  word-spacing: 3px;
}

.wrapper {
  padding: 20px 45px;
  padding-top: 0;
  margin-right: 30px;
  margin-left: auto;

  color:  ${props => props.secondary || "#fff"};
  text-align: right;

  border-radius: 5px;
}

.logo-holder {
  display: flex;
  align-items: center;

  margin: 0 10px 0 128px;
  width: 100%;
  
  img {
    margin-right: 25px;
  }
}
`;

export default function Experience( props ) {
  return (
    <ColCustom primary={siteColors.primary} secondary={siteColors.secondary} tertiary={siteColors.tertiary}>
       <div className="job job-details">
          <div className="wrapper">
            <h2 className="position">{props.position}</h2>
            <h2 className="job-heading">{props.year} <span>{props.company}</span></h2>
            <p className="job-summary">{props.summary}</p>
          </div>
        </div>
        <div className="job job-logo">
          <div className="logo-holder">
            <Image 
              src={props.logo}
              alt="Company Logo"
              width={300}
            /> 
          </div>  
        </div>
    </ColCustom>
  )
} 