import React from "react";
import './profileLicenseItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileLicenseItem = ({   startLearning , 
                                endLearning , 
                                logo , 
                                companyName , 
                                universityName , 
                                profession}) => {
    return (
        <div className="profileLicenseItem">
            <div className="profileLicenseItem-content">
                <div className="profileLicenseItem-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="profileLicenseItem-content__info">
                    <h2>{companyName ? companyName : ""}</h2>
                    <h2>{universityName ? universityName : ""}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startLearning} - ավարտ {endLearning}</p>
                </div>
                <button className="profileLicenseItem-content__btn">
                    <FontAwesomeIcon    className="profileLicenseItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default ProfileLicenseItem;