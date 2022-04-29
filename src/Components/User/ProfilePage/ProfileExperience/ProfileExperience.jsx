import React from "react";
import './profileExperience.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import ProfileExperienceItem from "./ProfileExperienceItem/ProfileExperienceItem";

const ProfileExperience = () => {
    return (
        <div className="profileExperience">
            <div className="profileExperience-header">
                <h2 className="profileExperience-header__title">Աշխատանքային փորձ</h2>
                <div className="profileExperience-header__block">
                    <button className="profileExperience-header__btns">
                        <FontAwesomeIcon className="profileExperience-header__btn" icon={faAdd}/>
                    </button>
                    <button className="profileExperience-header__btns">
                        <FontAwesomeIcon className="profileExperience-header__btn" icon={faPen}/>
                    </button>
                </div>
            </div>
            <ProfileExperienceItem/>
            <ProfileExperienceItem/>
            <ProfileExperienceItem/>
        </div>
    )
}

export default ProfileExperience;