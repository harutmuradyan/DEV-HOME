import React from "react";
import './vacanciesItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const VacanciesItem = () => {
    return (
        <div className="vacanciesItem-block">
            <img className="vacanciesItem-block__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
            <div className="vacanciesItem-block__content">
                <p className="vacanciesItem-block__content-name">Խաչիկ Գասպարյան</p>
                <p className="vacanciesItem-block__content-text">Code Rever</p>
                <p className="vacanciesItem-block__content-text">1 օր առաջ</p>
            </div>
            <button className="vacanciesItem-block__save">
                <FontAwesomeIcon icon={faBookmark} className="vacanciesItem-block__save-btn"/>
            </button>
        </div>
    )
}

export default VacanciesItem;