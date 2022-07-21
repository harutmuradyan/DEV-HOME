import React from "react";
import './learning.scss';

import LearningContent from "./LearningContent/LearningContent";

import { useSelector } from "react-redux";
import Teachers from "../../../Components/Teachers/Teachers";
import LearningLessons from "../../../Components/LearningLessons/LearningLessons";

const Learning = () => {

    const {lessons} = useSelector((state) => state.lesson)

    return (
        <div className="learningPage">
            <div className="learningPage-conatiner">
                <div className="learningPage-container">
                    <LearningContent/>
                </div>
                <div className="learningPage-container">
                    <Teachers/> 
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