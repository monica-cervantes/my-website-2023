// 'use client'
// import { styled } from 'styled-components'
import { siteColors, H3, P, Container } from './globalStyles'
import Image from 'next/image';
import Logo from './images/logo.png'
import styles from './styles/global.module.scss'

// const Header = styled.header`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 999;

//   .navbar {
//     display: flex;
//     justify-content: space-between;
//     height: 80px;
//   }

//   .navbar-toggler {
//     display: none;
//   }

//   .navbar-nav {
//     display: flex;
//     margin-left: auto;

//     list-style: none;
//   }

//   .navbar-collapse {
//     align-self: center;
//   }

//   .sr-only {
//     display: none;
//   }

//   .nav-item {
//     padding: 0 15px;
//   }

//   .nav-link {
//     color: #fff;
//     font-size: 20px;
//     font-weight: 700;
//     text-transform: uppercase;
//   }
// `;

export default function SectionHeader({ layout }) {
  return (
    <section className={styles.header}>
      <Container>
        <nav className={styles.header__navbar}>
          <a className="navbar-brand" href="#">
            <Image 
              src={Logo}
              alt="logo"
            />
          </a>
          <button className={styles.header__navbar_toggler} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={styles.header__navbar_nav}>
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Works</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </section>
  )
}