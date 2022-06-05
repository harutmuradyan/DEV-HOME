import React from "react";
import './profileLicenseItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileLicenseItem = () => {
    return (
        <div className="profileLicenseItem">
            <div className="profileLicenseItem-content">
                <div className="profileLicenseItem-content__img">
                    <img    src="https://avatars.githubusercontent.com/u/1463944?s=280&v=4" 
                            alt=""></img>
                </div>
                <div className="profileLicenseItem-content__info">
                    <h2>Code Academy</h2>
                    <p>Postal communication DefinitionR</p>
                    <p>Սկինբ 2022 - ավարտ 2024</p>
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