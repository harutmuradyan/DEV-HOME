import React from "react";
import './university.scss';

import UniversityAbout from "./UniversityAbout/UniversityAbout";
import UniversityBackground from "./UniversityBackground/UniversityBackground";
import UniversityContacts from "./UniversityContacts/UniversityContacts";

const University = () => {
    return (
        <div className="university">
            <div className="university-container">
                <div className="university-content">
                    <UniversityBackground/>
                    <UniversityContacts/>
                    <UniversityAbout/>
                </div>
                <div className="university-sidebar">
                    
                </div>
            </div>
        </div>
    )
}

export default University;