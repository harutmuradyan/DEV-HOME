import React from "react";
import './header.scss';

import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return(
        <header className="header">
            <div className="header-content">
                <div className="header-content__logo">
                    <h1>DEV HOME</h1>
                </div>

                <nav className="header-content__nav">
                    <ul className="header-content__block">
                        <li className="header-content__item">
                            <FontAwesomeIcon    icon={faUsers}  
                                                className="header-content__item-icon"/>
                            <p className="header-content__item-name">Ընկերներ</p>
                        </li>
                        <li className="header-content__item">
                            <FontAwesomeIcon    icon={faGraduationCap} 
                                                className="header-content__item-icon"/>
                            <p className="header-content__item-name">Ուսուցում</p>
                        </li>
                        <li className="header-content__item" >
                            <FontAwesomeIcon    icon={faBriefcase} 
                                                className="header-content__item-icon"/>
                            <p className="header-content__item-name">Աշխատանք</p>
                        </li>
                    </ul>
                </nav>

                <div className="header-content__btn">
                    <button>
                        Մուտք
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;