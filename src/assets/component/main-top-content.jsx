import React, { useState } from "react";
import "../css/main-top-content.css";
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import ArrowIcon from "../img/arrow.png";
import SearchIcon from "../img/search-icon.png";
import MainLogo from "../img/mainlogo.png";
import MainBackgroundPic from "../img/main.jpg";
import MainIConToggle from "../img/icon-toggle.png";
import SidePanel from "../component/side-panel"

function MainTopContent() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  const fadeInFromTopH3 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 800, easing: easings.linear },
    delay: 200,
  });

  const fadeInFromTopH1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 800, easing: easings.linear },
    delay: 500,
  });

  const fadeInFromLeftSearch = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 800, easing: easings.linear },
    delay: 700,
  });

  const toggleSidePanel = () => setIsVisible(!isVisible);

  return (
    <div ref={ref} className="main-top-content-wrapper" style={{ backgroundImage: `url(${MainBackgroundPic})` }}>
      <nav className="main-top-navbar">
        {window.innerWidth <= 480 && (
          <img
            src={MainIConToggle}
            alt="Toggle Icon"
            className="main-top-toggle-icon"
            style={{ width: '25px', height: '25px' }}
            onClick={toggleSidePanel}
          />
        )}
        <img src={MainLogo} alt="Main Logo" className="main-top-logo" />
      </nav>
      <SidePanel isVisible={isVisible} toggleVisibility={toggleSidePanel} />
      <div className="main-title-top">
        <animated.h3 className="main-top-navbar-title" style={fadeInFromTopH3}>WHAT WE DO</animated.h3>
        <animated.h1 className="main-top-heading" style={fadeInFromTopH1}>OUR SERVICES</animated.h1>
      </div>
      <animated.div className="main-top-search-bar-container" style={fadeInFromLeftSearch}>
        <input type="text" className="main-top-search-bar" placeholder="Search by address or area..." />
        <img src={SearchIcon} alt="Search Icon" className="main-top-search-icon" />
      </animated.div>
      <animated.div className="appointment-button-container">
        <button className="appointment-button">Book an Appointment<img src={ArrowIcon} alt="Arrow Icon" className="appointment-arrow" /></button>
      </animated.div>
    </div>
  );
}

export default MainTopContent;
