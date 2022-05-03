import React from "react";
import './LearningLesson.scss';

const LearningLesson = () => {
    return (
        <div className="learningLesson">
            <img    className="learningLesson-img" 
                    src="https://cms-assets.tutsplus.com/uploads/users/1199/posts/30670/preview_image/react.jpg" 
                    alt=""></img>
            <p className="learningLesson-title">Դասեր</p>
            <p className="learningLesson-info">React and Redux Lessons 1</p>
            <p className="learningLesson-teacher">Դասախոս՝ Գայանե</p>
        </div>
    )
}

export default LearningLesson;