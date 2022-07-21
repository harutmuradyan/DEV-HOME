import React from "react";
import FollowCompany from "../../../Components/FollowCompany/FollowCompany";
import './company.scss';

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Contacts from "../../../Components/Contacts/Contacts";
import Posts from "../../../Components/Posts/Posts";
import AboutDesc from "../../../Components/AboutDesc/AboutDesc";
import BackgroundSection from "../../../Components/BackgroundSection/BackgroundSection";


const Company = () => {

    const {id} = useParams();

    const companyid = +id;

    const {companyes} = useSelector((state) => state.company);

    console.log(companyid)

    return (
        <div className="company">
            <div className="company-container">
                <div className="company-content">
                    {
                        companyes.filter((c) => c.id === companyid).map((c) => (
                            <div    className="company-content__container"
                                    key={c.id}>
                                <BackgroundSection  name={c.name} 
                                                    logo={c.logo} 
                                                    cover={c.cover} 
                                                    backgroundDesc={c.backgroundDesc}
                                                    followerCount={c.followerCount}
                                                    country={c.country}
                                                    city={c.city}
                                                    employee={c.employee}
                                                    />
                                <Contacts    shpere={c.shpere}
                                                    webSites={c.webSites}
                                                    tell={c.tell}
                                                    createDay={c.createDay}
                                                    employee={c.employee}
                                />
                                <AboutDesc backgroundDesc={c.backgroundDesc}/>
                                <Posts compId={c.id}/>
                            </div>
                        ))
                    }
                </div>
                <div className="company-sidebar">
                    <FollowCompany/>
                </div>
            </div>
        </div>
    )
}

export default Company;