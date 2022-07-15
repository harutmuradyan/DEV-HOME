import React from "react";
import './learningTeachers.scss';

const LearningTeacher = ({name,profession,logo}) => {
    return (
        <div className="learningTeacher">
            <img    className="learningTeacher-img" 
                    src={logo} 
                    alt=""></img>
            <p className="learningTeacher-name">{name}</p>
            <p className="learningTeacher-profesion">{profession}</p>
            <div className="learningTeacher-follow">
                <button className="learningTeacher-follow__btn">Հետևել</button>
            </div>
        </div>
    )
}

export default LearningTeacher;