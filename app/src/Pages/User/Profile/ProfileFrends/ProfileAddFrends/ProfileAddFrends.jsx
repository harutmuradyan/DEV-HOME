import React from "react";
import './profileAddFrends.scss';

const ProfileAddFrends = ({logo , name , profession}) => {
    return (
        <div className="profileAddFrends">
            <div className="profileAddFrends-content">
                <div className="profileAddFrends-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="profileAddFrends-content__info">
                    <h2>{name}</h2>
                    <p>{profession}</p>
                </div>
            </div>
            <div className="profileAddFrends-btn">
                <button className="profileAddFrends-content__follow">
                    Հետևել
                </button>
            </div>
        </div>
    )
}

export default ProfileAddFrends;