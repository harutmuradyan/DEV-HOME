import React from "react";
import './learningTeachers.scss';

const LearningTeacher = () => {
    return (
        <div className="learningTeacher">
            <img    className="learningTeacher-img" 
                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png" 
                    alt=""></img>
            <p className="learningTeacher-name">Աննա Ղազարյան</p>
            <p className="learningTeacher-profesion">Frontend Developer</p>
            <div className="learningTeacher-follow">
                <button className="learningTeacher-follow__btn">Հետևել</button>
            </div>
        </div>
    )
}

export default LearningTeacher;