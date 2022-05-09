import React from "react";
import './learningLessons.scss';

import LearningLesson from "./LearningLesson/LearningLesson";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faLeftLong , 
            faRightLong } from "@fortawesome/free-solid-svg-icons";


const LearningLessons = () => {
    return (
        <div className="learningLessons">
            <div className="learningLessons-conatiner">
                <h2 className="learningLessons-title">React and Redux</h2>
            </div>
            <div className="learningLessons-slides">
                <div className="learningLessons-slides__btns">
                    <button className="learningLessons-slides__btns-item">
                        <FontAwesomeIcon icon={faLeftLong}
                                         className="learningLessons-slides__btns-icon"
                        />
                    </button>
                    <button className="learningLessons-slides__btns-item">
                        <FontAwesomeIcon icon={faRightLong}
                                         className="learningLessons-slides__btns-icon"
                        />
                    </button>
                </div>
                <div className="learningLessons-slides__block">
                    <LearningLesson/>
                    <LearningLesson/>
                    <LearningLesson/>
                    <LearningLesson/>
                    <LearningLesson/>
                </div>
            </div>
        </div>
    )
}

export default LearningLessons;