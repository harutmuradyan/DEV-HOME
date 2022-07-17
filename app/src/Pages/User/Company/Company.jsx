import React from "react";
import FollowCompany from "../../../Components/FollowCompany/FollowCompany";
import './company.scss';

import CompanyContent from "./CompanyContent/CompanyContent";

const Company = () => {
    return (
        <div className="companyPage">
            <div className="companyPage-container">
                <div className="companyPage-content">
                    <CompanyContent/>
                </div>
                <div className="companyPage-sidebar">
                    <FollowCompany/>
                </div>
            </div>
        </div>
    )
}

export default Company;