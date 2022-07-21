import React from "react";
import './university.scss';

import Contacts from "../../../Components/Contacts/Contacts";


import AboutDesc from "../../../Components/AboutDesc/AboutDesc";
import BackgroundSection from "../../../Components/BackgroundSection/BackgroundSection";

const University = () => {
    return (
        <div className="university">
            <div className="university-container">
                <div className="university-content">
                    <BackgroundSection/>
                    <Contacts/>
                    <AboutDesc/>
                </div>
                <div className="university-sidebar">
                    
                </div>
            </div>
        </div>
    )
}

export default University;