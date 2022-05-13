import React from "react";
import './learningTeachers.scss';

import LearningTeacher from "./LearningTeacher/LearningTeacher";

const LearningTeachers = () => {
    return (
        <div className="learningTeachers">
            <div className="learningTeachers-header">
                <h2 className="learningTeachers-header__title">Դասախոսներ</h2>
                <button className="learningTeachers-header__btn">Դիտել ավելին</button>
            </div>
            <div className="learningTeachers-block">
                <LearningTeacher/>
                <LearningTeacher/>
                <LearningTeacher/>
                <LearningTeacher/>
                <LearningTeacher/>
            </div>
        </div>
    )
}

export default LearningTeachers;