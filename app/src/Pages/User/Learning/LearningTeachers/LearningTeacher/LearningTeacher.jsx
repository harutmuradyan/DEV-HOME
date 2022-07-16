import React from "react";
import './learningTeachers.scss';

import { Link } from "react-router-dom";

const LearningTeacher = ({name,profession,logo,userId}) => {
    return (
        <div className="learningTeacher">
            <Link to={{pathname:`/profile/${userId}`,  userId }}>
                <img    className="learningTeacher-img" 
                        src={logo} 
                        alt=""></img>
                <p className="learningTeacher-name">{name}</p>
                <p className="learningTeacher-profesion">{profession}</p>
                <div className="learningTeacher-follow">
                    <button className="learningTeacher-follow__btn">Հետևել</button>
                </div>
            </Link>
        </div>
    )
}

export default LearningTeacher;