import React from "react";
import './learningItemPageHeader.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const LearningItemPageHeader = () => {
    return (
        <div className="learningItemPageHeader">
            <div className="learningItemPageHeader-container">
                <div className="learningItemPageHeader-left">
                    <p className="learningItemPageHeader-left__name">Secure Coding in Java</p>
                    <div className="learningItemPageHeader-left__info">
                        <p className="learningItemPageHeader-left__info-text">59.30վ</p>
                        <p>Դուրս է եկել Նոյեմբերի 3 - ին 2020</p>
                    </div>
                    <div className="learningItemPageHeader-left__star">
                        <div className="learningItemPageHeader-left__star-block">
                            <p className="learningItemPageHeader-left__star-value">4.7</p>
                            <FontAwesomeIcon    icon={faStar} 
                                                className="learningItemPageHeader-left__star-item"/>
                            <FontAwesomeIcon    icon={faStar} 
                                                className="learningItemPageHeader-left__star-item"/>
                            <FontAwesomeIcon    icon={faStar} 
                                                className="learningItemPageHeader-left__star-item"/>
                            <FontAwesomeIcon    icon={faStar} 
                                                className="learningItemPageHeader-left__star-item"/>
                            <FontAwesomeIcon    icon={faStar} 
                                                className="learningItemPageHeader-left__star-item"/>
                            
                        </div>
                        <p>Հավանել են (80)</p>
                        <p>Դիտում 12.300</p>
                    </div>
                    <button className="learningItemPageHeader-left__start">Սկսել ուսուցումը մեկ ամիս անվճար</button>
                </div>
                <div className="learningItemPageHeader-right">
                    <img    className="learningItemPageHeader-right__img" 
                            src="https://cdn.dribbble.com/users/2918596/screenshots/9246326/media/d2a065d587a99f32128f223b2d8e7d69.gif" 
                            alt=""></img>
                </div>
            </div>
        </div>
    )
}

export  default LearningItemPageHeader;