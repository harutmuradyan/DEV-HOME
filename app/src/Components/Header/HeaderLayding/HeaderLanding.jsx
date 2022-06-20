import React from "react";
import './headerLanding.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUsers , 
            faGraduationCap , 
            faBriefcase } from "@fortawesome/free-solid-svg-icons";


const HeaderLayding = ({logined}) => {
    return(
        <header className={logined ? "headerLanding" : "headerLanding active"}>
            <div className="headerLanding-content">
                <div className="headerLanding-content__logo">
                    <h1>DEV HOME</h1>
                </div>

                <nav className="headerLanding-content__nav">
                    <ul className="headerLanding-content__block">
                        <li className="headerLanding-content__item">
                            <FontAwesomeIcon    icon={faUsers}  
                                                className="headerLanding-content__item-icon"/>
                            <p className="headerLanding-content__item-name">Ընկերներ</p>
                        </li>
                        <li className="headerLanding-content__item">
                            <FontAwesomeIcon    icon={faGraduationCap} 
                                                className="headerLanding-content__item-icon"/>
                            <p className="headerLanding-content__item-name">Ուսուցում</p>
                        </li>
                        <li className="headerLanding-content__item" >
                            <FontAwesomeIcon    icon={faBriefcase} 
                                                className="headerLanding-content__item-icon"/>
                            <p className="headerLanding-content__item-name">Աշխատանք</p>
                        </li>
                    </ul>
                </nav>

                <div className="headerLanding-content__btn">
                    <button>
                        Մուտք
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderLayding;