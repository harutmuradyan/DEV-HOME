import React from "react";
import './learning.scss';

import LearningContent from "./LearningContent/LearningContent";
import LearningLessons from "./LearningLessons/LearningLessons";
import LearningTeachers from "./LearningTeachers/LearningTeachers";

import { useSelector } from "react-redux";

const Learning = () => {

    const {lessons} = useSelector((state) => state.lesson)
    /*
    "groupName" : "C# lessons",
    "teacherName" : "Jon Soon",
    "teacherId" : 1,
    "lessonsGroup" : [*/

    return (
        <div className="learningPage">
            <div className="learningPage-conatiner">
                <div className="learningPage-container">
                    <LearningContent/>
                </div>
                <div className="learningPage-container">
                    <LearningTeachers/> 
                    {
                        [...lessons].map((l) => {
                            return <LearningLessons key={l.groupId} 
                                                    groupName={l.groupName}
                                                    lessonsGroup={l.lessonsGroup} />            
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Learning;