import React from "react";
import './profileLicense.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import ProfileLicenseItem from "./ProfileLicenseItem/ProfileLicenseItem";

const ProfileLicense = () => {
    return (
        <div className="profileLicense">
            <div className="profileLicense-header">
                <h2 className="profileLicense-header__title">Լիազորագրեր</h2>
                <div className="profileLicense-header__block">
                    <button className="profileLicense-header__btns">
                        <FontAwesomeIcon className="profileLicense-header__btn" icon={faAdd}/>
                    </button>
                    <button className="profileLicense-header__btns">
                        <FontAwesomeIcon className="profileLicense-header__btn" icon={faPen}/>
                    </button>
                </div>
            </div>
            <ProfileLicenseItem/>
            <ProfileLicenseItem/>
            <ProfileLicenseItem/>
        </div>
    )
}

export default ProfileLicense;