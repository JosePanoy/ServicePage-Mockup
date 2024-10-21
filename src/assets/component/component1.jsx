import React from 'react'; 
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import "../css/component1.css";
import ImageIcon from "../img/22.jpg";

function Component1() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const fadeInFromTop = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)',
        config: { duration: 800, easing: easings.linear },
        onRest: () => { if (!inView) fadeInFromTop.opacity.set(0); },
    });

    const fadeInFromTop2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)',
        config: { duration: 800, easing: easings.linear },
        onRest: () => { if (!inView) fadeInFromTop.opacity.set(0); },
    });

    const fadeInLeft1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 700, easing: easings.linear },
        onRest: () => { if (!inView) fadeInLeft1.opacity.set(0); },
    });

    const fadeInLeft2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 700, easing: easings.linear },
        onRest: () => { if (!inView) fadeInLeft2.opacity.set(0); },
    });

    const fadeInLeft3 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 700, easing: easings.linear },
        onRest: () => { if (!inView) fadeInLeft3.opacity.set(0); },
    });

    return (
        <animated.div ref={ref} className="component1-container">
            <animated.h2 style={fadeInFromTop2} className="component1-title-1">We Market Your Home to The World</animated.h2>
            <h2 className="component1-title-2">Our Online Marketing Strategy</h2>
            <p className="component1-content">
                The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
            </p>
            <div className="component1-row">
                <animated.div style={fadeInLeft1} className="component1-column">
                    <h3>Local Exposure</h3>
                    <p>Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.</p>
                </animated.div>
                <animated.div style={fadeInLeft2} className="component1-column">
                    <h3>National Exposure</h3>
                    <p>We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We will receive every inquiry about your property directly.</p>
                </animated.div>
                <animated.div style={fadeInLeft3} className="component1-column">
                    <h3>International Exposure</h3>
                    <p>To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, 
                    China.apr.com, Caimeiju, Juwai, Country Life UK</p>
                </animated.div>
            </div>
            <div className="component1-row">
                <animated.div style={fadeInFromTop} className="component1-icon-column">
                    <img src={ImageIcon} alt="Icon" className="component1-icon" />
                </animated.div>
            </div>
        </animated.div>
    );
}

export default Component1;
