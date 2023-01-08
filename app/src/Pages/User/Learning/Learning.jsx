import React from "react";
import './learning.scss';


import { useSelector } from "react-redux";
import Teachers from "../../../Components/Teachers/Teachers";
import LearningLessons from "../../../Components/LearningLessons/LearningLessons";
import StartLearning from "../../../Components/StartLearning/StartLearning";

const Learning = () => {

    const {lessons} = useSelector((state) => state.lesson)

    return (
        <div className="learningPage">
            <div className="learningPage-conatiner">
                <div className="learningPage-container">
                    <StartLearning/>
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