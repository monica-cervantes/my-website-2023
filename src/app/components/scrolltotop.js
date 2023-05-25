import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/global.module.scss'
import * as Scroll from 'react-scroll'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const ScrollToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className={styles.scroll_to_top} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
};

export default ScrollToTop;