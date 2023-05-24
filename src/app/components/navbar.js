'use-client'
import { useState, useEffect } from "react"
import Image from 'next/image'
import Logo from '../images/logo.png'
import styles from '../styles/header.module.scss'
import { Link, Element, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const [ isExpanded, setIsExpandle ] = useState(false);

  const [ isMobile, setIsMobile ] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsExpandle(!isExpanded);
  }

  // const toggleCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    } 

    handleResize();

    window.addEventListener('resize', handleResize);

    return() => {
      window.addEventListener('resize', handleResize);
    }
  }, []);

  return (
    <nav className={`${styles.header__navbar} ${isExpanded && isMobile ? styles.expanded : ''}`}>
      <a className={styles.navbar_brand} href="/">
        <Image 
          src={Logo}
          className={styles.header__navbar_logo}
          alt="logo"
        />
      </a>
      <button 
        className={`${styles.header__navbar_toggler_icon} ${isExpanded ? styles.collapsed : ''}`} 
        type="button" 
        onClick={toggleNavbar}
        style={{ display: isMobile ? 'block' : 'none' }}
      >
        <span></span>
      </button>

      <div className={`${styles.header__navbar_collapse} ${isExpanded && isMobile ? styles.show : ''}`}>
        <ul className={styles.header__navbar_nav}>
          <li className={styles.header__nav_item}>
            <a className={styles.header__nav_link} href="#">Home <span className={styles.header__sr_only}>(current)</span></a>
          </li>
          <li className={styles.header__nav_item}>
            <Link className={styles.header__nav_link} activeClass="active" to="timeline" spy={true} smooth={true} duration={1000}>Experience</Link>
          </li>
          <li className={styles.header__nav_item}>
            <Link className={styles.header__nav_link} activeClass="active" to="skills" spy={true} smooth={true} duration={2000}>Skills</Link>
          </li>
          <li className={styles.header__nav_item}>
            <a className={styles.header__nav_link} href="#">Works</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;