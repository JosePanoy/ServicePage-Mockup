import React, { useState, useEffect } from "react";
import "../css/main-top-content.css";
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import IconToggle from "../img/icon-toggle.png";
import ArrowIcon from "../img/arrow.png";
import SearchIcon from "../img/search-icon.png";
import MainLogo from "../img/mainlogo.png";
import NavbarContents from "./navbar-contents";
import SidePanel from "./side-panel";

function MainTopContent() {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animations
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

  const fadeInFromTopAppointment = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 800, easing: easings.linear },
    delay: 700,
});

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  const toggleVisibility = () => {
    if (window.innerWidth <= 768) {
      setSidePanelVisible(!isSidePanelVisible);
      setNavbarVisible(false);
    } else {
      toggleNavbar();
      setSidePanelVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    const sidePanel = document.querySelector(".side-panel");
    if (sidePanel && !sidePanel.contains(event.target)) {
      setSidePanelVisible(false);
    }
  };

  useEffect(() => {
    if (isSidePanelVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidePanelVisible]);

  return (
    <div ref={ref} className="main-top-content-wrapper">
      <nav className="main-top-navbar">
        <img src={MainLogo} alt="Main Logo" className="main-top-logo" />
        <img
          src={IconToggle}
          alt="Toggle Icon"
          className="main-top-toggle-icon"
          onClick={toggleVisibility}
        />
      </nav>
      <div className="main-title-top">
        <animated.h3 className="main-top-navbar-title" style={fadeInFromTopH3}>
          WHAT WE DO
        </animated.h3>
        <animated.h1 className="main-top-heading" style={fadeInFromTopH1}>
          OUR SERVICES
        </animated.h1>
      </div>
      <animated.div className="main-top-search-bar-container" style={fadeInFromLeftSearch}>
        <input
          type="text"
          className="main-top-search-bar"
          placeholder="Search by address or area..."
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="main-top-search-icon"
        />
      </animated.div>
      <animated.div className="appointment-button-container" style={fadeInFromTopAppointment}>
    <button className="appointment-button">
        Book an Appointment
        <img
            src={ArrowIcon}
            alt="Arrow Icon"
            className="appointment-arrow"
        />
          </button>
      </animated.div>

      {isNavbarVisible && (
        <div className="navbar-contents-container visible">
          <NavbarContents />
        </div>
      )}

      {window.innerWidth <= 768 && isSidePanelVisible && (
        <SidePanel isVisible={isSidePanelVisible} toggleVisibility={toggleVisibility} />
      )}
    </div>
  );
}

export default MainTopContent;
