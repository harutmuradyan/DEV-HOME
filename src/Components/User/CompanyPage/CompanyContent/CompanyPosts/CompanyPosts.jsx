import React from "react";
import CompanyPost from "./CompanyPost/CompanyPost";

import './companyPosts.scss';

const CompanyPosts = () => {
    return (
        <div className="companyPosts">
            <div className="companyPosts-filtr">
                <p className="companyPosts-filtr__title">Դասակարգել</p>
                <select className="companyPosts-filtr__category">
                    <option>Շատ դիտվաԾ</option>
                </select>
            </div>
            <div className="companyPosts-items">
                <CompanyPost/>
                <CompanyPost/>
            </div>
            <div className="companyPosts-seeMore">
                <button className="posts-seeMore__btn">Դիտել ավելին</button>
            </div>
        </div>
    )
} 

export default CompanyPosts;