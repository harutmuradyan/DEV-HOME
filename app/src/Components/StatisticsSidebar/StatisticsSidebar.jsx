import React from "react";
import './statisticsSidebar.scss';

import { Link } from "react-router-dom";
import GoPremium from "../GoPremium/GoPremium";

const StatisticsSidebar = ({name , profession , cover , logo , userId}) => {
    return (
        <div className="statisticsSidebar">    
            <div className="statisticsSidebar-container">
                <Link to={{pathname:`/profile/${userId}`,  userId }}>
                    <div className="statisticsSidebar-user">
                        <div className="user-block">
                            <img    className="user-block__cover"
                                    src={cover}
                                    alt=""></img>
                        </div>
                        <div className="user-logo">
                            <img    className="user-logo__img" 
                                        src={logo} 
                                        alt=""></img>
                        </div>
                        <h2 className="statisticsSidebar-user__name">{name}</h2>
                        <p className="statisticsSidebar-user__profession">{profession}</p>
                    </div>
                </Link>
                <div className="statisticsSidebar-statistics">
                    <div className="statisticsSidebar-statistics__block">
                        <p>Էջի դիտում</p>
                        <p>0</p>
                    </div>
                    <div className="statisticsSidebar-statistics__block">
                        <p>Էջի դիտումների քանակ</p>
                        <p>0</p>
                    </div>
                </div>
                <GoPremium/>
            </div>
        </div>
    )
}

export default StatisticsSidebar;