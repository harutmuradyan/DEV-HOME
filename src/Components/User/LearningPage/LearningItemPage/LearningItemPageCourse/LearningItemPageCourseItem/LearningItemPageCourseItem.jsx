import React from "react";
import './learningItemPageCourseItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const VacanciesItemPageCourseItem = () => {
    return (
        <div className="learningItemPageCourseItem">
            <FontAwesomeIcon    className="learningItemPageCourseItem-icon" 
                                icon={faLockOpen}/>
            <div className="learningItemPageCourseItem-block">
                <p className="learningItemPageCourseItem-block__name">SQL Tips and Tricks Lessons 1</p>
                <p className="learningItemPageCourseItem-block__clock">5.60 Վ</p>
            </div>
            <FontAwesomeIcon    className="learningItemPageCourseItem-icon" 
                                icon={faBookmark}/>
        </div>
    )
}

export default VacanciesItemPageCourseItem;