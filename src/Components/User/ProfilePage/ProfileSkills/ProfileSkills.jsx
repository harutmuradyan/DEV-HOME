import React from "react";
import './profileSkills.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import ProfileSkillsItem from "./ProfileSkillsItem/ProfileSkillsItem";

const ProfileSkills= () => {
    return (
        <div className="profileSkills">
            <div className="profileSkills-header">
                <h2 className="profileSkills-header__title">Հմտություններ</h2>
                <div className="profileSkills-header__block">
                    <button className="profileSkills-header__btns">
                        <FontAwesomeIcon className="profileSkills-header__btn" icon={faAdd}/>
                    </button>
                    <button className="profileSkills-header__btns">
                        <FontAwesomeIcon className="profileSkills-header__btn" icon={faPen}/>
                    </button>
                    <button className="profileSkills-header__btns">
                        Անցնել թեստ 
                        <FontAwesomeIcon className="profileSkills-header__btn" icon={faPen}/>
                    </button>
                </div>
            </div>
            <ProfileSkillsItem/>
            <ProfileSkillsItem/>
            <ProfileSkillsItem/>
        </div>
    )
}

export default ProfileSkills;