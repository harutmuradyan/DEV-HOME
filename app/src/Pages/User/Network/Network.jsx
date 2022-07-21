import React from "react";
import './network.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUserFriends , 
            faBuilding} from "@fortawesome/free-solid-svg-icons";


import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import Companyes from "../../../Components/Companyes/Companyes";
import Users from "../../../Components/Users/Users";
import ToAskNotfications from "../../../Components/ToAskNotfications/ToAskNotfications";

const Network = () => {
    return (
        <div className="networkPage">
            <div className="networkPage-container">
                <div className="networkPage-content">
                    <div className="networkPage-content__notification">
                        <p className="networkPage-content__notification-title">Նոր ընկերության առաջարկներ չկան</p>
                        <ToAskNotfications/>           
                    </div>
                    <div className="networkPage-content__users">
                        <Companyes/>
                    </div>
                    <div className="networkPage-content__companyes">
                        <Users/>
                    </div>
                </div>
                <div className="networkPage-sidebar">
                    <nav className="networkPage-nav">
                        <ul className="networkPage-nav__bar">
                            <li className="networkPage-nav__item">
                                <FontAwesomeIcon    className="networkPage-nav__item-icon" 
                                                    icon={faUserFriends}/>
                                Ընկերներ
                            </li>
                            <li className="networkPage-nav__item">
                                <FontAwesomeIcon    className="networkPage-nav__item-icon" 
                                                    icon={faBuilding} />
                                Ընկերություններ
                            </li>
                        </ul>
                    </nav>
                    <SidebarFooter/>
                </div>
            </div>
        </div>
    )
}

export default Network;