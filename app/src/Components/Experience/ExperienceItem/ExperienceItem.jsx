import React from "react";
import './experienceItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ExperienceItem = ({    companyName , 
                                    startWork , 
                                    endWork , 
                                    profession , 
                                    logo}) => {
    return (
        <div className="experienceItem">
            <div className="experienceItem-content">
                <div className="experienceItem-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="experienceItem-content__info">
                    <h2>{companyName}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startWork} - ավարտ {endWork}</p>
                </div>
                <button className="experienceItem-content__btn">
                    <FontAwesomeIcon    className="experienceItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default ExperienceItem;