import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './slayderNews.scss';

import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const SlayderNews = () => {
    return (
        <div className="slayderNews">
            <div className="slayderNews-buttons">
                <button className="slayderNews-buttons__item">
                    <FontAwesomeIcon icon={faLeftLong} className="slayderNews-buttons__item-icon"></FontAwesomeIcon>
                    Հետ
                </button>
                <button className="slayderNews-buttons__item">
                    Առաջ
                    <FontAwesomeIcon icon={faRightLong} className="slayderNews-buttons__item-icon"></FontAwesomeIcon>
                </button>
            </div>
            <div className="slayderNews-content">
                <div className="slayderNews-block">
                    <h2 className="slayderNews-block__title">
                        Նորույթ DEV HOME - ում  
                    </h2>
                    <button className="slayderNews-block__linq">
                        Սկսել
                    </button>
                </div>
                <div className="slayderNews-cover">
                    <img className="slayderNews-cover__img" src="https://woobro.design/thumbnails/60/virtual-meeting-608a93aa8d8ec.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default SlayderNews;