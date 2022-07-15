import React from "react";
import './profileSkillsItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileSkillsItem = ({skillName , like}) => {
    return (
        <div className="profileSkillsItem">
            <div className="profileSkillsItem-content">
                <div className="profileSkillsItem-content__info">
                    <h2>
                        {skillName}
                        <span>{like}</span>
                    </h2>
                </div>
                <button className="profileSkillsItem-content__btn">
                    <FontAwesomeIcon    className="profileSkills-header__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default ProfileSkillsItem;