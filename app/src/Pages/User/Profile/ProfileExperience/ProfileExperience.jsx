import React,{useState} from "react";
import './profileExperience.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import ProfileExperienceItem from "./ProfileExperienceItem/ProfileExperienceItem";
import ProfileExperienceModal from "./ProfileExperienceModal/ProfileExperienceModal";

import { useSelector} from 'react-redux'

const ProfileExperience = () => {

    const [profileExperienceModal,setProfileExperienceModal] = useState(false);

    const {experiances} = useSelector((state) => state.experiance)

    const currentUser = 4;

    return (
        <div className="profileExperience">
            <div className="profileExperience-header">
                <h2 className="profileExperience-header__title">Աշխատանքային փորձ</h2>
                <div className="profileExperience-header__block">
                    <button className="profileExperience-header__btn" 
                            onClick={() => {setProfileExperienceModal(true)}}>
                        <FontAwesomeIcon    className="profileExperience-header__btn" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...experiances].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return <ProfileExperienceItem   key={e.id}
                                                    companyName={e.companyName}
                                                    startWork={e.startWork}
                                                    endWork={e.endWork}
                                                    profession={e.profession}
                                                    logo={e.logo}                   
                    />  
                })
            }

            
            <ProfileExperienceModal profileExperienceModal={profileExperienceModal} 
                                    setProfileExperienceModal={setProfileExperienceModal}/>
        </div>
    )
}

export default ProfileExperience;