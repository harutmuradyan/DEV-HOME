import React from "react";
import './profileStatistics.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUserFriends , 
            faChartColumn , 
            faSearch} from "@fortawesome/free-solid-svg-icons";

const ProfileStatistics = () => {
    return (
        <div className="profileStatistics">
            <h2 className="profileStatistics-title">Վիճակագրություն</h2>
            <div className="profileStatistics-container">
                <div className="profileStatistics-block">
                    <FontAwesomeIcon    className="profileStatistics-icon" 
                                        icon={faUserFriends}/>
                    <div className="profileStatistics-text">
                        <p>190 Դիտում Ձեր էջի</p>
                        <p>Դիտեք եվ է դիտել Ձեր էջը</p>
                    </div>
                </div>
                <div className="profileStatistics-block">
                    <FontAwesomeIcon    className="profileStatistics-icon" 
                                        icon={faChartColumn}/>
                    <div className="profileStatistics-text">
                        <p>17 փոստի ցուցադրություն</p>
                        <p>իմացեց ովքեր են գործողություն կատարել Փեր փոստի հետ</p>
                    </div>
                </div>
                <div className="profileStatistics-block">
                    <FontAwesomeIcon    className="profileStatistics-icon" 
                                        icon={faSearch}/>
                    <div className="profileStatistics-text">
                        <p>5 անգամ հայտնվել եք փնտրման դաշտում</p>
                        <p>Իմացեք որքան շատ եք հատնվել փնտրման դաշտում</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileStatistics;