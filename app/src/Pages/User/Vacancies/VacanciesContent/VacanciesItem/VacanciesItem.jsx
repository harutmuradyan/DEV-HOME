import React from "react";
import './vacanciesItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VacanciesItem = ({    createDay,
                            workName,
                            workPosition,
                            companyId,
                            vacancieId
                            }) => {
                                
    const {companyes} = useSelector((state) => state.company)

    return (
        <div className="vacanciesItem-block">
            <Link   to={{pathname:`/vacancie/${vacancieId}`, vacancieId }} 
                    className="vacanciesItem-link">
                {
                    companyes.filter((c) => c.id === companyId).map((v) => {
                        return  <img    key={v.id}
                                        className="vacanciesItem-block__img" 
                                        src={v.logo} 
                                        alt=""></img>
                    })
                }
                <div className="vacanciesItem-block__content">
                    <p className="vacanciesItem-block__content-name">{workName}</p>
                    <p className="vacanciesItem-block__content-text">{workPosition}</p>
                    <p className="vacanciesItem-block__content-text">{createDay}</p>
                </div>
                <button className="vacanciesItem-block__save">
                    <FontAwesomeIcon    icon={faBookmark} 
                                        className="vacanciesItem-block__save-btn"/>
                </button>
            </Link>
        </div>
    )
}

export default VacanciesItem;