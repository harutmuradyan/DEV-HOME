import React from "react";
import './companyContent.scss';

import CompanyAbout from "./CompanyAbout/CompanyAbout";
import CompanyBackground from "./CompanyBackground/CompanyBackground";
import CompanyPosts from "./CompanyPosts/CompanyPosts";
import CompanyContacts from "./CompanyContacts/CompanyContacts";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyContent = () => {

    const {id} = useParams();

    const companyid = +id;
    
    const {companyes} = useSelector((state) => state.company);

    console.log(companyid)

    return (
        <div className="companyContent">
            {
                companyes.filter((c) => c.id === companyid).map((c) => (
                    <div    className="companyContent-container"
                            key={c.id}>
                        <CompanyBackground  name={c.name} 
                                            logo={c.logo} 
                                            cover={c.cover} 
                                            backgroundDesc={c.backgroundDesc}
                                            followerCount={c.followerCount}
                                            country={c.country}
                                            city={c.city}
                                            employee={c.employee}
                                            />
                        <CompanyContacts    shpere={c.shpere}
                                            webSites={c.webSites}
                                            tell={c.tell}
                                            createDay={c.createDay}
                                            employee={c.employee}
                        />
                        <CompanyAbout backgroundDesc={c.backgroundDesc}/>
                        <CompanyPosts compId={c.id}/>
                    </div>
                ))
            }
        </div>
    )
}

export default CompanyContent;