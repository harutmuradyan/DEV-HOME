import React from "react";
import './company.scss';

const Company = ({name,shpere,logo,cover}) => {
    return (
        <div className="company">
            <div className="company-block">
                <img    className="company-block__cover"
                        alt=""
                        src={cover}>
                </img>
                <img    className="company-block__logo" 
                        src={logo} 
                        alt=""></img>
            </div>
            <h2 className="company-name">{name}</h2>
            <p className="company-sphere">{shpere}</p>
            <div className="company-follow">
                <button className="company-follow__btn">Հետևել</button>
            </div>
        </div>
    )
}

export default Company;
