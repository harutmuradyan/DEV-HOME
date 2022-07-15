import React,{useState} from "react";
import './profileSkills.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faAdd , 
            faPen } from "@fortawesome/free-solid-svg-icons";

import ProfileSkillsItem from "./ProfileSkillsItem/ProfileSkillsItem";
import ProfileSkillsModal from "./ProfileSkillsModal/ProfileSkillsModal";

import { useSelector } from "react-redux";

const ProfileSkills= () => {

    const [profileSkillsModal,setProfileSkillsModal] = useState(false);

    const {skills} = useSelector((state) => state.skill)

    const currentUser = 4;

    return (
        <div className="profileSkills">
            <div className="profileSkills-header">
                <h2 className="profileSkills-header__title">Հմտություններ</h2>
                <div className="profileSkills-header__block">
                    <button className="profileSkills-header__btns">
                        Անցնել թեստ 
                        <FontAwesomeIcon    className="profileSkills-header__icon" 
                                            icon={faPen}/>
                    </button>
                    <button className="profileSkills-header__btns"
                            onClick={() => {setProfileSkillsModal(true)}}>
                        <FontAwesomeIcon    className="profileSkills-header__icon" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>
            
            {
                [...skills].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return  <ProfileSkillsItem  key={e.id}
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

export default ProfileSkills;