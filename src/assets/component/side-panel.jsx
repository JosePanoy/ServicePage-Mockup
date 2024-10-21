import React from 'react';
import "../css/side-panel.css";

function SidePanel({ isVisible, toggleVisibility }) {
    return (
        <div className={`side-panel ${isVisible ? 'visible' : ''}`} onClick={toggleVisibility}>
            <button className="panel-button">Meet the Team</button>
            <button className="penel-button">Search for Homes</button>
            <button className="panel-button">Our Communities</button>
            <button className="panel-button">Home Evaluation</button>
            <button className="panel-button">Services</button>
            <button className="panel-button">Home Across America</button>
            <button className="panel-button">Testimonials</button>
        </div>
    );
}

export default SidePanel;
