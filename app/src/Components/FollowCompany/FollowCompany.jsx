import React from "react";
import './followCompany.scss';

import CompanyFollowItem from "./CompanyFollowItem/CompanyFollowItem";

import { useSelector } from "react-redux"

const FollowCompany = () => {

    const {companyes} = useSelector((state) => state.company)

    return (
        <div className="followCompany">
            <h2 className="followCompany-title">Հետևեք նոր ԸՆկերությունների</h2>
            <div className="followCompany-block">
                {
                    companyes.map((c) => (
                        <CompanyFollowItem  key={c.id}
                                            id={c.id}
                                            name={c.name}
                                            logo={c.logo}
                                            shpere={c.shpere}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FollowCompany;