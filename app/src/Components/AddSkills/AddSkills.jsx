import React,{useState} from "react";
import './addSkills.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faAdd , 
            faPen } from "@fortawesome/free-solid-svg-icons";

import AddSkillsItem from "./AddSkillsItem/AddSkillsItem";
import ProfileSkillsModal from "./ProfileSkillsModal/ProfileSkillsModal";

import { useSelector } from "react-redux";

const AddSkills= () => {

    const [profileSkillsModal,setProfileSkillsModal] = useState(false);

    const {skills} = useSelector((state) => state.skill)

    const currentUser = 4;

    return (
        <div className="addSkills">
            <div className="addSkills-header">
                <h2 className="addSkills-header__title">Հմտություններ</h2>
                <div className="addSkills-header__block">
                    <button className="addSkills-header__btns">
                        Անցնել թեստ 
                        <FontAwesomeIcon    className="addSkills-header__icon" 
                                            icon={faPen}/>
                    </button>
                    <button className="addSkills-header__btns"
                            onClick={() => {setProfileSkillsModal(true)}}>
                        <FontAwesomeIcon    className="addSkills-header__icon" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>
            
            {
                [...skills].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return  <AddSkillsItem  key={e.id}
                                                skillName={e.skillName}
                                                like={e.like}       
                    />  
                })
            }

            <ProfileSkillsModal     profileSkillsModal={profileSkillsModal} 
                                    setProfileSkillsModal={setProfileSkillsModal}/>
        </div>
    )
}

export default AddSkills;