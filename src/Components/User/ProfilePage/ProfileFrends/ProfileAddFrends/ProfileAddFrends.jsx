import React from "react";
import './profileAddFrends.scss';

const ProfileAddFrends = () => {
    return (
        <div className="profileAddFrends">
            <div className="profileAddFrends-content">
                <div className="profileAddFrends-content__img">
                    <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                </div>
                <div className="profileAddFrends-content__info">
                    <h2>Քրիստինե Գրիգորյան</h2>
                    <p>DEVOPS DEVELOPER</p>
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