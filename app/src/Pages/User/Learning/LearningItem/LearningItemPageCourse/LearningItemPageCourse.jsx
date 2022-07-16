import React from "react";
import './learningItemPageCourse.scss';

import VacanciesItemPageCourseItem from "./LearningItemPageCourseItem/LearningItemPageCourseItem";

const LearningItemPageCourse = () => {
    return (
        <div className="learningItemPageCourse">
            <h2 className="learningItemPageCourse-title">Դասերի ցուցակ</h2>
            <div className="learningItemPageCourse-container">
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
                <VacanciesItemPageCourseItem/>
            </div>
        </div>
    )
}

export default LearningItemPageCourse;