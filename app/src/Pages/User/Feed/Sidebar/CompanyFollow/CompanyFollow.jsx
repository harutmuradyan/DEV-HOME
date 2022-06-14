import React from "react";
import './companyFollow.scss'

const CompanyFollow = ({name,profession,logo,workplace}) => {

    return (
        <div className="companyFollow">
            <div className="companyFollow-content">
                <div className="companyFollow-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="companyFollow-content__info">
                    <h2>{name}</h2>
                    <p>{profession}</p>
                    <p>{workplace}</p>
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