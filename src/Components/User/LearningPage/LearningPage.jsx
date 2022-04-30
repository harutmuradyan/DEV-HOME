import React from "react";
import './learningPage.scss';

import LearningContent from "./LearningContent/LearningContent";
import LearningLessons from "./LearningLessons/LearningLessons";

const LearningPage = () => {
    return (
        <div className="learningPage">
            <div className="learningPage-container">
                <LearningContent/>
            </div>
            <div className="learningPage-container">
                <LearningLessons/>
            </div>
        </div>
    )
}

export default LearningPage;