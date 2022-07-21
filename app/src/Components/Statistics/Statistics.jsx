import React from "react";
import './statistics.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUserFriends , 
            faChartColumn , 
            faSearch} from "@fortawesome/free-solid-svg-icons";

const Statistics = () => {
    return (
        <div className="statistics">
            <h2 className="statistics-title">Վիճակագրություն</h2>
            <div className="statistics-container">
                <div className="statistics-block">
                    <FontAwesomeIcon    className="statistics-icon" 
                                        icon={faUserFriends}/>
                    <div className="statistics-text">
                        <p>190 Դիտում Ձեր էջի</p>
                        <p>Դիտեք եվ է դիտել Ձեր էջը</p>
                    </div>
                </div>
                <div className="statistics-block">
                    <FontAwesomeIcon    className="statistics-icon" 
                                        icon={faChartColumn}/>
                    <div className="statistics-text">
                        <p>17 փոստի ցուցադրություն</p>
                        <p>իմացեց ովքեր են գործողություն կատարել Փեր փոստի հետ</p>
                    </div>
                </div>
                <div className="statistics-block">
                    <FontAwesomeIcon    className="statistics-icon" 
                                        icon={faSearch}/>
                    <div className="statistics-text">
                        <p>5 անգամ հայտնվել եք փնտրման դաշտում</p>
                        <p>Իմացեք որքան շատ եք հատնվել փնտրման դաշտում</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;