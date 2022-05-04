import React from "react";
import './companyContent.scss';

import CompanyAbout from "./CompanyAbout/CompanyAbout";
import CompanyBackground from "./CompanyBackground/CompanyBackground";
import CompanyPosts from "./CompanyPosts/CompanyPosts";

const CompanyContent = () => {
    return (
        <div className="companyContent">
            <CompanyBackground/>
            <CompanyAbout/>
            <CompanyPosts/>
        </div>
    )
}

export default CompanyContent;