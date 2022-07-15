import React from "react";
import './LearningLesson.scss';

const LearningLesson = ({cover,name,title}) => {
    return (
        <div className="learningLesson">
            <img    className="learningLesson-img" 
                    src={cover} 
                    alt=""></img>
            <p className="learningLesson-title">{name}</p>
            <p className="learningLesson-info">{title}</p>
            <p className="learningLesson-teacher">Դասախոս՝ Գայանե</p>
        </div>
    )
}

export default LearningLesson;