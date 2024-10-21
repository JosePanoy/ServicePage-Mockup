import React from "react";
import "../css/component2.css";
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import Pic1 from "../img/5.jpg";
import Pic2 from "../img/6.jpg";
import Pic3 from "../img/7.jpg";
import Pic4 from "../img/8.jpg";

const items = [
    { type: 'caption', text: 'Decore Guidance', isHighlighted: true },
    { type: 'image', src: Pic1, alt: 'Pic 1' },
    { type: 'image', src: Pic2, alt: 'Pic 2' },
    {
        type: 'caption',
        text: 'My Staging Expertise',
        list: [
            'Unclutter and organize your home',
            'Neatly arrange drawers and cabinets',
            'Keep pets outdoors or off the premises',
            'Play soft music',
        ]
    },
    { type: 'caption', text: 'Layout Intentional', isHighlighted: true },
    { type: 'image', src: Pic3, alt: 'Pic 3' },
    { type: 'image', src: Pic4, alt: 'Pic 4' },
    {
        type: 'caption',
        list: [
            'Unclutter and organize your home',
            'Neatly arrange drawers and cabinets',
            'Keep pets outdoors or off the premises',
            'Play soft music',
        ]
    }
];

function Component2() {
    return (
        <div className="component2">
            {items.map((item, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: false,
                    threshold: 0.1,
                });

                const fadeStyle = useSpring({
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
                    config: { duration: 700, easing: easings.linear },
                });

                const captionStyle = item.isHighlighted ? { backgroundColor: 'black', color: 'white', padding: '10px' } : {};

                return (
                    <animated.div
                        key={index}
                        ref={ref}
                        style={{ ...fadeStyle, ...captionStyle }}
                        className={`item ${item.type === 'caption' ? 'caption' : ''}`}
                    >
                        {item.type === 'caption' ? (
                            <h2>{item.text}</h2>
                        ) : (
                            <img src={item.src} alt={item.alt} />
                        )}
                        {item.list && (
                            <ul>
                                {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex}>{listItem}</li>
                                ))}
                            </ul>
                        )}
                    </animated.div>
                );
            })}
        </div>
    );
}

export default Component2;
