import React from "react";
import './companyFollowBar.scss';

import CompanyFollowBarItem from "./CompanyFollowBarItem/CompanyFollowBarItem";

const CompanyFollowBar = () => {
    return (
        <div className="companyFollowBar">
            <h2 className="companyFollowBar-title">Հետևեք նոր ԸՆկերությունների</h2>
            <div className="companyFollowBar-block">
                <CompanyFollowBarItem/>
                <CompanyFollowBarItem/>
                <CompanyFollowBarItem/>
                <CompanyFollowBarItem/>
            </div>
        </div>
    )
}

export default CompanyFollowBar;