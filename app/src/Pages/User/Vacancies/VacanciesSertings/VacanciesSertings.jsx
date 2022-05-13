import React from "react";
import './vacanciesSertings.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faBriefcase , 
            faBell , 
            faAdd} from "@fortawesome/free-solid-svg-icons";

const VacanciesSertings = () => {
    return (
        <div className="vacanciesSertings">
            <div className="vacanciesSertings-container">
                <nav className="vacanciesSertings-nav">
                    <ul className="vacanciesSertings-navbar">
                        <li className="vacanciesSertings-navbar__item">
                            <button className="vacanciesSertings-navbar__item-btn">
                                <FontAwesomeIcon    icon={faBriefcase} 
                                                    className="vacanciesSertings-navbar__item-icon"/>
                                Իմ աշխատանքները
                            </button>
                        </li>
                        <li className="vacanciesSertings-navbar__item">
                            <button className="vacanciesSertings-navbar__item-btn">
                                <FontAwesomeIcon    icon={faBell} 
                                                    className="vacanciesSertings-navbar__item-icon"/>
                                Ծանուցումներ աշխատանքների
                            </button>
                        </li>
                        <li className="vacanciesSertings-navbar__item">
                            <button className="vacanciesSertings-navbar__item-btn">
                                <FontAwesomeIcon    icon={faAdd} 
                                                    className="vacanciesSertings-navbar__item-icon"/>
                                Տեղադել աշխատանքի հայտարարություն
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default VacanciesSertings;