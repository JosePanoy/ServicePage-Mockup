import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import feature1 from "../img/feature2.jpg"; 
import "../css/component5.css";

function Component5() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const isCountingRef = useRef(false);

  const { ref: box1Ref, inView: box1InView } = useInView({ threshold: 0.5, triggerOnce: false });
  const { ref: box2Ref, inView: box2InView } = useInView({ threshold: 0.6, triggerOnce: false });
  const { ref: box3Ref, inView: box3InView } = useInView({ threshold: 0.7, triggerOnce: false });
  const { ref: box4Ref, inView: box4InView } = useInView({ threshold: 0.8, triggerOnce: false });

  const fadeInLeft1 = useSpring({ opacity: box3InView ? 1 : 0, transform: box3InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 900, easing: easings.linear } });
  const fadeInLeft2 = useSpring({ opacity: box2InView ? 1 : 0, transform: box2InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 600, easing: easings.linear } });
  const fadeInLeft3 = useSpring({ opacity: box4InView ? 1 : 0, transform: box4InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 800, easing: easings.linear } });
  const fadeInLeft4 = useSpring({ opacity: box1InView ? 1 : 0, transform: box1InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 500, easing: easings.linear } });

  const resetCounts = () => {
    setCounts([0, 0, 0, 0]);
  };

  useEffect(() => {
    if (box1InView || box2InView || box3InView || box4InView) {
      if (!isCountingRef.current) {
        isCountingRef.current = true;
        resetCounts();
        
        const interval = setInterval(() => {
          setCounts(prevCounts => [
            box1InView ? Math.min(prevCounts[0] + 1, 1) : prevCounts[0],
            box2InView ? Math.min(prevCounts[1] + 1, 2) : prevCounts[1],
            box3InView ? Math.min(prevCounts[2] + 1, 3) : prevCounts[2],
            box4InView ? Math.min(prevCounts[3] + 1, 4) : prevCounts[3],
          ]);
        }, 700);

        return () => {
          clearInterval(interval);
          isCountingRef.current = false;
        };
      }
    } else {
      // Reset counts when scrolling out of view
      resetCounts();
      isCountingRef.current = false;
    }
  }, [box1InView, box2InView, box3InView, box4InView]);

  return (
    <div className="component5-container" style={{ backgroundImage: `url(${feature1})` }}>
      <div className="component5-overlay">
        <h1>The Selling Steps</h1>
        <div className="component5-content">
          <div className="component5-row">
            <animated.div style={fadeInLeft4} className="component5-box" ref={box1Ref}>
              <h2>{counts[0]}</h2>
              <p>CONSULTATION & PLANNING</p>
            </animated.div>
            <animated.div style={fadeInLeft2} className="component5-box" ref={box2Ref}>
              <h2>{counts[1]}</h2>
              <p>MARKETING STRATEGY</p>
            </animated.div>
            <animated.div style={fadeInLeft1} className="component5-box" ref={box3Ref}>
              <h2>{counts[2]}</h2>
              <p>OFFER REVIEW & NEGOTIATION</p>
            </animated.div>
          </div>
          <div className="component5-row">
            <animated.div style={fadeInLeft3} className="component5-box" ref={box4Ref}>
              <h2>{counts[3]}</h2>
              <p>TRANSACTION COMPLETION</p>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
