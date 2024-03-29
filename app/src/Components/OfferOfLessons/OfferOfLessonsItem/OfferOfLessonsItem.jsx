import React from "react";
import './offerOfLessonsItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const OfferOfLessonsItem = () => {
    return (
        <div className="offerOfLessonsItem">
            <div className="offerOfLessonsItem-content">
                <div className="offerOfLessonsItem-content__img">
                    <img    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                            alt=""></img>
                </div>
                <div className="offerOfLessonsItem-content__info">
                    <h2>JS դասընթաց</h2>
                    <p>Դիտել են 100</p>
                </div>
                <div className="offerOfLessonsItem-content__save">
                    <FontAwesomeIcon    icon={faBookmark} 
                                        className="offerOfLessonsItem-content__save-icon"/>
                </div>
            </div>
        </div>
    )
}

export default OfferOfLessonsItem;