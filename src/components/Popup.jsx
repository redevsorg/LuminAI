import React, { useState, useEffect } from 'react';
import '../styles/Popup.css';

const Popup = (programName) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="popup-container">
                <div className="popup">
                    <button className="close-button" onClick={handleClose}>×</button>
                    {/* <p>Hey there, it seems like you are interested in our ${programName} Program. </p> */}
                    <div className="popup-options">
                        <label>
                            <input type="checkbox" />
                            Yeah
                        </label>
                        <label>
                            <input type="checkbox" />
                            No thanks
                        </label>
                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;
