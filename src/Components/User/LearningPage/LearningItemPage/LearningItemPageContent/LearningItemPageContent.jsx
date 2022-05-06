import React from "react";
import './learningItemPageContent.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const LearningItemPageContent = () => {
    return (
        <div className="learningItemPageContent">
            <div className="learningItemPageContent-container">
                <div className="learningItemPageContent-left">
                    <p className="learningItemPageContent-left__name">Secure Coding in Java</p>
                    <div className="learningItemPageContent-left__info">
                        <p>59.30վ</p>
                        <p>Դուրս է եկել Նոյեմբերի 3 - ին 2020</p>
                    </div>
                    <div className="learningItemPageContent-left__star">
                        <p>4.7</p>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContent-left__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContent-left__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContent-left__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContent-left__star-item"/>
                        <FontAwesomeIcon    icon={faStar} 
                                            className="learningItemPageContent-left__star-item"/>
                        <p>Հավանել են (80)</p>
                        <p>Դիտում 12.300</p>
                    </div>
                    <button className="learningItemPageContent-left__start">Սկսել ուսուցումը մեկ ամիս անվճար</button>
                </div>
                <div className="learningItemPageContent-right">
                    <img    className="learningItemPageContent-right__img" 
                                src="https://cdn.dribbble.com/users/2918596/screenshots/9246326/media/d2a065d587a99f32128f223b2d8e7d69.gif" 
                                alt=""></img>
                </div>
            </div>
        </div>
    )
}

export  default LearningItemPageContent;