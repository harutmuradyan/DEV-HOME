import React from "react";
import './companyFollowBarItem.scss';

const CompanyFollowBarItem = () => {
    return (
        <div className="companyFollowBarItem">
            <div className="companyFollowBarItem-content">
                <div className="companyFollowBarItem-content__img">
                    <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                         alt=""></img>
                </div>
                <div className="companyFollowBarItem-content__info">
                    <h2>Քրիստինե Գրիգորյան</h2>
                    <p>DEVOPS DEVELOPER</p>
                    <p>700 Հետևորդ</p>
                    <button className="companyFollowBarItem-content__follow">
                        Հետևել
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CompanyFollowBarItem;