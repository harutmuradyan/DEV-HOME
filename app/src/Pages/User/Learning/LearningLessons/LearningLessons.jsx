import React from "react";
import './learningLessons.scss';

import LearningLesson from "./LearningLesson/LearningLesson";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faLeftLong , 
            faRightLong } from "@fortawesome/free-solid-svg-icons";

const LearningLessons = ({groupName, lessonsGroup}) => {

    return (
    
        <div className="learningLessons">
            <div className="learningLessons-conatiner">
                <h2 className="learningLessons-title">{groupName}</h2>
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
                    {
                        [...lessonsGroup].map((l) => {
                            return  <LearningLesson key={l.id}
                                                    id={l.id}
                                                    name={l.name}
                                                    title={l.title}
                                                    cover={l.cover}
                            />
                        })
                    }                    
                </div>
            </div>
        </div>
    )
}

export default LearningLessons;