import React from 'react';
import "../css/side-panel.css";

function SidePanel({ isVisible, toggleVisibility }) {
    return (
        <div className={`side-panel ${isVisible ? 'visible' : ''}`} onClick={toggleVisibility}>
            <button className="custom-slidebar-button">Meet the Team</button>
            <button className="custom-slidebar-button">Search for Homes</button>
            <button className="custom-slidebar-button">Our Communities</button>
            <button className="custom-slidebar-button">Home Evaluation</button>
            <button className="custom-slidebar-button">Services</button>
            <button className="custom-slidebar-button">Homes Across America</button>
            <button className="custom-slidebar-button">Testimonials</button>
            <button className="custom-slidebar-button">Contact Us</button>
        </div>
    );
}

export default SidePanel;
