import React from "react";
import './company.scss';

import CompanyContent from "./CompanyContent/CompanyContent";
import CompanySidebar from "./CompanySidebar/CompanySidebar";

const Company = () => {
    return (
        <div className="companyPage">
            <div className="companyPage-container">
                <div className="companyPage-content">
                    <CompanyContent/>
                </div>
                <div className="companyPage-sidebar">
                    <CompanySidebar/>
                </div>
            </div>
        </div>
    )
}

export default Company;