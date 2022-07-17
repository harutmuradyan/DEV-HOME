import React from "react";
import CompanyPost from "./CompanyPost/CompanyPost";

import './companyPosts.scss';

import { useSelector } from "react-redux";

const CompanyPosts = ({compId}) => {

    const {posts} = useSelector((state) => state.post)

    return (
        <div className="companyPosts">
            <div className="companyPosts-filtr">
                <p className="companyPosts-filtr__title">Դասակարգել</p>
                <select className="companyPosts-filtr__category">
                    <option>Շատ դիտվաԾ</option>
                </select>
            </div>
            <div className="companyPosts-items">
                {
                    [...posts].filter((p) => p.companyId === compId).map((p) => (
                        <CompanyPost    key={p.id}
                                        id={p.id}
                                        cover={p.cover}
                                        video={p.video}
                                        desc={p.desc}
                        />
                    ))
                }
            </div>
        </div>
    )
} 

export default CompanyPosts;