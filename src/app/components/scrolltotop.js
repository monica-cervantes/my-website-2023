import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/global.module.scss'
import { animateScroll as scroll } from 'react-scroll'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button 
      className={`${styles.scroll_to_top} ${showButton ? styles.show : ''}`} 
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
};

export default ScrollToTop;