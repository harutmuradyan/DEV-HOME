import React from "react";
import './teachingItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const TeachingItem = ({    startLearning , 
                                    endLearning , 
                                    logo , 
                                    profession , 
                                    universityName}) => {
    return (
        <div className="teachingItem">
            <div className="teachingItem-content">
                <div className="teachingItem-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="teachingItem-content__info">
                    <h2>{universityName}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startLearning} - ավարտ {endLearning}</p>
                </div>
                <button className="teachingItem-content__btn">
                    <FontAwesomeIcon    className="teachingItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default TeachingItem;