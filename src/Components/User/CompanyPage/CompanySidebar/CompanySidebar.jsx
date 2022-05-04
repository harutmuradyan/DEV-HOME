import React from "react";
import './companySidebar.scss';

import CompanyFollowBar from "./CompanyFollowBar/CompanyFollowBar";

const CompanySidebar = () => {
    return (
        <div className="companySidebar">
            <CompanyFollowBar/>
        </div>
    )
}

export default CompanySidebar;