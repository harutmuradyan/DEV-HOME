import React from "react";
import './licenseItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const LicenseItem = ({   startLearning , 
                                endLearning , 
                                logo , 
                                companyName , 
                                universityName , 
                                profession}) => {
    return (
        <div className="licenseItem">
            <div className="licenseItem-content">
                <div className="licenseItem-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="licenseItem-content__info">
                    <h2>{companyName ? companyName : ""}</h2>
                    <h2>{universityName ? universityName : ""}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startLearning} - ավարտ {endLearning}</p>
                </div>
                <button className="licenseItem-content__btn">
                    <FontAwesomeIcon    className="licenseItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default LicenseItem;