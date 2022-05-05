import React from "react";
import './companyFollowBar.scss';

import CompanyFollowBarItem from "./CompanyFollowBarItem/CompanyFollowBarItem";

const CompanyFollowBar = () => {
    return (
        <div className="companyFollowBar">
            <h2 className="companyFollowBar-title">Հետևեք նոր ԸՆկերությունների</h2>
            
            <CompanyFollowBarItem/>
            <CompanyFollowBarItem/>
            <CompanyFollowBarItem/>
            <CompanyFollowBarItem/>
        </div>
    )
}

export default CompanyFollowBar;