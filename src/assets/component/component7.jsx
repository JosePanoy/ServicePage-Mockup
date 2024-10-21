import React from 'react';
import "../css/component7.css";
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/4.jpg';
import img4 from '../img/a.jpg';

import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Component7() {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    const fadeInLeft1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1000, easing: easings.linear },
        reset: true,
    });

    const fadeInLeft2 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1200, easing: easings.linear },
        reset: true,
    });

    const fadeInLeft3 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1400, easing: easings.linear },
        reset: true,
    });


    const fadeInLeftA = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1400, easing: easings.linear },
        reset: true,
    });

    const fadeInLeftB = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1600, easing: easings.linear },
        reset: true,
    });

    const fadeInLeftC = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1800, easing: easings.linear },
        reset: true,
    });


    const fadeInRight1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1000 },
        reset: true,
    });

    const fadeInRight2 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1200 },
        reset: true,
    });

    const fadeInRight3 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1400 },
        reset: true,
    });


    const fadeInRightA = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1400 },
        reset: true,
    });

    const fadeInRightB = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1600 },
        reset: true,
    });

    const fadeInRightC = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1800 },
        reset: true,
    });

    const fadeInFromTop1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)', 
        config: { duration: 1000 },
    });

    return (
        <animated.div ref={ref} className="marketing-container">
            <animated.h1 style={fadeInFromTop1} className="title-h1">Comprehensive Marketing Plan</animated.h1>
            <div className="image-row">
                <div className="image-box">
                    <animated.img style={fadeInLeft1} src={img1} alt="Image 1" className="marketing-img" />
                    <animated.h2 style={fadeInLeft2}>Responsive</animated.h2>
                    <animated.p style={fadeInLeft3}>I am always available via phone, text, or email.</animated.p>
                </div>
                <div className="image-box">
                    <animated.img style={fadeInRight1} src={img2} alt="Image 2" className="marketing-img" />
                    <animated.h2 style={fadeInRight2}>Syndication</animated.h2>
                    <animated.p style={fadeInRight3}>I market your property locally, nationally, and internationally</animated.p>
                </div>
            </div>
            <div className="image-row">
                <div className="image-box">
                    <animated.img style={fadeInLeftA} src={img3} alt="Image 3" className="marketing-img" />
                    <animated.h2 style={fadeInLeftB}>Virtual Tour</animated.h2>
                    <animated.p style={fadeInLeftC}>Let's make your home stand out with a high quality virtual tour.</animated.p>
                </div>
                <div className="image-box">
                    <animated.img style={fadeInRightA} src={img4} alt="Image 4" className="marketing-img" />
                    <animated.h2 style={fadeInRightB}>Photography</animated.h2>
                    <animated.p style={fadeInRightC}>Beautiful, high-end photography is a central part of our marketing plan for your property.</animated.p>
                </div>
            </div>
        </animated.div>
    );
}

export default Component7;