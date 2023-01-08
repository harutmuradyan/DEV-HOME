import React from "react";
import FollowCompany from "../../../Components/FollowCompany/FollowCompany";
import './company.scss';
import { useCompany } from "../../../Utils/Hooks/useCompany";

const Company = () => {
    const {CompanyById} = useCompany();

    return (
        <div className="company">
            <div className="company-container">
                <div className="company-content">
                    <CompanyById/>                    
                </div>
                <div className="company-sidebar">
                    <FollowCompany/>
                </div>
            </div>
        </div>
    )
}

export default Company;