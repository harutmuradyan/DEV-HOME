import React from "react";
import './learning.scss';

import LearningContent from "./LearningContent/LearningContent";
import LearningLessons from "./LearningLessons/LearningLessons";
import LearningTeachers from "./LearningTeachers/LearningTeachers";

const Learning = () => {
    return (
        <div className="learningPage">
            <div className="learningPage-conatiner">
                <div className="learningPage-container">
                    <LearningContent/>
                </div>
                <div className="learningPage-container">
                    <LearningLessons/>
                    <LearningLessons/>
                    <LearningTeachers/>
                    <LearningLessons/>
                    <LearningLessons/>
                </div>
            </div>
        </div>
    )
}

export default Learning;