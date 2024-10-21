import React from 'react';
import pic2 from '../img/13.jpg';
import pic3 from '../img/12.jpg';

import smalllogo1 from '../img/15.jpg';
import smalllogo2 from '../img/14.jpg';
import smalllogo3 from '../img/16.jpg';
import "../css/component6.css";

function WindowFeature3() {
    return (
        <div className="unique-grid">

            <div className="unique-item text-content">
                <h2>Leading Real Estate Companies of The World® & Luxury Portfolio International</h2>
                <p>JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.</p>
                <p>Who's Who in Luxury Real Estate</p>
                <p>Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.</p>
            </div>
            <div className="unique-item image-small">
                <img src={pic2} alt="pic2"  />
            </div>
            <div className="unique-item image-small">
                <img src={pic3} alt="pic3"  />
            </div>
            <div className="unique-item text-content">
                <p>Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:</p>
                <div className="logos-container">
                    <img src={smalllogo1} alt="logo1" className="small-logo" />
                    <img src={smalllogo2} alt="logo2" className="small-logo" />
                    <img src={smalllogo3} alt="logo3" className="small-logo" />
                </div>
                <p>We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing.</p>
            </div>

        </div>
    );
}

export default WindowFeature3;