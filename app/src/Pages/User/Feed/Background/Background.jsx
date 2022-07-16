import React from "react";
import './background.scss';

import GoPremium from "./GoPremium/GoPremium";

import { Link } from "react-router-dom";

const Background = ({name , profession , cover , logo , userId}) => {
    return (
        <div className="background">    
            <div className="background-container">
                <Link to={{pathname:`/profile/${userId}`,  userId }}>
                    <div className="background-user">
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
                        <h2 className="background-user__name">{name}</h2>
                        <p className="background-user__profession">{profession}</p>
                    </div>
                </Link>
                <div className="background-statistics">
                    <div className="background-statistics__block">
                        <p>Էջի դիտում</p>
                        <p>0</p>
                    </div>
                    <div className="background-statistics__block">
                        <p>Էջի դիտումների քանակ</p>
                        <p>0</p>
                    </div>
                </div>
                <GoPremium/>
            </div>
        </div>
    )
}

export default Background;