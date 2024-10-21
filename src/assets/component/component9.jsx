import React from 'react';
import '../css/component9.css';
import igpic from '../img/instagram.png';
import fbpic from '../img/facebook.png';
import logo1 from '../img/logo1.jpg';
import logo2 from '../img/logo2.jpg';
import logo3 from '../img/logo3.jpg';

function Component9() {
    return (
        <div className="unique-grid-box">
            <div>
                <h2>Julie Hansen Partnership</h2>
                <p>
                    An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers 
                    and sellers deserved more from their real estate company. More service. More resources. More integrity. 
                    More global reach. In a word, more of everything people should expect when they buy or sell their homes.
                </p>
            </div>
            <div className="item-3">
                <div className="item-3-left">
                    <h3>ADDRESS</h3>
                    <p>
                        4733 Chabot Drive #100<br />
                        Pleasanton, CA 94588<br />
                        Julie Hansen-Orvis | CA DRE# 00934447
                    </p>
                </div>
                <div className="item-3-right">
                    <h3>CONTACT INFORMATION</h3>
                    <p>
                        (925) 553-6707<br />
                        luxuryhomesinwc@icloud.com
                    </p>
                </div>
            </div>
            <div style={{marginTop: '70px'}}>
                <h2>Newsletter</h2>
                <p>
                    Subscribe to our Newsletter for latest news and updates. Stay tuned!
                </p>
            </div>
            <div className="item-4">
                <input type="email" placeholder="Email Address" className="email-input" />
                <div className="checkbox-container">
                    <input type="checkbox" id="agreement" className="agreement-checkbox" />
                    <label htmlFor="agreement" className="agreement-label">
                        By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                    </label>
                </div>
                <button className="button-30" role="button">Subscribe</button>
            </div>
            <div className="item-6">
                <div className="logos-6">
                    <img src={logo1} alt="Logo 1" className="logos" />
                    <img src={logo2} alt="Logo 2" className="logos" />
                    <img src={logo3} alt="Logo 3" className="logos" />
                </div>
            </div>
            <div className="item-5">
                <div className="social-icons">
                    <img style={{cursor: 'pointer'}} src={fbpic} alt="Facebook" className="social-icon" />
                    <img style={{cursor: 'pointer'}} src={igpic} alt="Instagram" className="social-icon" />
                </div>
            </div>
            <div className="item-7">
                Website Designed & Developed by &nbsp; <a href="https://luxurypresence.com" className="luxury-link" target="_blank" rel="noopener noreferrer">Luxury Presence</a>
            </div>
            <div className="item-8">
                <p>Copyright 2024 | <a href="/privacy-policy" className="privacy-link">Privacy Policy</a></p>
            </div>
        </div>
    );
}

export default Component9;