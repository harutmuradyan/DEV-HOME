import React from "react";
import './LearningLesson.scss';

import { Link } from "react-router-dom";

const LearningLesson = ({cover,name,title,id,teacher}) => {
    return (
        <div className="learningLesson">
            <Link to={{pathname:`/learning/${id}`,  id }}>
                <img    className="learningLesson-img" 
                        src={cover} 
                        alt=""></img>
                <p className="learningLesson-title">{name}</p>
                <p className="learningLesson-info">{title}</p>
                <p className="learningLesson-teacher">{teacher}</p>
            </Link>
        </div>
    )
}

export default LearningLesson;