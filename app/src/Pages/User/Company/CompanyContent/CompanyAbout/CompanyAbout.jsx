import React from "react";
import './companyAbout.scss';

const CompanyAbout = ({backgroundDesc}) => {
    return (
        <div className="companyAbout">
            <div className="companyAbout-container">
                <div className="companyAbout-block">
                    <h2 className="companyAbout-block__title">Ընդհանուր տեղեկություններ</h2>
                </div>
                <p className="companyAbout-text">{backgroundDesc}</p>
            </div>
        </div>
    )
}

export default CompanyAbout;