import React from "react";
import './learningItemPlayerCourses.scss';

import LearningItemPlayerCourse from "./LearningItemPlayerCourse/LearningItemPlayerCourse";

const LearningItemPlayerCourses = ({    playerCourseBar , 
                                        setPlayerCourseBar}) => {
    return (
        <ul className={playerCourseBar ? "learningItemPlayer-nav__content active" : "learningItemPlayer-nav__content"}>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
            <LearningItemPlayerCourse/>
        </ul>
    )
}

export default LearningItemPlayerCourses;