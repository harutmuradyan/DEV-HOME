import React from "react";
import './profileUniversityItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileUniversityItem = ({    startLearning , 
                                    endLearning , 
                                    logo , 
                                    profession , 
                                    universityName}) => {
    return (
        <div className="profileUniversityItem">
            <div className="profileUniversityItem-content">
                <div className="profileUniversityItem-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="profileUniversityItem-content__info">
                    <h2>{universityName}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startLearning} - ավարտ {endLearning}</p>
                </div>
                <button className="profileUniversityItem-content__btn">
                    <FontAwesomeIcon    className="profileUniversityItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default ProfileUniversityItem;