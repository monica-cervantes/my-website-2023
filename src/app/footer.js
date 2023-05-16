'use client'
import { source_sans } from './fonts/fonts'
import { styled } from 'styled-components'
import { siteColors, H3, P, Container } from './globalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = styled.footer`
  background: ${props => props.color || "#fff"};

  .footer-link {
    margin: 0 6px;
    
    font-size: 20px;
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
  
  border-top: 1px solid #fafafa;
`;

export default function SectionFooter({ layout }) {
  return (
    <Footer className={source_sans.className} color={siteColors.secondary}>
      <FooterContainer width={"1320px"}>
        <p>&copy; 2023 Monica Cervantes</p>
        <div className="footer-links">
          <a className="footer-link">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a className="footer-link">
            <FontAwesomeIcon icon={faEnvelope} />  
          </a>
          <a className="footer-link">
            <FontAwesomeIcon icon={faGithub} />  
          </a>
        </div>
      </FooterContainer>
    </Footer>
  )
}