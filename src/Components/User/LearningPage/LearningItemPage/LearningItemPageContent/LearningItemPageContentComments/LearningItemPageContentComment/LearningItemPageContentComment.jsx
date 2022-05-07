import React from "react";
import './learningItemPageContentComment.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LearningItemPageContentComment = () => {
    return (
        <div className="learningItemPageContentComment">
            <div className="learningItemPageContentComment-container">
                <img    className="learningItemPageContentComment-container__img"
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""></img>
                <div className="learningItemPageContentComment-block">
                    <h2 className="learningItemPageContentComment-block__name">Լիանա Ալավերդյան</h2>
                    <p className="learningItemPageContentComment-block__profession">WEB DEVELOPER</p>
                    <div className="learningItemPageContentComment-block__star">
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContentComment__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContentComment__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContentComment__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContentComment__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContentComment__star-item"/>
                        <p>12 մարտի</p>
                    </div>
                    <p className="learningItemPageContentComment-block__text">Շատ մատչելի դասընթաց է</p>
                </div>
            </div>
        </div>
    )
}

export default LearningItemPageContentComment;