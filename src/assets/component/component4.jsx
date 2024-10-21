import React from 'react';
import "../css/component4.css";
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import Pic1 from "../img/9.png";
import Pic2 from "../img/10.png";
import Pic3 from "../img/11.jpg";

function Component4() {
    const createFadeInStyles = (inView, delay) => useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 700, easing: easings.linear, delay },
    });

    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.1 });
    const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.1 });
    const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.1 });
    const { ref: ref7, inView: inView7 } = useInView({ threshold: 0.1 });

    const fadeInStyle1 = createFadeInStyles(inView1, 0);
    const fadeInStyle2 = createFadeInStyles(inView2, 150);
    const fadeInStyle3 = createFadeInStyles(inView3, 250);
    const fadeInStyle4 = createFadeInStyles(inView4, 350);
    const fadeInStyle5 = createFadeInStyles(inView5, 450);
    const fadeInStyle6 = createFadeInStyles(inView6, 550);
    const fadeInStyle7 = createFadeInStyles(inView7, 650);

    return (
        <div className="component4-container">
            <animated.div style={fadeInStyle1} ref={ref1} className="component4-box">
                <h2>Over 33 Years of Real Estate Success</h2>
                <p>We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, experience is 100% non-negotiable. And it’s an experience like no other.</p>
            </animated.div>
            <animated.div style={fadeInStyle2} ref={ref2} className="component4-box component4-box-image">
                <img src={Pic1} alt="Description" />
            </animated.div>
            <animated.div style={fadeInStyle3} ref={ref3} className="component4-box component4-box-image">
                <img src={Pic2} alt="Description" />
            </animated.div>
            <animated.div style={fadeInStyle4} ref={ref4} className="component4-box">
                <h2>We Want To Create An Unforgettable Experience For You...</h2>
                <p>We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.</p>
            </animated.div>
            <animated.div style={fadeInStyle5} ref={ref5} className="component4-box">
                <h2>The Hansen Partners Communications Tablet</h2>
                <p>We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the click of your tablet.</p>
            </animated.div>
            <animated.div style={fadeInStyle6} ref={ref6} className="component4-box component4-box-image">
                <img src={Pic3} alt="Description" />
            </animated.div>
            <animated.div style={fadeInStyle7} ref={ref7} className="component4-box">
                <h2 style={{fontSize: '1.3rem'}}>Benefits:</h2>
                <ul>
                    <li>Review all documents and sign in the comfort of your home or anywhere.</li>
                    <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                    <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                    <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system.</li>
                </ul>
                <p>We believe that transparency and guiding you and your family through the process is key to having the best experience. During these uncertain times, it is a good feeling to know you have someone with a proven track record you can count on. We will be here to handle your needs during the real estate process. We think of it before a need even arises. Because, that is just what we do. Who you work with does matter!</p>
            </animated.div>
        </div>
    );
}

export default Component4;
