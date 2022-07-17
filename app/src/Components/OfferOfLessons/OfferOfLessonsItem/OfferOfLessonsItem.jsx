import React from "react";
import './offerOfLessonsItem.scss';

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
            </div>
        </div>
    )
}

export default OfferOfLessonsItem;