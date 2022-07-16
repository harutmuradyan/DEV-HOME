import React from "react";
import './learningItemPageRandomItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const LearningItemPageRandomItem = () => {
    return (
        <div className="learningItemPageRandomItem">
            <div className="learningItemPageRandomItem-content">
                <div className="learningItemPageRandomItem-content__img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                         alt=""></img>
                </div>
                <div className="learningItemPageRandomItem-content__info">
                    <h2>JS դասընթաց</h2>
                    <p>Դիտել են 100</p>
                </div>
                <div className="learningItemPageRandomItem-content__save">
                    <FontAwesomeIcon    icon={faBookmark} 
                                        className="learningItemPageRandomItem-content__save-icon"/>
                </div>
            </div>
        </div>
    )
}

export default LearningItemPageRandomItem;