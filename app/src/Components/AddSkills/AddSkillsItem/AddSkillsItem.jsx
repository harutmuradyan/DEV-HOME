import React from "react";
import './addSkillsItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const AddSkillsItem = ({skillName , like}) => {
    return (
        <div className="addSkillsItem">
            <div className="addSkillsItem-content">
                <div className="addSkillsItem-content__info">
                    <h2>
                        {skillName}
                        <span>{like}</span>
                    </h2>
                </div>
                <button className="addSkillsItem-content__btn">
                    <FontAwesomeIcon    className="addSkills-header__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default AddSkillsItem;