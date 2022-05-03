import React from "react";
import './companyFollow.scss'

const CompanyFollow = () => {
    return (
        <div className="companyFollow">
            <div className="companyFollow-content">
                <div className="companyFollow-content__img">
                    <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                </div>
                <div className="companyFollow-content__info">
                    <h2>Քրիստինե Գրիգորյան</h2>
                    <p>DEVOPS DEVELOPER</p>
                </div>
            </div>
            <div className="companyFollow-btn">
                <button className="companyFollow-content__follow">
                    Հետևել
                </button>
            </div>
        </div>
    )
}

export default CompanyFollow;