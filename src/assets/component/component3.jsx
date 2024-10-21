import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import feature1 from "../img/feature1.jpeg";
import "../css/component3.css";

function Component3() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const isCountingRef = useRef(false);

  const { ref: box1Ref, inView: box1InView } = useInView({ threshold: 0.5, triggerOnce: false });
  const { ref: box2Ref, inView: box2InView } = useInView({ threshold: 0.6, triggerOnce: false });
  const { ref: box3Ref, inView: box3InView } = useInView({ threshold: 0.7, triggerOnce: false });
  const { ref: box4Ref, inView: box4InView } = useInView({ threshold: 0.8, triggerOnce: false });
  const { ref: box5Ref, inView: box5InView } = useInView({ threshold: 0.9, triggerOnce: false });

  const fadeInLeft1 = useSpring({ opacity: box3InView ? 1 : 0, transform: box3InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 900, easing: easings.linear } });
  const fadeInLeft2 = useSpring({ opacity: box5InView ? 1 : 0, transform: box5InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 800, easing: easings.linear } });
  const fadeInLeft3 = useSpring({ opacity: box2InView ? 1 : 0, transform: box2InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 600, easing: easings.linear } });
  const fadeInLeft4 = useSpring({ opacity: box4InView ? 1 : 0, transform: box4InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 800, easing: easings.linear } });
  const fadeInLeft5 = useSpring({ opacity: box1InView ? 1 : 0, transform: box1InView ? 'translateX(0)' : 'translateX(-40px)', config: { duration: 500, easing: easings.linear } });

  const resetCounts = () => {
    setCounts([0, 0, 0, 0, 0]);
  };

  useEffect(() => {
    if (box1InView || box2InView || box3InView || box4InView || box5InView) {
      if (!isCountingRef.current) {
        isCountingRef.current = true;
        resetCounts();

        const interval = setInterval(() => {
          setCounts(prevCounts => [
            box1InView ? Math.min(prevCounts[0] + 1, 1) : prevCounts[0],
            box2InView ? Math.min(prevCounts[1] + 1, 2) : prevCounts[1],
            box3InView ? Math.min(prevCounts[2] + 1, 3) : prevCounts[2],
            box4InView ? Math.min(prevCounts[3] + 1, 4) : prevCounts[3],
            box5InView ? Math.min(prevCounts[4] + 1, 5) : prevCounts[4],
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
  }, [box1InView, box2InView, box3InView, box4InView, box5InView]);

  return (
    <div className="component3-container" style={{ backgroundImage: `url(${feature1})` }}>
      <div className="component3-overlay">
        <h1>The Selling Process</h1>
        <div className="component3-content">
          <div className="component3-row">
            <animated.div style={fadeInLeft5} className="component3-box" ref={box1Ref}>
              <h2>{counts[0]}</h2>
              <p>INITIAL CONSULTATION & PLANNING</p>
            </animated.div>
            <animated.div style={fadeInLeft3} className="component3-box" ref={box2Ref}>
              <h2>{counts[1]}</h2>
              <p>DEVISE & EXECUTE MARKETING PLAN</p>
            </animated.div>
            <animated.div style={fadeInLeft1} className="component3-box" ref={box3Ref}>
              <h2>{counts[2]}</h2>
              <p>REVIEW OFFERS & REACH AGREEMENT WITH BUYER</p>
            </animated.div>
          </div>
          <div className="component3-row">
            <animated.div style={fadeInLeft4} className="component3-box" ref={box4Ref}>
              <h2>{counts[3]}</h2>
              <p>COMPLETE TRANSACTION PROCESS</p>
            </animated.div>
            <animated.div style={fadeInLeft2} className="component3-box" ref={box5Ref}>
              <h2>{counts[4]}</h2>
              <p>AFTER SALE SERVICE</p>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
