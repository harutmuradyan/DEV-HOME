import React from "react";
import './job.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({    createDay,
                            workName,
                            workPosition,
                            companyId,
                            vacancieId
                            }) => {
                                
    const {companyes} = useSelector((state) => state.company)

    return (
        <div className="job-block">
            <Link   to={{pathname:`/vacancie/${vacancieId}`, vacancieId }} 
                    className="job-link">
                {
                    companyes.filter((c) => c.id === companyId).map((v) => {
                        return  <img    key={v.id}
                                        className="job-block__img" 
                                        src={v.logo} 
                                        alt=""></img>
                    })
                }
                <div className="job-block__content">
                    <p className="job-block__content-name">{workName}</p>
                    <p className="job-block__content-text">{workPosition}</p>
                    <p className="job-block__content-text">{createDay}</p>
                </div>
                <button className="job-block__save">
                    <FontAwesomeIcon    icon={faBookmark} 
                                        className="job-block__save-btn"/>
                </button>
            </Link>
        </div>
    )
}

export default Job;