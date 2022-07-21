import React from "react";
import './vacancies.scss';

import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import FollowCompany from "../../../Components/FollowCompany/FollowCompany";
import Jobs from "../../../Components/Jobs/Jobs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faBriefcase , 
            faBell , 
            faAdd} from "@fortawesome/free-solid-svg-icons";

const Vacancies = () => {
    return (
        <div className="vacancies">
            <div className="vacancies-leftBlock">
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
            </div>
            <div className="vacancies-content">
                <Jobs/>
            </div>
            <div className="vacancies-rightBlock">
                <FollowCompany/>
                <SidebarFooter/>
            </div>
        </div>
    )
}

export default Vacancies;