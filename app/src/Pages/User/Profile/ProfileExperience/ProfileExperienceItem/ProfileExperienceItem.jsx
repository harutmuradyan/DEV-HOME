import React from "react";
import './profileExperienceItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileExperienceItem = ({    companyName , 
                                    startWork , 
                                    endWork , 
                                    profession , 
                                    logo}) => {
    return (
        <div className="profileExperienceItem">
            <div className="profileExperienceItem-content">
                <div className="profileExperienceItem-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="profileExperienceItem-content__info">
                    <h2>{companyName}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startWork} - ավարտ {endWork}</p>
                </div>
                <button className="profileExperienceItem-content__btn">
                    <FontAwesomeIcon    className="profileExperienceItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default ProfileExperienceItem;