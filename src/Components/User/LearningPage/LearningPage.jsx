import React from "react";
import './learningPage.scss';

import LearningContent from "./LearningContent/LearningContent";
import LearningLessons from "./LearningLessons/LearningLessons";
import LearningTeachers from "./LearningTeachers/LearningTeachers";

const LearningPage = () => {
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

export default LearningPage;