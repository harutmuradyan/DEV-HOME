import React from "react";
import './profileUniversity.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import ProfileUniversityItem from "./ProfileUniversityItem/ProfileUniversityItem";

const ProfileUniversity = () => {
    return (
        <div className="profileUniversity">
            <div className="profileUniversity-header">
                <h2 className="profileUniversity-header__title">Ուսուցում</h2>
                <div className="profileUniversity-header__block">
                    <button className="profileUniversity-header__btns">
                        <FontAwesomeIcon className="profileUniversity-header__btn" icon={faAdd}/>
                    </button>
                    <button className="profileUniversity-header__btns">
                        <FontAwesomeIcon className="profileUniversity-header__btn" icon={faPen}/>
                    </button>
                </div>
            </div>
            <ProfileUniversityItem/>
            <ProfileUniversityItem/>
            <ProfileUniversityItem/>
        </div>
    )
}

export default ProfileUniversity;